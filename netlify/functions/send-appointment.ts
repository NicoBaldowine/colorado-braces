import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone format
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-()]{10,}$/;
  return phoneRegex.test(phone);
};

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': 'https://colorado-braces.com',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  console.log('=== FUNCTION STARTED ===');
  console.log('API Key exists:', !!process.env.RESEND_API_KEY);
  console.log('API Key length:', process.env.RESEND_API_KEY?.length);
  console.log('Request method:', event.httpMethod);

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    // Parse and validate request body
    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (parseError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    console.log('Parsed request body:', {
      ...body,
      email: body.email ? '[MASKED]' : undefined
    });

    const { firstName, lastName, email, phone, service, preferredDate, preferredTime } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service || !preferredDate || !preferredTime) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid phone format' })
      };
    }

    const emailData = {
      from: 'Colorado Braces <onboarding@resend.dev>',
      to: ['office@colorado-braces.com'], // Back to single recipient that worked
      reply_to: email,
      subject: 'New Appointment Request from Colorado-Braces.com',
      html: `
        <h2>New Appointment Request from Colorado-Braces.com</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
      `,
      text: `
New Appointment Request from Colorado-Braces.com
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service: ${service}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}
      `.trim()
    };

    console.log('Attempting to send email with config:', {
      from: emailData.from,
      to: emailData.to.join(', '), // Log all recipients
      subject: emailData.subject
    });

    try {
      const data = await resend.emails.send(emailData);
      console.log('Resend API Success Response:', data);
      
      // Let's try sending to each recipient separately as a fallback
      if (!data.id) {
        console.log('Trying individual sends...');
        const individualSends = await Promise.all(
          emailData.to.map(recipient => 
            resend.emails.send({
              ...emailData,
              to: [recipient]
            })
          )
        );
        console.log('Individual sends results:', individualSends);
      }
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: 'Email sent successfully', 
          data,
          debug: {
            apiKeyExists: !!process.env.RESEND_API_KEY,
            apiKeyLength: process.env.RESEND_API_KEY?.length,
            recipients: emailData.to
          }
        })
      };
    } catch (sendError: any) {
      console.error('Resend API Error:', {
        message: sendError.message,
        name: sendError.name,
        code: sendError.code,
        statusCode: sendError.statusCode,
        recipients: emailData.to
      });
      throw sendError;
    }

  } catch (error: any) {
    console.error('=== EMAIL SENDING FAILED ===');
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      code: error.code,
      statusCode: error.statusCode
    });
    
    return {
      statusCode: error.statusCode || 500,
      headers,
      body: JSON.stringify({ 
        error: `Failed to send email: ${error.message}`,
        debug: {
          apiKeyExists: !!process.env.RESEND_API_KEY,
          apiKeyLength: process.env.RESEND_API_KEY?.length
        }
      })
    };
  }
}; 

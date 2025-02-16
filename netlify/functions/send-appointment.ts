import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': 'https://colorado-braces.com',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    console.log('Received form data:', body);

    const { firstName, lastName, email, phone, service, preferredDate, preferredTime } = body;

    const data = await resend.emails.send({
      from: 'Colorado Braces <onboarding@resend.dev>',
      to: ['office@colorado-braces.com'],
      reply_to: email,
      subject: 'New Appointment Request from Colorado-Braces.com',
      text: `New appointment request from ${firstName} ${lastName}`,
      html: `
        <h2>New Appointment Request from Colorado-Braces.com</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
      `
    });

    console.log('Email sent response:', data);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully', data })
    };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || 'Failed to send email' })
    };
  }
}; 

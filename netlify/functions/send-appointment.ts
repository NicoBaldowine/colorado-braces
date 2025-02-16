import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    console.log('Received form data:', body);

    const { firstName, lastName, email, phone, service, preferredDate, preferredTime } = body;

    const data = await resend.emails.send({
      from: 'Colorado Braces <office@colorado-braces.com>',
      to: ['office@colorado-braces.com'],
      subject: 'New Appointment Request',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', data })
    };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to send email' })
    };
  }
}; 
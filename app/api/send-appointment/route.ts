import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'test_key_for_build');

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      // During build time or if API key is missing
      return new Response(JSON.stringify({ message: 'Email service not configured' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const body = await request.json();
    
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com',
      subject: 'New Appointment Request',
      html: `
        <h1>New Appointment Request</h1>
        <p>Name: ${body.firstName} ${body.lastName}</p>
        <p>Email: ${body.email}</p>
        <p>Phone: ${body.phone}</p>
        <p>Service: ${body.service}</p>
        <p>Preferred Date: ${body.preferredDate}</p>
        <p>Preferred Time: ${body.preferredTime}</p>
      `
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 
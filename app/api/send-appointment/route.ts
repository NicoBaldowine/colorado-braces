import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Log the API key existence (not the actual key)
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Received form data:', {
      ...body,
      email: body.email ? '***@***.com' : undefined // Hide actual email
    });
    
    const data = await resend.emails.send({
      from: 'Colorado Braces <office@colorado-braces.com>',
      to: [
        'office@colorado-braces.com',
        'nbaldovino5@gmail.com',
        'eduardoeegg@hotmail.com'
      ],
      reply_to: body.email,
      subject: 'New Appointment Request from Colorado-Braces.com',
      html: `
        <h2>New Appointment Request from Colorado-Braces.com</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Preferred Date:</strong> ${body.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${body.preferredTime}</p>
      `
    });

    console.log('Resend response:', data);

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      details: error
    });
    
    return NextResponse.json(
      { error: `Error sending email: ${error.message}` },
      { status: 500 }
    );
  }
} 
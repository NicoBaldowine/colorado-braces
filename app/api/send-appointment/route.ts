import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const resend = new Resend(apiKey);

    const emailData = {
      from: 'Colorado Braces <office@colorado-braces.com>',
      to: ['office@colorado-braces.com'],
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
    };

    const data = await resend.emails.send(emailData);

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Unable to send appointment email:', error.message);

    return NextResponse.json(
      { error: `Error sending email: ${error.message}` },
      { status: 500 }
    );
  }
} 

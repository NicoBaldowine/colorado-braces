import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    
    const data = await resend.emails.send({
      from: 'Colorado Braces <office@colorado-braces.com>',
      to: ['office@colorado-braces.com'],
      subject: 'New Appointment Request',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Preferred Date:</strong> ${body.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${body.preferredTime}</p>
      `
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
} 
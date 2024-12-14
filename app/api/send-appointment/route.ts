import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, preferredDate, preferredTime } = body;

    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing Resend API key');
    }

    const data = await resend.emails.send({
      from: 'Colorado Braces <onboarding@resend.dev>',
      to: ['nbaldovino5@gmail.com'],
      subject: 'New Appointment Request',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email', details: error.message },
      { status: 500 }
    );
  }
} 
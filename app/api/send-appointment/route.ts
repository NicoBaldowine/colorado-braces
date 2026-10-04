import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function escapeHtml(value: unknown) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] as string);
}

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
      replyTo: body.email,
      subject: 'New Appointment Request from Colorado-Braces.com',
      html: `
        <h2>New Appointment Request from Colorado-Braces.com</h2>
        <p><strong>Name:</strong> ${escapeHtml(body.firstName)} ${escapeHtml(body.lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(body.service)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(body.preferredDate)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(body.preferredTime)}</p>
      `
    };

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Unable to send appointment email:', error);
      return NextResponse.json(
        { error: 'Unable to send appointment request. Please try again later.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unable to send appointment email:', error);

    return NextResponse.json(
      { error: 'Unable to send appointment request. Please try again later.' },
      { status: 500 }
    );
  }
} 

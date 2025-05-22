import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "jha02305@gmail.com",
      pass: "klth hgce abqk xesg",
    },
  });

  const mailOptions = {
    from: email,
    to: "rakeshjhanda9958@gmail.com", // your receiving email
    subject: `New contact form submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}

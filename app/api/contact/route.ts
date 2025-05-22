import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const password = process.env.EMAIL_PASSWORD
const myusername = process.env.MY_EMAIL


export async function POST(req: NextRequest) {
  let name, email, message;
  
  try {
    ({ name, email, message } = await req.json());
  } catch (error) {
    console.error("facing error while sending smtp req", error);
    return NextResponse.json({ success: false, message: "Invalid request data" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: myusername,
      pass: password,
    },
  });

  const mailOptions = {
    to: myusername, 
    subject: `Received a Message from ${name}`,
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
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const data = await req.json();

    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message || name.trim() === "" || message.trim() === "") {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || "587", 10),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER, // Use the authenticated user's email
      to: process.env.EMAIL_SERVER_USER, // Your email (recipient address)
      replyTo: email, // Reply-To address (sender's email)
      subject: `New message from ${name} ${email}`, // Dynamic subject line
      text: message, // Plain text body
    });
    

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: 'error'},
      { status: 500 }
    );
  }
}

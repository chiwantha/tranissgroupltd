import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "travin@tranissgroupltd.uk",
      subject: "New Contact Form Submission",
      html: `
    <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
      
      <div style="max-width:600px; background:#ffffff; padding:25px; border-radius:10px;">

        <h2 style="margin:0 0 10px 0; color:#222;">New Contact Message</h2>

        <p style="margin:0 0 20px 0; font-size:12px; color:#777;">
          ${new Date().toLocaleString()}
        </p>

        <div style="margin-bottom:15px;">
          <p style="margin:0; font-size:13px; color:#888;">Name</p>
          <p style="margin:5px 0 0 0; font-size:15px; color:#222;"><b>${name}</b></p>
        </div>

        <div style="margin-bottom:15px;">
          <p style="margin:0; font-size:13px; color:#888;">Email</p>
          <p style="margin:5px 0 0 0; font-size:15px; color:#222;">${email}</p>
        </div>

        <div style="margin-bottom:15px;">
          <p style="margin:0; font-size:13px; color:#888;">Phone</p>
          <p style="margin:5px 0 0 0; font-size:15px; color:#222;">${phone}</p>
        </div>

        <div style="margin-bottom:20px;">
          <p style="margin:0; font-size:13px; color:#888;">Message</p>
          <div style="margin-top:8px; padding:12px; background:#f9fafb; border-radius:6px; font-size:14px; color:#333;">
            ${message || "No message provided"}
          </div>
        </div>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <p style="font-size:12px; color:#888; margin:0;">
          System powered and maintained by <b>K-Chord (Pvt) Ltd</b>
        </p>

      </div>

    </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}

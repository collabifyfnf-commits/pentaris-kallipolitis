import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f5f0;">
        <div style="background: #1B3A5C; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Νέο μήνυμα από την ιστοσελίδα</h1>
          <p style="color: #A8C8E0; margin: 8px 0 0; font-size: 14px;">pentaris-kallipolitis.com</p>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e0d8cc;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #7A6A55; font-size: 13px; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Όνομα</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #1A2332; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #7A6A55; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Τηλέφωνο</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #1A2332; font-size: 15px;"><a href="tel:${phone}" style="color: #2E6B9E;">${phone}</a></td>
            </tr>
            ${email ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #7A6A55; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #1A2332; font-size: 15px;"><a href="mailto:${email}" style="color: #2E6B9E;">${email}</a></td>
            </tr>` : ""}
            ${service ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #7A6A55; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Υπηρεσία</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ece8; color: #1A2332; font-size: 15px;">${service}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #7A6A55; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Μήνυμα</td>
              <td style="padding: 10px 0; color: #1A2332; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
        <p style="color: #C4B49A; font-size: 12px; text-align: center; margin-top: 16px;">
          Σ. Πεντάρης – Χ. Καλλιπολίτης Ο.Ε. · Χανιά, Κρήτη
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Ιστοσελίδα Πεντάρης–Καλλιπολίτης" <${process.env.SMTP_USER}>`,
      to: "kallipolitismike@gmail.com",
      replyTo: email || undefined,
      subject: `Νέο μήνυμα από ${name}${service ? ` — ${service}` : ""}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

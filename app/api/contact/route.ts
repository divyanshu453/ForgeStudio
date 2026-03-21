import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (NOT your login password)
      },
    });

    // Email sent TO you (the agency) — notification email
    await transporter.sendMail({
      from: `"Forge Studio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // you receive it at the same Gmail
      replyTo: email,             // hitting Reply goes back to the client
      subject: `New Project Inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0A0A0F; color: #F5F0E8; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
              .header { border-bottom: 1px solid #1C1C28; padding-bottom: 24px; margin-bottom: 32px; }
              .logo { font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
              .logo span { color: #C8FF00; }
              .badge { display: inline-block; background: rgba(200,255,0,0.1); color: #C8FF00; border: 1px solid rgba(200,255,0,0.2); padding: 4px 12px; border-radius: 20px; font-size: 12px; font-family: monospace; margin-top: 8px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; color: #6B6B85; text-transform: uppercase; letter-spacing: 1.5px; font-family: monospace; margin-bottom: 6px; }
              .value { font-size: 16px; color: #F5F0E8; }
              .message-box { background: #12121A; border: 1px solid #1C1C28; border-radius: 4px; padding: 16px; font-size: 15px; line-height: 1.7; color: #EDE8DC; white-space: pre-wrap; }
              .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
              .tag { display: inline-block; background: #1C1C28; color: #9898B0; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-family: monospace; margin: 2px; }
              .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #1C1C28; font-size: 12px; color: #6B6B85; font-family: monospace; }
              .reply-btn { display: inline-block; margin-top: 24px; background: #C8FF00; color: #0A0A0F; padding: 12px 24px; border-radius: 4px; font-weight: 700; font-size: 14px; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Forge<span>Studio</span></div>
                <div class="badge">✦ New Project Inquiry</div>
              </div>

              <div class="grid">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">${email}</div>
                </div>
              </div>

              ${company ? `
              <div class="field">
                <div class="label">Company / Project</div>
                <div class="value">${company}</div>
              </div>` : ""}

              <div class="grid">
                ${service ? `
                <div class="field">
                  <div class="label">Service Needed</div>
                  <div class="value"><span class="tag">${service}</span></div>
                </div>` : ""}
                ${budget ? `
                <div class="field">
                  <div class="label">Budget Range</div>
                  <div class="value"><span class="tag">${budget}</span></div>
                </div>` : ""}
              </div>

              <div class="field">
                <div class="label">Project Brief</div>
                <div class="message-box">${message}</div>
              </div>

              <a href="mailto:${email}" class="reply-btn">Reply to ${name} →</a>

              <div class="footer">
                Submitted via forgestudio.co/contact · ${new Date().toLocaleString("en-US", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Auto-reply sent TO the client — confirmation email
    await transporter.sendMail({
      from: `"Forge Studio" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name.split(" ")[0]} — we'll be in touch soon`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #0A0A0F; color: #F5F0E8; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
              .logo { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 32px; }
              .logo span { color: #C8FF00; }
              h1 { font-size: 32px; font-weight: 800; color: #F5F0E8; line-height: 1.1; margin: 0 0 16px; }
              h1 em { color: #C8FF00; font-style: normal; }
              p { font-size: 15px; color: #9898B0; line-height: 1.7; margin: 0 0 16px; }
              .summary { background: #12121A; border: 1px solid #1C1C28; border-left: 3px solid #C8FF00; border-radius: 4px; padding: 20px; margin: 28px 0; }
              .summary-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #1C1C28; font-size: 13px; }
              .summary-row:last-child { border-bottom: none; }
              .summary-label { color: #6B6B85; font-family: monospace; }
              .summary-value { color: #F5F0E8; font-weight: 500; }
              .footer { margin-top: 40px; padding-top: 24px; border-top: 1px solid #1C1C28; font-size: 12px; color: #6B6B85; font-family: monospace; }
              .dot { display: inline-block; width: 8px; height: 8px; background: #C8FF00; border-radius: 50%; margin-right: 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo">Forge<span>Studio</span></div>

              <h1>We've got your <em>message.</em></h1>

              <p>Hey ${name.split(" ")[0]}, thanks for reaching out. We've received your project brief and will get back to you within <strong style="color:#F5F0E8">24 hours</strong> with our thoughts.</p>

              <p>Here's a quick summary of what you sent us:</p>

              <div class="summary">
                ${service ? `<div class="summary-row"><span class="summary-label">Service</span><span class="summary-value">${service}</span></div>` : ""}
                ${budget ? `<div class="summary-row"><span class="summary-label">Budget</span><span class="summary-value">${budget}</span></div>` : ""}
                ${company ? `<div class="summary-row"><span class="summary-label">Company</span><span class="summary-value">${company}</span></div>` : ""}
                <div class="summary-row"><span class="summary-label">Submitted</span><span class="summary-value">${new Date().toLocaleDateString("en-US", { dateStyle: "medium" })}</span></div>
              </div>

              <p>If you need to add anything or have a quick question, just reply to this email — it goes straight to our team.</p>

              <p style="color:#F5F0E8">Talk soon,<br/><strong>The Forge Studio Team</strong></p>

              <div class="footer">
                <span class="dot"></span>forgestudio.co &nbsp;·&nbsp; hello@forgestudio.co
                <br/><br/>
                You're receiving this because you submitted a contact form at forgestudio.co.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}

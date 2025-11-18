// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;

// These will show in your terminal on startup
if (!RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is missing. Check your .env.local file.");
}
if (!CONTACT_FROM_EMAIL) {
  console.error("❌ CONTACT_FROM_EMAIL is missing. Add it to .env.local.");
}
if (!CONTACT_TO_EMAIL) {
  console.error("❌ CONTACT_TO_EMAIL is missing. Add it to .env.local.");
}

export async function POST(req: Request) {
  // Hard guard so we don't even try Resend if config is broken
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      {
        success: false,
        error: "Server email config missing (env vars).",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await req.json();

    const html = `
      <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px;">
        <div style="max-width: 620px; margin: auto; border: 1px solid #e5e7eb; border-radius: 14px; padding: 32px;">
          <h2 style="margin-top: 0; margin-bottom: 24px; font-size: 24px; font-weight: 700;">
            📬 New Codex3D Submission
          </h2>

          <p style="margin: 0 0 12px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 12px;"><strong>Email:</strong> <a style="color:#3b82f6" href="mailto:${email}">${email}</a></p>
          <p style="margin: 0 0 24px;"><strong>Subject:</strong> ${subject}</p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

          <div style="margin-top: 24px;">
            <strong style="display: block; margin-bottom: 6px;">Message:</strong>
            <div style="display: block; margin: 0; padding-left: 0; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
        </div>
      </div>
    `;

    console.log("📨 Incoming contact payload:", {
      name,
      email,
      subject,
      message,
    });

    const result = await resend.emails.send({
      from: `${name || "Codex3D User"} <${CONTACT_FROM_EMAIL}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: subject || `New message from ${name || "Codex3D User"}`,
      html,
    });

    console.log("📬 Resend response:", result);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ Contact API error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err?.message || "Unknown server error",
      },
      { status: 500 }
    );
  }
}

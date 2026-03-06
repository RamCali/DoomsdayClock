import { Resend } from "resend";

const FROM = "Doomsday Clock <noreply@doomsdayclock.net>";
const FRONTEND_URL = process.env.FRONTEND_URL || "https://doomsdayclock.net";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${FRONTEND_URL}/verify-email?token=${token}`;
  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Verify your Doomsday Clock account",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#111;color:#fff;border-radius:16px;">
        <h2 style="margin:0 0 16px;font-size:24px;">Welcome to the Doomsday Clock Forum</h2>
        <p style="color:#a1a1aa;margin:0 0 24px;line-height:1.6;">
          Click below to verify your email and start sharing your ideas on how to save the world.
        </p>
        <a href="${verifyUrl}" style="display:inline-block;padding:12px 24px;background:#ea384c;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
          Verify Email
        </a>
        <p style="color:#71717a;font-size:12px;margin:24px 0 0;">This link expires in 24 hours.</p>
      </div>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${FRONTEND_URL}/reset-password?token=${token}`;
  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Reset your Doomsday Clock password",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#111;color:#fff;border-radius:16px;">
        <h2 style="margin:0 0 16px;font-size:24px;">Password Reset</h2>
        <p style="color:#a1a1aa;margin:0 0 24px;line-height:1.6;">
          Click below to reset your password.
        </p>
        <a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#1EAEDB;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
          Reset Password
        </a>
        <p style="color:#71717a;font-size:12px;margin:24px 0 0;">
          This link expires in 1 hour. If you didn't request this, ignore this email.
        </p>
      </div>
    `,
  });
}

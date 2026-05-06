import { Router, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const router = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait 15 minutes and try again.' },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', limiter, async (req: Request, res: Response): Promise<void> => {
  const { name, email, company, message } = req.body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ error: 'Name, email, and message are required.' });
    return;
  }

  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'Please provide a valid email address.' });
    return;
  }

  if (message.trim().length < 10) {
    res.status(400).json({ error: 'Message must be at least 10 characters.' });
    return;
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('[contact] SMTP environment variables are not configured.');
    res.status(503).json({ error: 'Email service is not configured. Please contact us directly.' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const recipient = CONTACT_EMAIL || SMTP_USER;
    const subject = `New Inquiry: ${name.trim()}${company?.trim() ? ` · ${company.trim()}` : ''}`;

    await transporter.sendMail({
      from: `"ARVY Website" <${SMTP_USER}>`,
      to: recipient,
      replyTo: email.trim(),
      subject,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#0B0B0B;">
          <div style="background:#0D6E56;padding:24px 32px;border-radius:8px 8px 0 0;">
            <p style="margin:0;color:#fff;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;">ARVY — New Inquiry</p>
          </div>
          <div style="border:1px solid #E4E0DA;border-top:none;padding:32px;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #E4E0DA;color:#7A7672;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;width:100px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #E4E0DA;font-weight:500;">${escHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #E4E0DA;color:#7A7672;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #E4E0DA;"><a href="mailto:${escHtml(email)}" style="color:#0D6E56;text-decoration:none;">${escHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#7A7672;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Company</td>
                <td style="padding:10px 0;">${company?.trim() ? escHtml(company) : '<span style="color:#7A7672;">—</span>'}</td>
              </tr>
            </table>
            <p style="margin:0 0 8px;color:#7A7672;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Message</p>
            <div style="background:#F8F7F4;border-left:3px solid #0D6E56;padding:16px 20px;border-radius:4px;line-height:1.7;white-space:pre-wrap;">${escHtml(message)}</div>
          </div>
          <p style="text-align:center;color:#7A7672;font-size:10px;letter-spacing:0.1em;margin-top:24px;text-transform:uppercase;">Reply to this email to respond directly to ${escHtml(name)}.</p>
        </div>
      `,
      text: `New inquiry from ${name}${company ? ` (${company})` : ''}\nEmail: ${email}\n\n${message}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('[contact] Nodemailer error:', err);
    res.status(500).json({ error: 'Failed to send your message. Please try again or email us directly.' });
  }
});

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export { router as contactRouter };

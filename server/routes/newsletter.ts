import { Router, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const router = Router();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many signup attempts. Please try again later.' },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', limiter, async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body as { email: string };

  if (!email?.trim() || !EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'Please provide a valid email address.' });
    return;
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    res.json({ success: true });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"ARVY" <${SMTP_USER}>`,
      to: CONTACT_EMAIL || SMTP_USER,
      subject: `Newsletter signup: ${email.trim()}`,
      text: `New newsletter subscriber: ${email.trim()}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('[newsletter] Error:', err);
    res.json({ success: true });
  }
});

export { router as newsletterRouter };

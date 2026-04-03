import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

const router = Router();

const validateQuote = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('country').trim().notEmpty().withMessage('Country is required'),
  body('service').trim().notEmpty().withMessage('Please select a service'),
  body('location').trim().notEmpty().withMessage('Zimbabwe location is required'),
  body('description').trim().isLength({ min: 20 }).withMessage('Please provide more detail (min 20 characters)'),
];

router.post('/', validateQuote, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { name, email, phone, country, service, location, description, urgency, budget } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"TrustedHandZW Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Quote Request — ${service} (${urgency || 'Standard'})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B2E78; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: #93C5FD; margin: 6px 0 0; font-size: 13px;">${service} — ${urgency || 'Standard'} urgency</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <h2 style="font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Client Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px; width: 140px;">Name</td><td style="padding: 7px 0; font-weight: 600; color: #1e293b;">${name}</td></tr>
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px;">Email</td><td style="padding: 7px 0; font-weight: 600; color: #1e293b;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px;">Phone / WhatsApp</td><td style="padding: 7px 0; font-weight: 600; color: #1e293b;">${phone}</td></tr>
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px;">Country (Diaspora)</td><td style="padding: 7px 0; font-weight: 600; color: #1e293b;">${country}</td></tr>
            </table>
            <h2 style="font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Task Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px; width: 140px;">Service</td><td style="padding: 7px 0; font-weight: 600; color: #1B2E78;">${service}</td></tr>
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px;">Location in ZW</td><td style="padding: 7px 0; font-weight: 600; color: #1e293b;">${location}</td></tr>
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px;">Urgency</td><td style="padding: 7px 0; font-weight: 600; color: #1e293b;">${urgency || 'Standard'}</td></tr>
              <tr><td style="padding: 7px 0; color: #64748b; font-size: 13px;">Budget</td><td style="padding: 7px 0; font-weight: 600; color: #1e293b;">${budget || 'Not specified'}</td></tr>
            </table>
            <div style="background: white; border-radius: 8px; padding: 16px; border: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Task Description</p>
              <p style="color: #1e293b; line-height: 1.6; margin: 0; font-size: 14px;">${description}</p>
            </div>
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send request. Please try WhatsApp instead.' });
  }
});

export default router;
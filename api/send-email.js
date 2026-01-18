import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { formType, ...formData } = req.body;

  // Validate required environment variables
  const { SMTP_USER, SMTP_PASS, RECIPIENT_EMAIL } = process.env;

  if (!SMTP_USER || !SMTP_PASS || !RECIPIENT_EMAIL) {
    console.error('Missing environment variables');
    return res.status(500).json({ error: 'Email service configuration error' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  // Prepare email content based on formType
  let subject = `New ${formType || 'Submission'} - Mount Carmel Hospital`;
  let html = `
    <h2>New Form Submission</h2>
    <p><strong>Form Type:</strong> ${formType || 'General'}</p>
    <hr />
    <ul>
      ${Object.entries(formData)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('')}
    </ul>
    <hr />
    <p>Sent from Mount Carmel Hospital Website</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Mount Carmel Website" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: subject,
      html: html,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

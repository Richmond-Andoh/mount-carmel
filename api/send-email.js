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
  const brandColor = '#6f3348';
  const secondaryColor = '#4b1438';
  let subject = `New ${formType || 'Submission'} - Mount Carmel Hospital`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f7f6; }
        .container { max-width: 650px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #eef2f1; }
        .header { background: ${brandColor}; padding: 35px 30px; text-align: left; }
        .header-table { width: 100%; border-collapse: collapse; }
        .header h1 { color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.2; }
        .header p { color: rgba(255,255,255,0.8); margin: 5px 0 0 0; font-size: 14px; }
        .logo-img { width: 60px; height: 60px; border-radius: 12px; border: 2px solid rgba(255,255,255,0.2); }
        
        .content { padding: 40px; }
        .submission-badge { display: inline-block; background: #fdf2f5; color: ${brandColor}; padding: 6px 16px; border-radius: 50px; font-size: 13px; font-weight: 600; margin-bottom: 25px; border: 1px solid rgba(111, 51, 72, 0.1); }
        
        .data-card { background: #ffffff; border: 1px solid #e7eef1; border-radius: 12px; overflow: hidden; }
        .data-table { width: 100%; border-collapse: collapse; }
        .data-row { border-bottom: 1px solid #f0f4f3; }
        .data-row:last-child { border-bottom: none; }
        .data-label { padding: 18px 20px; font-weight: 600; color: #5a6b73; width: 35%; vertical-align: middle; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; background: #f9fbfa; }
        .data-value { padding: 18px 20px; color: #1e293b; vertical-align: middle; font-size: 15px; }
        
        .footer { background: #f8fafc; padding: 30px; text-align: center; color: #64748b; font-size: 13px; border-top: 1px solid #e2e8f0; }
        .footer a { color: ${brandColor}; text-decoration: none; font-weight: 500; }
        .accent { color: ${brandColor}; font-weight: 600; }
        
        @media only screen and (max-width: 600px) {
          .container { margin: 0; border-radius: 0; width: 100% !important; }
          .content { padding: 25px 20px; }
          .data-label { width: 40%; padding: 15px; }
          .data-value { padding: 15px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <table class="header-table">
            <tr>
              <td>
                <h1>Mount Carmel Hospital</h1>
                <p>Healthcare & Fertility Centre</p>
              </td>
              <td align="right">
                <img src="https://www.mchfcgh.com/images/logo.jpg" alt="Logo" class="logo-img">
              </td>
            </tr>
          </table>
        </div>
        <div class="content">
          <div class="submission-badge">
            ${formType || 'General Submission'}
          </div>
          
          <div class="data-card">
            <table class="data-table">
              ${Object.entries(formData)
                .map(([key, value]) => `
                  <tr class="data-row">
                    <td class="data-label">${key.replace(/([A-Z])/g, ' $1').toLowerCase()}</td>
                    <td class="data-value">${value}</td>
                  </tr>
                `)
                .join('')}
            </table>
          </div>

          <div style="margin-top: 35px; text-align: center; padding: 20px; background: #fdf2f5; border-radius: 12px;">
            <p style="margin: 0; font-size: 14px; color: #4b1438;">
              This inquiry was submitted via the official <span class="accent">Mount Carmel Hospital</span> website.
            </p>
          </div>
        </div>
        <div class="footer">
          <p style="margin-bottom: 10px;">&copy; ${new Date().getFullYear()} <strong>Mount Carmel Hospital & Fertility Centre</strong>. All rights reserved.</p>
          <p style="margin: 0;">This is an automated notification. Please reply directly to the customer's email.</p>
        </div>
      </div>
    </body>
    </html>
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

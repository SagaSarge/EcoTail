import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body || '{}');

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email is required' }),
      };
    }

    // Send confirmation email
    await transporter.sendMail({
      from: `"EcoTale" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Welcome to EcoTale Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #4285F4;">Welcome to EcoTale!</h1>
          <p>Thank you for subscribing to our newsletter. We're excited to share our latest updates, eco-friendly tips, and exclusive offers with you.</p>
          <p>Here's what you can expect:</p>
          <ul>
            <li>Weekly sustainability tips</li>
            <li>Updates on new features</li>
            <li>Exclusive discounts</li>
            <li>Community success stories</li>
          </ul>
          <p>Stay eco-friendly!</p>
          <p>The EcoTale Team</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Confirmation email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending confirmation email' }),
    };
  }
}; 
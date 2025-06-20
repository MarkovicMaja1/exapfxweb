const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.co.uk',
  port: 587,
  secure: false, // Use TLS on port 587
  auth: {
    user: 'contact@ecapfx.com', // Your IONOS email
    pass: '@EcoCapForex321$!', // Your IONOS email password or app-specific password
  },
  tls: {
    rejectUnauthorized: false, // Optional: Only for testing; remove in production
  },
});

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'contact@ecapfx.com',
    to: 'contact@ecapfx.com', // Send to the same email or another recipient
    subject: `New message from ${name} at ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin' })}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: error.message });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} at ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin' })}`));
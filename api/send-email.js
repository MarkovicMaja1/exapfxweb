// EXAPPWEB/api/send-email.js
  const nodemailer = require("nodemailer");

  export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.co.uk",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // tls: { rejectUnauthorized: false }, // Uncomment for testing self-signed certificates
    });

    const mailOptions = {
      from: "contact@ecapfx.com",
      to: "contact@ecapfx.com",
      subject: `New message from ${name} at ${new Date().toLocaleString("en-US", {
        timeZone: "Europe/Berlin",
      })}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: error.message });
    }
  }
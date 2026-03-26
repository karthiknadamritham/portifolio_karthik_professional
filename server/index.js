import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import multer from "multer";
import nodemailer from "nodemailer";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads in memory (buffer)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// Initialize Database connection
connectDB();

// Basic health check route
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({ status: "OK", message: "Backend is running successfully." });
});

// Contact Endpoint
app.post("/api/contact", upload.single("attachment"), async (req, res) => {
  const { name, email, subject, message } = req.body;
  const file = req.file;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Protocol: ${subject}`,
      text: `Incoming message from ${name} (<${email}>)\n\n---\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    if (file) {
      mailOptions.attachments = [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ];
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Dispatch successful." });
  } catch (error) {
    console.error("Error dispatching email:", error);
    res.status(500).json({ success: false, message: "Failed to dispatch message." });
  }
});

// Start server (Conditional for Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;

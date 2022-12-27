import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config()
export const transport = nodemailer.createTransport({
    host: process.env.MHOST,
    port:2525 , //MMAIL 2525, GMAIL 587
    secure:false,
      auth: {
      user: process.env.MMAIL,
      pass: process.env.MPASS
    }
  });
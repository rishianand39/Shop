import { transport as transporter } from "../configs/mail.js";
export const sendMail = async (email,subject, message) => {
    await transporter.sendMail({
      from: "rishi.rn818@gmail.com",
      to: email,
      subject: subject,
      text: `Hello sir/madam, ${message}`,
      html: `<b>Hello sir/madam, ${message}</b>`,
    });
  };
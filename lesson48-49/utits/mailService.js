import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

class MailServices {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(toEmail, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: toEmail,
      subject: "Shaxsiy akkountingizni faollashtirish",
      text: "",
      html: `
            <div> 
                <h1>Faollashtirish uchun bosing</h1>
                <a href="${link}">FAOLLASHTIRISH</a>
            </div>
        `,
    });
  }
  async sendNewPass(toEmail, nPass) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: toEmail,
      subject: nPass,
      text: "",
      html: `
            <div> 
                <h1>Yangi Parolingiz: ${nPass}</h1>
            </div>
        `,
    });
  }
}

export default new MailServices();

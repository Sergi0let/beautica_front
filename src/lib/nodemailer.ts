import nodemailer from "nodemailer";
import config from "../config";

const createTransporter = () => {
  // Діагностика для Vercel
  console.log("🔧 Nodemailer config:", {
    service: "gmail",
    user: config.env.mail.prod.user ? "✅ Вказано" : "❌ Не вказано",
    pass: config.env.mail.prod.pass ? "✅ Вказано" : "❌ Не вказано",
    from: config.env.mail.prod.from,
    admin: config.env.mail.prod.admin,
    environment: process.env.NODE_ENV,
    vercel: process.env.VERCEL ? "✅ Vercel" : "❌ Локальний",
  });

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.env.mail.prod.user,
      pass: config.env.mail.prod.pass, // Використовуємо App Password замість звичайного пароля
    },
    secure: true, // Використовуємо SSL/TLS
  });
};

export const sendMail = async (to: string, subject: string, html: string) => {
  try {
    const transporter = createTransporter();

    // Перевіряємо з'єднання перед відправкою
    console.log("🔍 Перевіряємо з'єднання з Gmail...");
    await transporter.verify();
    console.log("✅ З'єднання з Gmail успішне");

    const result = await transporter.sendMail({
      from: config.env.mail.prod.from,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent successfully:", {
      messageId: result.messageId,
      to: to,
      from: config.env.mail.prod.from,
      environment: process.env.NODE_ENV,
    });
    return result;
  } catch (error) {
    console.error("❌ Error sending email:", {
      error: error instanceof Error ? error.message : "Unknown error",
      code: error instanceof Error ? (error as { code?: string }).code : "No code",
      environment: process.env.NODE_ENV,
      vercel: process.env.VERCEL ? "Vercel" : "Local",
    });

    // Детальна діагностика для Vercel
    if (error instanceof Error) {
      const errorWithCode = error as { code?: string };
      if (errorWithCode.code === "EAUTH") {
        throw new Error(
          `Gmail автентифікація не вдалася. Перевірте EMAIL_USER та EMAIL_PASS в Vercel Environment Variables`,
        );
      }
      if (errorWithCode.code === "ECONNECTION") {
        throw new Error(`Помилка з'єднання з Gmail. Перевірте мережеві налаштування`);
      }
    }

    throw new Error(`Failed to send email: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
};

export default sendMail;

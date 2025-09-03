// Тестовий скрипт для перевірки відправки email
import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Завантажуємо змінні середовища
dotenv.config({ path: ".env.local" });

const testEmail = async () => {
  console.log("=== ТЕСТ ВІДПРАВКИ EMAIL ===");
  console.log("Змінні середовища:");
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_FROM:", process.env.EMAIL_FROM);
  console.log("EMAIL_ADMIN:", process.env.EMAIL_ADMIN);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "***" : "НЕ ВКАЗАНО");

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_FROM) {
    console.error("❌ Відсутні необхідні змінні середовища!");
    return;
  }

  const transporter = nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });

  try {
    console.log("🔍 Перевіряємо з'єднання...");
    await transporter.verify();
    console.log("✅ З'єднання успішне!");

    const adminEmail = process.env.EMAIL_ADMIN || "s.vashkevych@gmail.com";

    console.log(`📧 Відправляємо тестовий email на ${adminEmail}...`);

    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: adminEmail,
      subject: "Тестовий email від Beautica",
      html: `
        <h2>Тестовий email</h2>
        <p>Це тестовий email для перевірки налаштувань.</p>
        <p>Час відправки: ${new Date().toLocaleString("uk-UA")}</p>
      `,
    });

    console.log("✅ Email успішно відправлено!");
    console.log("Message ID:", result.messageId);
  } catch (error) {
    console.error("❌ Помилка відправки email:", error.message);

    if (error.code === "EAUTH") {
      console.error("🔐 Проблема з автентифікацією. Перевірте:");
      console.error("- Чи увімкнена двофакторна автентифікація");
      console.error("- Чи використовуєте App Password замість звичайного пароля");
    }
  }
};

testEmail();

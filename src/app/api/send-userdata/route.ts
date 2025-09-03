import config from "@/config";
import { sendMail } from "@/lib/nodemailer";
import { renderTemplate } from "@/lib/renderTemplate";
import { normalizePhone } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requiredFields = ["name", "phone", "description"];
    const data = await req.json();

    if (requiredFields.some((field) => !data[field])) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { name, phone, description } = data;

    console.log("Received form data:", { name, phone, description });
    console.log("Mail config:", {
      from: config.env.mail.prod.from,
      admin: config.env.mail.prod.admin,
      user: config.env.mail.prod.user,
    });

    const adminEmailText = renderTemplate("send-question", {
      name,
      phone: normalizePhone(phone),
      description,
    });

    console.log("Email template rendered successfully");

    // Відправляємо email адміністратору (s.vashkevych@gmail.com)
    await sendMail(
      config.env.mail.prod.admin, // Відправляємо НА адміністратора
      "Нове повідомлення від клієнта",
      adminEmailText,
    );

    console.log(`Email sent successfully to admin: ${config.env.mail.prod.admin}`);

    return NextResponse.json({
      success: true,
      message: "Повідомлення успішно відправлено",
    });
  } catch (error) {
    console.error("Error in send-userdata API:", error);

    // Повертаємо більш інформативну помилку
    const errorMessage = error instanceof Error ? error.message : "Невідома помилка";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 },
    );
  }
}

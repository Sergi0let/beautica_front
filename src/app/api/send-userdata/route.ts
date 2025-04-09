import config from '@/lib/config'
import { sendMail } from "@/lib/nodemailer"
import { renderTemplate } from "@/lib/renderTemplate"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const requiredFields = ["name", "phone", "description"]
    const data = await req.json()

    if (requiredFields.some((field) => !data[field])) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { name, phone, description } = data

    const adminEmailText = renderTemplate("send-question", { name, phone, description })

    await sendMail(config.env.mail.test.from, "New message from client", adminEmailText)

    return NextResponse.json({ message: "Message sent" })


  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Missing required fields" }, { status: 500 })
  }
}

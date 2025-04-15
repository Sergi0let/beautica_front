import nodemailer from "nodemailer"
import config from '../config'

const createTransporter = () => {
  return nodemailer.createTransport({
    host: config.env.mail.test.host,
    port: Number(config.env.mail.test.port),
    auth: {
      user: config.env.mail.test.user,
      pass: config.env.mail.test.pass,
    },
  })
}

export const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = createTransporter()

  await transporter.sendMail({
    from: config.env.mail.test.from,
    to,
    subject,
    html,
  })
}

export default sendMail

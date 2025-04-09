import { EmailTemplate, EmailTemplateData } from '@/types'
import fs from "fs"
import path from "path"



const TEMPLATE_DIR = path.join(process.cwd(), "email-templates")

const loadTemplateFile = (template: EmailTemplate): string => {
  const filePath = path.join(TEMPLATE_DIR, `${template}.html`)
  return fs.readFileSync(filePath, "utf-8")
}

const interpolate = <T extends EmailTemplate>(
  templateStr: string,
  data: EmailTemplateData[T]
): string => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g")
    return acc.replace(regex, String(value))
  }, templateStr)
}

export const renderTemplate = <T extends EmailTemplate>(
  template: T,
  data: EmailTemplateData[T]
): string => {
  const rawTemplate = loadTemplateFile(template)
  return interpolate(rawTemplate, data)
}

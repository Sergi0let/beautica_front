export interface SvgProps {
  className?: string
  color?: string
}

export type EmailTemplate = "send-question"

export type EmailTemplateData = {
  "send-question": { name: string; phone: string; description: string }
}
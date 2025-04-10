import { z } from "zod"

export const usersLeaveDataSchema = z.object({
  name: z.string().min(3, { message: "Ім'я повинно містити щонайменше 3 символи" }),
  phone: z.string().regex(/^\+38 \(0\d{2}\) \d{3} \d{2} \d{2}$/, "Невірний формат номера"),
  description: z.string().trim().min(10, { message: "Опис повинен містити щонайменше 10 символів" }).max(1000, { message: "Опис повинен містити не більше 1000 символів" }),
})
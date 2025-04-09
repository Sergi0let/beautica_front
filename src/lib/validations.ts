import { z } from "zod"

export const usersLeaveDataSchema = z.object({
  name: z.string().min(3, { message: "Ім'я повинно містити щонайменше 3 символи" }),
  phone: z.string()
    .length(13, { message: "Номер телефону повинен містити 13 символів у форматі +380XXXXXXXXX" })
    .regex(/^\+380\d{9}$/, { message: "Невірний формат номера телефону. Використовуйте формат +380XXXXXXXXX" }),
  description: z.string().trim().min(10, { message: "Опис повинен містити щонайменше 10 символів" }).max(1000, { message: "Опис повинен містити не більше 1000 символів" }),
})
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const discountPercentage = (oldPrice: number, newPrice: number) =>
  Math.round(((oldPrice - newPrice) / oldPrice) * 100)

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)

  // Перевірка на валідність дати
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format")
  }

  const formattedDate = new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)

  return formattedDate
}

export const formatPrice = (price: number | null): string => {
  if (!price) return "0"
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export const normalizePhone = (phone: string): string => {
  return phone.replace(/[^\d+]/g, "")
}

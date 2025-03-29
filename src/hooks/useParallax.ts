"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

const useParallax = (maxTranslate: number = 10) => {
  const [translate, setTranslate] = useState("translate(0px, 0px)")
  const [isClient, setIsClient] = useState(false) // Перевірка клієнтського рендерингу
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  useEffect(() => {
    setIsClient(true) // Встановити стан клієнта після завантаження
    if (!isDesktop) return // Додати обробник тільки для десктопів

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const xPercentage = clientX / window.innerWidth
      const yPercentage = clientY / window.innerHeight
      const translateX = (xPercentage - 0.5) * maxTranslate * 2
      const translateY = (yPercentage - 0.5) * maxTranslate * 2
      setTranslate(`translate(${translateX}px, ${translateY}px)`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isDesktop, maxTranslate])

  // Для серверного рендерингу повертаємо статичний стиль
  return isClient && isDesktop ? translate : "translate(0px, 0px)"
}

export default useParallax

import { useEffect, useState } from "react"

export type InputMethod = "mouse" | "touch"

const useInputMethod = (): InputMethod => {
  const [inputMethod, setInputMethod] = useState<InputMethod>("mouse")

  useEffect(() => {
    const handleTouchStart = () => setInputMethod("touch")
    const handleMouseMove = () => setInputMethod("mouse")

    window.addEventListener("touchstart", handleTouchStart, true)
    window.addEventListener("mousemove", handleMouseMove, true)

    return () => {
      window.removeEventListener("touchstart", handleTouchStart, true)
      window.removeEventListener("mousemove", handleMouseMove, true)
    }
  }, [])

  return inputMethod
}

export default useInputMethod

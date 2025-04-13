import { useEffect, useRef, useState } from 'react'

type ScrollDirection = 'up' | 'down' | 'idle'

export function useScrollDirection(threshold = 10, idleDelay = 1000): ScrollDirection {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>('idle')
  const lastScrollY = useRef(0)
  const idleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateDirection = () => {
      const scrollY = window.scrollY
      const diff = scrollY - lastScrollY.current

      if (Math.abs(diff) > threshold) {
        const direction = diff > 0 ? 'down' : 'up'
        setScrollDir(direction)
        lastScrollY.current = scrollY > 0 ? scrollY : 0

        if (idleTimeout.current) clearTimeout(idleTimeout.current)
        idleTimeout.current = setTimeout(() => {
          setScrollDir('idle')
        }, idleDelay)
      }

      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateDirection)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (idleTimeout.current) clearTimeout(idleTimeout.current)
    }
  }, [threshold, idleDelay])

  return scrollDir
}

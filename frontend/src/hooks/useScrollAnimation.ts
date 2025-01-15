import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

interface ScrollAnimationConfig {
  offset?: [string, string] | [number, number]
  inputRange?: [number, number]
  outputRange?: [number, number]
  sticky?: boolean
}

export function useScrollAnimation(config: ScrollAnimationConfig = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: config.offset || ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  
  const y = useSpring(
    useTransform(
      scrollYProgress,
      config.inputRange || [0, 1],
      config.outputRange || [50, 0]
    ),
    springConfig
  )

  const opacity = useSpring(
    useTransform(
      scrollYProgress,
      config.inputRange || [0, 0.2],
      [0, 1]
    ),
    springConfig
  )

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, y, opacity, isInView, scrollYProgress }
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export function useSmoothTransform(value: MotionValue<number>, springConfig = { stiffness: 100, damping: 30 }) {
  return useSpring(value, springConfig)
} 
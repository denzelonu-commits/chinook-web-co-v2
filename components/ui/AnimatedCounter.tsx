'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  /** Decimal places for the displayed number */
  decimals?: number
  className?: string
}

/**
 * Counts from 0 to `end` when the element enters the viewport.
 * Uses requestAnimationFrame for a smooth animation.
 */
export default function AnimatedCounter({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    // Ease-out curve for natural deceleration
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) startTimeRef.current = currentTime
      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const easedProgress = easeOut(progress)
      const current = easedProgress * end

      setCount(Number(current.toFixed(decimals)))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [inView, end, duration, decimals])

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.round(count).toLocaleString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

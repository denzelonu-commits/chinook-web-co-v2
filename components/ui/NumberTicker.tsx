'use client'

import { useEffect, useRef, useState } from 'react'
import { useMotionValue, useSpring, useInView } from 'framer-motion'

interface NumberTickerProps {
  /** The final target value */
  value: number
  /** Optional string appended after the number (e.g. "+" or "%") */
  suffix?: string
  /** Optional string prepended before the number */
  prefix?: string
  /** Decimal places to display */
  decimals?: number
  className?: string
}

export function NumberTicker({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const motionVal = useMotionValue(0)
  // Spring physics: high stiffness → fast start, high damping → slows near target
  const springVal = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 1 })

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionVal.set(value)
    }
  }, [isInView, motionVal, value])

  useEffect(() => {
    const unsubscribe = springVal.on('change', (v) => {
      setDisplay(parseFloat(v.toFixed(decimals)))
    })
    return unsubscribe
  }, [springVal, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

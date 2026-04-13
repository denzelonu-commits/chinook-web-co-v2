'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  /** Additional y-translate offset at start (px). Default 24 */
  yOffset?: number
  /** Animation duration in seconds. Default 0.6 */
  duration?: number
  /** Delay in seconds. Default 0 */
  delay?: number
  /** Viewport margin before triggering. Default "-80px" */
  margin?: string
}

/**
 * Wraps children in a fade-up reveal that fires once when entering the viewport.
 * Uses Framer Motion whileInView with once:true — no scroll listeners.
 */
export function ScrollReveal({
  children,
  className,
  yOffset = 24,
  duration = 0.6,
  delay = 0,
  margin = '-80px',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: margin as `${number}px` })

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

/** Staggered container — wraps a list of ScrollReveal-style children */
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  margin?: string
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  margin = '-80px',
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: margin as `${number}px` })

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(className)}
    >
      {/* Pass the item variant down via context would require extra work;
          instead wrap each direct child in a motion.div here */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item}>{children}</motion.div>
      }
    </motion.div>
  )
}

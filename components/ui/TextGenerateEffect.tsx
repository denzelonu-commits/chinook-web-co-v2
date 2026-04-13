'use client'

import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextGenerateEffectProps {
  /** The full text string to reveal word by word */
  words: string
  /** Words that should be colored amber — must match exactly (case-sensitive) */
  highlightWords?: string[]
  className?: string
  /** Delay before the reveal sequence begins (seconds) */
  delay?: number
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0, // overridden by the delay prop on the component
    },
  },
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(12px)',
    y: 8,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

export function TextGenerateEffect({
  words,
  highlightWords = [],
  className,
  delay = 0,
}: TextGenerateEffectProps) {
  const wordArray = words.split(' ')

  const containerWithDelay: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.span
      variants={containerWithDelay}
      initial="hidden"
      animate="visible"
      className={cn('inline', className)}
    >
      {wordArray.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className={cn(
            'inline-block mr-[0.22em]',
            highlightWords.includes(word) && 'text-amber'
          )}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

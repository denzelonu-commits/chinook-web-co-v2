'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'We Find You Online & Build a Free Demo',
    description:
      'We research your business, audit your current online presence, and build a fully custom homepage mockup — no templates, no deposit. You see the finished vision before a single line of production code is written.',
    output: 'High-fidelity interactive mockup',
  },
  {
    number: '02',
    title: 'You Approve Every Pixel',
    description:
      'We review the design together. You request changes until everything is exactly right. This mockup becomes the immutable blueprint for the build — no surprises, no "close enough" styling.',
    output: 'Finalized design system & asset package',
  },
  {
    number: '03',
    title: 'We Build, Launch & Hand You the Keys',
    description:
      'Using the approved mockup as a pixel-perfect spec, we build your site with clean, performant code. Go live in 3–14 days. We handle hosting migration, analytics setup, and 30 days of priority support.',
    output: 'Live site + production documentation',
  },
] as const

function Step({
  number,
  title,
  description,
  output,
  index,
  isLast,
}: {
  number: string
  title: string
  description: string
  output: string
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="flex gap-8 lg:gap-16 relative"
    >
      {/* Step node + connector line */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-12 h-12 rounded-full bg-amber text-white flex items-center justify-center
                     font-black text-lg z-10 shrink-0"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {number}
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="w-px flex-1 min-h-[80px] mt-2"
            /* Gradient: amber at top fades to transparent */
            style={{
              background: 'linear-gradient(to bottom, #E07B2A 0%, transparent 100%)',
              originY: 0,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-20">
        <h3
          className="text-[clamp(1.6rem,3vw,2rem)] font-bold uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {title}
        </h3>
        <p className="text-base leading-relaxed text-text-dark mb-6 max-w-lg">
          {description}
        </p>
        <div className="inline-flex flex-col gap-1 p-4 border border-amber/20 bg-amber/5">
          <span className="text-[10px] uppercase tracking-widest font-bold text-amber">
            Output
          </span>
          <span className="text-sm text-text-dark">{output}</span>
        </div>
      </div>
    </motion.div>
  )
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="bg-steel py-24 md:py-32 px-8 md:px-14 lg:px-20"
    >
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-20"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
          02 / How it works
        </p>
        <h2
          className="text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white mb-5"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          A Blueprint for
          <br />
          <span className="text-text-muted-dark">Digital</span>{' '}
          <span className="text-amber">Excellence.</span>
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-text-dark">
          We&apos;ve standardized the chaos of web development into a predictable, high-output process. No guesswork, no delays — just precision execution from first conversation to live site.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="max-w-3xl">
        {STEPS.map((step, i) => (
          <Step
            key={step.number}
            {...step}
            index={i}
            isLast={i === STEPS.length - 1}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-4 flex flex-col sm:flex-row gap-4"
      >
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-3 bg-amber text-white
                     px-10 py-5 text-sm font-bold uppercase tracking-[0.12em]
                     transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
        >
          Start with a Free Mockup
        </button>
        <button
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-3 border border-white/20 text-text-dark
                     px-10 py-5 text-sm font-bold uppercase tracking-[0.12em]
                     transition-all duration-200 hover:border-amber hover:text-white"
        >
          View Pricing
        </button>
      </motion.div>
    </section>
  )
}

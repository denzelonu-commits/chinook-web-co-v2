'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

const handleScrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between min-h-[100dvh]
                 px-8 md:px-14 lg:px-20 pt-28 md:pt-20 pb-16
                 bg-charcoal overflow-hidden"
    >
      {/* Background radial glow — amber, very subtle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 60% 30%, #E07B2A 0%, transparent 65%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col flex-1 justify-center max-w-4xl">

        {/* Eyebrow */}
        <motion.p
          variants={fadeUpVariants}
          custom={0.25}
          initial="hidden"
          animate="visible"
          className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber"
        >
          Calgary&apos;s Digital Engineering Studio
        </motion.p>

        {/* ── Headline — TextGenerateEffect ── */}
        <h1
          className="font-black uppercase leading-[0.92] tracking-[-0.02em] mb-8
                     text-[clamp(3rem,8vw,6.5rem)] text-white"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          <TextGenerateEffect
            words="Calgary Websites That Get CUSTOMERS Through the Door."
            highlightWords={['CUSTOMERS']}
            delay={0.4}
          />
        </h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUpVariants}
          custom={1.8}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-lg leading-relaxed text-text-dark mb-10"
        >
          81% of shoppers research a business online before buying. If you&apos;re not there — or your site looks dated — you&apos;re handing customers to the competition.
          <br />
          <span className="text-white font-medium">We fix that. Mockup first. No obligation.</span>
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          variants={fadeUpVariants}
          custom={2.0}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4"
        >
          {/* Primary */}
          <button
            onClick={() => handleScrollTo('contact')}
            className="group flex items-center gap-3 bg-amber text-white
                       px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em]
                       transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            Get a Free Preview
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          {/* Secondary */}
          <button
            onClick={() => handleScrollTo('portfolio')}
            className="group flex items-center gap-3 border border-white/20 text-text-dark
                       px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em]
                       transition-all duration-200 hover:border-amber hover:text-white"
          >
            <Play size={13} strokeWidth={2} />
            See Our Work
          </button>
        </motion.div>
      </div>

    </section>
  )
}

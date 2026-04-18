'use client'

import { motion } from 'framer-motion'

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-offwhite py-24 md:py-32 px-8 md:px-14 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6040] mb-4">
          05 / Client feedback
        </p>
        <h2
          className="text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-charcoal mb-8"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          First case studies
          <br />
          publishing summer 2026
        </h2>
        <p className="text-[15px] leading-relaxed text-[#5A524A] max-w-prose">
          I&rsquo;m currently onboarding a founding cohort of three Calgary trades businesses. Their results &mdash; Google rankings, call volume, lead quality &mdash; will be published here as 90-day case studies. If you&rsquo;d like to be one of them, email{' '}
          <a
            href="mailto:hello@chinookwebco.com"
            className="text-[#1C3A5E] underline underline-offset-4 hover:opacity-70 transition-opacity duration-150"
          >
            hello@chinookwebco.com
          </a>
          .
        </p>
      </motion.div>
    </section>
  )
}

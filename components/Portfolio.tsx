'use client'

import { motion } from 'framer-motion'

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-charcoal py-24 md:py-32 px-8 md:px-14 lg:px-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
          04 / Our work
        </p>
        <h2
          className="text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Portfolio
        </h2>
      </motion.div>

      {/* Empty state */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="border border-white/[0.08] bg-white/[0.03] px-10 py-14 max-w-xl"
      >
        <p className="text-sm leading-relaxed text-[#9A9490]">
          First client builds going live this quarter. Check back in June 2026 for live sites and case studies.
        </p>
      </motion.div>
    </section>
  )
}

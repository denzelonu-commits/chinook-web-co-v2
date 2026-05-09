'use client'

import { motion, Variants } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const SERVICES = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Hand-coded, bespoke interfaces built for speed and conversion. No drag-and-drop builders, no bloated themes — just clean, performant code that ranks and converts.',
    detail: 'Lighthouse 95+ guaranteed',
  },
  {
    number: '02',
    title: 'Local SEO',
    description:
      'We don\'t just get traffic — we get local phone calls and leads. Calgary-specific keyword strategy, Google Business optimization, and schema markup baked in from day one.',
    detail: 'Google Business integration',
  },
  {
    number: '03',
    title: 'Hosting & Maintenance',
    description:
      'All sites include premium managed hosting starting at $149/mo. SSL, CDN, 24/7 uptime monitoring, software updates, and 1 hr monthly support — we handle the technical weight.',
    detail: 'From $149/mo',
  },
] as const

function ServiceCard({ number, title, description, detail, index }: {
  number: string
  title: string
  description: string
  detail: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="group relative flex flex-col gap-5 p-8 border border-white/[0.08]
                 transition-all duration-150 hover:border-amber/40
                 hover:bg-white/[0.02]"
    >
      {/* Amber top-border on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-amber opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

      <div className="flex items-start justify-between">
        <span
          className="text-5xl font-black text-white/[0.08] leading-none select-none"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {number}
        </span>
        <ArrowUpRight
          size={18}
          strokeWidth={1.5}
          className="text-text-muted-dark group-hover:text-amber transition-colors duration-150 mt-1"
        />
      </div>

      <div>
        <h3
          className="text-2xl font-bold uppercase tracking-tight text-white mb-3"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-dark">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-white/[0.06]">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.15em] text-amber"
        >
          {detail}
        </span>
      </div>
    </motion.div>
  )
}

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="services"
      className="bg-steel py-24 md:py-32 px-8 md:px-14 lg:px-20"
    >
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
          01 / What we build
        </p>
        <h2
          className="text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          High-Performance
          <br />
          Digital Architecture
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-text-dark">
          We build digital assets that perform with the precision of industrial-grade machinery — optimized for the Calgary market and built to convert visitors into paying customers.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
        {SERVICES.map((s, i) => (
          <div key={s.number} className="bg-steel">
            <ServiceCard {...s} index={i} />
          </div>
        ))}
      </div>

      {/* Philosophy callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="mt-16 p-8 border-l-2 border-amber bg-white/[0.03]"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-3">
          Our philosophy
        </p>
        <blockquote className="text-lg font-medium text-white leading-relaxed max-w-2xl">
          &ldquo;A great mockup is the same as a great quote: it tells you exactly what you&apos;re getting before any work starts. If we can&apos;t show you quality up front, we haven&apos;t earned the build.&rdquo;
        </blockquote>
        <div className="mt-4">
          <span
            className="text-base font-bold uppercase tracking-tight text-amber block"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Denzel O.
          </span>
          <span className="text-[10px] uppercase tracking-widest text-text-muted-dark font-medium">
            Founder
          </span>
        </div>
      </motion.div>
    </section>
  )
}

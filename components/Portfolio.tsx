'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Sullivan Plumbing & Heating',
    category: 'Plumbing & HVAC',
    desc: 'Lead-generation site with Google Business integration and local SEO. Organic calls up 3× in first 90 days.',
    tags: ['Web Engineering', 'Local SEO', 'Hosting'],
    bg: '#1C3A5E',
    placeholder: true,
  },
  {
    title: 'Peak Power Electrical',
    category: 'Electrician',
    desc: '5-page Foundation build with online quote request form, schema markup, and 14-day turnaround.',
    tags: ['Web Engineering', 'Local SEO'],
    bg: '#1A2535',
    placeholder: true,
  },
  {
    title: 'Prairie Roots Landscaping',
    category: 'Landscaping',
    desc: 'Growth Engine build with 10 service pages, seasonal content strategy, and conversion-first layout.',
    tags: ['Web Engineering', 'Content Strategy', 'SEO'],
    bg: '#1C3A3A',
    placeholder: true,
  },
  {
    title: 'Foothills Climate Control',
    category: 'HVAC',
    desc: 'Emergency service callout page, after-hours lead capture, and full Google Ads landing page integration.',
    tags: ['Web Engineering', 'Conversion Opt.', 'Hosting'],
    bg: '#2A2535',
    placeholder: true,
  },
] as const

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
        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
            04 / Our work
          </p>
          <h2
            className="text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-white"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Recent
            <br />
            Projects
          </h2>
        </div>
        <p className="text-sm text-text-muted-dark max-w-xs leading-relaxed italic">
          Portfolio updated as projects are completed. Each site is custom-built — no two are identical.
        </p>
      </motion.div>

      {/* Cards grid — asymmetric 2+2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            className="group relative flex flex-col gap-5 p-8 lg:p-10
                       transition-colors duration-200 hover:bg-white/[0.025]"
            style={{ backgroundColor: p.bg }}
          >
            {/* Placeholder image area */}
            <div
              className="w-full h-44 mb-2 flex items-center justify-center border border-white/[0.07] relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <span
                className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase tracking-tight text-white/[0.06] select-none"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {p.title.split(' ')[0]}
              </span>
              <div className="absolute bottom-3 right-3">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium italic">
                  Example project
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber block mb-1">
                  {p.category}
                </span>
                <h3
                  className="text-2xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {p.title}
                </h3>
              </div>
              <ExternalLink
                size={16}
                strokeWidth={1.5}
                className="text-text-muted-dark group-hover:text-amber transition-colors duration-150 shrink-0 mt-1"
              />
            </div>

            <p className="text-sm leading-relaxed text-text-dark">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest font-semibold
                             px-3 py-1 border border-white/10 text-text-muted-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

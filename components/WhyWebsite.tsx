'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const STATS = [
  {
    figure: '81%',
    headline: 'Research before they buy',
    body: 'Of shoppers look up a business online before making any purchase decision. If they can\'t find you — or your site looks untrustworthy — they\'ll buy from whoever shows up instead.',
    source: 'Invoca, 2024',
  },
  {
    figure: '2×',
    headline: 'Faster business growth',
    body: 'Businesses with a professional website grow at twice the rate of those without. The website isn\'t optional anymore — it\'s the difference between plateau and growth.',
    source: 'Marketing LTB, 2025',
  },
  {
    figure: '76%',
    headline: 'Visit your website first',
    body: 'Of people check your website before deciding whether to call, visit, or buy. A weak site doesn\'t just lose a click — it loses the sale before any conversation starts.',
    source: 'BrightLocal',
  },
  {
    figure: '1 in 3',
    headline: 'Passed on a business, no website',
    body: 'Nearly one in three shoppers have skipped a local business entirely because it had no website. That\'s not a marketing problem — that\'s a visibility problem we can solve.',
    source: 'Network Solutions, 2025',
  },
] as const

export function WhyWebsite() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="why-website"
      className="bg-charcoal py-24 md:py-32 px-8 md:px-14 lg:px-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── Left: Bold headline ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:sticky lg:top-24"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-5">
            03 / Why a website?
          </p>
          <h2
            className="text-[clamp(3rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Still on the fence?
            <br />
            <span className="text-text-muted-dark">The data</span>
            <br />
            answers for us.
          </h2>
          <p className="text-base leading-relaxed text-text-dark max-w-md">
            Every stat below represents a real customer you either earn or lose. These aren&apos;t abstract marketing numbers — they&apos;re the difference between a phone that rings and one that doesn&apos;t.
          </p>
          <div className="mt-10">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 bg-amber text-white
                         px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em]
                         transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              Get a Free Preview
            </button>
          </div>
        </motion.div>

        {/* ── Right: Stat blocks ── */}
        <div className="flex flex-col gap-10">
          {STATS.map(({ figure, headline, body, source }, i) => (
            <motion.div
              key={figure}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="flex gap-6 pb-10 border-b border-white/[0.07] last:border-none last:pb-0"
            >
              <div
                className="shrink-0 text-[3.5rem] font-black text-amber leading-none tracking-tight pt-1"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {figure}
              </div>
              <div>
                <h3
                  className="text-xl font-bold uppercase tracking-tight text-white mb-2"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {headline}
                </h3>
                <p className="text-sm leading-relaxed text-text-dark mb-2">{body}</p>
                <span className="text-[10px] uppercase tracking-widest text-text-muted-dark font-medium">
                  {source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

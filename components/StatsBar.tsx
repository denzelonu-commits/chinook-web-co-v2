'use client'

import { NumberTicker } from '@/components/ui/NumberTicker'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const STATS = [
  {
    value: 81,
    suffix: '%',
    label: 'of shoppers research a business online before buying',
    source: 'Invoca, 2024',
  },
  {
    value: 2,
    suffix: '×',
    label: 'faster growth for businesses with a website vs. those without',
    source: 'Marketing LTB, 2025',
  },
  {
    value: 76,
    suffix: '%',
    label: 'of people check a local business website before visiting',
    source: 'BrightLocal',
  },
  {
    value: 50,
    suffix: '%',
    label: 'avg. revenue increase for SMBs with a modern website',
    source: 'Network Solutions, 2025',
    prefix: 'up to ',
  },
] as const

export function StatsBar() {
  return (
    <section
      id="stats"
      className="bg-charcoal border-y border-white/[0.07] py-14 px-8 md:px-14 lg:px-20"
    >
      <ScrollReveal>
        <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber mb-10">
          The reality for local businesses in 2025
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map(({ value, suffix, prefix, label, source }) => (
          <ScrollReveal key={label}>
            <div className="flex flex-col gap-2 pr-6 border-r border-white/[0.06] last:border-none">
              <div
                className="text-[clamp(2.5rem,5vw,3.5rem)] font-black text-amber leading-none tracking-tight"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {prefix && <span className="text-xl font-semibold text-amber/70 mr-1">{prefix}</span>}
                <NumberTicker value={value} suffix={suffix} />
              </div>
              <p className="text-sm leading-relaxed text-text-dark max-w-[220px]">
                {label}
              </p>
              <span className="text-[10px] uppercase tracking-widest text-text-muted-dark font-medium">
                {source}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

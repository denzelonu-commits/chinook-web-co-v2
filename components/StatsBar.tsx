'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Check } from 'lucide-react'

const VALUE_PROPS = [
  {
    headline: 'Free mockup',
    sub: 'No deposit, no commitment — see your site before you pay a cent.',
  },
  {
    headline: 'Live in 3–14 days',
    sub: 'Foundation sites launch in 3–5 days. Growth Engine in 7–10 days.',
  },
  {
    headline: 'You own the code',
    sub: 'Full IP transfer on completion. No rental model, no lock-in.',
  },
  {
    headline: 'Lighthouse 95+ guaranteed',
    sub: 'Performance, accessibility, and SEO scores baked in from day one.',
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
          What you get — guaranteed
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {VALUE_PROPS.map(({ headline, sub }) => (
          <ScrollReveal key={headline}>
            <div className="flex flex-col gap-3 pr-6 border-r border-white/[0.06] last:border-none">
              <div className="flex items-center gap-2">
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="text-amber shrink-0"
                />
                <span
                  className="text-[clamp(1rem,2vw,1.2rem)] font-black uppercase tracking-tight text-white leading-none"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {headline}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-dark max-w-[220px]">
                {sub}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

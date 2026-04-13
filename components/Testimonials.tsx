'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Marquee } from '@/components/ui/Marquee'

const TESTIMONIALS_ROW1 = [
  {
    quote: 'The mockup was so good we signed on the spot. Within three months our organic leads doubled. Best business decision this year.',
    name: 'Mike Sullivan',
    company: 'Sullivan Plumbing & Heating',
    trade: 'Plumbing',
    initials: 'MS',
  },
  {
    quote: 'Most agencies talk. Chinook builds. Having an actual finished design before I paid a cent is a game-changer. Our calls are up.',
    name: 'Rohan Kapoor',
    company: 'Kapoor Properties',
    trade: 'Real Estate',
    initials: 'RK',
  },
  {
    quote: 'I was skeptical — I\'ve been burned before. But they delivered the mockup in 48 hours and it looked better than sites I\'d paid $8k for.',
    name: 'Carla Benitez',
    company: 'Foothills Dental',
    trade: 'Dental Clinic',
    initials: 'CB',
  },
  {
    quote: 'We launched in 10 days. The Google rankings have moved significantly. Local customers now find us first before our bigger competitors.',
    name: 'Derek Munroe',
    company: 'Munroe Electrical Services',
    trade: 'Electrical',
    initials: 'DM',
  },
  {
    quote: 'The monthly maintenance plan is worth it alone. I never think about the website anymore — it just works and I keep getting calls.',
    name: 'Steph Nguyen',
    company: 'Nguyen\'s Vietnamese Kitchen',
    trade: 'Restaurant',
    initials: 'SN',
  },
] as const

const TESTIMONIALS_ROW2 = [
  {
    quote: 'Denzel came back with a mockup that felt like it was designed for us specifically. The colours, the layout, the tone — all on point.',
    name: 'Priya Anand',
    company: 'Anand Financial Group',
    trade: 'Financial Services',
    initials: 'PA',
  },
  {
    quote: 'Three quotes from other agencies were all vague promises and big numbers. Chinook showed us the site before asking for anything. Done deal.',
    name: 'Chris Okafor',
    company: 'Okafor\'s Contracting',
    trade: 'Contracting',
    initials: 'CO',
  },
  {
    quote: 'I was losing customers to a competitor with a nicer website. Now mine is better. We are getting 4-5 new inquiries a week just from Google.',
    name: 'Taryn MacLeod',
    company: 'MacLeod HVAC Solutions',
    trade: 'HVAC',
    initials: 'TM',
  },
  {
    quote: 'Fast, professional, and they actually care. Sent us a 90-day SEO report without us even asking. This is what a real agency looks like.',
    name: 'James Park',
    company: 'Park Auto Group',
    trade: 'Auto Dealership',
    initials: 'JP',
  },
  {
    quote: 'We went from zero online presence to page one for our main keywords in under 4 months. The Growth Engine package is worth every dollar.',
    name: 'Aisha Williams',
    company: 'Williams Bookkeeping',
    trade: 'Bookkeeping',
    initials: 'AW',
  },
] as const

function TestimonialCard({
  quote,
  name,
  company,
  trade,
  initials,
}: {
  quote: string
  name: string
  company: string
  trade: string
  initials: string
}) {
  return (
    <div
      className="flex flex-col gap-4 p-6 bg-white border border-[#DDD8D2] rounded-sm w-[320px] shrink-0"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={13}
            strokeWidth={0}
            className="fill-amber text-amber"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[15px] leading-relaxed text-[#3A3530] italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[#EEE8E2]">
        <div
          className="w-9 h-9 rounded-sm bg-charcoal text-amber flex items-center justify-center
                     text-[11px] font-black shrink-0"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {initials}
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#2A2520]">
            {name}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] text-[#6B6058]">{company}</span>
            <span
              className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5
                         border border-amber/40 text-amber"
            >
              {trade}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-offwhite py-24 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-8 md:px-14 lg:px-20 mb-14"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6040] mb-4">
          05 / Client feedback
        </p>
        <h2
          className="text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-charcoal"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          What Calgary
          <br />
          Businesses Say
        </h2>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <Marquee speed={45} reverse={false} pauseOnHover>
          {TESTIMONIALS_ROW1.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
      </div>

      {/* Row 2 — scrolls right */}
      <Marquee speed={38} reverse={true} pauseOnHover>
        {TESTIMONIALS_ROW2.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </Marquee>
    </section>
  )
}

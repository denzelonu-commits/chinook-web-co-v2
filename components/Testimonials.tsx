'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ui/ScrollReveal'

const testimonials = [
  {
    quote:
      "I didn't think a website would make that big a difference for a plumbing company. First week after we launched, I got three calls from people who found us on Google. Worth every penny.",
    name: 'Ryan Kowalski',
    niche: 'Plumbing — NE Calgary',
    initials: 'RK',
    color: '#2E6EA6',
  },
  {
    quote:
      "Denzel built us something that actually looks like a real company. My old site looked like it was made in 2008. The new one has a contact form that gets used every week.",
    name: 'Sandra Moffatt',
    niche: 'Electrical Contractor',
    initials: 'SM',
    color: '#E07B2A',
  },
  {
    quote:
      "The free preview sold me. He built the top of our site before I even agreed to anything — I could see exactly what I was getting. No other agency does that.",
    name: 'Marcus Thiessen',
    niche: 'HVAC Services',
    initials: 'MT',
    color: '#1C3A5E',
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#E07B2A" aria-hidden="true">
          <path d="M7 1.5l1.56 3.16L12 5.18l-2.5 2.44.59 3.44L7 9.44l-3.09 1.62.59-3.44L2 5.18l3.44-.52L7 1.5z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-[#F5F1EC] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <ScrollReveal className="mb-16">
          <p className="eyebrow mb-3">Client Results</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1A1F2E] leading-[1.05]"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
          >
            Real businesses.<br />
            Real outcomes.
          </h2>
        </ScrollReveal>

        {/* Testimonial cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="flex flex-col bg-white rounded-[10px] border border-[#D8E0E8] p-7 h-full">
                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <blockquote className="mt-4 text-sm text-[#1A1F2E] leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[#D8E0E8]">
                  {/* Avatar circle */}
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ backgroundColor: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1F2E]">{t.name}</p>
                    <p className="text-xs text-[#6B7A8D]">{t.niche}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

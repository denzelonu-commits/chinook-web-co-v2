'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ui/ScrollReveal'

const placeholders = [
  {
    label: 'Calgary Plumbing Co.',
    niche: 'Plumbing',
    tier: 'Tier 2 — Standard',
    tierColor: '#2E6EA6',
    description: 'Local plumbing company targeting emergency calls and repeat residential work.',
  },
  {
    label: 'Foothills Electrical',
    niche: 'Electrical',
    tier: 'Tier 3 — Premium',
    tierColor: '#E07B2A',
    description: 'Full-service electrician serving Calgary homeowners and light commercial.',
  },
  {
    label: 'Summit HVAC Services',
    niche: 'HVAC',
    tier: 'Tier 2 — Standard',
    tierColor: '#2E6EA6',
    description: 'Heating and cooling specialists positioning for seasonal lead generation.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#1A1F2E] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <ScrollReveal className="mb-16">
          <p className="eyebrow text-[#6B7A8D] mb-3">Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F1EC] leading-[1.05]"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
            >
              Example builds.
            </h2>
            <p className="text-[#6B7A8D] text-sm max-w-xs md:text-right">
              Portfolio updated as projects complete.
              These represent the type of work each tier delivers.
            </p>
          </div>
        </ScrollReveal>

        {/* Portfolio cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholders.map((item) => (
            <StaggerItem key={item.label}>
              <div className="group rounded-[10px] border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-200 overflow-hidden">

                {/* Placeholder screen mockup */}
                <div className="aspect-[16/9] bg-[#1C3A5E] relative overflow-hidden">
                  {/* Fake browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20 border-b border-white/[0.06]">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                  {/* Simulated site wireframe */}
                  <div className="p-4">
                    <div className="w-1/2 h-2 bg-white/30 rounded-full mb-2" />
                    <div className="w-3/4 h-4 bg-white/50 rounded mb-2" />
                    <div className="w-2/3 h-4 bg-white/40 rounded mb-4" />
                    <div className="w-20 h-6 bg-[#E07B2A] rounded-[3px] mb-6" />
                    <div className="grid grid-cols-3 gap-2">
                      {[1,2,3].map((n) => (
                        <div key={n} className="bg-white/10 rounded p-2">
                          <div className="w-full h-2 bg-white/30 rounded-full mb-1" />
                          <div className="w-2/3 h-1.5 bg-white/20 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Placeholder label overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/40 backdrop-blur-sm text-white/70 text-[10px] font-medium px-3 py-1.5 rounded-full border border-white/10">
                      Example — {item.niche}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-5 py-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-base font-bold text-[#F5F1EC]"
                      style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                    >
                      {item.label}
                    </h3>
                    {/* Tier badge */}
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                      style={{ color: item.tierColor, borderColor: `${item.tierColor}40` }}
                    >
                      {item.tier.split(' — ')[1]}
                    </span>
                  </div>
                  <p className="text-[#6B7A8D] text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <p className="text-[#6B7A8D] text-xs">
            Portfolio updated as projects are completed.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

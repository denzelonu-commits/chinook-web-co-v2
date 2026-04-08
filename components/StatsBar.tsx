'use client'

import AnimatedCounter from './ui/AnimatedCounter'
import { StaggerContainer, StaggerItem } from './ui/ScrollReveal'

const stats = [
  {
    value: 81,
    suffix: '%',
    label: 'of shoppers research a business online before buying',
    source: 'Invoca, 2024',
  },
  {
    value: 2,
    suffix: '×',
    label: 'faster growth for businesses with a website',
    source: 'Marketing LTB, 2025',
  },
  {
    value: 76,
    suffix: '%',
    label: 'of people check your site before deciding to visit',
    source: 'BrightLocal',
  },
  {
    value: 50,
    suffix: '%',
    label: 'avg. revenue increase after launching a modern site',
    source: 'Network Solutions, 2025',
  },
]

export default function StatsBar() {
  return (
    /* Full-width dark band */
    <section className="bg-[#1A1F2E] py-16 md:py-20" aria-label="Industry statistics">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-0">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              {/* Divider rule between items (desktop) */}
              <div className={`flex flex-col ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-10' : ''}`}>
                {/* Big number */}
                <p
                  className="text-5xl md:text-6xl font-bold text-[#E07B2A] tabular-nums"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                  aria-label={`${stat.value}${stat.suffix}`}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.2}
                  />
                </p>

                {/* Label */}
                <p className="mt-3 text-sm text-[#F5F1EC]/70 leading-snug max-w-[160px]">
                  {stat.label}
                </p>

                {/* Source attribution */}
                <p className="mt-2 text-[10px] text-[#6B7A8D] uppercase tracking-wider">
                  {stat.source}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

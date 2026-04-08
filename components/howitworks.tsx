'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ui/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'You tell us about your business',
    description:
      'Fill out a quick form — takes five minutes. We learn what you do, who you serve, and what makes your business worth calling.',
  },
  {
    number: '02',
    title: 'We build you a free preview',
    description:
      'Before you spend anything, we design a working hero section for your site. You\'ll see exactly what we\'d build — no guessing, no stock demos.',
  },
  {
    number: '03',
    title: 'You approve, we launch',
    description:
      'Once you\'re happy with the direction, we build the full site and get it live. Most projects are done in two weeks.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#1A1F2E] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="eyebrow text-[#6B7A8D] mb-3">Process</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F1EC] leading-[1.05]"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
          >
            Simple from start<br />
            to <span className="text-[#E07B2A]">go-live.</span>
          </h2>
        </ScrollReveal>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 relative">

          {/* Connecting rule line — desktop only */}
          <div
            className="hidden md:block absolute top-[22px] left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-[#E07B2A]/30"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div
                className={`relative flex flex-col pb-12 md:pb-0 ${
                  index > 0
                    ? 'md:pl-10 border-t border-[rgba(255,255,255,0.06)] md:border-t-0 pt-10 md:pt-0'
                    : ''
                }`}
              >
                {/* Large step number — amber, Barlow Condensed */}
                <p
                  className="text-5xl font-bold text-[#E07B2A] mb-6 relative z-10"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </p>

                {/* Step title */}
                <h3
                  className="text-xl font-bold text-[#F5F1EC] mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                >
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-sm text-[#F5F1EC]/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA prompt */}
        <ScrollReveal delay={0.3} className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[#F5F1EC]/70 text-sm max-w-sm">
              The preview is free. No contracts, no sales pressure. You decide if you want to continue.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E07B2A] text-white font-semibold text-sm px-6 py-3.5 rounded-[6px] hover:bg-[#cc6d22] active:scale-[0.97] transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Start with a free preview
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

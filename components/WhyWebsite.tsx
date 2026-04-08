'use client'

import ScrollReveal, { StaggerContainer, StaggerItem } from './ui/ScrollReveal'

const statBlocks = [
  {
    number: '81%',
    stat: 'of shoppers research a business online before buying.',
    interpretation:
      'If you\'re not online, you\'re invisible to the majority of your potential customers.',
    source: 'Invoca, 2024',
  },
  {
    number: '2×',
    stat: 'faster growth for businesses with websites vs. those without.',
    interpretation:
      'A website works while you\'re on the job — generating leads around the clock.',
    source: 'Marketing LTB, 2025',
  },
  {
    number: '15–50%',
    stat: 'average revenue increase for SMBs after launching a modern website.',
    interpretation:
      'Small improvements in how you show up online translate directly to dollars in your pocket.',
    source: 'Network Solutions, 2025',
  },
  {
    number: '1 in 3',
    stat: 'shoppers have skipped a business because it had no website.',
    interpretation:
      'You\'re already losing customers to competitors who simply showed up first online.',
    source: 'Network Solutions, 2025',
  },
]

export default function WhyWebsite() {
  return (
    <section id="why-website" className="bg-[#F5F1EC] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT — bold headline */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <p className="eyebrow mb-4">Why a Website</p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1F2E] leading-[1.0]"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
              >
                Your next customer is already{' '}
                <span className="text-[#E07B2A]">Googling</span>{' '}
                you.
              </h2>
              <p className="mt-6 text-[#6B7A8D] text-sm leading-relaxed max-w-sm">
                Most Calgary trades businesses are losing work to competitors
                with better-looking websites. It doesn't have to be that way.
              </p>
            </ScrollReveal>
          </div>

          {/* RIGHT — stat blocks */}
          <div>
            <StaggerContainer className="flex flex-col divide-y divide-[#D8E0E8]">
              {statBlocks.map((block) => (
                <StaggerItem key={block.number}>
                  <div className="py-7">
                    <div className="flex items-start gap-5">
                      {/* Large stat number */}
                      <p
                        className="text-4xl md:text-5xl font-bold text-[#E07B2A] leading-none shrink-0 w-24"
                        style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                      >
                        {block.number}
                      </p>

                      {/* Text */}
                      <div>
                        <p className="text-sm font-semibold text-[#1A1F2E] leading-snug mb-1">
                          {block.stat}
                        </p>
                        <p className="text-sm text-[#6B7A8D] leading-relaxed">
                          {block.interpretation}
                        </p>
                        <p className="mt-1.5 text-[10px] text-[#6B7A8D]/60 uppercase tracking-wider">
                          {block.source}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  )
}

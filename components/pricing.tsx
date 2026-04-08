'use client'

import { StaggerContainer, StaggerItem } from './ui/ScrollReveal'
import ScrollReveal from './ui/ScrollReveal'

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: 750,
    tagline: 'Get online fast.',
    description:
      'Everything you need to look credible and capture leads — nothing you don\'t.',
    features: [
      'Up to 4 pages',
      'Mobile-ready design',
      'Contact form',
      'Basic on-page SEO',
      'Google Maps embed',
    ],
    hosting: 75,
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 1200,
    tagline: 'Win more jobs.',
    description:
      'The full package for a trades business that needs to stand out and convert browsers into calls.',
    features: [
      'Up to 8 pages',
      'Mobile-ready design',
      'Contact & quote request forms',
      'SEO-optimized copy',
      'Google Business integration',
      'Photo gallery',
    ],
    hosting: 75,
    cta: 'Get Started',
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 2000,
    tagline: 'Own your market.',
    description:
      'Custom-designed for businesses that want to dominate their local search results.',
    features: [
      'Unlimited pages',
      'Fully custom design',
      'Advanced SEO + blogging',
      'Analytics reporting',
      'Priority turnaround',
    ],
    hosting: 75,
    cta: 'Get Started',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="services" className="bg-[#F5F1EC] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <ScrollReveal className="mb-16">
          <p className="eyebrow mb-3">Pricing</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1F2E] leading-[1.05]"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
            >
              Straight prices.<br />
              No surprises.
            </h2>
            <p className="text-[#6B7A8D] max-w-xs text-sm leading-relaxed md:text-right">
              All plans include a free preview before you commit.<br />
              Hosting covers everything — we handle it all.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <StaggerItem key={tier.id}>
              <PricingCard tier={tier} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Hosting note */}
        <ScrollReveal delay={0.2} className="mt-8 text-center">
          <p className="text-xs text-[#6B7A8D]">
            $75/month hosting includes hosting, maintenance, and all updates — we handle everything.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

function PricingCard({ tier }: { tier: typeof tiers[0] }) {
  return (
    <div
      className={`relative flex flex-col rounded-[10px] p-7 transition-all duration-200 ${
        tier.highlighted
          ? 'bg-white border-2 border-[#E07B2A] shadow-[0_8px_32px_-8px_rgba(224,123,42,0.2)] md:-translate-y-2'
          : 'bg-white border border-[#D8E0E8]'
      }`}
    >
      {/* Recommended badge */}
      {tier.highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E07B2A] text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
          Most Popular
        </span>
      )}

      {/* Tier name */}
      <p className="eyebrow text-[#6B7A8D] mb-4">{tier.name}</p>

      {/* Price — dominant display element */}
      <div className="mb-1">
        <span
          className="text-5xl md:text-6xl font-bold text-[#1A1F2E] leading-none"
          style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
        >
          ${tier.price.toLocaleString()}
        </span>
        <span className="text-sm text-[#6B7A8D] ml-1.5">one-time</span>
      </div>

      {/* Hosting fee — separate line below price */}
      <p className="text-xs text-[#6B7A8D] mb-5">
        + ${tier.hosting}/mo hosting
      </p>

      {/* Tagline + description */}
      <p
        className="text-lg font-bold text-[#1A1F2E] mb-1.5"
        style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
      >
        {tier.tagline}
      </p>
      <p className="text-sm text-[#6B7A8D] leading-relaxed mb-6">
        {tier.description}
      </p>

      {/* Divider */}
      <hr className="border-[#D8E0E8] mb-6" />

      {/* Features list */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-[#1A1F2E]">
            {/* Amber check mark */}
            <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#E07B2A]/10 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M1.5 4L3 5.5L6.5 2" stroke="#E07B2A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`text-center text-sm font-semibold py-3 px-5 rounded-[6px] transition-all duration-150 active:scale-[0.97] cursor-pointer block ${
          tier.highlighted
            ? 'bg-[#E07B2A] text-white hover:bg-[#cc6d22]'
            : 'bg-[#1C3A5E] text-[#F5F1EC] hover:bg-[#162f50]'
        }`}
      >
        {tier.cta}
      </a>
    </div>
  )
}

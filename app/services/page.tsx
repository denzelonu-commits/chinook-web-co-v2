'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Zap, MapPin, Server } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { usePageTransition } from '@/components/PageTransitionProvider'

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    number: '01',
    title: 'Web Development',
    tagline: 'Code That Converts.',
    icon: Zap,
    description:
      'Hand-coded, bespoke interfaces built for speed and conversion. No drag-and-drop builders, no bloated themes — just clean, performant code that ranks and converts.',
    detail: 'Lighthouse 95+ guaranteed',
    features: [
      'Custom-coded, zero-template builds',
      'Lighthouse 95+ performance score',
      'Core Web Vitals optimized',
      'Mobile-first responsive layout',
      'Structured data & schema markup',
      'Next.js / TypeScript stack',
      'SEO-ready semantic HTML',
      'Optimized image delivery (WebP / AVIF)',
    ],
    callout: {
      label: 'Performance Guarantee',
      text: 'Every site we ship scores 95+ on Lighthouse. If it doesn\'t, we fix it — no questions, no extra charge.',
    },
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Cloudflare'],
  },
  {
    number: '02',
    title: 'Local SEO',
    tagline: 'Rank in Calgary. Get Calls.',
    icon: MapPin,
    description:
      'We don\'t just get traffic — we get local phone calls and leads. Calgary-specific keyword strategy, Google Business optimization, and schema markup baked in from day one.',
    detail: 'Google Business integration',
    features: [
      'Calgary-specific keyword research',
      'Google Business Profile optimization',
      'Local schema markup (NAP consistency)',
      'Page-level SEO: meta, OG, sitemap',
      'Competitor gap analysis',
      'Backlink strategy for local citations',
      'Monthly ranking reports (on retainer)',
      'Review generation playbook',
    ],
    callout: {
      label: 'Local Insight',
      text: '90% of local searches result in a phone call or store visit within 24 hours. We make sure you\'re the one who gets found.',
    },
    tech: ['Google Search Console', 'Google Business', 'Schema.org', 'Ahrefs'],
  },
  {
    number: '03',
    title: 'Hosting & Maintenance',
    tagline: 'We Handle the Technical Weight.',
    icon: Server,
    description:
      'All sites include premium managed hosting starting at $149/mo. SSL, CDN, 24/7 uptime monitoring, software updates, and 1 hr monthly support — we handle everything so you can focus on running your business.',
    detail: 'From $149/mo',
    features: [
      'Premium managed hosting (Vercel/Cloudflare)',
      'SSL certificate management',
      'Global CDN — sub-1s load times',
      '24/7 uptime monitoring with alerts',
      'Software & dependency updates',
      '1 hr monthly support included',
      'Priority email response (< 4 hrs)',
      'Monthly performance report',
    ],
    callout: {
      label: 'Uptime SLA',
      text: 'Our infrastructure targets 99.9% uptime. Sites on our platform load in under 1 second on average.',
    },
    tech: ['Vercel Edge', 'Cloudflare CDN', 'SSL/TLS', 'Datadog'],
  },
] as const

// ── Components ────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
      {children}
    </p>
  )
}

function ServiceOverviewCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex flex-col gap-5 p-8 border border-white/[0.08]
                 transition-all duration-150 hover:border-amber/40 hover:bg-white/[0.02]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-amber opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      <span
        className="text-5xl font-black text-white/[0.08] leading-none select-none"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {service.number}
      </span>
      <div>
        <h3
          className="text-2xl font-bold uppercase tracking-tight text-white mb-3"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-dark">{service.description}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-white/[0.06]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-amber">
          {service.detail}
        </span>
      </div>
    </motion.div>
  )
}

function ServiceDeepDive({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="py-20 md:py-28 px-8 md:px-14 lg:px-20 border-t border-white/[0.06]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: heading + description + callout */}
        <div className="flex flex-col gap-7">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center">
                <Icon size={16} strokeWidth={1.5} className="text-amber" />
              </div>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted-dark"
              >
                {service.number} / {service.title}
              </span>
            </div>
            <h2
              className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white mb-5"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {service.tagline.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <p className="text-base leading-relaxed text-text-dark">
              {service.description}
            </p>
          </div>

          {/* Callout box */}
          <div className="p-6 border-l-2 border-amber bg-amber/[0.04]">
            <span className="text-[10px] uppercase tracking-widest font-bold text-amber block mb-2">
              {service.callout.label}
            </span>
            <p className="text-sm leading-relaxed text-text-dark">
              {service.callout.text}
            </p>
          </div>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {service.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5
                           border border-white/[0.08] text-text-muted-dark bg-white/[0.02]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: feature list */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-text-muted-dark mb-6">
            What&apos;s Included
          </p>
          <ul className="flex flex-col gap-3">
            {service.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="text-amber mt-0.5 shrink-0"
                />
                <span className="text-sm leading-relaxed text-text-dark">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const { navigateTo } = usePageTransition()
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <div className="flex overflow-x-hidden">
      <Navigation />

      <main
        className="w-full md:ml-[340px] lg:ml-[380px] md:h-screen md:overflow-y-auto pt-14 md:pt-0"
        id="scroll-container"
      >
        {/* ── Page Hero ── */}
        <section className="bg-charcoal py-28 md:py-36 px-8 md:px-14 lg:px-20 relative overflow-hidden">
          {/* Decorative grid lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 28 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 max-w-3xl"
          >
            <SectionLabel>01 / What We Build</SectionLabel>
            <h1
              className="text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-white mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              High-Performance
              <br />
              <span className="text-text-muted-dark">Digital</span>{' '}
              <span className="text-amber">Architecture.</span>
            </h1>
            <p className="text-base leading-relaxed text-text-dark max-w-xl mb-10">
              We build digital assets that perform with the precision of
              industrial-grade machinery — optimized for the Calgary market and
              built to convert visitors into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-amber text-white
                           px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em]
                           transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Start with a Free Mockup
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <button
                onClick={() => navigateTo('/how-it-works')}
                className="inline-flex items-center gap-3 border border-white/20 text-text-dark
                           px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em]
                           transition-all duration-200 hover:border-amber hover:text-white"
              >
                How It Works
              </button>
            </div>
          </motion.div>
        </section>

        {/* ── Service Overview Cards ── */}
        <section className="bg-steel py-20 px-8 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {SERVICES.map((s, i) => (
              <div key={s.number} className="bg-steel">
                <ServiceOverviewCard service={s} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Service Deep Dives ── */}
        <div className="bg-charcoal">
          {SERVICES.map((service, i) => (
            <ServiceDeepDive key={service.number} service={service} index={i} />
          ))}
        </div>

        {/* ── Philosophy callout ── */}
        <section className="bg-steel py-20 px-8 md:px-14 lg:px-20 border-t border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="p-8 border-l-2 border-amber bg-white/[0.03] max-w-2xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-3">
              Our Philosophy
            </p>
            <blockquote className="text-lg font-medium text-white leading-relaxed">
              &ldquo;The mockup isn&apos;t just a design file — it&apos;s a
              commitment to quality. If we can&apos;t make it look exceptional on
              day one, we haven&apos;t earned the right to build it on day
              ten.&rdquo;
            </blockquote>
            <div className="mt-5">
              <span
                className="text-base font-bold uppercase tracking-tight text-amber block"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Denzel O.
              </span>
              <span className="text-[10px] uppercase tracking-widest text-text-muted-dark font-medium">
                Founder
              </span>
            </div>
          </motion.div>
        </section>

        {/* ── CTA strip ── */}
        <section className="bg-charcoal py-24 px-8 md:px-14 lg:px-20 border-t border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-3">
                Ready to Start?
              </p>
              <h2
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Every engagement
                <br />
                begins with a{' '}
                <span className="text-amber">free mockup.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="/#contact"
                className="group flex items-center justify-between gap-8 bg-amber text-white
                           px-8 py-5 text-[11px] font-bold uppercase tracking-[0.15em]
                           transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                <span>Get Your Free Mockup</span>
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <button
                onClick={() => navigateTo('/how-it-works')}
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted-dark
                           hover:text-white transition-colors duration-150 text-center py-2"
              >
                See How It Works →
              </button>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

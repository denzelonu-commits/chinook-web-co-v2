'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { usePageTransition } from '@/components/PageTransitionProvider'

// ── Data ──────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    title: 'We Find You Online & Build a Free Demo',
    description:
      'We research your business, audit your current online presence, and build a fully custom homepage mockup — no templates, no deposit. You see the finished vision before a single line of production code is written.',
    output: 'High-fidelity interactive mockup',
    detail:
      'Our research process covers your competitors, your target search terms, and the design patterns that convert in your specific industry. The mockup is built in Figma or code — either way, it looks like the real thing.',
  },
  {
    number: '02',
    title: 'You Approve Every Pixel',
    description:
      'We review the design together. You request changes until everything is exactly right. This mockup becomes the immutable blueprint for the build — no surprises, no "close enough" styling.',
    output: 'Finalized design system & asset package',
    detail:
      'Unlimited revision rounds at this stage. We export a complete asset package: fonts, colors, spacing tokens, and imagery. The blueprint is locked before a single line of production code is written.',
  },
  {
    number: '03',
    title: 'We Build, Launch & Hand You the Keys',
    description:
      'Using the approved mockup as a pixel-perfect spec, we build your site with clean, performant code. Go live in 3–14 days. We handle hosting migration, analytics setup, and 30 days of priority support.',
    output: 'Live site + production documentation',
    detail:
      'Deployment on our edge infrastructure means your site is live globally within seconds of launch. We configure DNS, set up analytics, submit your sitemap to Google, and give you a full handoff call.',
  },
] as const

const TIMELINE = [
  {
    period: 'Day 1–2',
    title: 'Research & Mockup Build',
    description:
      'We audit your business, competitors, and current web presence. A fully custom design is built — typography, layout, copywriting direction — from scratch.',
  },
  {
    period: 'Day 3–5',
    title: 'Design Review & Revision',
    description:
      'You review the mockup and request changes. We iterate until every detail is locked. No build starts until you\'re fully satisfied.',
  },
  {
    period: 'Day 6–10',
    title: 'Development Sprint',
    description:
      'Clean, performant code against the approved spec. Lighthouse scores tested daily. SEO structure, schema markup, and Core Web Vitals optimized throughout.',
  },
  {
    period: 'Day 10–14',
    title: 'Testing, Launch & Handoff',
    description:
      'Cross-browser QA, mobile testing, DNS transfer, analytics setup, sitemap submission. We hand you full access to your site, hosting, and a 30-day support window.',
  },
] as const

const DELIVERABLES_LEFT = [
  'Custom homepage design',
  'Mobile-first responsive layout',
  'Lighthouse 95+ performance score',
  'Local SEO foundation baked in',
  'Hosting & SSL setup',
  'Custom domain configuration',
]

const DELIVERABLES_RIGHT = [
  '30-day priority support window',
  'Google Analytics integration',
  'Google Business Profile setup',
  'Schema markup & XML sitemap',
  'Professional copywriting guidance',
  'Full admin & CMS access',
]

const FAQS = [
  {
    q: 'Do I need to provide anything upfront?',
    a: 'Just 15 minutes of your time for a brief call to understand your business, service area, and goals. We handle the research, copywriting direction, and design from there — no content or assets required.',
  },
  {
    q: 'What if I don\'t like the initial design?',
    a: 'You have unlimited revision rounds at the mockup stage. We iterate until every pixel is exactly right. Nothing gets built until you\'ve given explicit sign-off on the final design.',
  },
  {
    q: 'How long does the full process take?',
    a: 'Typically 3–14 business days from first contact to live site, depending on revision cycles and your availability for feedback. Rush delivery (72 hours) is available at an additional fee.',
  },
  {
    q: 'What happens after launch?',
    a: 'You receive 30 days of free priority support. After that, our $149/mo hosting & maintenance plan keeps your site running at peak performance — updates, monitoring, and 1 hour of monthly support included.',
  },
]

// ── Components ────────────────────────────────────────────────────────────────

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[number]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="flex gap-8 lg:gap-16 relative"
    >
      {/* Step node + connector */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-12 h-12 rounded-full bg-amber text-white flex items-center justify-center
                     font-black text-lg z-10 shrink-0"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {step.number}
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: 'easeOut' }}
            className="w-px flex-1 min-h-[80px] mt-2"
            style={{
              background: 'linear-gradient(to bottom, #E07B2A 0%, transparent 100%)',
              transformOrigin: 'top',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-20">
        <h3
          className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {step.title}
        </h3>
        <p className="text-base leading-relaxed text-text-dark mb-4 max-w-lg">
          {step.description}
        </p>
        <p className="text-sm leading-relaxed text-text-muted-dark mb-6 max-w-lg">
          {step.detail}
        </p>
        <div className="inline-flex flex-col gap-1 p-4 border border-amber/20 bg-amber/5">
          <span className="text-[10px] uppercase tracking-widest font-bold text-amber">
            Output
          </span>
          <span className="text-sm text-text-dark">{step.output}</span>
        </div>
      </div>
    </motion.div>
  )
}

function TimelineEntry({
  entry,
  index,
}: {
  entry: (typeof TIMELINE)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative p-6 border border-white/[0.07] bg-charcoal/50 hover:border-amber/30 transition-colors duration-150"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-amber opacity-0 hover:opacity-100 transition-opacity duration-150" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-amber block mb-2">
        {entry.period}
      </span>
      <h4
        className="text-lg font-bold uppercase tracking-tight text-white mb-2"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {entry.title}
      </h4>
      <p className="text-sm leading-relaxed text-text-dark">{entry.description}</p>
    </motion.div>
  )
}

function FaqItem({ item, index }: { item: (typeof FAQS)[number]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="border-b border-white/[0.07]"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-base font-semibold text-white group-hover:text-amber transition-colors duration-150"
        >
          {item.q}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`shrink-0 text-text-muted-dark transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <p className="text-sm leading-relaxed text-text-dark pb-6 max-w-2xl">
          {item.a}
        </p>
      </motion.div>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
              02 / How It Works
            </p>
            <h1
              className="text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-white mb-8"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              A Blueprint for
              <br />
              <span className="text-text-muted-dark">Digital</span>{' '}
              <span className="text-amber">Excellence.</span>
            </h1>
            <p className="text-base leading-relaxed text-text-dark max-w-xl mb-10">
              We&apos;ve standardized the chaos of web development into a
              predictable, high-output process. No guesswork, no delays — just
              precision execution from first conversation to live site.
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
                onClick={() => navigateTo('/services')}
                className="inline-flex items-center gap-3 border border-white/20 text-text-dark
                           px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em]
                           transition-all duration-200 hover:border-amber hover:text-white"
              >
                View Services
              </button>
            </div>
          </motion.div>
        </section>

        {/* ── 3-Step Process ── */}
        <section className="bg-steel py-24 md:py-32 px-8 md:px-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-20"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
              The Process
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Three Steps.
              <br />
              Zero Surprises.
            </h2>
          </motion.div>

          <div className="max-w-3xl">
            {STEPS.map((step, i) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={i}
                isLast={i === STEPS.length - 1}
              />
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="bg-charcoal py-24 md:py-32 px-8 md:px-14 lg:px-20 border-t border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
              Typical Timeline
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              First Contact to Live Site
            </h2>
            <p className="text-sm text-text-muted-dark uppercase tracking-widest font-semibold">
              3–14 business days
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
            {TIMELINE.map((entry, i) => (
              <div key={entry.period} className="bg-charcoal">
                <TimelineEntry entry={entry} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="bg-steel py-24 md:py-32 px-8 md:px-14 lg:px-20 border-t border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
              Deliverables
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Everything Included.
            </h2>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3 max-w-2xl list-none"
          >
            {[...DELIVERABLES_LEFT, ...DELIVERABLES_RIGHT].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check size={13} strokeWidth={2.5} className="text-amber shrink-0" />
                <span className="text-sm text-text-dark">{item}</span>
              </li>
            ))}
          </motion.ul>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-charcoal py-24 md:py-32 px-8 md:px-14 lg:px-20 border-t border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
              FAQ
            </p>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Common Questions.
            </h2>
          </motion.div>

          <div className="max-w-2xl">
            {FAQS.map((item, i) => (
              <FaqItem key={item.q} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="bg-steel py-24 px-8 md:px-14 lg:px-20 border-t border-white/[0.06]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-3">
                Zero Risk
              </p>
              <h2
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.01em] text-white"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                No deposit.
                <br />
                No obligation.
                <br />
                <span className="text-amber">Just results.</span>
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
                onClick={() => navigateTo('/services')}
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted-dark
                           hover:text-white transition-colors duration-150 text-center py-2"
              >
                View Our Services →
              </button>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

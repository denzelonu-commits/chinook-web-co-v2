'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

// ── FAQ accordion ────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'Do I own the site after it\'s built?',
    a: 'Yes — 100%. Once the build fee is paid, you own every line of code, every asset, and your domain. We don\'t hold your business hostage with subscription-based "rental" models.',
  },
  {
    q: 'What\'s included in the monthly hosting fee?',
    a: 'Premium managed hosting, SSL certificate, CDN for fast load times, 24/7 uptime monitoring, core software updates, and 1 hour of monthly support for text and photo changes. We handle everything so you can focus on your business.',
  },
  {
    q: 'Can I cancel the hosting plan?',
    a: 'Yes, anytime. Since you own the code, you can take it to any hosting provider you choose. We\'ll even help with the migration — no hard feelings.',
  },
  {
    q: 'What if I want changes after launch?',
    a: 'Minor updates (text, photos, hours) are included in your monthly plan. Larger additions like new service pages or feature builds are quoted separately with priority scheduling for active clients.',
  },
  {
    q: 'How long does a build actually take?',
    a: 'Foundation sites go live in 3–5 days from mockup approval. Growth Engine builds typically take 7–10 days depending on content scope. We move fast because the mockup-first approach eliminates all the back-and-forth.',
  },
  {
    q: 'What if I don\'t like the mockup?',
    a: 'Then you walk away and owe us nothing — no invoice, no awkward conversation. We\'ve never had this happen, but the guarantee is real. Our confidence is built into the offer.',
  },
] as const

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-black/[0.08] last:border-none">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-5 text-left gap-4
                   hover:text-charcoal transition-colors duration-150"
      >
        <span className="text-[15px] font-semibold text-[#2A2520] leading-snug">{q}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={cn(
            'shrink-0 text-[#6B6058] transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[#6B6058]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Pricing tiers ─────────────────────────────────────────────────────────────

const TIERS = [
  {
    name: 'The Foundation',
    badge: 'Essential',
    price: '$2,500',
    monthly: '$149/mo',
    subtitle: 'Best for trades and service businesses getting started.',
    featured: false,
    features: [
      '5-page custom performance build',
      'SEO keyword foundation',
      'Google Business integration',
      'Mobile-responsive, fast-loading',
      'Contact form + call-to-action',
      'Live in approximately 3–5 days',
    ],
  },
  {
    name: 'The Growth Engine',
    badge: 'Most Requested',
    price: '$4,800',
    monthly: '$299/mo',
    subtitle: 'For businesses serious about dominating local search.',
    featured: true,
    features: [
      'Everything in The Foundation',
      'Advanced local SEO — 10 pages',
      'Custom content strategy',
      'Conversion rate optimization',
      'Analytics & tracking setup',
      'Live in approximately 7–10 days',
    ],
  },
] as const

function PricingCard({
  tier,
  index,
}: {
  tier: (typeof TIERS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className={cn(
        'relative flex flex-col p-8 h-full',
        tier.featured
          ? 'bg-white border-[1.5px] border-amber shadow-[0_20px_50px_rgba(224,123,42,0.12)]'
          : 'bg-white border border-[#E0D8D0]'
      )}
    >
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber text-white
                        px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em]"
             style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          {tier.badge}
        </div>
      )}

      {!tier.featured && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B6058]
                         bg-[#F0EBE4] px-3 py-1 self-start mb-4">
          {tier.badge}
        </span>
      )}

      <div className={tier.featured ? 'mt-4' : ''}>
        <h3
          className="text-3xl font-bold uppercase tracking-tight text-charcoal mb-1"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {tier.name}
        </h3>
        <p className="text-sm text-[#6B6058] mb-6">{tier.subtitle}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span
            className={cn(
              'font-black tracking-tight leading-none',
              tier.featured ? 'text-amber text-6xl' : 'text-charcoal text-5xl'
            )}
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {tier.price}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B6058]">
            build fee
          </span>
        </div>
        <p className="text-[11px] text-[#6B6058] mt-1.5">
          50% deposit to start · 50% on launch
        </p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check
              size={15}
              strokeWidth={2.5}
              className={tier.featured ? 'text-amber mt-0.5 shrink-0' : 'text-sky mt-0.5 shrink-0'}
            />
            <span className="text-sm text-[#2A2520] leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      {/* Monthly footer */}
      <div className={cn(
        'pt-5 border-t',
        tier.featured ? 'border-amber/20' : 'border-[#E0D8D0]'
      )}>
        <div className="flex items-center justify-between">
          <span
            className={cn(
              'text-sm font-bold uppercase tracking-wider',
              tier.featured ? 'text-amber' : 'text-[#6B6058]'
            )}
          >
            Hosting & Maintenance
          </span>
          <span
            className={cn(
              'font-black text-xl tracking-tight',
              tier.featured ? 'text-amber' : 'text-charcoal'
            )}
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {tier.monthly}
          </span>
        </div>
        <p className="text-[11px] text-[#6B6058] mt-1">
          Hosting, SSL, updates & 1 hr/mo support included
        </p>
      </div>

      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={cn(
          'mt-6 w-full py-4 text-[13px] font-bold uppercase tracking-[0.12em]',
          'transition-all duration-200 active:scale-[0.98]',
          tier.featured
            ? 'bg-amber text-white hover:brightness-110'
            : 'bg-charcoal text-white hover:bg-steel'
        )}
      >
        {tier.featured ? 'Get Started — Growth Engine' : 'Get Started — Foundation'}
      </button>
    </motion.div>
  )
}

export function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section
      id="pricing"
      className="bg-offwhite py-24 md:py-32 px-8 md:px-14 lg:px-20"
    >
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6040] mb-4">
          06 / Investment
        </p>
        <h2
          className="text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.01em] text-charcoal"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Transparent
          <br />
          Investment
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted-light">
          Two tiers, fixed prices, no hidden fees. You own the code outright. The monthly fee covers hosting, security, and updates — not a license to use your own site.
        </p>
      </motion.div>

      {/* Two-column: tiers + FAQ */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {TIERS.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <h3
            className="text-3xl font-bold uppercase tracking-tight text-charcoal mb-8"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Investment FAQ
          </h3>
          <div>
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} {...item} />
            ))}
          </div>

          {/* Custom project callout */}
          <div className="mt-10 p-6 border border-amber/30 bg-amber/5">
            <h4
              className="text-xl font-bold uppercase tracking-tight text-charcoal mb-2"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Custom Project?
            </h4>
            <p className="text-sm text-text-muted-light leading-relaxed mb-4">
              E-commerce stores, booking systems, or complex web applications fall outside these tiers. We do those too — let&apos;s talk.
            </p>
            <a
              href="mailto:hello@chinookwebco.com"
              className="text-[12px] font-bold uppercase tracking-[0.12em] text-amber
                         border-b border-amber/40 pb-px hover:border-amber transition-colors duration-150"
            >
              Inquire directly →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

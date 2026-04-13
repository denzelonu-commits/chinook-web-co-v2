'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const BUSINESS_TYPES = [
  'Plumbing / HVAC',
  'Electrical',
  'Landscaping / Snow Removal',
  'Roofing / Contracting',
  'Auto Services',
  'Dental / Medical',
  'Restaurant / Food Service',
  'Real Estate',
  'Fitness / Wellness',
  'Financial Services',
  'Retail / E-commerce',
  'Other',
]

interface FormData {
  businessName: string
  name: string
  email: string
  phone: string
  businessType: string
  message: string
}

const initialForm: FormData = {
  businessName: '',
  name: '',
  email: '',
  phone: '',
  businessType: '',
  message: '',
}

// Shared input class
const inputClass =
  'w-full bg-transparent border-0 border-b border-white/20 py-4 text-xl font-light text-white ' +
  'placeholder:text-white/20 focus:outline-none focus:border-amber transition-colors duration-200'

const labelClass =
  'block text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted-dark mb-2'

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xnjoleaz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          businessName: form.businessName,
          contactName: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          businessType: form.businessType,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="bg-charcoal py-24 md:py-32 px-8 md:px-14 lg:px-20"
    >
      <div className="max-w-5xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-4">
            07 / Get started
          </p>
          <h2
            className="text-[clamp(2.8rem,7vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Get a free
            <br />
            website preview —
            <br />
            <span className="text-text-muted-dark">no commitment.</span>
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-text-dark">
            Tell us about your business and we&apos;ll build a full homepage mockup — free, no strings attached. If you love it, we build the real thing. If not, you walk away.
          </p>
        </motion.div>

        {/* Success state */}
        {status === 'sent' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-5 p-10 border border-amber/30 bg-amber/5 max-w-xl"
          >
            <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center">
              <Check size={22} strokeWidth={2.5} className="text-white" />
            </div>
            <div>
              <h3
                className="text-3xl font-bold uppercase text-white mb-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Request received!
              </h3>
              <p className="text-base text-text-dark leading-relaxed">
                We&apos;ll review your info and get back to you within 4 business hours. Check your inbox — your free mockup is on the way.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="space-y-10 max-w-2xl"
          >
            {/* Row 1: Business Name + Your Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <label htmlFor="businessName" className={labelClass}>
                  Business Name <span className="text-amber">*</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  placeholder="Sullivan Plumbing Ltd."
                  value={form.businessName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your Name <span className="text-amber">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Mike Sullivan"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-amber">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="mike@sullivan-plumbing.ca"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="text-text-muted-dark">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (403) 555-0182"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Business type */}
            <div>
              <label htmlFor="businessType" className={labelClass}>
                Business Type <span className="text-amber">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={form.businessType}
                onChange={handleChange}
                className={cn(
                  inputClass,
                  'appearance-none cursor-pointer',
                  !form.businessType && 'text-white/20'
                )}
              >
                <option value="" disabled>Select your industry...</option>
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-charcoal text-white">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Biggest Business Goal <span className="text-amber">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Double our organic lead volume over the next 6 months..."
                value={form.message}
                onChange={handleChange}
                className={cn(inputClass, 'resize-none')}
              />
            </div>

            {/* Error state */}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email us directly at{' '}
                <a href="mailto:hello@chinookwebco.com" className="underline">
                  hello@chinookwebco.com
                </a>
              </p>
            )}

            {/* Submit */}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={cn(
                  'group inline-flex items-center gap-4 bg-amber text-white',
                  'px-10 py-5 text-base font-bold uppercase tracking-[0.12em]',
                  'transition-all duration-200 hover:brightness-110 active:scale-[0.98]',
                  status === 'sending' && 'opacity-70 cursor-not-allowed'
                )}
              >
                <span
                  className="font-black text-xl uppercase"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Request'}
                </span>
                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
              <p className="text-[11px] text-text-muted-dark leading-relaxed max-w-sm">
                By requesting a demo, you agree to our{' '}
                <a href="/terms" className="underline underline-offset-2 hover:text-white transition-colors duration-150">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="underline underline-offset-2 hover:text-white transition-colors duration-150">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </motion.form>
        )}

        {/* Below-form contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row gap-8"
        >
          <a
            href="mailto:hello@chinookwebco.com"
            className="group flex items-center gap-3 text-text-dark hover:text-white transition-colors duration-150"
          >
            <Mail size={16} strokeWidth={1.5} className="text-amber shrink-0" />
            <div>
              <p className="text-[11px] uppercase tracking-widest font-semibold text-text-muted-dark mb-0.5">
                Email
              </p>
              <span className="text-sm border-b border-white/20 group-hover:border-white pb-px transition-colors duration-150">
                hello@chinookwebco.com
              </span>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <Phone size={16} strokeWidth={1.5} className="text-amber shrink-0" />
            <div>
              <p className="text-[11px] uppercase tracking-widest font-semibold text-text-muted-dark mb-0.5">
                Response time
              </p>
              <span className="text-sm text-text-dark">
                Usually within 4 business hours
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

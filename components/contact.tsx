'use client'

import { useState } from 'react'
import ScrollReveal from './ui/ScrollReveal'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_URL = 'https://formspree.io/f/xnjoleaz'

const businessTypes = [
  'Plumbing',
  'Electrical',
  'HVAC / Heating & Cooling',
  'Roofing',
  'General Contractor',
  'Landscaping / Lawn Care',
  'Cleaning Services',
  'Auto / Mechanic',
  'Retail / Food & Beverage',
  'Other',
]

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Basic client-side validation
    const newErrors: Record<string, string> = {}
    if (!data.get('businessName')) newErrors.businessName = 'Required'
    if (!data.get('yourName')) newErrors.yourName = 'Required'
    if (!data.get('email')) newErrors.email = 'Required'
    if (!data.get('businessType')) newErrors.businessType = 'Please select a type'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Focus first invalid field
      const firstKey = Object.keys(newErrors)[0]
      const el = form.elements.namedItem(firstKey) as HTMLElement | null
      el?.focus()
      return
    }

    setErrors({})
    setFormState('submitting')

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setFormState('success')
        form.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="bg-[#F5F1EC] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT — intro copy */}
          <div className="flex flex-col justify-start lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal>
              <p className="eyebrow mb-4">Free Preview</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A1F2E] leading-[1.0] mb-6"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
              >
                Get a free website preview —{' '}
                <span className="text-[#E07B2A]">no commitment.</span>
              </h2>
              <p className="text-[#6B7A8D] text-sm leading-relaxed mb-8 max-w-sm">
                Before you spend a dollar, I'll build you a working hero section — the first
                thing visitors see when they land on your site. You'll see exactly what a
                Chinook Web Co. build looks and feels like, for free.
              </p>

              <div className="flex flex-col gap-4">
                {/* Trust signals */}
                {[
                  'Free preview — designed for your business',
                  'No credit card, no contracts',
                  'Usually responds within 24 hours',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-[#1A1F2E]">
                    <span className="w-4 h-4 rounded-full bg-[#E07B2A]/15 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#E07B2A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Email contact */}
              <div className="mt-8 pt-8 border-t border-[#D8E0E8]">
                <p className="text-xs text-[#6B7A8D] uppercase tracking-wider mb-1">Email us directly</p>
                <a
                  href="mailto:hello@chinookwebco.com"
                  className="text-sm font-medium text-[#1C3A5E] hover:text-[#E07B2A] transition-colors duration-150"
                >
                  hello@chinookwebco.com
                </a>
                <p className="mt-1 text-xs text-[#6B7A8D]">Usually responds within 24 hours.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — Formspree form */}
          <ScrollReveal delay={0.1}>
            {formState === 'success' ? (
              <div className="bg-white rounded-[10px] border border-[#D8E0E8] p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E07B2A]/10 flex items-center justify-center mx-auto mb-5">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M4 11L9 16L18 6" stroke="#E07B2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-[#1A1F2E] mb-2"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                >
                  Got it — thanks!
                </h3>
                <p className="text-sm text-[#6B7A8D] max-w-xs mx-auto">
                  I'll review your details and have your free preview ready within 1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-[10px] border border-[#D8E0E8] p-7 md:p-9"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Business Name */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="businessName" className="text-xs font-semibold text-[#1A1F2E]">
                      Business Name <span aria-hidden="true" className="text-[#E07B2A]">*</span>
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Kowalski Plumbing"
                      className={`rounded-[6px] border px-4 py-3 text-sm text-[#1A1F2E] bg-[#F5F1EC] placeholder-[#6B7A8D]/60 focus:outline-none focus:ring-2 focus:ring-[#E07B2A]/40 focus:border-[#E07B2A] transition-colors ${errors.businessName ? 'border-red-400' : 'border-[#D8E0E8]'}`}
                    />
                    {errors.businessName && (
                      <p className="text-xs text-red-500" role="alert">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Your Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="yourName" className="text-xs font-semibold text-[#1A1F2E]">
                      Your Name <span aria-hidden="true" className="text-[#E07B2A]">*</span>
                    </label>
                    <input
                      id="yourName"
                      name="yourName"
                      type="text"
                      autoComplete="name"
                      placeholder="First & last"
                      className={`rounded-[6px] border px-4 py-3 text-sm text-[#1A1F2E] bg-[#F5F1EC] placeholder-[#6B7A8D]/60 focus:outline-none focus:ring-2 focus:ring-[#E07B2A]/40 focus:border-[#E07B2A] transition-colors ${errors.yourName ? 'border-red-400' : 'border-[#D8E0E8]'}`}
                    />
                    {errors.yourName && (
                      <p className="text-xs text-red-500" role="alert">{errors.yourName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-[#1A1F2E]">
                      Email <span aria-hidden="true" className="text-[#E07B2A]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@yourcompany.com"
                      className={`rounded-[6px] border px-4 py-3 text-sm text-[#1A1F2E] bg-[#F5F1EC] placeholder-[#6B7A8D]/60 focus:outline-none focus:ring-2 focus:ring-[#E07B2A]/40 focus:border-[#E07B2A] transition-colors ${errors.email ? 'border-red-400' : 'border-[#D8E0E8]'}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500" role="alert">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone — optional */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-[#1A1F2E]">
                      Phone{' '}
                      <span className="font-normal text-[#6B7A8D]">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+1 (403) 555-1234"
                      className="rounded-[6px] border border-[#D8E0E8] px-4 py-3 text-sm text-[#1A1F2E] bg-[#F5F1EC] placeholder-[#6B7A8D]/60 focus:outline-none focus:ring-2 focus:ring-[#E07B2A]/40 focus:border-[#E07B2A] transition-colors"
                    />
                  </div>

                  {/* Business Type */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="businessType" className="text-xs font-semibold text-[#1A1F2E]">
                      Business Type / Niche <span aria-hidden="true" className="text-[#E07B2A]">*</span>
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      className={`rounded-[6px] border px-4 py-3 text-sm text-[#1A1F2E] bg-[#F5F1EC] focus:outline-none focus:ring-2 focus:ring-[#E07B2A]/40 focus:border-[#E07B2A] transition-colors cursor-pointer ${errors.businessType ? 'border-red-400' : 'border-[#D8E0E8]'}`}
                    >
                      <option value="">Select your industry...</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.businessType && (
                      <p className="text-xs text-red-500" role="alert">{errors.businessType}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="message" className="text-xs font-semibold text-[#1A1F2E]">
                      Anything else we should know{' '}
                      <span className="font-normal text-[#6B7A8D]">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="What's your biggest challenge with getting customers online?"
                      className="rounded-[6px] border border-[#D8E0E8] px-4 py-3 text-sm text-[#1A1F2E] bg-[#F5F1EC] placeholder-[#6B7A8D]/60 focus:outline-none focus:ring-2 focus:ring-[#E07B2A]/40 focus:border-[#E07B2A] transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-[#1C3A5E] text-[#F5F1EC] font-semibold text-sm py-3.5 rounded-[6px] hover:bg-[#162f50] active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request My Free Preview
                        <span className="w-5 h-5 rounded-full bg-[#E07B2A] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path d="M2 8L8 2M8 2H4M8 2V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </>
                    )}
                  </button>

                  {formState === 'error' && (
                    <p className="mt-3 text-xs text-red-500 text-center" role="alert">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <p className="mt-3 text-center text-[10px] text-[#6B7A8D]">
                    No spam. No obligation. Usually responds within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

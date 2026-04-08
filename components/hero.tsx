'use client'

import { motion, Variants } from 'framer-motion'

/** Word-by-word headline reveal */
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const subVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.65, duration: 0.55, ease: 'easeOut' },
  },
}

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.5, ease: 'easeOut' },
  },
}

const rightColVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.7, ease: 'easeOut' },
  },
}

/** Split the headline into word tokens so we can animate each */
const headline1 = ['Calgary', 'websites']
const headline2 = ['that', 'win', 'jobs.']

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] bg-[#F5F1EC] flex items-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 md:py-28 lg:py-0 lg:min-h-[100dvh] lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">

          {/* LEFT COLUMN — all text content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.p
              className="eyebrow mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.4, ease: 'easeOut' }}
            >
              Calgary Web Design
            </motion.p>

            {/* Headline — word by word reveal */}
            <h1
              className="headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-5 leading-[1.0]"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              {/* Line 1 */}
              <span className="block">
                {headline1.map((word, i) => (
                  <motion.span
                    key={word + i}
                    className="inline-block mr-[0.22em] text-[#1A1F2E]"
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              {/* Line 2 — "that win" in dark, "jobs." in amber */}
              <span className="block">
                {headline2.map((word, i) => (
                  <motion.span
                    key={word + i}
                    className={`inline-block mr-[0.22em] ${
                      word === 'jobs.' ? 'text-[#E07B2A]' : 'text-[#1A1F2E]'
                    }`}
                    custom={headline1.length + i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-base sm:text-lg text-[#6B7A8D] max-w-md leading-relaxed mb-10"
              variants={subVariants}
              initial="hidden"
              animate="visible"
            >
              81% of shoppers research a business online before they buy.
              If you're not showing up, you're handing jobs to someone else.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1C3A5E] text-[#F5F1EC] font-semibold text-sm px-6 py-3.5 rounded-[6px] hover:bg-[#162f50] active:scale-[0.97] transition-all duration-150 cursor-pointer"
              >
                Get a Free Preview
                <span className="w-5 h-5 rounded-full bg-[#E07B2A] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 8L8 2M8 2H4M8 2V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>

              {/* Ghost CTA */}
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-[#1A1F2E] font-semibold text-sm px-6 py-3.5 rounded-[6px] border border-[#D8E0E8] hover:border-[#1A1F2E] hover:bg-[#1A1F2E] hover:text-[#F5F1EC] active:scale-[0.97] transition-all duration-200 cursor-pointer"
              >
                See Our Work
              </a>
            </motion.div>

            {/* Social proof micro-line */}
            <motion.p
              className="mt-8 text-xs text-[#6B7A8D] flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <span className="flex -space-x-1">
                {/* Minimal avatar dots to suggest past clients */}
                {['#2E6EA6', '#E07B2A', '#1C3A5E'].map((c) => (
                  <span
                    key={c}
                    className="w-5 h-5 rounded-full border-2 border-[#F5F1EC]"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </span>
              Calgary-based · Free preview before you spend a dollar
            </motion.p>
          </div>

          {/* RIGHT COLUMN — browser mockup visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={rightColVariants}
            initial="hidden"
            animate="visible"
          >
            <BrowserMockup />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/** A browser-chrome mockup showing a sample trades website */
function BrowserMockup() {
  return (
    /* Outer shell — floating card */
    <div className="relative w-full max-w-lg">
      {/* Ambient shadow */}
      <div className="absolute -inset-4 bg-[#E07B2A]/8 rounded-2xl blur-2xl" aria-hidden="true" />

      {/* Browser frame */}
      <div
        className="relative rounded-[10px] overflow-hidden border border-[#D8E0E8] shadow-[0_24px_64px_-12px_rgba(26,31,46,0.15)]"
        style={{ background: '#fff' }}
      >
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#F0EDE8] border-b border-[#D8E0E8]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <div className="flex-1 mx-4 bg-white rounded-full px-3 py-1 text-[10px] text-[#6B7A8D] font-mono border border-[#D8E0E8] flex items-center gap-1">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M5 1a4 4 0 100 8A4 4 0 005 1z" stroke="#6B7A8D" strokeWidth="1.2"/>
              <path d="M1 5h8M5 1c-1 2-1 6 0 8M5 1c1 2 1 6 0 8" stroke="#6B7A8D" strokeWidth="1.2"/>
            </svg>
            calvaryplumbing.ca
          </div>
        </div>

        {/* Simulated site content */}
        <div className="bg-[#1C3A5E]">
          {/* Site nav bar */}
          <div className="flex items-center justify-between px-5 py-3">
            <div className="w-20 h-3 bg-white/90 rounded-full" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-1.5 bg-white/40 rounded-full" />
              <div className="w-8 h-1.5 bg-white/40 rounded-full" />
              <div className="w-8 h-1.5 bg-white/40 rounded-full" />
              <div className="w-16 h-5 bg-[#E07B2A] rounded-[3px]" />
            </div>
          </div>

          {/* Hero area */}
          <div className="px-5 pt-8 pb-10">
            <div className="w-20 h-1.5 bg-[#E07B2A]/70 rounded-full mb-3" />
            <div className="w-48 h-6 bg-white/90 rounded-md mb-2" />
            <div className="w-36 h-6 bg-white/70 rounded-md mb-5" />
            <div className="w-56 h-2 bg-white/30 rounded-full mb-1.5" />
            <div className="w-44 h-2 bg-white/30 rounded-full mb-6" />
            <div className="flex gap-2">
              <div className="w-24 h-7 bg-[#E07B2A] rounded-[4px]" />
              <div className="w-24 h-7 border border-white/40 rounded-[4px]" />
            </div>
          </div>
        </div>

        {/* Services strip */}
        <div className="bg-[#F5F1EC] px-5 py-5">
          <div className="w-24 h-2 bg-[#D8E0E8] rounded-full mb-4" />
          <div className="grid grid-cols-3 gap-3">
            {['Drain Cleaning', 'Water Heaters', 'Emergency'].map((s) => (
              <div key={s} className="bg-white rounded-[6px] p-3 border border-[#D8E0E8]">
                <div className="w-5 h-5 rounded bg-[#E07B2A]/20 mb-2" />
                <div className="w-full h-1.5 bg-[#D8E0E8] rounded-full mb-1" />
                <div className="w-3/4 h-1.5 bg-[#D8E0E8] rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Review bar */}
        <div className="bg-white border-t border-[#D8E0E8] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#E07B2A" aria-hidden="true">
                <path d="M5 1l1.12 2.26L9 3.63l-2 1.95.47 2.76L5 7.13 2.53 8.34 3 5.58 1 3.63l2.88-.37L5 1z"/>
              </svg>
            ))}
            <span className="text-[9px] text-[#6B7A8D] ml-1">4.9 · 47 Google reviews</span>
          </div>
          <div className="w-16 h-5 bg-[#1C3A5E] rounded-[3px]" />
        </div>
      </div>

      {/* Floating badge — "Tier 3 Premium" */}
      <div className="absolute -bottom-3 -right-4 bg-[#1A1F2E] text-[#F5F1EC] text-[10px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E07B2A] animate-pulse" />
        Tier 3 Premium build
      </div>
    </div>
  )
}

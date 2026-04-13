'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, Variants } from 'framer-motion'
import { Home, Layers, Workflow, Tag, Mail, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageTransition } from '@/components/PageTransitionProvider'

const NAV_LINKS = [
  { label: 'Home',         href: '#hero',          icon: Home,     isPage: false },
  { label: 'Services',     href: '/services',       icon: Layers,   isPage: true  },
  { label: 'How It Works', href: '/how-it-works',   icon: Workflow, isPage: true  },
  { label: 'Pricing',      href: '#pricing',        icon: Tag,      isPage: false },
  { label: 'Contact',      href: '#contact',        icon: Mail,     isPage: false },
] as const

// Sections that exist on the homepage for IntersectionObserver
const HOME_SECTION_IDS = ['hero', 'services', 'how-it-works', 'pricing', 'contact']

const panelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { navigateTo } = usePageTransition()
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'

  // IntersectionObserver — only meaningful on the homepage
  useEffect(() => {
    if (!isHomePage) return
    const observers: IntersectionObserver[] = []

    HOME_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isHomePage])

  const handleNavClick = (href: string, isPage: boolean) => {
    setMobileMenuOpen(false)

    if (isPage) {
      navigateTo(href)
      return
    }

    // Anchor link
    if (isHomePage) {
      const el = document.getElementById(href.slice(1))
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // From subpages: navigate to homepage with transition
      navigateTo('/')
    }
  }

  const getIsActive = (href: string, isPage: boolean) => {
    if (isPage) return pathname === href
    if (isHomePage) return activeSection === href.slice(1)
    return false
  }

  return (
    <>
      {/* ══════════════════════════════════════
          DESKTOP: Fixed left panel
          ══════════════════════════════════════ */}
      <motion.aside
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex fixed left-0 top-0 z-40 w-[340px] lg:w-[380px] h-screen flex-col justify-between
                   bg-charcoal border-r border-white/[0.07] px-10 py-12 overflow-hidden"
      >
        {/* Subtle ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, #E07B2A22 0%, transparent 70%)',
          }}
        />

        {/* ── Logo ── */}
        <div className="relative z-10">
          <button
            onClick={() => handleNavClick('#hero', false)}
            className="flex flex-col mb-14 text-left"
          >
            <span
              className="text-3xl font-black tracking-[-0.02em] text-white uppercase leading-none"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              CHINOOK
            </span>
            <span className="text-[10px] tracking-[0.35em] text-text-muted-dark uppercase font-semibold mt-0.5">
              WEB CO.
            </span>
          </button>

          {/* ── Nav links ── */}
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href, icon: Icon, isPage }) => {
              const isActive = getIsActive(href, isPage)
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href, isPage)}
                  className={cn(
                    'flex items-center gap-3.5 px-3 py-2.5 rounded-sm text-left',
                    'transition-colors duration-150 group',
                    isActive
                      ? 'text-white'
                      : 'text-text-muted-dark hover:text-white'
                  )}
                >
                  <span
                    className={cn(
                      'absolute left-0 h-5 w-0.5 rounded-r-full bg-amber transition-opacity duration-150',
                      isActive ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{ position: 'relative' }}
                  />
                  <Icon
                    size={15}
                    strokeWidth={1.5}
                    className={cn(isActive ? 'text-amber' : 'text-inherit')}
                  />
                  <span
                    className={cn(
                      'text-[11px] font-semibold uppercase tracking-[0.18em]',
                      isActive && 'border-b border-amber/60 pb-px'
                    )}
                  >
                    {label}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* ── Bottom CTA block ── */}
        <div className="relative z-10 space-y-4">
          <p className="text-[11px] leading-relaxed text-text-muted-dark uppercase tracking-wide font-medium">
            Independent digital engineering studio
            <br />
            based in Calgary, AB.
          </p>

          <a
            href="mailto:hello@chinookwebco.com"
            className="flex items-center gap-2.5 text-text-dark hover:text-white transition-colors duration-150 group w-fit"
          >
            <Mail size={14} strokeWidth={1.5} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] border-b border-white/20 group-hover:border-white/60 pb-px transition-colors duration-150">
              hello@chinookwebco.com
            </span>
          </a>

          <button
            onClick={() => handleNavClick('#contact', false)}
            className="group flex items-center justify-between w-full bg-amber text-white
                       px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em]
                       transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            <span>Get a Free Preview</span>
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </motion.aside>

      {/* ══════════════════════════════════════
          MOBILE: Sticky top bar
          ══════════════════════════════════════ */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                         px-5 h-14 bg-charcoal/90 backdrop-blur-md border-b border-white/[0.07]">
        <button
          onClick={() => handleNavClick('#hero', false)}
          className="flex flex-col leading-none"
        >
          <span
            className="text-xl font-black tracking-tight text-white uppercase"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            CHINOOK
          </span>
          <span className="text-[8px] tracking-[0.35em] text-text-muted-dark uppercase font-semibold">
            WEB CO.
          </span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact', false)}
            className="bg-amber text-white text-[10px] font-bold uppercase tracking-[0.12em] px-4 py-2"
          >
            Free Preview
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 relative"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'block h-px w-5 bg-white transition-all duration-200 origin-center',
                mobileMenuOpen && 'rotate-45 translate-y-[6px]'
              )}
            />
            <span
              className={cn(
                'block h-px w-5 bg-white transition-all duration-200',
                mobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block h-px w-5 bg-white transition-all duration-200 origin-center',
                mobileMenuOpen && '-rotate-45 -translate-y-[6px]'
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <motion.div
        initial={false}
        animate={
          mobileMenuOpen
            ? { opacity: 1, pointerEvents: 'auto' as const }
            : { opacity: 0, pointerEvents: 'none' as const }
        }
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="md:hidden fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl flex flex-col justify-center px-8 pt-14"
      >
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map(({ label, href, icon: Icon, isPage }, i) => (
            <motion.button
              key={href}
              initial={{ opacity: 0, y: 16 }}
              animate={
                mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
              }
              transition={{
                duration: 0.25,
                delay: mobileMenuOpen ? i * 0.06 : 0,
                ease: 'easeOut',
              }}
              onClick={() => handleNavClick(href, isPage)}
              className="flex items-center gap-4 py-4 border-b border-white/[0.06] text-left"
            >
              <Icon size={16} strokeWidth={1.5} className="text-amber" />
              <span
                className="text-2xl font-bold uppercase tracking-tight text-white"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {label}
              </span>
            </motion.button>
          ))}
        </nav>

        <div className="mt-10">
          <button
            onClick={() => handleNavClick('#contact', false)}
            className="w-full bg-amber text-white py-4 text-sm font-bold uppercase tracking-[0.15em]"
          >
            Get a Free Preview
          </button>
        </div>
      </motion.div>
    </>
  )
}

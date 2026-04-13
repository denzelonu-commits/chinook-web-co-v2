import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services',     href: '/services',    isPage: true  },
  { label: 'How It Works', href: '/how-it-works', isPage: true  },
  { label: 'Pricing',      href: '#pricing',      isPage: false },
  { label: 'Contact',      href: '#contact',      isPage: false },
] as const

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/[0.07] py-16 px-8 md:px-14 lg:px-20 overflow-hidden relative">

      {/* Ghost wordmark */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 select-none pointer-events-none"
      >
        <span
          className="text-[clamp(5rem,15vw,12rem)] font-black uppercase text-white leading-none opacity-[0.03] tracking-tight"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          CHINOOK
        </span>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <div>
            <span
              className="text-4xl font-black tracking-[-0.02em] text-white uppercase leading-none block"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              CHINOOK
            </span>
            <span className="text-[10px] tracking-[0.4em] text-text-muted-dark uppercase font-semibold">
              WEB CO.
            </span>
          </div>
          <p className="text-[13px] leading-relaxed text-text-dark max-w-[220px]">
            Calgary websites that get customers through the door.
          </p>
          <div className="flex items-center gap-2 text-text-muted-dark">
            <MapPin size={13} strokeWidth={1.5} className="shrink-0 text-amber" />
            <span className="text-[12px] uppercase tracking-widest font-medium">
              Calgary, Alberta
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-text-muted-dark mb-5">
            Navigate
          </p>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href, isPage }) =>
              isPage ? (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] text-text-dark hover:text-white transition-colors duration-150 w-fit"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={href}
                  href={href}
                  className="text-[13px] text-text-dark hover:text-white transition-colors duration-150 w-fit"
                >
                  {label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-text-muted-dark mb-5">
            Get in Touch
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@chinookwebco.com"
              className="group flex items-center gap-2.5 text-text-dark hover:text-amber transition-colors duration-150 w-fit"
            >
              <Mail size={14} strokeWidth={1.5} className="shrink-0" />
              <span className="text-[13px] border-b border-white/10 group-hover:border-amber pb-px transition-colors duration-150">
                hello@chinookwebco.com
              </span>
            </a>
            <p className="text-[12px] text-text-muted-dark">
              Usually responds within 4 business hours
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amber text-white
                         px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em]
                         transition-all duration-200 hover:brightness-110 w-fit mt-2"
            >
              Get a Free Preview
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-[11px] text-text-muted-dark uppercase tracking-[0.15em] font-medium">
          © {new Date().getFullYear()} Chinook Web Co. Built in Calgary, AB.
        </p>
        <div className="flex gap-6">
          <a
            href="/privacy"
            className="text-[11px] text-text-muted-dark hover:text-white transition-colors duration-150 uppercase tracking-widest font-medium"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-[11px] text-text-muted-dark hover:text-white transition-colors duration-150 uppercase tracking-widest font-medium"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why a Website', href: '#why-website' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

/** Staggered reveal for mobile menu links */
const menuLinkVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.07,
      duration: 0.45,
      ease: 'easeOut',
    },
  }),
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F1EC]/90 backdrop-blur-md shadow-sm border-b border-[#D8E0E8]/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0" aria-label="Chinook Web Co. home">
            <Image
              src="/wordmark.svg"
              alt="Chinook Web Co."
              width={180}
              height={44}
              priority
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6B7A8D] hover:text-[#1A1F2E] transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1C3A5E] text-[#F5F1EC] text-sm font-semibold px-5 py-2.5 rounded-[6px] hover:bg-[#162f50] active:scale-[0.97] transition-all duration-150 cursor-pointer"
            >
              Get a Free Preview
              {/* Trailing icon pill */}
              <span className="w-5 h-5 rounded-full bg-[#E07B2A] flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H4M8 2V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#1A1F2E] origin-center transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#1A1F2E] transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#1A1F2E] origin-center transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-30 bg-[#F5F1EC]/97 backdrop-blur-xl flex flex-col pt-20 px-8 pb-12"
          >
            <nav className="flex flex-col gap-2 mt-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  custom={i}
                  variants={menuLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-3xl font-barlow font-bold text-[#1A1F2E] py-3 border-b border-[#D8E0E8] cursor-pointer"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <motion.div
              custom={navLinks.length}
              variants={menuLinkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-10"
            >
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 bg-[#1C3A5E] text-[#F5F1EC] text-base font-semibold px-6 py-3.5 rounded-[6px] w-full justify-center cursor-pointer"
              >
                Get a Free Preview
                <span className="w-5 h-5 rounded-full bg-[#E07B2A] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 8L8 2M8 2H4M8 2V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </motion.div>

            <motion.p
              custom={navLinks.length + 1}
              variants={menuLinkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-auto text-sm text-[#6B7A8D]"
            >
              hello@chinookwebco.com · Calgary, Alberta
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

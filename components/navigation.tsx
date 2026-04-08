"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ChinookWordmark } from "@/components/ui/icon";

const navLinks = [
  { label: "Services",    href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing",     href: "#pricing" },
  { label: "Contact",     href: "#contact" },
];

export default function Navigation() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Floating glass-dock pill ────────────────────────────── */}
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-5 inset-x-0 z-50 flex justify-center px-4"
        role="banner"
      >
        <div
          className={[
            "flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500",
            /* Glass dock surface */
            "bg-white/[0.06] backdrop-blur-xl",
            /* 1-px border, brightens on scroll */
            scrolled
              ? "border border-white/[0.14] shadow-[0_4px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
              : "border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
          ].join(" ")}
        >
          {/* Wordmark */}
          <a
            href="#"
            aria-label="Chinook Web Co. — back to top"
            className="flex items-center px-3 py-1.5 rounded-full hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] mr-2"
          >
            <ChinookWordmark size="sm" />
          </a>

          {/* Desktop links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[0.8rem] text-white/55 hover:text-white font-medium tracking-wide transition-colors duration-150 rounded-full hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-white/[0.1] mx-2" aria-hidden="true" />

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-[#3b82f6] hover:bg-[#2563eb] active:bg-[#1d4ed8] text-white text-[0.8rem] font-semibold rounded-full transition-colors duration-150 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get a Quote
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] ml-1"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0,   scale: 1 }}
              exit={{    opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[72px] left-4 right-4 z-40 md:hidden rounded-2xl bg-black/90 border border-white/[0.09] backdrop-blur-xl shadow-[0_16px_64px_rgba(0,0,0,0.7)] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-col p-3 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.22, ease: "easeOut" }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3.5 text-white/65 hover:text-white hover:bg-white/[0.04] text-sm font-medium rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-3 pt-1 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold rounded-xl transition-colors shadow-[0_0_24px_rgba(59,130,246,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]"
                >
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

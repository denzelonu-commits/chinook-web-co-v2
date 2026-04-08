import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why a Website', href: '#why-website' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2E] border-t border-white/[0.06]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* LEFT — wordmark + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/wordmark.svg"
              alt="Chinook Web Co."
              width={160}
              height={40}
              className="h-9 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-sm text-[#F5F1EC]/60 max-w-[200px] leading-relaxed">
              Calgary websites that get customers through the door.
            </p>
            <a
              href="mailto:hello@chinookwebco.com"
              className="text-sm text-[#2E6EA6] hover:text-[#E07B2A] transition-colors duration-150 mt-1"
            >
              hello@chinookwebco.com
            </a>
          </div>

          {/* CENTER — nav links */}
          <div className="flex flex-col gap-1">
            <p className="eyebrow text-[#6B7A8D] mb-4">Quick Links</p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[#F5F1EC]/60 hover:text-[#F5F1EC] transition-colors duration-150 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* RIGHT — contact + location */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-[#6B7A8D] mb-0">Location</p>
            <p className="text-sm text-[#F5F1EC]/60 leading-relaxed">
              Calgary, Alberta<br />
              Serving businesses across the city.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5F1EC] border border-white/20 px-4 py-2.5 rounded-[6px] hover:border-[#E07B2A] hover:text-[#E07B2A] transition-all duration-150 w-fit cursor-pointer mt-2"
            >
              Get a free preview
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#6B7A8D]">
            © {currentYear} Chinook Web Co. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7A8D]">
            Built in Calgary, Alberta.
          </p>
        </div>
      </div>
    </footer>
  )
}

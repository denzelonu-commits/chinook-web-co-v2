import { ChinookWordmark } from "@/components/ui/icon";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden"
      aria-label="Site footer"
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Main footer row */}
        <div className="py-12 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <ChinookWordmark size="default" />
            <p className="text-sm text-white/35 max-w-[220px] text-center sm:text-left leading-relaxed">
              Premium web design for Calgary businesses ready to grow.
            </p>
            <a
              href="mailto:hello@chinookwebco.com"
              className="text-sm text-white/40 hover:text-[#93c5fd] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] rounded"
            >
              hello@chinookwebco.com
            </a>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 text-center sm:text-left">
            &copy; 2026 Chinook Web Co. All rights reserved.
          </p>
          <p className="text-xs text-white/20 flex items-center gap-1.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#3b82f6]/50"
              aria-hidden="true"
            />
            Built in Calgary, AB
          </p>
        </div>
      </div>
    </footer>
  );
}

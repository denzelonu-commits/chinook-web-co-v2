/**
 * app/page.tsx — Root page for Chinook Web Co.
 *
 * Layout pattern: Baseborn-style split viewport
 * - Desktop: fixed left navigation panel (340px/380px) + scrollable right content column
 * - Mobile: sticky top nav (14 handled in Navigation) + single full-width scroll
 *
 * All heavy animations are isolated in "use client" components so the page
 * shell itself can remain a Server Component.
 */

import { Navigation }   from '@/components/Navigation'
import { Hero }         from '@/components/Hero'
import { StatsBar }     from '@/components/StatsBar'
import { Services }     from '@/components/Services'
import { HowItWorks }   from '@/components/HowItWorks'
import { WhyWebsite }   from '@/components/WhyWebsite'
import { Portfolio }    from '@/components/Portfolio'
import { Testimonials } from '@/components/Testimonials'
import { Pricing }      from '@/components/Pricing'
import { Contact }      from '@/components/Contact'
import { Footer }       from '@/components/Footer'

export default function Home() {
  return (
    /*
     * Outer wrapper is overflow-hidden so the fixed left panel never
     * creates a horizontal scrollbar. The right `<main>` is the sole
     * scrollable surface on desktop.
     */
    <div className="flex overflow-x-hidden" style={{ minHeight: 'calc(100vh / 0.9)' }}>

      {/* ── Left panel: Navigation ──────────────────────────────────────── */}
      {/*  On desktop: position:fixed, 340–380px wide, full-height         */}
      {/*  On mobile:  position:fixed top bar (renders inside Navigation)  */}
      <Navigation />

      {/* ── Right panel: all page content ──────────────────────────────── */}
      {/*  ml-[340px] lg:ml-[380px] matches the left panel width           */}
      {/*  h-screen overflow-y-auto → only this column scrolls on desktop  */}
      <main
        className="
          w-full h-full
          md:ml-[340px] lg:ml-[380px]
          md:overflow-y-auto
          pt-14 md:pt-0
        "
        id="scroll-container"
      >
        <Hero />
        <StatsBar />
        <Services />
        <HowItWorks />
        <WhyWebsite />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

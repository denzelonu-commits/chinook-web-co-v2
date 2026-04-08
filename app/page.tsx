import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import WhyWebsite from '@/components/WhyWebsite'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <Pricing />
        <HowItWorks />
        <WhyWebsite />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

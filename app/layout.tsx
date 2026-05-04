import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import Script from 'next/script'
import { PageTransitionProvider } from '@/components/PageTransitionProvider'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Web Design for Calgary Trades Businesses | Chinook Web Co.',
  description:
    'Chinook Web Co. builds custom websites for Calgary electricians, plumbers, roofers, and HVAC companies. Professional, fast, and built to get customers through the door.',
  keywords:
    'Calgary web design, Calgary website, small business website Calgary, trades website Calgary, web design agency Calgary',
  metadataBase: new URL('https://chinookwebco.com'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Web Design for Calgary Trades Businesses | Chinook Web Co.',
    description:
      'Chinook Web Co. builds custom websites for Calgary electricians, plumbers, roofers, and HVAC companies. Professional, fast, and built to get customers through the door.',
    url: 'https://chinookwebco.com',
    siteName: 'Chinook Web Co.',
    locale: 'en_CA',
    type: 'website',
    images: [{ url: 'https://chinookwebco.com/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design for Calgary Trades Businesses | Chinook Web Co.',
    description:
      'Chinook Web Co. builds custom websites for Calgary electricians, plumbers, roofers, and HVAC companies. Professional, fast, and built to get customers through the door.',
    images: ['https://chinookwebco.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Chinook Web Co.',
    url: 'https://chinookwebco.com',
    email: 'hello@chinookwebco.com',
    description:
      'Web design for Calgary trades businesses — electricians, plumbers, HVAC, and roofers.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'City',
      name: 'Calgary',
    },
    founder: {
      '@type': 'Person',
      name: 'Denzel',
    },
    sameAs: [],
  }

  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="noise-overlay bg-[#0e1321] text-[#F5F1EC] antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  )
}

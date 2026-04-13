import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
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
  title: 'Chinook Web Co. | Calgary Web Design & Development',
  description:
    'Calgary websites that get customers through the door. We build high-performance, custom sites for local trades — mockup first, no obligation. Starting at $2,500.',
  keywords:
    'Calgary web design, Calgary website, small business website Calgary, trades website Calgary, web design agency Calgary',
  metadataBase: new URL('https://www.chinookwebco.com'),
  
  // --- ICON CONFIGURATION ---
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  // ---------------------------

  openGraph: {
    title: 'Chinook Web Co. | Calgary Web Design',
    description:
      'Calgary websites that get customers through the door. Free mockup, no deposit, live in 3–14 days.',
    url: 'https://www.chinookwebco.com',
    siteName: 'Chinook Web Co.',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Chinook Web Co. | Calgary Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinook Web Co. | Calgary Web Design',
    description:
      'Calgary websites that get customers through the door. Free mockup, no deposit, live in 3–14 days.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="noise-overlay bg-[#0e1321] text-[#F5F1EC] antialiased">
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  )
}

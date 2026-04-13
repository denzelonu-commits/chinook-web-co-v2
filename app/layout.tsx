import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
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
  // --- ADDED ICONS SECTION ---
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  // ---------------------------
  openGraph: {
    title: 'Chinook Web Co. | Calgary Web Design',
    description: 'Calgary websites that get customers through the door.',
    url: 'https://chinookwebco.com',
    siteName: 'Chinook Web Co.',
    images: [
      {
        url: '/og-image.png', // If you have an OG image, it goes here
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_CA',
    type: 'website',
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
        {children}
      </body>
    </html>
  )
}

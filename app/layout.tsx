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
    'Calgary websites that get customers through the door. Fast, custom sites for local businesses — mockup first, no deposit, live in days.',
  keywords:
    'Calgary web design, Calgary website, small business website Calgary, trades website Calgary, web design agency Calgary',
  metadataBase: new URL('https://chinookwebco.com'),
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
  openGraph: {
    title: 'Chinook Web Co. | Calgary Web Design & Development',
    description:
      'Calgary websites that get customers through the door. Fast, custom sites for local businesses — mockup first, no deposit, live in days.',
    url: 'https://chinookwebco.com',
    siteName: 'Chinook Web Co.',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinook Web Co. | Calgary Web Design & Development',
    description:
      'Calgary websites that get customers through the door. Fast, custom sites for local businesses — mockup first, no deposit, live in days.',
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

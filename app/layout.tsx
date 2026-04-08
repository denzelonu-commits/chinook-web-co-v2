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
  title: 'Chinook Web Co. | Calgary Web Design',
  description:
    'Professional websites for Calgary small businesses and trades. We build fast, no-nonsense sites that get customers through the door — starting at $750.',
  keywords: 'Calgary web design, Calgary website, small business website Calgary, trades website Calgary',
  openGraph: {
    title: 'Chinook Web Co. | Calgary Web Design',
    description: 'Calgary websites that get customers through the door.',
    url: 'https://chinookwebco.com',
    siteName: 'Chinook Web Co.',
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
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

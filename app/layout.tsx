import type { Metadata } from "next";
import { Syne, Outfit, Geist } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinook Web Co. | Web Design Calgary",
  description:
    "Calgary's premium web design studio. We build fast, modern websites that convert visitors into clients. Custom web design, development & SEO for Calgary businesses.",
  keywords: [
    "web design Calgary",
    "website design Calgary",
    "Calgary web developer",
    "Calgary web agency",
    "custom website Calgary",
    "SEO Calgary",
  ],
  authors: [{ name: "Chinook Web Co." }],
  creator: "Chinook Web Co.",
  metadataBase: new URL("https://chinookwebco.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://chinookwebco.com",
    siteName: "Chinook Web Co.",
    title: "Chinook Web Co. | Web Design Calgary",
    description:
      "Calgary's premium web design studio. Fast, modern websites that convert visitors into clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinook Web Co. | Web Design Calgary",
    description:
      "Calgary's premium web design studio. Fast, modern websites that convert visitors into clients.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${geist.variable} dark antialiased`}
    >
      <body className="min-h-dvh bg-black text-white font-sans" suppressHydrationWarning>
        {/* Film-grain noise overlay — 3% opacity */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[9999] pointer-events-none select-none"
          style={{
            opacity: 0.03,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        {children}
      </body>
    </html>
  );
}

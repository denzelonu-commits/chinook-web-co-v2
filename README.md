# Chinook Web Co. — Website

Premium agency website for Chinook Web Co., a local web design studio in Calgary, Alberta.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — page animations, scroll reveals, text generate effect
- **Lucide React** — icons
- **Formspree** — contact form (ID: `xnjoleaz`)

## Design System

See `design.md` in the project root for full token reference. Key palette:

| Token | Hex | Usage |
|-------|-----|-------|
| Charcoal | `#1A1F2E` | Hero, nav, footer, dark sections |
| Deep Steel Blue | `#1C3A5E` | Services, process sections |
| Chinook Amber | `#E07B2A` | Accent word, CTAs, stats |
| Warm Off-White | `#F5F1EC` | Testimonials, pricing section |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1 — Vercel Dashboard (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Click **Deploy** — no environment variables required.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Production deployment runs on `vercel --prod`.

### Custom Domain

1. In the Vercel dashboard → Settings → Domains → add `chinookwebco.com`.
2. Point your DNS `A` record to Vercel's IP (`76.76.21.21`) and `CNAME www` → `cname.vercel-dns.com`.

## Contact Form

Uses [Formspree](https://formspree.io/) form ID `xnjoleaz`.  
Action URL: `https://formspree.io/f/xnjoleaz`

No server-side code required — form data is POSTed directly from the browser.

## Project Structure

```
app/
  globals.css        Design tokens, keyframes, base resets
  layout.tsx         Font loading, metadata, root HTML
  page.tsx           Split-viewport page shell

components/
  Navigation.tsx     Fixed left panel (desktop) + sticky top bar (mobile)
  Hero.tsx           Full-viewport hero with text generate effect
  StatsBar.tsx       4-stat animated counter band
  Services.tsx       Service cards + philosophy quote
  HowItWorks.tsx     3-step process with animated step nodes
  WhyWebsite.tsx     2-column stat proof section
  Portfolio.tsx      Placeholder project cards
  Testimonials.tsx   Dual-row auto-scrolling marquee
  Pricing.tsx        2 pricing tiers + FAQ accordion
  Contact.tsx        Formspree contact form
  Footer.tsx         Footer with ghost wordmark

  ui/
    TextGenerateEffect.tsx   Word-by-word blur reveal
    NumberTicker.tsx         Spring-physics animated counter
    Marquee.tsx              Infinite horizontal scroll
    ScrollReveal.tsx         Viewport-triggered fade-up

lib/
  utils.ts           cn() helper
```

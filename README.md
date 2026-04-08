# Chinook Web Co. — v2

Premium agency website for Chinook Web Co., a Calgary-based web design studio serving local trades and small businesses.

**Stack:** Next.js 16 · Tailwind CSS v4 · Framer Motion v12 · React 19  
**Contact form:** Formspree (`xnjoleaz`)  
**Deploy target:** Vercel

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B — GitHub integration

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Accept all defaults — no environment variables required.
4. Click **Deploy**.

The site will be live at your `.vercel.app` URL within ~60 seconds.

### Custom domain

In the Vercel dashboard → **Settings → Domains**, add `chinookwebco.com` and follow the DNS instructions.

---

## Formspree

The contact form posts to `https://formspree.io/f/xnjoleaz`.

- No environment variables needed — the form ID is public.
- Submissions are delivered to the email linked to that Formspree account.
- To change the recipient, update the Formspree dashboard at [formspree.io](https://formspree.io).

---

## Project Structure

```
app/
  globals.css        — Tailwind v4 theme + base styles
  layout.tsx         — Root layout, font loading, metadata
  page.tsx           — Page assembly (imports all sections)

components/
  Navigation.tsx     — Sticky nav with mobile hamburger
  Hero.tsx           — Two-column hero + browser mockup
  StatsBar.tsx       — Dark stats band with animated counters
  Pricing.tsx        — Three-tier pricing cards
  HowItWorks.tsx     — 3-step process section
  WhyWebsite.tsx     — ROI two-column stat section
  Portfolio.tsx      — Placeholder portfolio cards
  Testimonials.tsx   — Client quote cards
  Contact.tsx        — Formspree contact form
  Footer.tsx         — Dark footer

  ui/
    ScrollReveal.tsx    — Scroll-triggered fade-up animations
    AnimatedCounter.tsx — Count-up number animation

lib/
  utils.ts           — cn() helper

public/
  wordmark.svg       — Brand logo
  brand-guidelines.md
```

---

## Design System

| Token | Value |
|-------|-------|
| Dark background | `#1A1F2E` |
| Light background | `#F5F1EC` |
| Chinook Amber (accent) | `#E07B2A` |
| Secondary blue | `#2E6EA6` |
| Muted text | `#6B7A8D` |
| Headlines | Barlow Condensed 700 |
| Body | Inter 400 |

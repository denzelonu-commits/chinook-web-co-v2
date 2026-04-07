# Chinook Web Co. — Brand Guidelines v1.0

> Last updated: 2026-04-07
> Status: Active

---

## Brand Foundation

### Position

Chinook Web Co. is the web agency that speaks trades. We build fast, no-nonsense websites for Calgary's contractors, plumbers, electricians, HVAC techs, and other skilled trades — people who are too busy working to deal with confusing tech.

### Mission

Make it dead simple for trades businesses to look professional online and win more jobs.

### Promise

We build sites that work as hard as you do.

---

## Quick Reference

| Element | Value |
|---|---|
| Primary Color | #1C3A5E (Deep Steel Blue) |
| Accent Color | #E07B2A (Chinook Amber) |
| Supporting Blue | #2E6EA6 (Sky Blue) |
| Primary Font | Barlow Condensed (headings) |
| Body Font | Inter (body copy) |
| Voice | Direct, Plain-spoken, Reliable |

---

## 1. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|---|---|---|---|
| Deep Steel Blue | #1C3A5E | rgb(28, 58, 94) | Wordmark, headings, primary CTAs |
| Chinook Amber | #E07B2A | rgb(224, 123, 42) | Accents, highlights, hover states |

### Supporting Colors

| Name | Hex | RGB | Usage |
|---|---|---|---|
| Sky Blue | #2E6EA6 | rgb(46, 110, 166) | Secondary buttons, links, icons |
| Steel Mid | #6B7A8D | rgb(107, 122, 141) | Subheadings, muted text, captions |
| Warm Off-White | #F5F1EC | rgb(245, 241, 236) | Page backgrounds, card surfaces |
| Charcoal | #1A1F2E | rgb(26, 31, 46) | Dark backgrounds, footer |

### Neutral Palette

| Name | Hex | RGB | Usage |
|---|---|---|---|
| Text Primary | #1A1F2E | rgb(26, 31, 46) | Body text, headings |
| Text Secondary | #6B7A8D | rgb(107, 122, 141) | Captions, metadata |
| Border | #D8E0E8 | rgb(216, 224, 232) | Dividers, card outlines |
| Surface | #F5F1EC | rgb(245, 241, 236) | Cards, sections |

### Accessibility

- Deep Steel Blue on White: 9.1:1 (AAA)
- Chinook Amber on Charcoal: 4.8:1 (AA)
- All interactive elements meet WCAG 2.1 AA

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Rationale

Barlow Condensed carries the visual weight of industrial signage and trade vehicle wraps — it feels familiar to the trades audience without being cheap. Inter keeps body copy clean and readable at any size.

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Tracking |
|---|---|---|---|---|
| Display | 64px | 40px | 700 | +1px |
| H1 | 48px | 32px | 700 | +0.5px |
| H2 | 36px | 28px | 600 | 0 |
| H3 | 28px | 22px | 600 | 0 |
| Body | 17px | 16px | 400 | 0 |
| Small | 14px | 14px | 400 | 0 |
| Label/Tag | 12px | 12px | 600 | +1.5px |

---

## 3. Logo & Wordmark

### The Mark — Chinook Arch

Three concentric arcs radiating from the lower-left, representing the Chinook wind arch that rolls over the Rockies into Calgary. The arcs carry the full brand palette — amber (outermost), sky blue (middle), deep steel (inner) — conveying warmth moving in front of cold precision.

### Wordmark Variants

| Variant | File | Use Case |
|---|---|---|
| Full Horizontal | `wordmark.svg` | Headers, hero sections, proposals |
| Icon Only | (future) | Favicon, app icon, vehicle decal |
| Reversed | (future) | Dark backgrounds |

### Clear Space

Minimum clear space = height of the arch mark on all sides.

### Logo Don'ts

- Don't recolor the arch arcs outside the brand palette
- Don't rearrange the arc order (amber always outermost)
- Don't use the wordmark below 120px wide on screen
- Don't place on a busy photographic background without a solid backing

---

## 4. Voice & Tone

### Brand Personality

| Trait | We Are | We Are Not |
|---|---|---|
| **Plain-spoken** | Clear, jargon-free, direct | Dumbed-down or condescending |
| **Reliable** | Consistent, follow-through, dependable | Stiff or bureaucratic |
| **Local** | Calgary-rooted, Alberta-proud | Parochial or closed-minded |
| **Practical** | Results-focused, no fluff | Cold or transactional |

### Voice by Context

| Context | Tone | Example |
|---|---|---|
| Hero / headline | Bold, punchy | "Built for the trades. Built to win jobs." |
| Service descriptions | Clear, benefit-first | "Your site loads in under 2 seconds on any phone." |
| Testimonials / social proof | Warm, human | "Mike's Plumbing booked 14 new clients in month one." |
| Error messages | Calm, actionable | "Something went sideways. Give us a call." |
| CTAs | Direct, low pressure | "Get a free quote" / "See our work" |

### Prohibited Phrases

| Avoid | Use Instead |
|---|---|
| "Seamless digital experience" | "A site that just works" |
| "Leverage synergies" | (Delete entirely) |
| "World-class" | Specific proof ("4.9 stars, 80+ clients") |
| "Solutions" | Name the thing ("websites", "booking pages") |
| "Empower" | "Help" |

---

## 5. Imagery Guidelines

### Photography Style

- **Subjects:** Real tradespeople at work — hands, tools, job sites, finished work
- **Lighting:** Natural, golden-hour preferred; avoid sterile studio shots
- **Feel:** Earned, not polished. Pride of craft, not stock-photo perfection
- **Calgary presence:** Rocky Mountain backdrops, industrial NE Calgary, wide Alberta skies

### Visual Don'ts

| Avoid | Reason |
|---|---|
| Generic stock handshakes | Feels fake to a trades audience |
| Overly urban/hipster aesthetics | Misaligns with client identity |
| Dark moody tech startup vibes | Wrong industry signal |
| Clip art or cartoon icons | Undercuts professionalism |

---

## 6. Design Components

### Buttons

| Type | Background | Text | Border Radius |
|---|---|---|---|
| Primary | #1C3A5E | #FFFFFF | 6px |
| Accent | #E07B2A | #FFFFFF | 6px |
| Ghost | Transparent | #1C3A5E | 6px |

### Spacing Scale

| Token | Value |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 40px |
| 2xl | 64px |

### Border Radius

| Element | Radius |
|---|---|
| Buttons | 6px |
| Cards | 10px |
| Inputs | 6px |
| Tags/Badges | 4px |

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-04-07 | Initial brand direction — Chinook Web Co. |

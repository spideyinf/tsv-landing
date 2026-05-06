# TransportVibe — Landing Page MVP

The trust-driven marketplace for auto transport. Compare verified brokers, read real reviews, and get AI-powered recommendations.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| i18n routing | next-intl (locale param wired, translations not used) |
| Runtime | Bun |
| Linting | Ultracite (Oxlint + strict TS) |

## What's implemented

### Pages

`src/app/[locale]/(marketing)/page.tsx` — the entire public landing page, server component.

Sections top to bottom:

1. **Ticker bar** — marquee with fade-mask edges, Help Center / language switcher / search / Sign in & Register links
2. **Hero** — dark gradient background, sticky nav (logo, links, CTA buttons), headline, three quick-action cards, info blurb, right-side **Quick Quote card** (dark green header, combined pickup/delivery inputs with floating swap button, transport type toggle, step indicator)
3. **Stats bar** — 15K+ reviews · 4.5+ rating · 100% FMCSA Checked · 50+ companies
4. **How It Works** — 4 steps with arrow-shaped SVG polygon column dividers, alternating white/gray-50 backgrounds
5. **Top Companies** — 3-column grid of `CompanyCard` components, 6 mock companies
6. **Footer** — `LandingFooter` component

### Components

| File | Description |
|---|---|
| `src/components/CompanyCard.tsx` | Company review card — green border + shadow, gradient header, ribbon badge, logo box, star rating, trust badges, trust score circle, performance bars, CTA |
| `src/components/LandingFooter.tsx` | Full footer — newsletter banner, 5-column link grid (logo + Main + For Customers + Legal + Contact), payment icons row, disclaimer box |

## Development

```bash
bun run dev          # Start dev server (PGlite + Next.js)
bun run build-local  # Build locally without remote DB
bun run lint         # Lint with Ultracite
bun run check:types  # TypeScript check only
```

## Known limitations & time-scope decisions

- **No real data** — company cards use hardcoded mock data. The `companies` array in `page.tsx` is the source of truth for demo.
- **No i18n translations** — next-intl routing is wired for locale params and `setRequestLocale`, but all visible strings are hardcoded English. Translation keys were intentionally skipped to move fast.
- **No interactivity** — quote form inputs, transport type toggle, and newsletter subscribe button have no handlers. All `<button>` and `<form>` elements are static markup.
- **No background images** — the newsletter banner in the footer uses a CSS gradient approximation instead of the designed highway background image.
- **Payment logos** — rendered as `<img>` tags pointing to `public/assets/transportvibe/ic-*.png`; these files must exist or the slots will be empty.
- **Pixel-perfect target** — design was provided as Figma-exported CSS specs and reference screenshots. Layout matches the spec at 1400px viewport. No responsive breakpoints implemented.

## Asset paths

Brand assets expected under `public/assets/transportvibe/`:

```
ic-logo-full-color.png   (footer logo)
ic-logo-full.png         (nav logo — white version)
ic-visa.png
ic-amex.png
ic-apple-pay.png
ic-paypal.png
ic-venmo.png
ic-discover.png
ic-master-card.png
```

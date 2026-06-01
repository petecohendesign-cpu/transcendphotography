# CLAUDE.md — Transcend Photography

Context for Claude Code working in this repo. Read this first.

## What this is
Marketing site for **Transcend Photography** (Pete Cohen — Los Angeles photographer).
Three service lines: **Weddings & Couples**, **Branding & Lifestyle**, **Portrait Sessions**.
Goal: a clean, modern, luxury editorial site optimized for lead capture via HoneyBook.

## Stack
- Next.js 14 (App Router), React 18, plain CSS (no Tailwind, no CSS-in-JS lib).
- No TypeScript. Components are `.js`.
- Images are static files in `public/images/`. `next.config.js` sets `images.unoptimized = true`, so plain `<img>` tags are used throughout (not `next/image`).
- Fonts loaded via Google Fonts `<link>` in `app/layout.js`: **Cormorant Garamond** (display serif) + **Jost** (sans).

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure
```
app/
  layout.js              Root layout + fonts + metadata
  globals.css            ENTIRE design system lives here (tokens, nav, hero, galleries, etc.)
  page.js                Homepage — hero SLIDESHOW cycling through 3 services + 3-up cards
  for-couples/page.js    Weddings (HoneyBook placement 4)
  brand-photography/page.js  Branding (HoneyBook placement 12)
  portraits/page.js      Portraits (HoneyBook placement 2)
  about/page.js          Pete's bio
  components/
    Nav.js               Sticky nav. variant="overlay" (transparent→solid on scroll) or "solid"
    Footer.js            Shared footer
    Reveal.js            IntersectionObserver → adds `.in` to `.reveal` elements (fade-up)
    HoneyBook.js         Loads HoneyBook script + renders a placement div
public/images/           All photography (see naming below)
```

## Design tokens (defined in globals.css :root)
- `--bone #f5f1ea` (page bg), `--bone-2 #ece5d9` (alt sections)
- `--espresso #2b2620` (text / dark bands), `--espresso-2 #23201b` (footer)
- `--taupe #6b6055` (muted body), `--clay #9c6f50` (single accent), `--clay-light #c99a78`
- Headings use `.serif` / `.h2`; small uppercase labels use `.label`.
- Keep the aesthetic restrained: one accent color, generous whitespace, slow motion. Avoid adding more colors or heavy effects.

## Reusable classes
`.section` (page padding), `.wrap` (horizontal padding), `.imgblk` (image w/ hover zoom),
`.reveal` (scroll fade-up — needs `<Reveal/>` on the page), `.btn` / `.btn-light`, `.arrow`,
`.services`/`.scard`, `.srow`, `.gal`/`.gal-2`/`.gal-3`, `.steps`/`.step`, `.offers`/`.offer`,
`.quote`, `.split`, `.cta`, `.pagehero`.

## HoneyBook
Master PID `66450f3663c0600007d48291`. Placements: Wedding=`4`, Branding=`12`, Portrait=`2`.
Embedded via `<HoneyBook placement="4" />`. The script only loads once per session.

## Images (public/images/)
Weddings: `wedding-flower-bridge.jpg` `wedding-bw-railing.jpg` `wedding-bride-reading.jpg`
`wedding-ring-bearers.jpg` `wedding-cake.jpg` `wedding-venue-cellar.jpg`
Portraits: `portrait-guitar.jpg` `portrait-nyc.jpg` `portrait-studio.jpg`
Branding: `branding-ilnido-1..4.jpg` `branding-bubles-1..3.jpg` `branding-claudine-1..3.jpg`
`branding-muha-cartridge.jpg` `branding-muha-box.jpg`
Logo: `logo.png`

## KNOWN TODOS (good first tasks)
1. **Replace watermarked exports.** `wedding-flower-bridge.jpg` and `wedding-bride-reading.jpg`
   have a visible "Transcend Photography" watermark baked in. Swap for clean exports before launch.
2. **Real copy pass.** Headlines/blurbs are strong drafts — confirm wording with Pete.
3. **About photo.** The About hero currently reuses a wedding image; replace with a real photo of Pete.
4. **More gallery images.** Only a curated subset is wired in; add more per service as desired.
5. **SEO.** Add per-page `metadata` exports (these are client components now; either split a server
   `layout.js` per route for metadata, or convert page shells to server components wrapping client bits).
6. **301 redirects.** Preserve old Squarespace URLs (see list in project notes) when deploying.
7. **Analytics.** Add GA4 / verify the HoneyBook pixel fires.

## Deploy
Designed for Vercel (zero-config Next.js). `git push` → import on vercel.com → add domain
`transcendphoto.net`. See README.md.

## Conventions
- Keep components small and `'use client'` only where interactivity is needed (Nav, Reveal, HoneyBook, homepage slideshow).
- Don't introduce a UI framework or change the type pairing without reason — the restraint is the brand.

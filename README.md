# Transcend Photography

A clean, modern, luxury editorial website for Transcend Photography — weddings, branding, and portraits. Built with Next.js 14 (App Router).

Features a hero slideshow that cycles through all three services, full-bleed editorial imagery, scroll-reveal animations, a responsive hamburger nav, and embedded HoneyBook inquiry forms on each service page.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel — recommended)

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com, "New Project", import the repo, click Deploy.
3. In the project's Domains settings, add `transcendphoto.net` and follow the DNS instructions.

No environment variables or build configuration are required.

## Editing

- **Design system / colors / type:** `app/globals.css` (CSS variables in `:root`).
- **Homepage slideshow & sections:** `app/page.js` (`SLIDES` and `CARDS` arrays at the top).
- **Service pages:** `app/for-couples`, `app/brand-photography`, `app/portraits`.
- **Photos:** drop files in `public/images/` and reference `/images/your-file.jpg`.
- **HoneyBook:** forms are wired via `app/components/HoneyBook.js`.

See `CLAUDE.md` for a full map of the project, design tokens, and a prioritized TODO list — it's written so Claude Code can pick up work immediately.

## Notes before launch

- Two wedding images include a baked-in watermark; replace with clean exports.
- Add per-page SEO metadata and 301 redirects from the old Squarespace URLs.

---

Contact: pete@transcendphoto.net · 203.671.5273

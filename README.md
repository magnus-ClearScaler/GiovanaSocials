# GioContent

Website for **GioContent** — a content creation and social media management studio by **Giovana Tonon**. Soft, founder-friendly aesthetic in pink, purple and cream with a serif display + clean sans pairing.

The GitHub repo is named `GiovanaSocials`; the brand and product are **GioContent**.

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4** (with `@theme` design tokens in `oklch`)
- **React Router v7**
- **lucide-react** for icons
- **Fraunces** (serif display) + **Inter** (sans) via Google Fonts

## Pages

- `/` — Home: hero, about teaser, expertise, case-study previews, CTA, contact strip
- `/about` — Giovana's story and approach
- `/work/marzelle-sweets` — case study: MarzelleSweets
- `/work/clearcruit` — case study: ClearCruit (1,200+ followers / 500K+ views / 50 sign-ups)
- `/work/amr-arquitectura` — case study: Amr Arquitectura
- `/work/clearscaler` — case study: ClearScaler (current client)
- `/contact` — booking / contact form

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

The build emits a static site to `dist/` — deployable to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

## Project structure

```
src/
  components/    Nav, Footer, Layout, Section, Placeholder
  data/          caseStudies.ts — case study content + metrics
  pages/         Home, About, Contact, CaseStudy, NotFound
  index.css      Tailwind v4 entry + @theme design tokens
  main.tsx       Router + StrictMode entry
  App.tsx        Route definitions
```

## Design tokens

Defined in `src/index.css` under `@theme`. Palette uses `oklch()` for perceptually-uniform color:

- `cream-*` — warm neutral backgrounds
- `blush-*` — soft pink accents
- `mauve-*` — deeper purple/mauve for emphasis and primary actions
- `ink`, `ink-soft`, `ink-muted` — text scale

## Image placeholders

All visual slots use the `<Placeholder />` component with descriptive `alt` text describing what the final image should be. Replace with real assets when Giovana's photography is ready.

## Notes

- The contact form is currently client-side only (intentional placeholder). Wire it up to a backend (Resend, Formspree, an API route, etc.) before launch.
- Email and Instagram handles in the footer are placeholders — update once finalized.

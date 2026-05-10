# Arctic Spark — Landing Page v2

Portfolio and landing page for **Arctic Spark**, a Hong Kong-based software studio.

## About

Single-page marketing site showcasing Arctic Spark's projects, values, and capabilities. Built as a fully static export — no server, no database, no authentication required.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| UI Primitives | shadcn/ui (Button, Badge, Card) |
| Icons | Lucide React |
| Font | Inter via `next/font/google` |
| Output | Static export (`next export` compatible) |

## Project Structure

```
app/
  layout.tsx            # Root layout, metadata, Inter font
  page.tsx              # Single page — assembles all sections
  globals.css           # Tailwind base + custom utilities
components/
  ui/                   # shadcn/ui primitives (button, badge, card)
  sections/
    Navbar.tsx          # Sticky nav, transparent → solid on scroll, mobile hamburger
    Hero.tsx            # Animated mesh gradient hero with CTAs
    Projects.tsx        # Glassmorphism project cards (klazzy, artviz, snowaddict)
    About.tsx           # Team description + value cards
    Capabilities.tsx    # Service offering cards with icons
    Contact.tsx         # Gradient CTA banner with mailto link
    Footer.tsx          # Copyright + anchor links
lib/
  utils.ts              # cn() Tailwind class merge helper
```

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
npm run build
```

The static output is written to `/out` and can be served from any CDN or static host (Vercel, Cloudflare Pages, GitHub Pages, etc.).

To preview the production build locally:

```bash
npm run build
npx serve out
```

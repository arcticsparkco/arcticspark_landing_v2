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

## Deployment — Google Cloud Storage

The site deploys automatically via **Google Cloud Build** on every push. The build pipeline (`cloudbuild.yaml`) runs three steps:

1. `npm ci` — install dependencies
2. `npm run build` — generate the static export to `./out`
3. `gsutil rsync` — sync `./out` to a GCS bucket

### One-time setup

**1. Create the GCS bucket**
```bash
gsutil mb -l <REGION> gs://<BUCKET_NAME>
gsutil web set -m index.html -e 404.html gs://<BUCKET_NAME>
```

**2. Make the bucket publicly readable**
```bash
gsutil iam ch allUsers:objectViewer gs://<BUCKET_NAME>
```

**3. Grant the Cloud Build service account write access to the bucket**
```bash
gcloud projects add-iam-policy-binding <PROJECT_ID> \
  --member="serviceAccount:<CLOUDBUILD_SERVICE_ACCOUNT>" \
  --role="roles/storage.admin"
```

**4. Connect your repository** in the [Cloud Build console](https://console.cloud.google.com/cloud-build/triggers) and point the trigger at `cloudbuild.yaml`.

### Substitution variables

The `cloudbuild.yaml` uses two substitution variables you can override per-trigger in the Cloud Build console:

| Variable | Description | Default |
|---|---|---|
| `_BUCKET_NAME` | GCS bucket to deploy to | `arcticspark-landing` |
| `_REGION` | GCP region | `us-central1` |

### Viewing the deployed site

```
https://storage.googleapis.com/<BUCKET_NAME>/index.html
```

> For a custom domain with HTTPS, set up a Cloud Load Balancer with Cloud CDN in front of the bucket.

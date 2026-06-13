# 7edge Apps — website

Marketing website for **7edge Apps**, an independent software studio. Built with
Next.js (App Router), TypeScript, and Tailwind CSS, and deployed as a **static
export** to **Cloudflare Pages** (`https://sevenedge.pages.dev`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # static export → ./out
npm run lint
```

`npm run build` produces a fully static site in `out/`. Copy `.env.example` to
`.env.local` and set at least `NEXT_PUBLIC_SITE_URL`.

> Don't run `npm run build` while `npm run dev` is running in the same folder —
> they share `.next` and will collide (causes `MODULE_NOT_FOUND` 500s in dev).
> If it happens: stop dev, `rm -rf .next`, restart.

## Project structure

```
app/                 App Router pages, routes, metadata
  page.tsx           Single-page homepage (Hero, Services, Apps, About, Process, Contact)
  apps/[slug]/       App detail pages (generated from data/apps.ts)
  privacy/           Privacy Policy
  api/contact/       Server-side contact route (Resend, optional)
  robots.ts          robots.txt (allows AI crawlers, blocks private paths)
  sitemap.ts         sitemap.xml
  llms.txt/          AI-readable summary (generated from data)
  llms-full.txt/     Expanded AI-readable summary
  icon.svg           Favicon / app icon (derived from the logo)
functions/api/contact.js  Cloudflare Pages Function — contact form backend
components/           Reusable UI components
data/                 apps.ts · services.ts · navigation.ts  (content lives here)
lib/site-config.ts    Central config: domain, email, Play Store profile
public/apps/<slug>/   Local app icons + screenshots
public/og.png         Social-preview image (1200×630)
public/app-ads.txt    AdMob verification (placeholder — see below)
scripts/              Asset-download helper
out/                  Build output uploaded to Cloudflare Pages
```

## Brand colors

The palette is extracted from the logo (`public/logo.svg`), whose wordmark uses a
coral → magenta → indigo gradient. All colors are CSS variables in
`app/globals.css` under `:root`. After replacing the logo:

1. Update `--brand`, `--brand-hover`, `--brand-soft`, `--brand-tint` to match the
   new logo's dominant color.
2. Update the gradient stops in `--brand-gradient`, `app/icon.svg`, and
   `app/opengraph-image.tsx` if the logo gradient changed.
3. Replace `public/logo.svg`.

Everything else (Tailwind, components) reads from those variables.

## Managing apps

All app content lives in **`data/apps.ts`** — a single exported array. Cards, the
featured panel, detail pages, the sitemap, and `llms.txt` all read from it.

### Add a new app

1. Add an object to the `apps` array in `data/apps.ts` (give it a unique `id`,
   which becomes the `/apps/<id>` URL slug).
2. Add its icon at `public/apps/<id>/icon.png` (512×512).
3. (Optional) Add `screenshot-1.png …` to the same folder and list them in
   `screenshots`.
4. Record the source in `ASSET_SOURCES.md`.

That's it — no component or page edits needed.

### Replace an app icon / add screenshots

Drop the new files in `public/apps/<id>/` using the same names, or use the helper
`scripts/update-play-store-apps.ts` (add a MANIFEST entry, then
`npx tsx scripts/update-play-store-apps.ts <slug>`). `tsx` is not a dependency —
install it on demand with `npx tsx ...` if you use the script.

### Change the featured app

Set `featured: true` on one app object in `data/apps.ts` (and `false` on the
others). `featuredApp` resolves to the first flagged app.

### Update a Google Play URL

Edit `playStoreUrl` (and `packageId`) on that app in `data/apps.ts`.

## Deploy to Cloudflare Pages (free, `sevenedge.pages.dev`)

This site is a static export, so Pages serves it directly and the contact form
runs as a Pages Function — no SSR adapter needed.

**Option A — Git (recommended):**

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** `Next.js (Static HTML Export)` (or "None")
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. **Environment variables** (Settings → Environment variables):
   - `NEXT_PUBLIC_SITE_URL = https://sevenedge.pages.dev`
   - (optional, for the contact form) `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`,
     `CONTACT_TO_EMAIL` — see below.
5. Deploy. Your site is live at `https://sevenedge.pages.dev`. The project name
   you choose becomes the subdomain, so name it **`sevenedge`**.

**Option B — Direct upload (no Git):**

```bash
npm run build
npx wrangler pages deploy out --project-name sevenedge
```

`/app-ads.txt`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` are
all served as static text from the root automatically.

## Activating the contact form

The contact form works out of the box via a **mailto fallback** — if email
delivery isn't configured, submitting guides the visitor to the "Send an Email"
button (opens their mail app to `7edgetechnologies@gmail.com`).

To enable server-side delivery with [Resend](https://resend.com) via the
Cloudflare Pages Function (`functions/api/contact.js`):

1. Create a Resend account and verify a sending domain.
2. In **Cloudflare Pages → Settings → Environment variables**, add:
   ```
   RESEND_API_KEY      = re_xxx              (mark as secret)
   CONTACT_FROM_EMAIL  = hello@your-verified-domain.com
   CONTACT_TO_EMAIL    = 7edgetechnologies@gmail.com
   ```
3. Redeploy. The form now POSTs to `/api/contact` and sends through Resend.

Secrets live only in the Function's environment; nothing sensitive ships to the
browser. To test the Function locally: `npx wrangler pages dev out`.

## SEO & AI discoverability

- `robots.txt` allows standard crawlers and the official OpenAI/Anthropic AI
  user agents while blocking `/api/`, `/admin/`, `/dashboard/`, `/private/`,
  `/preview/`.
- `sitemap.xml`, `llms.txt`, `llms-full.txt` are generated from the central data.
- JSON-LD: `ProfessionalService` (site) and `SoftwareApplication` (app pages),
  with no fabricated ratings, prices, or counts.

Set `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap, robots, and structured
data all use the real production domain.

## AdMob app-ads.txt — IMPORTANT

`public/app-ads.txt` ships with a **placeholder publisher ID**. Deployment is not
complete until you replace it:

```
google.com, pub-REPLACE_WITH_REAL_PUBLISHER_ID, DIRECT, f08c47fec0942fa0
```

1. Get the exact personalized line from
   **AdMob → Apps → View all apps → app-ads.txt → How to set up app-ads.txt**.
2. Replace the placeholder line in `public/app-ads.txt` (root-served at
   `/app-ads.txt`; do not move it).
3. Deploy, then verify:
   ```bash
   curl -i https://sevenedge.pages.dev/app-ads.txt   # expect HTTP 200 + the record
   ```
4. In **Google Play Console**, open each app → store listing contact details, set
   the **developer website** to `https://sevenedge.pages.dev` (the main domain,
   not the `/app-ads.txt` URL) and publish.
5. In AdMob, wait for / request another app-ads.txt crawl until the seller shows
   as authorized.

Never report AdMob verification as successful until AdMob has actually crawled and
approved the deployed domain.

## Deployment checklist

After deploying, confirm these are served correctly (text files as text, HTTP 200):

```
/            /robots.txt   /sitemap.xml
/llms.txt    /llms-full.txt  /app-ads.txt   /privacy
```

## Content notes

The site intentionally contains no fabricated ratings, download counts,
testimonials, client logos, team photos, or office details. App descriptions are
original summaries of the public Google Play listings.

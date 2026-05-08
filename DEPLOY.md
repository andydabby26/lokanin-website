# Cloudflare Pages Deployment Guide

## What was cleaned up
- Removed `runable-analytics-plugin` + `honoDevPlugin` from `vite.config.ts`
- Removed `/runable.js` script tag from `index.html`
- Added `packages/web/functions/api/youtube.ts` as a Cloudflare Pages Function (replaces the Hono route)

---

## Cloudflare Pages Settings

| Setting | Value |
|---|---|
| **Root directory** | `packages/web` |
| **Build command** | `bunx vite build` |
| **Output directory** | `dist` |
| **Node version** | 20+ |

> If building from monorepo root: `cd packages/web && bunx vite build`

---

## Environment Variables (set in Cloudflare Pages > Settings > Environment Variables)

Copy these from your `.env` file:

```
DATABASE_URL=<your Turso DB URL>
DATABASE_AUTH_TOKEN=<your Turso auth token>
```

**Do NOT copy:**
- `RUNABLE_URL` — sandbox only
- `WEBSITE_URL` — sandbox only  
- `AI_GATEWAY_BASE_URL` / `AI_GATEWAY_API_KEY` — Runable-specific, not needed unless you re-implement AI features

---

## Update Your Domain

Edit `packages/web/website.config.json`:
```json
{
  "url": "https://YOUR-REAL-DOMAIN.com"
}
```

This is used for OG tags / metadata.

---

## API Routes

The `/api/youtube` route is now a **Cloudflare Pages Function** at:
`packages/web/functions/api/youtube.ts`

Cloudflare Pages automatically picks up files in the `functions/` folder.
No extra configuration needed — it'll be available at `/api/youtube` on your deployed site.

The `/api/ping` route was dev-only and is not included.

---

## Push to GitHub

```bash
# From the export folder root
git init
git add .
git commit -m "initial"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then connect the repo in Cloudflare Pages dashboard.

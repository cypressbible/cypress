# Cypress Bible Static Site

This repository is now scaffolded as an Astro static site for Cloudflare Pages.
It also includes TinaCMS for block-style content editing on Markdown content.

## Local development

```bash
npm install
npm run dev
```

Tina admin **local**:

- Run `npm run dev`, then open `http://localhost:4321/admin/index.html` (Tina runs in dev mode with local content).

Tina admin **production** (e.g. `https://cypress-bse.pages.dev/admin/index.html`) does **not** appear until you:

1. Create a **TinaCloud** project at [app.tina.io](https://app.tina.io/), connect the **cypressbible/cypress** repo, and note the **Client ID** and a **read-only token** ([going live / TinaCloud](https://tina.io/docs/tinacloud/overview)).
2. In **Cloudflare Pages → your project → Settings → Environment variables** (for **Production** builds), add:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` — your Tina client ID (must be present at **build** time).
   - `TINA_TOKEN` — your Tina read-only token (build time; treat as a secret).
3. Change the **Build command** from `npm run build` to:

   ```bash
   npm run build:tina
   ```

   That runs `tinacms build` (generates `public/admin/`) then `astro build`.

4. Commit **`tina/tina-lock.json`** after it is generated (run `npm run dev` or `npx tinacms dev` once locally so Tina creates it, then commit). TinaCloud needs this file in GitHub to index your schema.

Copy `.env.example` to `.env` for local `tinacms build` / testing (Tina only reads `.env` for the CLI, not `.env.local`).

## Build

```bash
npm run build
npm run preview
```

Site-only build (no `/admin` output):

```bash
npm run build
```

Full production build with Tina admin (needs Tina env vars):

```bash
npm run build:tina
```

## Cloudflare Pages settings

- Framework preset: `Astro` or `None`
- Build command: `npm run build:tina` once Tina Cloud env vars are set (otherwise `npm run build` is fine without admin).
- Build output directory: `dist`
- Production branch: `main`

## TinaCMS content location

- Homepage content: `src/content/pages/home.md`
- Tina schema: `tina/config.ts`
- Astro content schema: `src/content.config.ts`

## Welcome video

The file `public/videos/welcome.mp4` is a **compressed H.264** copy (~10MB) deployed with the site. To swap it, replace that file or set `welcomeVideoSrc` in `src/content/pages/home.md` to a hosted URL. See `public/videos/README.md`.

## WordPress migration docs

- Checklist: `docs/wp-to-static-migration-checklist.md`
- URL inventory template: `docs/templates/url-inventory.csv`
- Feature replacement plan: `docs/templates/feature-replacement-plan.csv`
- Redirect map template: `docs/templates/redirect-map.csv`

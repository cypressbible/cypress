# Cypress Bible Static Site

This repository is now scaffolded as an Astro static site for Cloudflare Pages.
It also includes TinaCMS for block-style content editing on Markdown content.

## Local development

```bash
npm install
npm run dev
```

Tina admin (local mode):

- `http://localhost:4321/admin/index.html`

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages settings

- Framework preset: `Astro` or `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## TinaCMS content location

- Homepage content: `src/content/pages/home.md`
- Tina schema: `tina/config.ts`
- Astro content schema: `src/content.config.ts`

If you later connect Tina Cloud credentials (`TINA_CLIENT_ID`, `TINA_TOKEN`), you can
run `npm run build:cms` to generate the production admin app.

## Welcome video

The file `public/videos/welcome.mp4` is a **compressed H.264** copy (~10MB) deployed with the site. To swap it, replace that file or set `welcomeVideoSrc` in `src/content/pages/home.md` to a hosted URL. See `public/videos/README.md`.

## WordPress migration docs

- Checklist: `docs/wp-to-static-migration-checklist.md`
- URL inventory template: `docs/templates/url-inventory.csv`
- Feature replacement plan: `docs/templates/feature-replacement-plan.csv`
- Redirect map template: `docs/templates/redirect-map.csv`

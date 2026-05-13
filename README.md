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
3. **Build command** on Pages can stay the default **`npm run build`** (runs `tinacms build --skip-cloud-checks` then `astro build` so deploys are not blocked by Tina’s branch-index HTTP check). Use **`npm run build:tina:strict`** in CI only when Tina Cloud shows your branch as fully indexed and you want full pre-build validation.

4. Commit **`tina/tina-lock.json`** after it is generated (run `npm run dev` or `npx tinacms dev` once locally so Tina creates it, then commit). TinaCloud needs this file in GitHub to index your schema.

Copy `.env.example` to `.env` for local `tinacms build` / testing (Tina only reads `.env` for the CLI, not `.env.local`).

## Build

Full production build (Tina admin in `dist/admin/`; needs Tina env vars for `tinacms build`):

```bash
npm run build
npm run preview
```

Site-only (Astro only, no `/admin`; no Tina credentials needed):

```bash
npm run build:astro
```

## Cloudflare Pages settings

- Framework preset: `Astro` or `None`
- Build command: **`npm run build`** (includes Tina) once Tina Cloud env vars are set. Use **`npm run build:astro`** only if you intentionally deploy without `/admin`.
- Build output directory: `dist`
- Production branch: `main`

## Tina Cloud: `Branch 'main' is not on TinaCloud` (Pages build fails)

The Cloudflare log shows `tinacms build` stopping before `astro build`. That almost always means **Tina Cloud does not recognize this repo + branch + credentials combo**, not Astro.

1. **Match the Client ID to the project in the error**  
   The log links to a Tina project id (for example `…/projects/cb87ebbb-…/configuration`). In Cloudflare → **Environment variables** → **Production**, open `NEXT_PUBLIC_TINA_CLIENT_ID` and confirm it is the **same** project’s client id from [app.tina.io](https://app.tina.io) → that project → **Overview**. A typo or an old project’s id will produce this error even if `main` looks fine elsewhere.

2. **Branches**  
   In that same Tina project → **Configuration** → **Branches**, ensure **`main`** is listed and **indexed** (not stuck on “pending”). The GitHub repo attached there must be **`cypressbible/cypress`**.

3. **Force the branch name in Cloudflare** (optional)  
   Add a Production variable **`TINA_BRANCH`** = `main`. `tina/config.ts` reads it first, before `CF_PAGES_BRANCH`.

4. **Refresh `tina/tina-lock.json`**  
   After any change to `tina/config.ts`, run **`npm run build`** (or `npx tinacms build`) **locally** with `.env` containing `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`, then commit the updated `tina/tina-lock.json`. If the dev server is using port 9000, use for example: `npx tinacms build --datalayer-port 9010`. See [Tina Cloud troubleshooting](https://tina.io/docs/tinacloud/troubleshooting).

5. **Branch check still fails on Pages**  
   Default **`npm run build`** / **`npm run build:tina`** runs `tinacms build --skip-cloud-checks` so Cloudflare can finish even when Tina shows `Branch 'main' is not on TinaCloud` (that flag skips Tina’s pre-build indexing/schema HTTP checks; the static site still builds from Git files, and `/admin` is still generated). After Tina lists `main` as indexed, you can optionally switch CI to **`npm run build:tina:strict`** for full cloud validation.

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

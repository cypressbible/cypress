# Cypress Bible web — design system

Visual language aligned with the **BibleSlides marketing UI**: flat, minimal, warm neutrals, Geist typography, solid teal brand (`#285570`).

Defined in `src/styles/global.css` and `src/styles/fonts.css`. Prefer CSS variables for all new work.

---

## 1. Design philosophy

- **Flat over dimensional** — 1px warm borders for depth; avoid heavy box shadows.
- **Warm neutrals** — `#faf7f5` backgrounds, `#e3ded7` borders (not cool gray-50/200).
- **Sharp type, generous space** — Geist Sans with tight headline tracking (`letter-spacing: -0.025em`).
- **Solid brand color** — `#285570` for buttons, links, sub-page heroes (no gradient fills).
- **Function-first motion** — opacity transitions only; no hover lift or bounce.

---

## 2. Fonts

| Role | Stack |
|------|--------|
| UI / body | `var(--font-sans)` — Geist Sans via `@fontsource/geist-sans` |
| Eyebrows / footer labels | `var(--font-mono)` — Geist Mono |

Loaded in `src/styles/fonts.css`, imported from `src/layouts/BaseLayout.astro`.

### Type hierarchy

| Role | Pattern |
|------|---------|
| Hero headline | `font-weight: 700`, `letter-spacing: -0.025em`, fluid `clamp()` |
| Section headline | Bold, tight tracking |
| Eyebrow | `font-mono`, 11px, uppercase, `letter-spacing: 0.12em`, `color: var(--bs-text-sec)` |
| Body | `1rem`, `line-height: 1.625`, `color: var(--bs-text-sec)` |

---

## 3. Color tokens (`:root`)

### BibleSlides marketing tokens

| Token | Value | Use |
|-------|-------|-----|
| `--bs-dark` | `#0d1117` | Hero backgrounds, dark immersive bands |
| `--bs-dark-2` | `#161b22` | Dark surfaces / stats strips |
| `--bs-teal` | `#285570` | Primary buttons, links, accents, sub-page heroes |
| `--bs-warm-bg` | `#faf7f5` | Page / section alternation |
| `--bs-warm-bdr` | `#e3ded7` | All 1px borders on light UI |
| `--bs-text-pri` | `#1c1917` | Headings on light backgrounds |
| `--bs-text-sec` | `#6b6459` | Body text on light backgrounds |
| `--bs-text-muted` | `#b0a89e` | Placeholders, meta |
| `--bs-footer-bg` | `#0a0d11` | Footer |
| `--bs-white` | `#ffffff` | Cards, inputs |

### Legacy aliases (`--cbc-*`)

Still supported for existing components — they map to the tokens above.

---

## 4. Components

### Header (`.top-nav`)

Warm cream `rgba(250,247,245,0.97)`, `backdrop-filter: blur(8px)`, `border-bottom: 1px solid var(--bs-warm-bdr)`. Logo 42px height.

### Buttons (`.btn-primary`, `.hero-cta`, `.welcome-cta`)

- Background: `var(--bs-teal)`
- `border-radius: var(--radius-sm)` (6px)
- `min-height: 44px`
- Hover: `opacity: 0.9` (no shadow lift)

### Cards

White background, `border: 1px solid var(--bs-warm-bdr)`, no drop shadow. Hover: border shifts toward teal where interactive.

### Footer (`.site-footer`)

- Background: `var(--bs-footer-bg)`
- Column headers: Geist Mono, 10px uppercase, `rgba(255,255,255,0.25)`
- Links: `rgba(255,255,255,0.35)` → white on hover
- Dividers: `rgba(255,255,255,0.06)`

---

## 5. Page modes

1. **Dark immersive** — `--bs-dark` heroes (homepage rotator, mission, events hero).
2. **Light editorial** — `--bs-white` / `--bs-warm-bg` bands with `--bs-text-pri` / `--bs-text-sec`.

Alternate sections with warm bg + 1px `#e3ded7` dividers.

---

## 6. What not to do

- Gradient button or hero backgrounds (use solid `#285570` or `#0d1117`)
- `box-shadow-lg` / hover lift on cards
- Cool gray borders (`#e2e8f0`, `border-gray-200`)
- Montserrat / Libre Baskerville / Inter
- Decorative bounce or translate hover animations

---

## 7. File reference

| File | Purpose |
|------|---------|
| `src/styles/fonts.css` | Geist Sans + Mono imports |
| `src/styles/global.css` | Tokens + all component styles |
| `src/layouts/BaseLayout.astro` | Font + global CSS load |
| `src/components/SiteHeader.astro` | Site header markup |
| `src/components/SiteFooter.astro` | Site footer markup |

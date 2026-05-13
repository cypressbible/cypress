# Cypress Bible web — design system

This document locks the **visual language** for the static site (Astro) so new pages do not drift toward one-off colors or layout patterns. Engineers and content editors should skim this before adding pages or large UI blocks.

---

## 1. Foundations

### 1.1 Two page modes

1. **Dark immersive** — Hero-first pages on near-black slate (`var(--cbc-bg-deep)` → `var(--cbc-bg-main)`). Used for homepage hero, `/our-mission`, `/what-we-believe` hero band, `/events` hero + embedded calendar band.

2. **Light editorial** — White or soft-gray surfaces (`var(--cbc-light-surface)` / `#e9edf5`) on top of dark global body chrome, **or** full-bleed light sections (Plan a Visit stripes, Leadership roster, Events card list). Typography stays **dark** (`#0f172a`, `#475569`) on light panels.

Pick one primary mode **per scrolling region**. When switching modes, use a deliberate band (padding + background change), not gradual mixing.

### 1.2 Structural chrome

- **Site header**: Sticky, glassy overlay `rgba(5, 9, 21, 0.92)` over content.
- **Site footer**: Dark charcoal `#1a1a1a` / legal bar `#141414`, consistent across all routes.
- **Main body** (`body`): Dark `#0b1220` exposes only at edges unless a page wraps full-bleed light content (e.g. staff page).

---

## 2. Color tokens (`:root`)

Defined in `src/styles/global.css`. Prefer these CSS variables **for new work**:

| Token | Role |
| ----- | ----- |
| `--cbc-bg-deep` | Deepest immersive fill (`#050915`) |
| `--cbc-bg-main` | Default page canvas behind nav (`#0b1220`) |
| `--cbc-accent-slate` | Primary links / headings on brand (`#294a62`) |
| `--cbc-accent-soft` | Softer slate / eyebrow accents (`#4a6f8f`) |
| `--cbc-accent-teal` | Secondary accent (pillars / event accent bar) (`#2d6a6a`) |
| `--cbc-light-surface` | Light section fill (`#f4f7fb`) |
| `--cbc-card` | White cards (`#ffffff`) |
| `--cbc-line` | Borders on dark (`rgba(255,255,255,0.08)`) |
| `--cbc-line-dark` | Borders on light (`#e2e8f0`) |
| `--cbc-heading`, `--cbc-text` | Default light text on immersive sections |

Avoid introducing new blues/grays unless they map clearly to these roles (WCAG contrast on both dark and light).

---

## 3. Typography

- **Sans default**: `"Arial", sans-serif` — navigation, utility, dense UI (leadership roster, footer, event cards body).
- **Serif accents**: `Georgia`, `Times New Roman` — sparingly on **immersive headings** (`/what-we-believe`, `/events` page title family) only; do not use for paragraphs.
- **Nav / eyebrow cadence**: Small caps vibe via uppercase + `letter-spacing: 0.06em–0.16em`.
- **In-page H1**: Responsive clamp sizing; immersive pages may use serif; light editorial sections use sans bold.

---

## 4. Radius, shadow, rhythm

| Token | Use |
| ----- | ----- |
| `--radius-sm` (6px) | Chips, pills |
| `--radius-md` (12px) | Footer panels |
| `--radius-lg` (14px) | Event cards |

Shadows stay **soft** (`0–4–28 rgba(15,23,42, 0.06)` on cards). Hero sections use gradients, not harsh drop shadows on text.

Spacing: favor **clamp()** bands already used elsewhere (`24px→48px` lateral padding).

---

## 5. Imagery & media

- **Raster**: Prefer **WebP** for photos; descriptive `alt`; fixed `width` / `height` when possible for CLS.
- **Embeds**: Google Maps / YouTube — rounded rectangle, subdued border consistent with immersive theme.
- **Leadership portraits**: Aspect ~4:5, `object-fit: cover`; initials fallback inherits soft gradient from token family.

---

## 6. Events & calendar (content integration)

The **authoritative URLs** live in **`src/config/calendar-embed.ts`**:

- **ICS import:** `webcal://cypressbiblechurch.ccbchurch.com/w_calendar_sub.ics` (build normalizes `webcal` → **`https`**; default fetch uses **`?strip_html=true`** for cleaner text).
- **Embed:** `/goto/embed/calendar/public`
- **Web:** `/goto/events/public`

**Listed events cards** (`/events`) and the **footer “Next up”** block consume that ICS feed at **build time**. If **`CALENDAR_ICAL_URL`** is **unset**, Astro uses **`CHURCH_CALENDAR_ICAL_IMPORT_URL`** from config (CCB subscription feed).

```bash
# Optional — override ICS source (HTTPS or webcal URL)
CALENDAR_ICAL_URL=webcal://cypressbiblechurch.ccbchurch.com/w_calendar_sub.ics

# Alternatively:
# CALENDAR_ICAL_URL=https://cypressbiblechurch.ccbchurch.com/w_calendar_sub.ics?strip_html=true
```

- If fetching fails during build or the feed is empty, cards may omit items while the embedded CCB iframe on `/events` can still render.
- Regenerate deployments after changing **`CALENDAR_ICAL_URL`** (static HTML is generated once per build).

---

## 7. Third-party stacks (unchanged but documented)

- **Font Awesome 6**: Icons via CDN tag in layout.
- **TinaCMS**: Admin lives under `/admin`; home content pulls menu slides.
- **Formsubmit**: Newsletter footer form.

---

## 8. QA before shipping visuals

1. Hover / focus-visible states visible on interactive elements.
2. Contrast acceptable on dark + white cards.
3. No orphan brand colors imported ad hoc—map to **`--cbc-*`** or extend tokens here first.

---

_Last updated alongside events + footer calendar migration._

# WordPress (Elementor) to Static Site Checklist

## 1) Audit the current WordPress site

- Export all indexed URLs from sitemap and analytics.
- List all Elementor templates (header, footer, single, archive, popups).
- List all plugins and mark each one as:
  - Keep behavior in static site
  - Replace with third-party service
  - Remove
- Inventory dynamic features:
  - Forms
  - Search
  - Blog archives/tags/categories
  - Membership/auth
  - E-commerce

Use `docs/templates/url-inventory.csv` and `docs/templates/feature-replacement-plan.csv`.

## 2) Freeze and capture content

- Set a migration window and content freeze date.
- Export pages/posts from WordPress (WXR XML).
- Export SEO metadata (title, meta description, canonical, OG image).
- Download media library and verify all referenced files exist.

## 3) Rebuild with static architecture (Astro)

- Build reusable components for Elementor sections:
  - Hero
  - CTA band
  - Testimonial block
  - FAQ accordion
  - Feature grid
- Convert each page to Markdown or Astro content files.
- Keep slug parity with old URLs.

## 4) Replace dynamic WordPress features

- Forms: Formspree, Basin, or Cloudflare Worker endpoint.
- Search: Pagefind.
- Comments: Giscus or Disqus (if needed).
- Auth/member areas: Cloudflare Access or external auth service.

## 5) SEO and launch-readiness

- Preserve `title`, `meta description`, canonical tags, OG tags.
- Generate `sitemap.xml` and `robots.txt`.
- Build a 301 redirect map from old URLs to new URLs.
- Verify internal links and media URLs.

Use `docs/templates/redirect-map.csv`.

## 6) Validate before cutover

- Crawl both old and new sites and compare:
  - Status codes
  - Titles/descriptions
  - Canonicals
  - H1 presence
- Run Lighthouse on key templates.
- Test forms, search, and key conversion paths.

## 7) Cutover and monitor

- Add custom domain in Cloudflare Pages when ready.
- Enable redirects.
- Submit sitemap in Google Search Console.
- Monitor 404s, ranking shifts, and Core Web Vitals for 2-4 weeks.

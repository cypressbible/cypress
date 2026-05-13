/** Cypress Bible Church calendar (Church Community Builder — webcal/subscribe URLs use HTTPS when fetching server-side). */

/** Webcal subscribers use `webcal://cypressbiblechurch.ccbchurch.com/w_calendar_sub.ics` — build uses HTTPS. */
export const CHURCH_CALENDAR_ICAL_SUBSCRIBE_URL =
  "https://cypressbiblechurch.ccbchurch.com/w_calendar_sub.ics";

/** Same feed with `strip_html=true` for cleaner ICS text (default for Astro import). */
export const CHURCH_CALENDAR_ICAL_IMPORT_URL =
  "https://cypressbiblechurch.ccbchurch.com/w_calendar_sub.ics?strip_html=true";

/** Embeddable public calendar (CCB). */
export const CHURCH_CALENDAR_EMBED_SRC =
  "https://cypressbiblechurch.ccbchurch.com/goto/embed/calendar/public";

/** Interactive public events page (CCB). */
export const CHURCH_CALENDAR_WEB_URL =
  "https://cypressbiblechurch.ccbchurch.com/goto/events/public";

/** `webcal://…` → `https://…` so `fetch` works in Node/CI. */
export function normalizeCalendarIcsFetchUrl(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  return t.replace(/^webcal:/i, "https:");
}

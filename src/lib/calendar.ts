/**
 * Pull church events from Google Calendar’s **secret iCal URL** at build time.
 * @see DESIGN_SYSTEM.md (calendar section)
 */

import ical from "node-ical";

export type SerialCalendarEvent = {
  uid: string;
  title: string;
  /** ISO UTC */
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
  location?: string;
};

function icalUrl(): string | undefined {
  const raw =
    typeof process !== "undefined" && process.env?.CALENDAR_ICAL_URL
      ? String(process.env.CALENDAR_ICAL_URL)
      : "";
  const v = raw.trim();
  return v.length > 0 ? v : undefined;
}

function startOf(ev: { start?: Date }): Date {
  if (!(ev.start instanceof Date) || Number.isNaN(ev.start.getTime())) return new Date(0);
  return ev.start;
}

function isCalendarEvent(
  ev: unknown
): ev is {
  summary?: string;
  start?: Date;
  end?: Date;
  uid?: string;
  description?: string;
  location?: string;
  datetype?: string;
  status?: string;
  type?: string;
} {
  return (
    !!ev &&
    typeof ev === "object" &&
    (ev as { type?: string }).type === "VEVENT" &&
    typeof (ev as { uid?: unknown }).uid === "string"
  );
}

let cachePromise: Promise<SerialCalendarEvent[]> | null = null;

export function loadCalendarEvents(): Promise<SerialCalendarEvent[]> {
  if (!cachePromise) cachePromise = fetchAndParse();
  return cachePromise;
}

async function fetchAndParse(): Promise<SerialCalendarEvent[]> {
  const url = icalUrl();
  if (!url) return [];

  let text: string;
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "text/calendar,text/plain;q=0.9,*/*;q=0.1",
        "User-Agent":
          "Mozilla/5.0 (compatible; CypressBibleWebsite/1.0; church calendar importer)"
      }
    });
    if (!res.ok) {
      console.warn(`[calendar] ICS HTTP ${res.status} for CALENDAR_ICAL_URL`);
      return [];
    }
    text = await res.text();
    if (!text.includes("BEGIN:VCALENDAR")) {
      console.warn("[calendar] Response is not a valid ICS document");
      return [];
    }
  } catch (e) {
    console.warn("[calendar] Fetch failed:", (e as Error).message ?? e);
    return [];
  }

  const parsed = await ical.async.parseICS(text);
  const rows: SerialCalendarEvent[] = [];
  const now = Date.now();

  for (const k of Object.keys(parsed)) {
    const raw = parsed[k];
    if (!isCalendarEvent(raw)) continue;

    const status = typeof raw.status === "string" ? raw.status.toUpperCase() : "";
    if (status === "CANCELLED") continue;

    const summary = typeof raw.summary === "string" ? raw.summary.trim() : "";
    const title = summary || "(Untitled)";

    const start = startOf(raw);
    let endDt = raw.end instanceof Date ? raw.end : raw.start;
    if (!(endDt instanceof Date) || Number.isNaN(endDt.getTime())) {
      endDt = new Date(start.getTime() + 60 * 60 * 1000);
    }

    let allDay = false;
    if (typeof raw.datetype === "string") {
      allDay = raw.datetype.toLowerCase().includes("date");
    } else {
      const diff = endDt.getTime() - start.getTime();
      allDay = diff <= 86400000 && diff > 0 && start.getUTCHours() === 0 && start.getUTCMinutes() === 0;
    }

    rows.push({
      uid: String(raw.uid),
      title,
      start: start.toISOString(),
      end: endDt.toISOString(),
      allDay,
      description: typeof raw.description === "string" ? raw.description.replace(/\\n/g, "\n").trim() : undefined,
      location: typeof raw.location === "string" ? raw.location.trim() : undefined
    });
  }

  /** Keep events ending today onward (include full-day spanning) */
  return rows
    .filter((e) => Number.isFinite(new Date(e.end).getTime()))
    .filter((e) => new Date(e.end).getTime() >= now - 12 * 60 * 60 * 1000)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}

export async function getUpcomingSerializedEvents(limit: number): Promise<SerialCalendarEvent[]> {
  const all = await loadCalendarEvents();
  return all.slice(0, Math.max(0, limit));
}

export async function getNextSerializedEvent(): Promise<SerialCalendarEvent | undefined> {
  const all = await loadCalendarEvents();
  const now = Date.now();
  for (const ev of all) {
    if (new Date(ev.end).getTime() >= now - 60 * 1000) return ev;
  }
  return undefined;
}

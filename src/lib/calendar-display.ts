import type { SerialCalendarEvent } from "./calendar";

export const CHURCH_TZ = "America/Chicago";

export function formatEventRange(ev: SerialCalendarEvent): string {
  const optsDate: Intl.DateTimeFormatOptions = {
    timeZone: CHURCH_TZ,
    weekday: "short",
    month: "short",
    day: "numeric"
  };
  const optsTime: Intl.DateTimeFormatOptions = { timeZone: CHURCH_TZ, hour: "numeric", minute: "2-digit" };

  const s = new Date(ev.start);
  const e = new Date(ev.end);
  const dtfShort = new Intl.DateTimeFormat("en-US", optsDate);
  const dtfTime = new Intl.DateTimeFormat("en-US", optsTime);

  if (ev.allDay) {
    return `${dtfShort.format(s)} · All day`;
  }

  const datePart = dtfShort.format(s);
  const timePart = `${dtfTime.format(s)} – ${dtfTime.format(e)}`;
  return `${datePart} · ${timePart}`;
}

/** Compact line for footer / summary */
export function formatEventFooter(ev: SerialCalendarEvent): string {
  const s = new Date(ev.start);
  if (ev.allDay) {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: CHURCH_TZ,
      weekday: "short",
      month: "short",
      day: "numeric"
    }).format(s);
  }
  return new Intl.DateTimeFormat("en-US", {
    timeZone: CHURCH_TZ,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(s);
}

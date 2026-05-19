import type { SerialCalendarEvent } from "../lib/calendar";
import { formatEventRange } from "../lib/calendar-display";

const CDN = "https://cypressbible.org/wp-content/uploads";

export type SpotlightSlide = {
  id: string;
  title: string;
  /** Shown under the title (dates, times, or a short hook) */
  dateLine: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  /** Short label on the mosaic thumbnail */
  tileLabel: string;
  /** When set, dateLine is replaced at build time from the next matching ICS event */
  calendarTitleIncludes?: string;
};

const spotlightSlidesBase: SpotlightSlide[] = [
  {
    id: "plan-a-visit",
    title: "Plan a Sunday visit",
    dateLine: "Sundays · 9:30 am & 11:00 am",
    body: "We would love to meet you. Arrive a few minutes early, grab a bulletin, and let our hospitality team help you find your way—Kids ministry, seating, and next steps included.",
    ctaLabel: "Plan your visit",
    ctaHref: "/plan-a-visit",
    imageSrc:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "People gathered for worship at church",
    tileLabel: "Plan a visit"
  },
  {
    id: "equipping-classes",
    title: "Equipping Classes",
    dateLine: "Next session starts April 19, 2026",
    body: "Six-week classes on Sunday mornings—rich content, genuine connection, and preparation to live on mission. Meet at CBC during the 9:30 or 11:00 am services.",
    ctaLabel: "Learn more",
    ctaHref: "/ec",
    imageSrc: `${CDN}/2026/03/EC-Leaders-photos.jpg`,
    imageAlt: "Adults in Equipping Class discussion",
    tileLabel: "Equipping Classes",
    calendarTitleIncludes: "Equipping"
  },
  {
    id: "life-groups",
    title: "Find a Life Group",
    dateLine: "Groups meet all week across Cypress",
    body: "Life Groups are where we study Scripture, pray, and live out the one anothers together. There is a group for every season of life—join us as we grow in Christ.",
    ctaLabel: "Join a group",
    ctaHref: "/join-a-group",
    imageSrc: `${CDN}/2024/09/Equip-Life-Groups-Guys-01-scaled.webp`,
    imageAlt: "Life Group fellowship in a home",
    tileLabel: "Life Groups",
    calendarTitleIncludes: "Life Group"
  }
];

function matchCalendarDateLine(events: SerialCalendarEvent[], includes: string): string | undefined {
  const needle = includes.toLowerCase();
  const hit = events.find((e) => e.title.toLowerCase().includes(needle));
  if (!hit) return undefined;
  return formatEventRange(hit);
}

/** Merge optional live calendar dates into spotlight copy at build time */
export function resolveSpotlightSlides(calendarEvents: SerialCalendarEvent[]): SpotlightSlide[] {
  return spotlightSlidesBase.map((slide) => {
    if (!slide.calendarTitleIncludes) return slide;
    const fromCal = matchCalendarDateLine(calendarEvents, slide.calendarTitleIncludes);
    if (!fromCal) return slide;
    return { ...slide, dateLine: fromCal };
  });
}

export const spotlightSectionEyebrow = "Don’t miss what’s ahead";

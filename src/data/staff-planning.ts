/** Internal staff calendar planning — not linked from public navigation */

export type PlanningSeason =
  | "summer"
  | "fall-launch"
  | "christmas"
  | "easter"
  | "vbs"
  | "missions"
  | "equipping"
  | "outreach"
  | "none";

export type PlanningStatus = "confirmed" | "tbd" | "potential" | "ongoing";

export type PlanningComplexity = "low" | "medium" | "high";

export type MinistryKey =
  | "all-church"
  | "life-groups"
  | "equipping"
  | "kids"
  | "students"
  | "men"
  | "women"
  | "missions"
  | "worship"
  | "outreach"
  | "families"
  | "vbs";

export const ministryLabels: Record<MinistryKey, string> = {
  "all-church": "All-church",
  "life-groups": "Life Groups",
  equipping: "Equipping",
  kids: "Kids",
  students: "Students",
  men: "Men",
  women: "Women",
  missions: "Missions",
  worship: "Worship",
  outreach: "Outreach",
  families: "Families",
  vbs: "VBS"
};

export type PlanningEvent = {
  id: string;
  title: string;
  /** ISO date start (YYYY-MM-DD) */
  start: string;
  /** ISO date end for ranges; same as start for single days */
  end: string;
  planYear: 2026 | 2027;
  planLabel: "Fall 2026" | "2027";
  ministries: MinistryKey[];
  /** Estimated staff / volunteer load (1 = light, 5 = heavy) */
  staffLoad: 1 | 2 | 3 | 4 | 5;
  complexity: PlanningComplexity;
  season: PlanningSeason;
  status: PlanningStatus;
  /** Weeks before start that comms should be live (null = internal only) */
  publishLeadWeeks: number | null;
  notes?: string;
};

export const planningSeasons: { key: PlanningSeason; label: string }[] = [
  { key: "summer", label: "Summer" },
  { key: "fall-launch", label: "Fall launch" },
  { key: "vbs", label: "VBS" },
  { key: "missions", label: "Missions" },
  { key: "equipping", label: "Equipping" },
  { key: "outreach", label: "Outreach" },
  { key: "christmas", label: "Christmas" },
  { key: "easter", label: "Easter" },
  { key: "none", label: "General" }
];

/** Calendar Planning Fall 2026 + Calendar Planning 2027 */
export const planningEvents: PlanningEvent[] = [
  {
    id: "summer-lifestage-2026",
    title: "Summer programming — life stage ministries",
    start: "2026-05-31",
    end: "2026-09-06",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["kids", "students", "families", "worship"],
    staffLoad: 3,
    complexity: "medium",
    season: "summer",
    status: "ongoing",
    publishLeadWeeks: 4,
    notes: "Runs through Sept 6"
  },
  {
    id: "ny-reach-2026",
    title: "New York Reach mission trip",
    start: "2026-06-03",
    end: "2026-06-09",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["missions", "life-groups"],
    staffLoad: 4,
    complexity: "high",
    season: "missions",
    status: "confirmed",
    publishLeadWeeks: 8
  },
  {
    id: "vbs-2026",
    title: "VBS",
    start: "2026-06-22",
    end: "2026-06-26",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["vbs", "kids", "families"],
    staffLoad: 5,
    complexity: "high",
    season: "vbs",
    status: "confirmed",
    publishLeadWeeks: 10
  },
  {
    id: "family-meeting-jul-2026",
    title: "Church family meeting — fall programming changes",
    start: "2026-07-19",
    end: "2026-07-19",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["all-church"],
    staffLoad: 4,
    complexity: "high",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 6,
    notes: "SLC Gym · 6:00 pm"
  },
  {
    id: "fruit-spirit-lunch-2026",
    title: "Families celebration luncheon — Fruit of the Spirit wrap-up",
    start: "2026-07-26",
    end: "2026-07-26",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["families", "kids"],
    staffLoad: 3,
    complexity: "medium",
    season: "summer",
    status: "confirmed",
    publishLeadWeeks: 4,
    notes: "12:30 pm"
  },
  {
    id: "family-discipleship-jul-2026",
    title: "Family discipleship meeting (Birth–HS parents)",
    start: "2026-07-29",
    end: "2026-07-29",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["families", "kids", "students"],
    staffLoad: 4,
    complexity: "high",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 5,
    notes: "6:30 pm · ministry changes focus"
  },
  {
    id: "lg-training-aug-2026",
    title: "Life Group training (new + current leaders)",
    start: "2026-08-15",
    end: "2026-08-15",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["life-groups", "equipping"],
    staffLoad: 4,
    complexity: "high",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 6,
    notes: "9:00–10:30 am · Attributes of a Disciple · local/global expectations"
  },
  {
    id: "missions-lunch-aug-2026",
    title: "Missions update lunch",
    start: "2026-08-16",
    end: "2026-08-16",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["missions", "all-church"],
    staffLoad: 3,
    complexity: "medium",
    season: "missions",
    status: "confirmed",
    publishLeadWeeks: 4,
    notes: "12:30 pm · overview, values, finances"
  },
  {
    id: "ec-teacher-training-2026",
    title: "Equipping Class teacher training",
    start: "2026-08-29",
    end: "2026-08-29",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["equipping"],
    staffLoad: 4,
    complexity: "high",
    season: "equipping",
    status: "confirmed",
    publishLeadWeeks: 6,
    notes: "9:00–10:30 am · goals · teaching methodology"
  },
  {
    id: "lg-launch-aug-2026",
    title: "Life Groups launch / resume",
    start: "2026-08-30",
    end: "2026-08-30",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["life-groups"],
    staffLoad: 4,
    complexity: "medium",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 5,
    notes: "Fall weekday programming begins"
  },
  {
    id: "womens-weekday-2026",
    title: "Women's ministry — fall weekday start",
    start: "2026-09-01",
    end: "2026-09-01",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["women"],
    staffLoad: 3,
    complexity: "medium",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 4
  },
  {
    id: "students-weekday-2026",
    title: "5th grade–12th grade ministry — fall weekday start",
    start: "2026-09-02",
    end: "2026-09-02",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["students", "kids"],
    staffLoad: 4,
    complexity: "medium",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 4
  },
  {
    id: "mens-weekday-2026",
    title: "Men's ministry — fall weekday start",
    start: "2026-09-02",
    end: "2026-09-03",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["men"],
    staffLoad: 3,
    complexity: "medium",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 4
  },
  {
    id: "fall-sunday-programming-2026",
    title: "Fall Sunday morning programming — life stage ministries",
    start: "2026-09-13",
    end: "2026-09-13",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["kids", "students", "worship", "all-church"],
    staffLoad: 5,
    complexity: "high",
    season: "fall-launch",
    status: "confirmed",
    publishLeadWeeks: 8
  },
  {
    id: "ec-rotation-1-2026",
    title: "Equipping Classes — 1st rotation",
    start: "2026-09-13",
    end: "2026-10-18",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["equipping"],
    staffLoad: 4,
    complexity: "high",
    season: "equipping",
    status: "ongoing",
    publishLeadWeeks: 6
  },
  {
    id: "outreach-fair-2026",
    title: "Local outreach fair & global missions advocacy",
    start: "2026-09-19",
    end: "2026-09-19",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["outreach", "missions", "life-groups"],
    staffLoad: 4,
    complexity: "high",
    season: "outreach",
    status: "tbd",
    publishLeadWeeks: 6,
    notes: "Time TBD · life group participants"
  },
  {
    id: "ec-rotation-2-2026",
    title: "Equipping Classes — 2nd rotation",
    start: "2026-10-25",
    end: "2026-11-29",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["equipping"],
    staffLoad: 4,
    complexity: "high",
    season: "equipping",
    status: "ongoing",
    publishLeadWeeks: 6
  },
  {
    id: "fhf-nov-2026",
    title: "Families Helping Families — food distribution",
    start: "2026-11-21",
    end: "2026-11-21",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["families", "outreach"],
    staffLoad: 4,
    complexity: "medium",
    season: "outreach",
    status: "confirmed",
    publishLeadWeeks: 5
  },
  {
    id: "advent-week-2026",
    title: "First week of Advent",
    start: "2026-11-29",
    end: "2026-11-29",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["worship", "all-church", "families"],
    staffLoad: 4,
    complexity: "medium",
    season: "christmas",
    status: "potential",
    publishLeadWeeks: 8,
    notes: "Devotionals / testimonies?"
  },
  {
    id: "welcome-christmas-2026",
    title: "Welcome to Christmas outreach",
    start: "2026-12-04",
    end: "2026-12-04",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["outreach", "all-church", "worship"],
    staffLoad: 5,
    complexity: "high",
    season: "christmas",
    status: "confirmed",
    publishLeadWeeks: 8,
    notes: "6:30–8:00 pm"
  },
  {
    id: "christmas-show-2026",
    title: "CBC families Christmas show",
    start: "2026-12-13",
    end: "2026-12-13",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["families", "kids", "worship"],
    staffLoad: 4,
    complexity: "high",
    season: "christmas",
    status: "potential",
    publishLeadWeeks: 10
  },
  {
    id: "christmas-eve-2026",
    title: "Christmas Eve service (one service)",
    start: "2026-12-24",
    end: "2026-12-24",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["worship", "all-church"],
    staffLoad: 5,
    complexity: "high",
    season: "christmas",
    status: "confirmed",
    publishLeadWeeks: 10,
    notes: "5:00 pm"
  },
  {
    id: "dec-27-service-2026",
    title: "Sunday service (one service only)",
    start: "2026-12-27",
    end: "2026-12-27",
    planYear: 2026,
    planLabel: "Fall 2026",
    ministries: ["worship", "all-church"],
    staffLoad: 3,
    complexity: "medium",
    season: "christmas",
    status: "confirmed",
    publishLeadWeeks: 4,
    notes: "11:00 am"
  },
  {
    id: "community-gathering-2027",
    title: "Community gathering",
    start: "2027-03-20",
    end: "2027-03-20",
    planYear: 2027,
    planLabel: "2027",
    ministries: ["all-church", "outreach"],
    staffLoad: 3,
    complexity: "medium",
    season: "none",
    status: "confirmed",
    publishLeadWeeks: 5,
    notes: "2:00–4:00 pm"
  },
  {
    id: "good-friday-2027",
    title: "Good Friday service",
    start: "2027-03-26",
    end: "2027-03-26",
    planYear: 2027,
    planLabel: "2027",
    ministries: ["worship", "all-church"],
    staffLoad: 4,
    complexity: "high",
    season: "easter",
    status: "confirmed",
    publishLeadWeeks: 8,
    notes: "6:30 pm"
  },
  {
    id: "easter-2027",
    title: "Easter",
    start: "2027-03-28",
    end: "2027-03-28",
    planYear: 2027,
    planLabel: "2027",
    ministries: ["worship", "all-church", "kids"],
    staffLoad: 5,
    complexity: "high",
    season: "easter",
    status: "confirmed",
    publishLeadWeeks: 10
  },
  {
    id: "vbs-2027",
    title: "VBS",
    start: "2027-06-21",
    end: "2027-06-25",
    planYear: 2027,
    planLabel: "2027",
    ministries: ["vbs", "kids", "families"],
    staffLoad: 5,
    complexity: "high",
    season: "vbs",
    status: "confirmed",
    publishLeadWeeks: 10
  },
  {
    id: "missions-conf-2027",
    title: "Missions conference",
    start: "2027-10-08",
    end: "2027-10-10",
    planYear: 2027,
    planLabel: "2027",
    ministries: ["missions", "all-church"],
    staffLoad: 5,
    complexity: "high",
    season: "missions",
    status: "confirmed",
    publishLeadWeeks: 12
  },
  {
    id: "fhf-nov-2027",
    title: "Families Helping Families — food distribution",
    start: "2027-11-20",
    end: "2027-11-20",
    planYear: 2027,
    planLabel: "2027",
    ministries: ["families", "outreach"],
    staffLoad: 4,
    complexity: "medium",
    season: "outreach",
    status: "confirmed",
    publishLeadWeeks: 5
  },
  {
    id: "welcome-christmas-2027",
    title: "Welcome to Christmas",
    start: "2027-12-03",
    end: "2027-12-03",
    planYear: 2027,
    planLabel: "2027",
    ministries: ["outreach", "all-church", "worship"],
    staffLoad: 5,
    complexity: "high",
    season: "christmas",
    status: "confirmed",
    publishLeadWeeks: 8,
    notes: "6:30–8:00 pm"
  }
];

export type MonthLoad = {
  monthKey: string;
  label: string;
  year: number;
  month: number;
  eventCount: number;
  loadSum: number;
  loadAvg: number;
  peakLoad: number;
};

export type MinistryLoadCell = {
  ministry: MinistryKey;
  monthKey: string;
  load: number;
  eventCount: number;
};

function monthKeyFromIso(iso: string): string {
  return iso.slice(0, 7);
}

function formatMonthLabel(monthKey: string): string {
  const [y, m] = monthKey.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/** Expand multi-month ranges into each month they touch */
function monthsSpanned(start: string, end: string): string[] {
  const keys = new Set<string>();
  const s = new Date(`${start}T12:00:00`);
  const e = new Date(`${end}T12:00:00`);
  const cur = new Date(s.getFullYear(), s.getMonth(), 1);
  const endMonth = new Date(e.getFullYear(), e.getMonth(), 1);
  while (cur <= endMonth) {
    keys.add(`${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, "0")}`);
    cur.setMonth(cur.getMonth() + 1);
  }
  return [...keys].sort();
}

export function getMonthlyLoads(events: PlanningEvent[]): MonthLoad[] {
  const map = new Map<string, { loads: number[]; count: number }>();

  for (const ev of events) {
    for (const mk of monthsSpanned(ev.start, ev.end)) {
      const row = map.get(mk) ?? { loads: [], count: 0 };
      row.loads.push(ev.staffLoad);
      row.count += 1;
      map.set(mk, row);
    }
  }

  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([monthKey, { loads, count }]) => ({
      monthKey,
      label: formatMonthLabel(monthKey),
      year: Number(monthKey.slice(0, 4)),
      month: Number(monthKey.slice(5, 7)),
      eventCount: count,
      loadSum: loads.reduce((a, b) => a + b, 0),
      loadAvg: loads.reduce((a, b) => a + b, 0) / loads.length,
      peakLoad: Math.max(...loads)
    }));
}

export function getMinistryHeatmap(events: PlanningEvent[]): {
  months: string[];
  monthLabels: string[];
  cells: MinistryLoadCell[];
} {
  const monthSet = new Set<string>();
  const cellMap = new Map<string, MinistryLoadCell>();

  for (const ev of events) {
    for (const mk of monthsSpanned(ev.start, ev.end)) {
      monthSet.add(mk);
      for (const ministry of ev.ministries) {
        const key = `${ministry}|${mk}`;
        const prev = cellMap.get(key) ?? { ministry, monthKey: mk, load: 0, eventCount: 0 };
        prev.load += ev.staffLoad;
        prev.eventCount += 1;
        cellMap.set(key, prev);
      }
    }
  }

  const months = [...monthSet].sort();
  return {
    months,
    monthLabels: months.map(formatMonthLabel),
    cells: [...cellMap.values()]
  };
}

export function getPublishTimeline(events: PlanningEvent[]): {
  event: PlanningEvent;
  publishBy: string;
  weeksOut: number;
  isOverdue: boolean;
}[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((e) => e.publishLeadWeeks != null)
    .map((event) => {
      const start = new Date(`${event.start}T12:00:00`);
      const publishBy = new Date(start);
      publishBy.setDate(publishBy.getDate() - (event.publishLeadWeeks ?? 0) * 7);
      const publishByIso = publishBy.toISOString().slice(0, 10);
      const isOverdue = publishBy < today && start >= today;
      const weeksOut = Math.ceil((start.getTime() - today.getTime()) / (7 * 24 * 60 * 60 * 1000));
      return { event, publishBy: publishByIso, weeksOut, isOverdue };
    })
    .sort((a, b) => a.publishBy.localeCompare(b.publishBy));
}

export function getOpenSlots(events: PlanningEvent[]): PlanningEvent[] {
  return events.filter((e) => e.status === "tbd" || e.status === "potential");
}

export function getDashboardStats(events: PlanningEvent[]) {
  const fall2026 = events.filter((e) => e.planLabel === "Fall 2026");
  const highLoad = events.filter((e) => e.staffLoad >= 4);
  const openSlots = getOpenSlots(events);
  const ministrySet = new Set<MinistryKey>();
  events.forEach((e) => e.ministries.forEach((m) => ministrySet.add(m)));
  const christmas = events.filter((e) => e.season === "christmas");
  const christmasLoad = christmas.reduce((s, e) => s + e.staffLoad, 0);

  return {
    total: events.length,
    fall2026Count: fall2026.length,
    highLoadCount: highLoad.length,
    openCount: openSlots.length,
    ministryCount: ministrySet.size,
    christmasCount: christmas.length,
    christmasLoad
  };
}

export function maxHeatmapLoad(cells: MinistryLoadCell[]): number {
  return Math.max(1, ...cells.map((c) => c.load));
}

export function formatShortDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

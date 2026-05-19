import { getCollection } from "astro:content";
import type { Ministry } from "../data/ministries";

export async function getHomeMenuItems() {
  const pages = await getCollection("pages");
  const homePage = pages.find((entry) => entry.id === "home.md" || entry.id === "home");
  if (!homePage) {
    throw new Error("Missing content entry: src/content/pages/home.md");
  }
  return homePage.data.menuItems;
}

export function ministryPageMeta(ministry: Ministry) {
  return {
    title: `${ministry.pageTitle} | Cypress Bible Church`,
    description: ministry.metaDescription
  };
}

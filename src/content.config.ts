import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    menuItems: z.array(
      z.object({
        label: z.string(),
        href: z.string()
      })
    ),
    heroSlides: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        ctaText: z.string(),
        ctaHref: z.string(),
        backgroundImage: z.string().optional()
      })
    ),
    welcomeEyebrow: z.string(),
    welcomeTitle: z.string(),
    welcomeBody: z.string(),
    welcomeCtaText: z.string(),
    welcomeCtaHref: z.string(),
    welcomeVideoSrc: z.string(),
    discipleshipHeading: z.string(),
    discipleshipIntro: z.string(),
    discipleshipPillars: z.array(
      z.object({
        iconKey: z.enum(["worship", "community", "proclaim", "serve"]),
        circleColor: z.string(),
        badge: z.string(),
        title: z.string(),
        body: z.string(),
        lightCircle: z.boolean().optional()
      })
    )
  })
});

export const collections = { pages };

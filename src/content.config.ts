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
        href: z.string(),
        children: z
          .array(
            z.object({
              label: z.string(),
              href: z.string()
            })
          )
          .optional()
      })
    ),
    heroSlides: z.array(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        serviceTimes: z.string().optional(),
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
    welcomeVideoPoster: z.string(),
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
    ),
    storiesHeading: z.string(),
    storiesFeatured: z.object({
      eyebrow: z.string(),
      quote: z.string(),
      imageSrc: z.string(),
      imageAlt: z.string(),
      storyHref: z.string(),
      watchLabel: z.string(),
      ctaText: z.string(),
      ctaHref: z.string()
    }),
    storiesItems: z.array(
      z.object({
        quote: z.string(),
        imageSrc: z.string(),
        imageAlt: z.string(),
        storyHref: z.string(),
        watchLabel: z.string()
      })
    )
  })
});

export const collections = { pages };

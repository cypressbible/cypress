import { defineConfig } from "tinacms";

/**
 * Branch Tina uses for cloud builds (must match a branch listed in Tina Cloud → Configuration).
 * Override if CI branch env is wrong: set TINA_BRANCH in Cloudflare (e.g. `main`).
 * @see https://tina.io/docs/tinacloud/overview
 */
const branch =
  (process.env.TINA_BRANCH || "").trim() ||
  (process.env.CF_PAGES_BRANCH || "").trim() ||
  (process.env.VERCEL_GIT_COMMIT_REF || "").trim() ||
  (process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || "").trim() ||
  "main";

/**
 * TinaCloud credentials (required for `tinacms build` / production /admin).
 * Local `npm run dev` still works with nulls (local GraphQL).
 * @see https://tina.io/docs/tinacloud/overview
 */
const clientId =
  process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_PUBLIC_CLIENT_ID || null;

const token = process.env.TINA_TOKEN || null;

export default defineConfig({
  branch,
  clientId,
  token,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "src/content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }

            return `/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "SEO Title",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            required: true
          },
          {
            type: "object",
            name: "menuItems",
            label: "Main Menu Items",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true
              },
              {
                type: "string",
                name: "href",
                label: "URL",
                required: true
              },
              {
                type: "object",
                name: "children",
                label: "Dropdown links (optional)",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    required: true
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "URL (use /path or full https URL)",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "heroSlides",
            label: "Hero Slides",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Slide Title",
                description: "Use a vertical bar | to force a line break (exactly two lines). Example: WE EXIST TO|GLORIFY GOD",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Slide Subtitle",
                required: true
              },
              {
                type: "string",
                name: "serviceTimes",
                label: "Service times (optional, e.g. Sunday 9:30 & 11:00)"
              },
              {
                type: "string",
                name: "ctaText",
                label: "Button Label",
                required: true
              },
              {
                type: "string",
                name: "ctaHref",
                label: "Button URL",
                required: true
              },
              {
                type: "string",
                name: "backgroundImage",
                label: "Background Image URL (optional)"
              }
            ]
          },
          {
            type: "string",
            name: "welcomeEyebrow",
            label: "Welcome Eyebrow",
            required: true
          },
          {
            type: "string",
            name: "welcomeTitle",
            label: "Welcome Heading",
            required: true
          },
          {
            type: "string",
            name: "welcomeBody",
            label: "Welcome Paragraph",
            ui: {
              component: "textarea"
            },
            required: true
          },
          {
            type: "string",
            name: "welcomeCtaText",
            label: "Welcome Button Label",
            required: true
          },
          {
            type: "string",
            name: "welcomeCtaHref",
            label: "Welcome Button URL",
            required: true
          },
          {
            type: "string",
            name: "welcomeVideoSrc",
            label: "Welcome Video Source",
            required: true
          },
          {
            type: "string",
            name: "welcomeVideoPoster",
            label: "Welcome Video Poster Image URL",
            required: true
          },
          {
            type: "string",
            name: "discipleshipHeading",
            label: "Discipleship Heading",
            required: true
          },
          {
            type: "string",
            name: "discipleshipIntro",
            label: "Discipleship Intro",
            ui: { component: "textarea" },
            required: true
          },
          {
            type: "object",
            name: "discipleshipPillars",
            label: "Discipleship Pillars",
            list: true,
            fields: [
              {
                type: "string",
                name: "iconKey",
                label: "Icon",
                options: ["worship", "community", "proclaim", "serve"],
                required: true
              },
              {
                type: "string",
                name: "circleColor",
                label: "Circle color (hex)",
                required: true
              },
              {
                type: "string",
                name: "badge",
                label: "Badge label (small caps in circle)",
                required: true
              },
              {
                type: "string",
                name: "title",
                label: "Pillar title",
                required: true
              },
              {
                type: "string",
                name: "body",
                label: "Pillar body",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "boolean",
                name: "lightCircle",
                label: "Use dark icon (for light circle backgrounds)"
              }
            ]
          },
          {
            type: "string",
            name: "storiesHeading",
            label: "Our Stories Heading",
            required: true
          },
          {
            type: "object",
            name: "storiesFeatured",
            label: "Featured Story",
            fields: [
              {
                type: "string",
                name: "eyebrow",
                label: "Eyebrow Label",
                required: true
              },
              {
                type: "string",
                name: "quote",
                label: "Featured Quote",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "imageSrc",
                label: "Featured Image URL",
                required: true
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Featured Image Alt Text",
                required: true
              },
              {
                type: "string",
                name: "storyHref",
                label: "Featured Story URL",
                required: true
              },
              {
                type: "string",
                name: "watchLabel",
                label: "Featured Watch Label",
                required: true
              },
              {
                type: "string",
                name: "ctaText",
                label: "Featured CTA Label",
                required: true
              },
              {
                type: "string",
                name: "ctaHref",
                label: "Featured CTA URL",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "storiesItems",
            label: "Story Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "quote",
                label: "Story Quote",
                ui: { component: "textarea" },
                required: true
              },
              {
                type: "string",
                name: "imageSrc",
                label: "Story Image URL",
                required: true
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Story Image Alt Text",
                required: true
              },
              {
                type: "string",
                name: "storyHref",
                label: "Story URL",
                required: true
              },
              {
                type: "string",
                name: "watchLabel",
                label: "Watch Label",
                required: true
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});

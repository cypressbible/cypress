import { defineConfig } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null,
  token: null,
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

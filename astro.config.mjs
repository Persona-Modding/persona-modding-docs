// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightImageZoomPlugin from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://personamodding.com",
  experimental: {
    contentIntellisense: true,
  },
  integrations: [
    starlight({
      title: "Persona Modding",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Persona-Modding/persona-modding.github.io",
        },
        { icon: "discord", label: "Discord", href: "https://discord.gg/naoto" },
      ],
      editLink: {
        baseUrl:
          "https://github.com/Persona-Modding/persona-modding.github.io/edit/main/",
      },
      components: {
        // Override the default `Sidebar` component with a custom one.
        Sidebar: "./src/components/Sidebar.astro",
      },
      lastUpdated: false,
      plugins: [
        starlightImageZoomPlugin(),
        starlightSidebarTopics([
          {
            label: "General",
            link: "/general/contributing/setup",
            items: [
              {
                label: "Contributing",
                autogenerate: { directory: "/general/contributing" },
              },
            ],
          },
          {
            label: "Persona 3 FES (PS2)",
            link: "/p3f",
            items: [
              "p3f",
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    autogenerate: {
                      directory: "p3f/getting-started/using-mods/",
                    },
                  },
                  {
                    label: "Making Mods",
                    autogenerate: {
                      directory: "p3f/getting-started/making-mods/",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Persona 3 Portable (PC)",
            link: "/p3p",
            items: [
              "p3p",
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    autogenerate: {
                      directory: "p3p/getting-started/using-mods/",
                    },
                  },
                  {
                    label: "Making Mods",
                    autogenerate: {
                      directory: "p3p/getting-started/making-mods/",
                    },
                  },
                ],
              },
              {
                label: "Audio Modding",
                autogenerate: {
                  directory: "p3p/audio/",
                },
              },
            ],
          },
          {
            label: "Persona 3 Reload (PC)",
            link: "/p3r",
            items: [
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    autogenerate: {
                      directory: "p3r/getting-started/using-mods/",
                    },
                  },
                  {
                    label: "Making Mods",
                    autogenerate: {
                      directory: "p3r/getting-started/making-mods/",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Persona 4 Golden (PC)",
            link: "/p4g",
            items: [
              "p4g",
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    autogenerate: {
                      directory: "p4g/getting-started/using-mods/",
                    },
                  },
                  {
                    label: "Making Mods",
                    autogenerate: {
                      directory: "p4g/getting-started/making-mods/",
                    },
                  },
                ],
              },
              {
                label: "Audio Modding",
                autogenerate: {
                  directory: "p4g/audio/",
                },
              },
            ],
          },
          {
            label: "Persona 5 Royal (PC)",
            link: "/p5r",
            items: [
              "p5r",
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    autogenerate: {
                      directory: "p5r/getting-started/using-mods/",
                    },
                  },
                  {
                    label: "Making Mods",
                    autogenerate: {
                      directory: "p5r/getting-started/making-mods/",
                    },
                  },
                ],
              },
            ],
          },
          {
            label: "Metaphor Refantazio (PC)",
            link: "/metaphor",
            items: [
              "metaphor",
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    autogenerate: {
                      directory: "metaphor/getting-started/using-mods/",
                    },
                  },
                  {
                    label: "Making Mods",
                    autogenerate: {
                      directory: "metaphor/getting-started/making-mods/",
                    },
                  },
                ],
              },
            ],
          },
        ]),
      ],
    }),
  ],
});

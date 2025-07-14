// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  site: "https://personamodding.com",
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
      plugins: [
        starlightSidebarTopics([
          {
            label: "General",
            link: "/general/contributing",
            items: ["general/contributing"],
          },
          {
            label: "Persona 3 FES",
            link: "/p3f",
            items: ["p3f/getting-started"],
          },
          {
            label: "Persona 3 Portable",
            link: "/p3p",
            items: [
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    items: [
                      {
                        label: "Windows",
                        collapsed: true,
                        items: [
                          "p3p/getting-started/using-mods/windows/installing-mods",
                          "p3p/getting-started/using-mods/windows/troubleshooting",
                          "p3p/getting-started/using-mods/windows/faq",
                        ],
                      },
                      {
                        label: "Steam Deck",
                        collapsed: true,
                        items: [
                          "p3p/getting-started/using-mods/steam-deck/installing-mods",
                          "p3p/getting-started/using-mods/steam-deck/troubleshooting",
                          "p3p/getting-started/using-mods/steam-deck/faq",
                        ],
                      },
                      {
                        label: "Linux",
                        collapsed: true,
                        items: [
                          "p3p/getting-started/using-mods/linux/installing-mods",
                          "p3p/getting-started/using-mods/linux/troubleshooting",
                          "p3p/getting-started/using-mods/linux/faq",
                        ],
                      },
                      {
                        label: "Common",
                        collapsed: true,
                        items: [
                          "p3p/getting-started/using-mods/common/troubleshooting",
                          "p3p/getting-started/using-mods/common/faq",
                        ],
                      },
                    ],
                  },
                  {
                    label: "Making Mods",
                    items: [
                      "p3p/getting-started/making-mods/extracting-files",
                      "p3p/getting-started/making-mods/making-a-mod",
                      "p3p/getting-started/making-mods/replacing-files",
                      "p3p/getting-started/making-mods/publishing-a-mod",
                    ],
                  },
                ],
              },
              {
                label: "Audio Modding",
                items: [
                  "p3p/audio/audio-formatting",
                  "p3p/audio/audio-replacement",
                  "p3p/audio/audio-addition",
                  "p3p/audio/battle-music",
                ],
              },
            ],
          },
          {
            label: "Persona 3 Reload",
            link: "/p3r",
            items: [
              {
                label: "Getting Started",
                autogenerate: { directory: "p3r/getting-started" },
              },
            ],
          },
          {
            label: "Persona 4 Golden",
            link: "/p4g",
            items: [
              {
                label: "Getting Started",
                items: [
                  {
                    label: "Using Mods",
                    items: ["p4g/getting-started/using-mods/using-mods"],
                  },
                  {
                    label: "Making Mods",
                    items: [
                      "p4g/getting-started/making-mods/extracting-files",
                      "p4g/getting-started/making-mods/making-a-mod",
                      "p4g/getting-started/making-mods/replacing-files",
                      "p4g/getting-started/making-mods/publishing-a-mod",
                    ],
                  },
                ],
              },
              {
                label: "Audio Modding",
                items: [
                  "p4g/audio/audio-formatting",
                  "p4g/audio/audio-replacement",
                  "p4g/audio/audio-addition",
                  "p4g/audio/battle-music",
                ],
              },
            ],
          },
          {
            label: "Persona 5 Royal",
            link: "/p5r",
            items: ["p5r/getting-started"],
          },
        ]),
      ],
    }),
  ],
});

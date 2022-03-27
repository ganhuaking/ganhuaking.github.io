// @ts-check

const discordLink = "https://discord.gg/CzmVQjN";
const facebookLink = "https://fb.me/GanHuaKingSoftware";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "蔣幹話軟體",
  tagline: "台灣開發者的綜合型 Discord Server",
  url: "https://ganhuaking.tw",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  favicon:
    "https://ganhuaking.tw/asset-2022/03-27-brand/ganhuaking2022-favicon.png",
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },
  themeConfig: {
    image: "https://ganhuaking.tw/asset-2022/03-27-brand/ganhuaking2022-og.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "蔣幹話軟體",
      hideOnScroll: true,
      logo: {
        alt: "蔣幹話軟體 Logo",
        src: "https://ganhuaking.tw/asset-2022/03-27-brand/ganhuaking2022-favicon.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "社群介紹",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: discordLink,
          label: "Discord",
          position: "right",
        },
        {
          href: facebookLink,
          label: "Facebook",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "GanHuaKing Logo",
        src: "https://ganhuaking.tw/asset-2022/03-27-brand/ganhuaking2022.svg",
        href: discordLink,
        width: 160,
      },
      links: [
        {
          title: "社群介紹",
          items: [
            {
              label: "社群介紹",
              to: "docs",
            },
            {
              label: "Discord 介紹",
              to: "docs/discord",
            },
            {
              label: "合作夥伴",
              to: "docs/cooperator",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: discordLink,
            },
            {
              label: "Facebook",
              href: facebookLink,
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ganhuaking",
            },
          ],
        },
      ],
      copyright: `Copyright © 2019-${new Date().getFullYear()} 蔣幹話軟體, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-WFM5PCYSYZ",
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "meetups",
        path: "meetups",
        routeBasePath: "meetups",
        sidebarPath: require.resolve("./sidebarsMeetups.js"),
      },
    ],
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["zh"],
      },
    ],
  ],
};

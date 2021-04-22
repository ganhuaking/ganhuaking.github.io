/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "蔣幹話軟體",
  tagline: "台灣開發者的綜合型 Discord Server",
  url: "https://ganhuaking.tw",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ganhuaking", // Usually your GitHub org/user name.
  projectName: "ganhuaking.github.io", // Usually your repo name.
  themeConfig: {
    image: "img/og_image.png",
    navbar: {
      title: "蔣幹話軟體",
      logo: {
        alt: "蔣幹話軟體",
        src: "img/ghk_2021.svg",
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
          href: "https://discord.gg/CzmVQjN",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://fb.me/GanHuaKingSoftware",
          label: "Facebook",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
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
              href: "https://discord.gg/CzmVQjN",
            },
            {
              label: "Facebook",
              href: "https://fb.me/GanHuaKingSoftware",
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
      copyright: `Copyright © 2019-${new Date().getFullYear()} 蔣幹話軟體, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ganhuaking/ganhuaking.github.io/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/ganhuaking/ganhuaking.github.io/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

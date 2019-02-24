module.exports = {
  title: process.env.TITLE,
  description: process.env.DESCRIPTION,
  dest: "dist",
  themeConfig: {
    nav: [{ text: "👉講幹話 GoGoGo", link: process.env.DISCORD_INVITE_LINK }],
    sidebar: [
      ["/group/", "簡介"],
      ["/discord/", "Discord 介紹"],
      ["/cooperator/", "合作夥伴"]
    ],
    repo: "ganhuaking/ganhuaking.github.io",
    repoLabel: "GitHub",
    docsBranch: "dev/src",
    editLinks: true,
    editLinkText: "優化這個頁面"
  }
};

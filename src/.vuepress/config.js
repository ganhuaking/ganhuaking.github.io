module.exports = {
  title: '蔣幹話軟體',
  description: '台灣開發者的綜合型 Discord Server',
  dest: 'dist',
  themeConfig: {
    nav: [
      {
        text: '風雲榜',
        link: 'https://mee6.xyz/leaderboard/546392426122575874',
      },
      {
        text: 'Facebook',
        link: 'https://www.facebook.com/GanHuaKingSoftware',
      },
      { text: 'Discord', link: 'https://discord.gg/CzmVQjN' },
      {
        text: 'GitHub',
        link: 'https://github.com/ganhuaking/ganhuaking.github.io',
      },
    ],
    sidebar: [
      ['/group/', '簡介'],
      ['/discord/', 'Discord 介紹'],
      ['/cooperator/', '合作夥伴'],
    ],
    docsBranch: 'dev/src',
    editLinks: true,
    editLinkText: '優化這個頁面',
  },
};

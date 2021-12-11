---
description: 讓 Discord 更美更好用的工具
image: https://ganhuaking.tw/asset-2021/12-11-better-discord/og.png
authors: [ViPro]
tags:
  - discord
  - plugin
  - theme
---

# Better Discord

Better Discord 是個能讓 Discord 高度客製的好用工具， 有廣大的社群維護許多好用的 Plugins 和 Themes， 使用者可以依照自己的喜好搭配調整。

<!--truncate-->

## 安裝

首先先到 [Better Discord](https://betterdiscord.app/) 官網 下載並安裝，

## 安裝 PluginRepo

安裝完成後 Discord 不需要重啟， 點擊 ![User Settings](https://ganhuaking.tw/asset-2021/12-11-better-discord/userSettings.png) 後理論上會出現一個 Better Discord 的區塊：

![Plugins](https://ganhuaking.tw/asset-2021/12-11-better-discord/plugins.png)

接著進入 Plugins 頁面並點擊 [Open Plugins Folder](https://ganhuaking.tw/asset-2021/12-11-better-discord/openPluginsFolder.png) ，到 [這裡](https://betterdiscord.app/plugins?filter=repo) 下載 [PluginRepo](https://betterdiscord.app/plugin/PluginRepo) 的 `.js` 檔後放進剛剛的目錄 ( [ThemeRepo](https://betterdiscord.app/plugin/ThemeRepo) 也可以順便 )， 然後回到 Plugins 頁面將 PluginRepo 啟用：

![Enable PluginRepo](https://ganhuaking.tw/asset-2021/12-11-better-discord/enablePluginRepo.png)

接著會看到設定頁面左側選單多了 PluginRepo 的項目：

![PluginRepo](https://ganhuaking.tw/asset-2021/12-11-better-discord/pluginRepo.png)

進入之後就可以選擇自己喜歡的 plugins 安裝啦～ ( Theme 同理但是是使用 ThemeRepo)。 依照 Downloads 或 Stars 排序前幾個都滿好用的， 當然也有可能也有遺珠等待大家去發掘了！

## Custom CSS

另外除了套用 Theme 也可以在 Custom CSS 的地方調整介面， 例如可以像這樣調整字型：

```css
:root {
  --font-primary: "Victor Mono", "jf-openhuninn-1.1", Whitney, "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  --font-display: "Victor Mono", "jf-openhuninn-1.1", Ginto, "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  --font-code: "Victor Mono", "jf-openhuninn-1.1", Consolas, "Andale Mono WT",
    "Andale Mono", "Lucida Console", "Lucida Sans Typewriter",
    "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono",
    "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  --font-headline: "Victor Mono", "jf-openhuninn-1.1", Ginto Nord, Ginto, "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  --font-korean: "Victor Mono", "jf-openhuninn-1.1", Whitney,
    "Apple SD Gothic Neo", "NanumBarunGothic", "맑은 고딕", "Malgun Gothic",
    Gulim, 굴림, Dotum, 돋움, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-japanese: "Victor Mono", "jf-openhuninn-1.1", Whitney, Hiragino Sans, "ヒラギノ角ゴ ProN W3",
    "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, Osaka, "MS PGothic", "Helvetica Neue",
    Helvetica, Arial, sans-serif;
  --font-chinese-simplified: "Victor Mono", "jf-openhuninn-1.1", Whitney,
    "Microsoft YaHei New", 微软雅黑, "Microsoft Yahei", "Microsoft JhengHei",
    宋体, SimSun, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-chinese-traditional: "Victor Mono", "jf-openhuninn-1.1", Whitney,
    "Microsoft JhengHei", 微軟正黑體, "Microsoft JhengHei UI",
    "Microsoft YaHei", 微軟雅黑, 宋体, SimSun, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
}
```

擅長前端的朋友們也可以自己在 Discord 按 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> ( Mac OS 則是 <kbd>Command⌘</kbd> + <kbd>Option</kbd> + <kbd>I</kbd> ) 來看 style。

最後結果就能變像這樣子啦~

![final](https://ganhuaking.tw/asset-2021/12-11-better-discord/final.png)

- Theme - [DarkMatter](https://betterdiscord.app/theme/Dark%20Matter)
- Fonts
  - [Victor Mono](https://rubjo.github.io/victor-mono/)
  - [open 粉圓](https://justfont.com/huninn/)

我自己有遇到 Enable Transparency 開啟時 [PowerToys](https://docs.microsoft.com/en-us/windows/powertoys/) 的 [FancyZones](https://docs.microsoft.com/en-us/windows/powertoys/fancyzones) 無法正確定位的小問題， 關掉就沒事了。

另外 Better Discord 也有他們自己的 [Discord Server](https://discord.com/invite/0Tmfo5ZbORCRqbAd) 。

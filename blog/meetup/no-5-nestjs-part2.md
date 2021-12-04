---
title: 幹話#5 - NestJS part 2
date: 2021-12-04
description: NestJS 範例專案解析。
authors: [Miles]
tags:
- Meetups
- 幹話#5
---

NestJS 範例專案解析。

<!--truncate-->

延續[上次](no-4-nestjs-part1.md)的 NestJS，這次 Gson 針對範例專案做了更詳細的說明。

麥小編不是 Node.js 的開發者，所以大多數內容並不清楚。但程式架構大多的是相通的，比方說依賴注入的綁定方法與 Laravel 相同，不過有發現範圍限制是不一樣的，NestJS 要設定限制注入的範圍，而 Laravel 則是完全不限制，所以可以在世界各地取得想要的物件。過去曾在 Slim Framework 看過類似的做法是用 [Service Locator](https://www.runoob.com/design-pattern/service-locator-pattern.html)（感謝[雷大](https://github.com/tedmax100)分享）來限制 Container 取得服務的範圍。

詳細筆記可以參考[傳送門](https://ganhuaruanti.github.io/nestjs-document/)。

下一次將會由雷大分享 storage，未來形式也有可能會有調整，若有想分享的主題，歡迎來 [Discord](https://discord.io/ganhuaking) 或 [GitHub Discussions](https://github.com/ganhuaking/ganhuaking.github.io/discussions) 一起討論哦！

---
title: 幹話#2 - Docker workshop 2.0
date: 2021-11-11
description: 11/11 第二次的 Docker 閒聊。
authors: [Miles]
tags:
- Meetups
---

11/11 第二次的 Docker 閒聊。

<!--truncate-->

延續[前一次](no-1-docker-workshop-2_0-part1.md)的 port forwarding 內容，這次主要講 Volume 的 bind mount 和 Network 功能，並且說明了其中一種 Docker container 應用情境。

其中有討論到一個資安問題－－如果我們想把兩個 container 放在同一個 network 裡，但想讓其中一個 container 看不到另一個，該怎麼辦？

最後討論的結果是使用 iptables，Docker 官方文件也有提到[相關的內容](https://docs.docker.com/network/iptables/)，有興趣可以看文件了解。

本次加入兩個許願清單，分別為 NestJS 和 Design Pattern，若有想分享的主題，歡迎來 [Discord](https://discord.io/ganhuaking) 或 [GitHub Discussions](https://github.com/ganhuaking/meetups/discussions) 一起討論哦！

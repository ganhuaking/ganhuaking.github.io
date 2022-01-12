---
title: 幹話#1 - Docker workshop 2.0
date: 2021-11-05
description: 11/4 首次在線上直播，這次的主題是 Docker。
authors: [Miles]
tags:
- meetups
---

11/4 首次在線上直播，這次的主題是 Docker。

<!--truncate-->

身為主辦者，當然是私心使用 [30 天與 Docker 做好朋友](https://dockerbook.tw/)作為分享教材。因為線上分享要看大家實作過程有困難，所以還是採用演講的方法來跟大家分享 Docker。

這次我們花了約一個小時，內容如下：

1. `docker run` 詳解，使用了 hello-world 和 busybox image 來說明 Docker的機制
2. 介紹 port forwarding，了解 Container 的隔離特性

另外原本預期要做 [Dockercraft](https://github.com/docker/dockercraft) 來「具現化」Container，但因為不明原因失敗，後來有查到可能性原因如下：

因為當時使用 Lima ，裡面執行的 user 不是 root ，所以才會出現權限錯誤。

```
FATA[0000] Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.30/info: dial unix /var/run/docker.sock: connect: permission denied
```

後來是進 Lima VM，改用 sudo 解決。

後續出現的 Connection refused 則不確定是什麼原因，但推測是 docker.sock 權限有問題的關係，所以這段連線會一直被拒絕。改 sudo 和加上 --privileged 都不是完全有效（時好時壞），因此還不確定發生什麼問題。

若有什麼想跟我們分享的，歡迎來 [Discord](https://discord.io/ganhuaking) 或 [GitHub Discussions](https://github.com/ganhuaking/meetups/discussions) 一起討論哦！

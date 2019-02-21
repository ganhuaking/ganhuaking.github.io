# Discord 介紹

Discord 是一個通訊服務。它直接提供了三種不一樣的通訊功能：

- 一對一通訊
- 最多十人的群組通訊
- 建立一個多種主題的討論空間，讓成員可以在裡面自己參與有興趣的主題並與其他成員討論

同樣有一對一通訊與群組通訊功能的，如 [Line][line] 或 [Telegram][telegram]，相較就缺少了多主題討論空間。若同一時間有兩種以上的主題討論，將會讓討論空間變得非常地雜亂。

相對的，同樣有多主題討論空間的 [Slack][slack]，則是缺少了「直接」地一對一通訊或群組通訊功能。Slack 確實有這些功能，但都是加入某個 workspace 後才能使用的，Discord 則不需要，只要找得到帳號就能使用。

而與 [Slack][slack] 或 [Gitter][gitter] 相比，Discord 擁有更強大的權限控制功能，設定也算容易。這可以讓人數與主題更多的群組，能有效的管理討論。

## 名詞簡介

### Group

[Group](https://support.discordapp.com/hc/zh-tw/articles/223657667-%E7%BE%A4%E7%B5%84%E8%81%8A%E5%A4%A9%E5%92%8C%E8%AA%9E%E9%9F%B3) 可以直接讓最多十個帳號群組聊天，同時也提供語音與視訊（或桌面分享）聊天功能。

### Server

[Server](https://support.discordapp.com/hc/zh-tw/categories/200404378) 如同 Slack 的 workspace 一樣，提供一個環境，讓管理者可以建立多個[頻道](#channel)，成員則可以選擇自己有興趣的頻道參與討論。

### Channel

Channel 就像是聊天室，只要加入 server 的成員有權限的話，都能進入聊天室參與該主題的討論。

### Category

Category 可以幫 channels 分組。除了視覺與操作上的影響之外 Channel 的權限控管也可以依 category 作為同步對象。

## 基本操作方式

一開始請先在 [#welcome](https://discord.gg/CzmVQjN) 點擊 👍 回應來取得權限。

我們知道萬事起頭難，這只是入群小小的智力測驗。迄今莫約有 87% 自稱是程式人的人在這裏卡關放棄了。我們透過這樣的方式來過濾機器人和跟機器人差不多的人。

第一關順利通過之後請到 [#roles](https://discord.gg/gDzJKYR) 點擊 emoji 回應，bot 會依照您點擊的 emoji 給予對應的 role。

您可以到介面右方成員列表對自己點右鍵修改暱稱(支援中文)，讓別人更容易認識或辨識您。

Discord 支援 `@mention`，您可以標注 channel 內的某個 user 或某個 role 在線上的所有人(`@here`) 或是所有人(`@everyone`)。比方說，詢問 php 相關問題或是提供相關活動、職缺等訊息時您可以 `＠php` 來吸引將自己標註 php role 的成員注意。為避免傷了皇城之內的和氣，**請勿濫用**此功能。

Discord 支援 [markdown](https://support.discordapp.com/hc/zh-tw/articles/210298617-Markdown%E6%96%87%E6%9C%AC-101-%E8%81%8A%E5%A4%A9%E6%A0%BC%E5%BC%8F-%E7%B2%97%E9%AB%94-%E6%96%9C%E9%AB%94-%E4%B8%8B%E5%8A%83%E7%B7%9A-)。

## 進階

### Discord Apps

Discord 提供 API 供使用者可以任意撰寫自己想要的功能與 Discord 整合。

👉 [Developer Portal](https://discordapp.com/developers)

#### 3rd Party Bot

Discord 有許多成熟且常見的 bot 如 [MEE6](https://mee6.xyz/), [YAGPDB.xyz](https://yagpdb.xyz/)，可以訂閱 Twitch 及 YouTube、管理版面、使用 reaction assign role 等功能。

👉 更多 [Discord Bot List](https://discordbots.org/)

#### WebHook

Webhook 可以依事件觸發在 channel 自動發佈訊息，如：GitHub webhook。

👉 [Intro to Webhooks](https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

### 程式人必備擴充套件

Discord 的 [Rich Presence](https://discordapp.com/rich-presence) 可以顯示您正在玩的遊戲資訊，身為程式人也不遑多讓來個武力展示：

- [Eclipse IDE](https://marketplace.eclipse.org/content/discord-rich-presence-eclipse-ide)

- [JetBrains](https://plugins.jetbrains.com/plugin/10233-discord-integration)

- [Visual Studio](https://marketplace.visualstudio.com/items?itemName=swanzana.discord-rpc-vs)

- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=icrawl.discord-vscode)

## 開源專案

Discord 對開源專案十分友善，若您擁有熱門的開源專案，官方甚至提供免費使用特製網址與自訂宣傳圖片功能。悉知已有不少專案已從 [Slack][slack] 與 [Gitter][gitter] 搬移到 Discord 上。

[快來看看有哪些 open source repository 也使用 discord](https://discordapp.com/open-source)

<DiscordOpenSource />

[line]: https://line.me/
[telegram]: https://telegram.org/
[slack]: https://slack.com/
[gitter]: https://gitter.im/

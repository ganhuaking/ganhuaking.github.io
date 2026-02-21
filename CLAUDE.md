# CLAUDE.md

## 專案概述

這是**蔣幹話軟體 (GanHuaKing Software)** 的官方網站，一個台灣開發者社群。使用 **Docusaurus v2** (beta.20) 建置的靜態網站，作為文件入口、部落格與社群中心。

- **正式網站：** https://ganhuaking.tw
- **語言：** 繁體中文 (zh-Hant)

## 技術棧

- **框架：** Docusaurus 2.0.0-beta.20
- **前端：** React 17、TypeScript 4.6
- **樣式：** SASS/SCSS、CSS Modules
- **搜尋：** Lunr 搭配中文斷詞 (nodejieba)
- **內容格式：** Markdown / MDX，搭配 YAML frontmatter
- **套件管理：** pnpm（強制使用，npm/yarn 會失敗）
- **環境需求：** Node >=18、pnpm >=7

## 常用指令

```bash
pnpm install          # 安裝依賴套件
pnpm run start        # 啟動開發伺服器（支援熱更新）
pnpm run build        # 正式環境建置（輸出至 ./build）
pnpm run serve        # 本地預覽正式建置結果
pnpm run clear        # 清除 Docusaurus 快取
```

本專案沒有測試或 lint 指令。程式碼格式化由 **Husky pre-commit hook** 自動處理，會在 commit 前對暫存檔案執行 `pretty-quick --staged`（Prettier）。

## 專案結構

```
src/                    # React 元件與頁面（TypeScript）
  components/           # 共用元件（HomepageFeatures、Discord 小工具）
  pages/                # 頁面路由（index.tsx）
  css/                  # 全域樣式
docs/                   # 主要文件內容（Markdown）
blog/                   # 部落格文章（MDX，依日期整理）
meetups/                # Meetup 活動文件（獨立的 docs 外掛）
static/                 # 靜態資源
docusaurus.config.js    # Docusaurus 主要設定檔
sidebars.js             # 文件側邊欄結構
sidebarsMeetups.js      # Meetups 側邊欄結構
```

## 重要設定檔

- **`docusaurus.config.js`** — 網站設定、導覽列、頁尾、外掛、i18n
- **`sidebars.js`** / **`sidebarsMeetups.js`** — 文件與 meetups 的側邊欄導航
- **`tsconfig.json`** — TypeScript 設定；路徑別名 `@site/*` 對應到專案根目錄
- **`.husky/pre-commit`** — commit 前對暫存檔案執行 Prettier 格式化

## Git 工作流程與部署

- **開發分支：** `dev`
- **正式分支：** `master`（透過 GitHub Pages 自動部署）
- 推送到 `dev` 會觸發 GitHub Actions：安裝套件 → 建置 → 部署到 `master`
- CI 使用 `peaceiris/actions-gh-pages@v3` 進行部署

## 開發慣例

- 必須使用 **pnpm**（由 `preinstall` 腳本強制執行）
- Prettier 負責所有格式化，不需手動調整風格
- 部落格文章放在 `blog/`，需包含正確的 frontmatter 並依日期整理
- 文件放在 `docs/`（社群介紹）或 `meetups/`（活動內容）
- 僅支援深色模式（切換功能已停用）
- `onBrokenLinks: "throw"` — 失效連結會導致建置失敗

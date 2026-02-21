# CLAUDE.md

## Project Overview

This is the official website for **蔣幹話軟體 (GanHuaKing Software)**, a Taiwanese developer community. It is a static site built with **Docusaurus v2** (beta.20), serving as a documentation portal, blog, and community hub.

- **Live site:** https://ganhuaking.tw
- **Language:** Traditional Chinese (zh-Hant)

## Tech Stack

- **Framework:** Docusaurus 2.0.0-beta.20
- **UI:** React 17, TypeScript 4.6
- **Styling:** SASS/SCSS, CSS Modules
- **Search:** Lunr with Chinese segmentation (nodejieba)
- **Content:** Markdown / MDX with YAML frontmatter
- **Package Manager:** pnpm (enforced — npm/yarn will fail)
- **Node:** >=18, pnpm >=7

## Common Commands

```bash
pnpm install          # Install dependencies
pnpm run start        # Dev server with hot reload
pnpm run build        # Production build (outputs to ./build)
pnpm run serve        # Serve production build locally
pnpm run clear        # Clear Docusaurus cache
```

There are no test or lint commands. Code formatting is handled automatically by a **Husky pre-commit hook** that runs `pretty-quick --staged` (Prettier) on staged files.

## Project Structure

```
src/                    # React components and pages (TypeScript)
  components/           # Reusable components (HomepageFeatures, Discord widget)
  pages/                # Page routes (index.tsx)
  css/                  # Global styles
docs/                   # Main documentation content (Markdown)
blog/                   # Blog posts (MDX, organized by date)
meetups/                # Meetup documentation (separate docs plugin)
static/                 # Static assets
docusaurus.config.js    # Main Docusaurus configuration
sidebars.js             # Docs sidebar structure
sidebarsMeetups.js      # Meetups sidebar structure
```

## Key Configuration

- **`docusaurus.config.js`** — Site config, navbar, footer, plugins, i18n
- **`sidebars.js`** / **`sidebarsMeetups.js`** — Sidebar navigation for docs and meetups
- **`tsconfig.json`** — TypeScript config; path alias `@site/*` maps to repo root
- **`.husky/pre-commit`** — Runs Prettier on staged files before commit

## Git Workflow & Deployment

- **Development branch:** `dev`
- **Production branch:** `master` (auto-deployed via GitHub Pages)
- Pushing to `dev` triggers GitHub Actions: install → build → deploy to `master`
- The CI uses `peaceiris/actions-gh-pages@v3` for deployment

## Conventions

- Use **pnpm** exclusively (enforced by `preinstall` script)
- Prettier handles all formatting — no manual style rules needed
- Blog posts go in `blog/` with proper frontmatter and date-based organization
- Docs go in `docs/` (community info) or `meetups/` (meetup content)
- Dark mode is the only theme (toggle is disabled)
- `onBrokenLinks: "throw"` — broken links will fail the build

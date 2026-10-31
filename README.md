# Samurai Itan Portfolio

Single-page, continuously scrolling portfolio built with Next.js. All sections share one paper-texture background.

## Run locally
1. Install Node.js 20 or newer.
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

## Edit content
Most content is in `src/data/portfolio.ts`: name, role, About copy, stats, current positions, previous experience and contacts.

## Replace images
- Paper background: `public/images/paper-texture.png`
- Samurai illustration: `public/images/samurai.png`

Keep the filenames unchanged or update the paths in `src/app/globals.css` and `src/app/page.tsx`.

## Design
- `src/app/page.tsx` controls the single-page structure.
- `src/app/globals.css` controls layout, typography, texture and responsive styles.
- The paper texture is applied to the page body, so it continues behind all sections as one canvas.

Before publishing, verify all profile URLs and review every statistic and description.

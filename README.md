# City Foam — corporate website

Bilingual (Arabic default / English) corporate site for **City Foam (سيتي فوم)**, an Egyptian manufacturer of flexible polyurethane foam and mattresses since 2008.

## Stack
- **React 19 + Vite**: component architecture, static build. No animation libraries; motion is CSS-only and answers user actions.
- **Design**: white and pale sky-blue surfaces, navy text, the logo red for primary actions only, soft rounded corners, IBM Plex Sans Arabic for both languages. Full-screen hero video, oversized type, stacking product panels and CSS scroll-driven reveals (no JS libraries; off for reduced motion). The signature element is a giant word filled with real foam textures (`public/img/foam/strip.jpg`, used in `Colors.jsx` and the footer).

## Develop / build
```bash
npm install
npm run dev      # local dev server
npm run build    # outputs the static site to docs/
```
`docs/` is committed so GitHub Pages can serve it directly: **Settings → Pages → Deploy from a branch → `main` / `/docs`**. Run `npm run build` and commit `docs/` after every change.

## Structure
- `src/content.js`: all copy in Arabic and English (edit text here).
- `src/components/`: one component per section (Header, Hero, Colors, Products, Factory, Uses, About, Contact, Footer).
- `src/styles/site.css`: design tokens and all styles.
- `public/`: logo, foam textures, photos and videos.

## Content rules
Only verified facts are published: founded 2008, Egypt, flexible PU foam + mattresses, German Hennecke foaming machine, foam produced in multiple colors, contact email, hotline 16298, address (Industrial Zone 9, Basateen El Ismailia, Inshas). Add social links, certifications or capacities only after the company confirms them.

## Media credits
- Factory photos/videos, gallery stills and foam textures: City Foam's own footage, color-graded.
- `public/media/homes.*`, `hotels.*`, `sewing.*`, `red-fabric.*` and `public/img/products/*`: [Mixkit](https://mixkit.co), Stock Video Free License (commercial use, no attribution required).

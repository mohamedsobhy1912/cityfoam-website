# City Foam — corporate website

Bilingual (Arabic default / English) corporate site for **City Foam (سيتي فوم)**, an Egyptian manufacturer of flexible polyurethane foam and mattresses since 2008.

## Stack
- **React 19 + Vite** — component architecture, static build.
- **GSAP 3 + ScrollTrigger** (`gsap`, `@gsap/react`) — hero entrance, image masks, parallax, pinned manufacturing stage, horizontal gallery.
- **Lenis** — smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync. Disabled for `prefers-reduced-motion`.
- **React Bits** (copied unmodified into `src/vendor/reactbits/`, license + source commit included): `SplitText`, `CountUp`, `ScrollVelocity`, `Magnet`, `Noise`. Depends on `motion`.

## Develop / build
```bash
npm install
npm run dev      # local dev server
npm run build    # outputs the static site to docs/
```
`docs/` is committed so GitHub Pages can serve it directly: **Settings → Pages → Deploy from a branch → `main` / `/docs`**. Run `npm run build` and commit `docs/` after every change.

## Structure
- `src/content.js` — all copy in Arabic and English (edit text here).
- `src/components/` — one component per section (Header, Hero, About, Products, Manufacturing, Quality, Applications, WhyUs, Gallery, Contact, Footer, Intro).
- `src/scenes/` — drawn production-line scenes (inline SVG, animated in `src/styles/scenes.css`).
- `public/` — logo, foam textures, photos and videos.

## Content rules
Only verified facts are published: founded 2008, Egypt, flexible PU foam + mattresses, German Hennecke foaming machine, foam produced in multiple colors, contact email, hotline 16298, address (Industrial Zone 9, Basateen El Ismailia, Inshas). Add social links, certifications or capacities only after the company confirms them.

## Media credits
- Factory photos/videos, gallery stills and foam textures: City Foam's own footage, color-graded.
- `public/media/homes.*`, `hotels.*`, `sewing.*`, `red-fabric.*` and `public/img/products/*`: [Mixkit](https://mixkit.co), Stock Video Free License (commercial use, no attribution required).
- Production-line scenes: drawn SVG.

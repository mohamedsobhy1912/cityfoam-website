# City Foam Website — موقع سيتي فوم

Static website (HTML + CSS + a little JS) for **City Foam**, a foam & mattress manufacturer in Egypt.
Arabic by default (RTL) with an English toggle. Ready for GitHub Pages.

## Pages
- `index.html` — الرئيسية / Home
- `products.html` — المنتجات / Products (with category filter + density guide)
- `about.html` — من نحن / About Us
- `contact.html` — تواصل معنا / Contact (form opens the visitor's email app to mohamed.sobhy@cityfoameg.com)

## Editing text
Every text appears twice, one per language:
```html
<span lang="ar">نص عربي</span><span lang="en">English text</span>
```
The button in the header switches language; the choice is remembered in the browser.

## Publish on GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.

## Media credits
- Lifestyle clips (`media/hero-sleep.mp4`, `media/homes.mp4`, `media/hotels.mp4`) and the bedroom/pillow stills in `img/products/` come from [Mixkit](https://mixkit.co) under the Mixkit Stock Video Free License (free for commercial use, no attribution required).
- Factory footage and photos (`media/pour-*.mp4`, `media/blocks.*`, `media/tanks.jpg`, `media/line.jpg`) and the foam textures in `img/foam/` are City Foam's own footage, color-graded for the web.

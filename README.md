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

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Public address of the live site. Social previews, canonical, structured data,
// robots.txt and sitemap.xml all need absolute URLs, so they are built from this.
// When the site moves to its own domain, change SITE_URL in .env (keep the trailing slash).
const DEFAULT_SITE_URL = 'https://mohamedsobhy1912.github.io/cityfoam-website/';

function seoFiles(siteUrl) {
  const lastmod = new Date().toISOString().slice(0, 10);
  return {
    name: 'cityfoam-seo-files',
    transformIndexHtml: html => html.replaceAll('%SITE_URL%', siteUrl),
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          `  <url><loc>${siteUrl}</loc><lastmod>${lastmod}</lastmod></url>\n` +
          '</urlset>\n'
      });
    }
  };
}

// Relative base so the build works on GitHub Pages (project sub-path) and any static host.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.SITE_URL || DEFAULT_SITE_URL).replace(/\/?$/, '/');
  return {
    base: './',
    plugins: [react(), seoFiles(siteUrl)],
    build: {
      outDir: 'docs',
      emptyOutDir: true,
      assetsInlineLimit: 0,
      chunkSizeWarningLimit: 900
    }
  };
});

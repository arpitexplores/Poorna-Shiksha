import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadSeoConfig } from "./load-seo-config.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const publicDir = path.join(projectRoot, "public");

const buildSitemap = ({ site, routes }) => {
  const lastmod = new Date().toISOString();
  const urlEntries = routes
    .filter((route) => !route.noindex)
    .map((route) => {
      const loc = new URL(route.path, site.siteUrl).toString();

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    "</urlset>",
    "",
  ].join("\n");
};

const buildRobots = ({ site }) =>
  [
    "User-agent: *",
    "Allow: /",
    "",
    "Disallow: /admin/",
    "Disallow: /api/",
    "Disallow: /auth/",
    "Disallow: /dashboard/",
    "",
    `Sitemap: ${new URL("/sitemap.xml", site.siteUrl).toString()}`,
    "",
  ].join("\n");

const config = loadSeoConfig(projectRoot);

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapXml = buildSitemap(config);
const robotsTxt = buildRobots(config);

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");

console.log("Generated SEO files:");
console.log("- public/sitemap.xml");
console.log("- public/robots.txt");

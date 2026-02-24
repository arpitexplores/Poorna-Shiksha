import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const configPath = path.join(projectRoot, "src", "seo", "seo-config.json");
const distDir = path.join(projectRoot, "dist");
const distIndexPath = path.join(distDir, "index.html");

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

if (!fs.existsSync(distIndexPath)) {
  throw new Error("dist/index.html not found. Run the Vite build before prerendering routes.");
}

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const replaceTag = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`Unable to find ${label} in dist/index.html while prerendering.`);
  }

  return html.replace(pattern, replacement);
};

const replaceMetaByName = (html, name, content) => {
  const pattern = new RegExp(
    `<meta\\s+name="${escapeRegExp(name)}"\\s+content="[^"]*"\\s*\\/?\\s*>`,
    "i",
  );

  return replaceTag(html, pattern, `<meta name="${name}" content="${content}" />`, `meta[name="${name}"]`);
};

const replaceMetaByProperty = (html, property, content) => {
  const pattern = new RegExp(
    `<meta\\s+property="${escapeRegExp(property)}"\\s+content="[^"]*"\\s*\\/?\\s*>`,
    "i",
  );

  return replaceTag(
    html,
    pattern,
    `<meta property="${property}" content="${content}" />`,
    `meta[property="${property}"]`,
  );
};

const replaceCanonical = (html, canonical) => {
  const pattern = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?\s*>/i;
  return replaceTag(html, pattern, `<link rel="canonical" href="${canonical}" />`, "link[rel='canonical']");
};

const applySeoTags = (html, route) => {
  const title = `${route.title} | ${config.site.brandName}`;
  const description = route.description;
  const canonical = new URL(route.path, config.site.siteUrl).toString();
  const ogImage = config.site.defaultOgImage;

  let output = html;
  output = replaceTag(output, /<title>[^<]*<\/title>/i, `<title>${title}</title>`, "title");
  output = replaceMetaByName(output, "description", description);
  output = replaceMetaByName(output, "robots", "index, follow");
  output = replaceCanonical(output, canonical);

  output = replaceMetaByProperty(output, "og:title", title);
  output = replaceMetaByProperty(output, "og:description", description);
  output = replaceMetaByProperty(output, "og:type", "website");
  output = replaceMetaByProperty(output, "og:url", canonical);
  output = replaceMetaByProperty(output, "og:image", ogImage);
  output = replaceMetaByProperty(output, "og:site_name", config.site.siteName);
  output = replaceMetaByProperty(output, "og:locale", config.site.locale);

  output = replaceMetaByName(output, "twitter:card", "summary_large_image");
  output = replaceMetaByName(output, "twitter:title", title);
  output = replaceMetaByName(output, "twitter:description", description);
  output = replaceMetaByName(output, "twitter:image", ogImage);

  return output;
};

const injectHomeStructuredData = (html) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.site.siteName,
    url: config.site.siteUrl,
    logo: config.site.defaultOgImage,
    description: config.site.defaultDescription,
    email: "contact@poornashiksha.com",
    areaServed: "Delhi, India",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.site.siteName,
    url: config.site.siteUrl,
    description: config.site.defaultDescription,
  };

  const scripts = [
    `<script id="schema-org-organization" type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`,
    `<script id="schema-org-website" type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`,
  ].join("\n    ");

  return html.replace("</head>", `    ${scripts}\n  </head>`);
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const baseHtml = fs.readFileSync(distIndexPath, "utf8");

config.routes.forEach((route) => {
  let routeHtml = applySeoTags(baseHtml, route);

  if (route.path === "/") {
    routeHtml = injectHomeStructuredData(routeHtml);
    fs.writeFileSync(distIndexPath, routeHtml, "utf8");
    return;
  }

  const normalizedRoutePath = route.path.replace(/^\/+/, "").replace(/\/+$/, "");
  const routeDir = path.join(distDir, normalizedRoutePath);
  const routeIndexPath = path.join(routeDir, "index.html");

  ensureDir(routeDir);
  fs.writeFileSync(routeIndexPath, routeHtml, "utf8");
});

console.log("Prerendered route HTML files:");
config.routes.forEach((route) => {
  if (route.path === "/") {
    console.log("- dist/index.html");
  } else {
    const normalizedRoutePath = route.path.replace(/^\/+/, "").replace(/\/+$/, "");
    console.log(`- dist/${normalizedRoutePath}/index.html`);
  }
});

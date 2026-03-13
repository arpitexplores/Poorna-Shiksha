import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");
const seoConfigPath = path.join(__dirname, "src", "seo", "seo-config.json");
const port = Number(process.env.PORT || 4173);

if (!fs.existsSync(distDir)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

if (!fs.existsSync(seoConfigPath)) {
  console.error("src/seo/seo-config.json not found.");
  process.exit(1);
}

const seoConfig = JSON.parse(fs.readFileSync(seoConfigPath, "utf8"));
const canonicalSiteUrl = new URL(seoConfig.site.siteUrl);
const canonicalHost = canonicalSiteUrl.host;
const canonicalProtocol = canonicalSiteUrl.protocol.replace(":", "");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

const resolveFilePath = (pathname) => {
  const trimmed = pathname.replace(/^\/+/, "");
  const target = path.resolve(distDir, trimmed);

  if (!target.startsWith(distDir)) {
    return null;
  }

  if (fs.existsSync(target) && fs.statSync(target).isFile()) {
    return target;
  }

  const asIndex = path.join(target, "index.html");
  if (fs.existsSync(asIndex) && fs.statSync(asIndex).isFile()) {
    return asIndex;
  }

  return null;
};

const getForwardedValue = (value) => {
  if (Array.isArray(value)) {
    return value[0];
  }

  if (typeof value === "string") {
    return value.split(",")[0]?.trim();
  }

  return undefined;
};

const isLocalHost = (host) => /^(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?$/i.test(host);

const normalizePathname = (pathname) => {
  if (pathname === "/index.html") {
    return "/";
  }

  if (pathname.endsWith("/index.html")) {
    const normalized = pathname.slice(0, -"/index.html".length);
    return normalized || "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/") && !path.extname(pathname)) {
    return pathname.slice(0, -1);
  }

  return pathname;
};

const maybeRedirectToCanonical = (req, res, pathname, search) => {
  const requestHost = getForwardedValue(req.headers["x-forwarded-host"]) || req.headers.host || canonicalHost;
  const requestProto = getForwardedValue(req.headers["x-forwarded-proto"]) || canonicalProtocol;
  const normalizedPathname = normalizePathname(pathname);
  const enforceCanonicalOrigin = !isLocalHost(requestHost);
  const targetHost = enforceCanonicalOrigin ? canonicalHost : requestHost;
  const targetProtocol = enforceCanonicalOrigin ? canonicalProtocol : requestProto;

  if (requestHost === targetHost && requestProto === targetProtocol && normalizedPathname === pathname) {
    return false;
  }

  const redirectUrl = new URL(`${targetProtocol}://${targetHost}${normalizedPathname}${search}`);
  res.statusCode = 301;
  res.setHeader("Location", redirectUrl.toString());
  res.end();
  return true;
};

const sendFile = (req, res, filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  const stat = fs.statSync(filePath);

  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);
  res.setHeader("Content-Length", stat.size);

  if (ext === ".html" || ext === ".xml" || ext === ".txt") {
    res.setHeader("Cache-Control", "no-cache");
  } else if (filePath.includes(`${path.sep}assets${path.sep}`)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  } else {
    res.setHeader("Cache-Control", "public, max-age=3600");
  }

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  fs.createReadStream(filePath).pipe(res);
};

const server = http.createServer((req, res) => {
  const method = req.method || "GET";
  if (method !== "GET" && method !== "HEAD") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Method Not Allowed");
    return;
  }

  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(requestUrl.pathname);

  try {
    if (maybeRedirectToCanonical(req, res, pathname, requestUrl.search)) {
      return;
    }

    const normalizedPathname = normalizePathname(pathname);
    const explicit = resolveFilePath(pathname);
    if (explicit) {
      sendFile(req, res, explicit);
      return;
    }

    if (normalizedPathname !== pathname) {
      const normalizedFile = resolveFilePath(normalizedPathname);
      if (normalizedFile) {
        sendFile(req, res, normalizedFile);
        return;
      }
    }

    // Missing static asset should 404; route paths fall back to SPA index.
    if (path.extname(normalizedPathname)) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Not Found");
      return;
    }

    sendFile(req, res, path.join(distDir, "index.html"));
  } catch (error) {
    console.error("Server error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Serving dist/ on http://0.0.0.0:${port}`);
});

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const configPath = path.join(projectRoot, "src", "seo", "seo-config.json");

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const sitemapUrl = new URL("/sitemap.xml", config.site.siteUrl).toString();

const encodeBase64Url = (input) =>
  Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

const createGoogleJwt = (serviceAccountEmail, privateKey) => {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccountEmail,
    scope: "https://www.googleapis.com/auth/webmasters",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encodedHeader = encodeBase64Url(JSON.stringify(header));
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;

  const signature = crypto
    .createSign("RSA-SHA256")
    .update(signingInput)
    .end()
    .sign(privateKey);

  return `${signingInput}.${encodeBase64Url(signature)}`;
};

const getGoogleAccessToken = async (serviceAccountEmail, privateKey) => {
  const assertion = createGoogleJwt(serviceAccountEmail, privateKey);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to get Google token: ${response.status} ${text}`);
  }

  const data = await response.json();
  return data.access_token;
};

const submitToBing = async () => {
  const submitUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  const response = await fetch(submitUrl, { method: "GET" });

  if (!response.ok) {
    throw new Error(`Bing submission failed with status ${response.status}`);
  }
};

const submitToGoogleSearchConsole = async () => {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const serviceAccountPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const siteUrl = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || `${config.site.siteUrl}/`;

  if (!serviceAccountEmail || !serviceAccountPrivateKey) {
    console.log("Skipping Google Search Console submission: credentials not configured.");
    return false;
  }

  const privateKey = serviceAccountPrivateKey.replace(/\\n/g, "\n");
  const accessToken = await getGoogleAccessToken(serviceAccountEmail, privateKey);
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;

  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google Search Console submission failed: ${response.status} ${text}`);
  }

  return true;
};

const run = async () => {
  if (process.env.DISABLE_SITEMAP_SUBMIT === "true") {
    console.log("Skipping sitemap submission because DISABLE_SITEMAP_SUBMIT=true.");
    return;
  }

  console.log(`Submitting sitemap: ${sitemapUrl}`);

  try {
    await submitToBing();
    console.log("Submitted sitemap to Bing.");
  } catch (error) {
    console.warn(`Bing submission warning: ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const wasSubmitted = await submitToGoogleSearchConsole();

    if (wasSubmitted) {
      console.log("Submitted sitemap to Google Search Console.");
    }
  } catch (error) {
    console.warn(`Google submission warning: ${error instanceof Error ? error.message : String(error)}`);
  }
};

run().catch((error) => {
  console.warn(`Sitemap submission warning: ${error instanceof Error ? error.message : String(error)}`);
});

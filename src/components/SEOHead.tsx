import { useEffect } from "react";
import { siteConfig } from "@/seo/config";

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
};

const setOrCreateMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const setOrCreateLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const SEOHead = ({ title, description, path, type = "website", image, noindex = false }: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.brandName}`;
    const canonicalUrl = new URL(path, siteConfig.siteUrl).toString();
    const ogImage = image || siteConfig.defaultOgImage;

    document.title = fullTitle;

    setOrCreateMeta('meta[name="description"]', { name: "description", content: description });
    setOrCreateMeta('meta[name="robots"]', { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" });
    setOrCreateLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });

    setOrCreateMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    setOrCreateMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setOrCreateMeta('meta[property="og:type"]', { property: "og:type", content: type });
    setOrCreateMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setOrCreateMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    setOrCreateMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteConfig.siteName });
    setOrCreateMeta('meta[property="og:locale"]', { property: "og:locale", content: siteConfig.locale });

    setOrCreateMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setOrCreateMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    setOrCreateMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setOrCreateMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
  }, [description, image, noindex, path, title, type]);

  return null;
};

export default SEOHead;

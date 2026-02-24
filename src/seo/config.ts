import seoConfigData from "@/seo/seo-config.json";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type SiteConfig = {
  brandName: string;
  siteName: string;
  siteUrl: string;
  defaultDescription: string;
  defaultOgImage: string;
  locale: string;
};

type RouteConfig = {
  path: string;
  title: string;
  description: string;
  changefreq: ChangeFrequency;
  priority: number;
};

type SEOConfig = {
  site: SiteConfig;
  routes: RouteConfig[];
};

const seoConfig = seoConfigData as SEOConfig;

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
};

export const siteConfig = seoConfig.site;
export const routeSEO = seoConfig.routes;

export const getRouteSEO = (pathname: string) => {
  const normalizedPath = normalizePath(pathname);
  return routeSEO.find((route) => normalizePath(route.path) === normalizedPath);
};

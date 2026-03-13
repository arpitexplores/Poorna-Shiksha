import fs from "node:fs";
import path from "node:path";

export const loadSeoConfig = (projectRoot) => {
  const baseConfigPath = path.join(projectRoot, "src", "seo", "seo-config.json");
  const activitiesPath = path.join(projectRoot, "src", "content", "activities.json");

  const baseConfig = JSON.parse(fs.readFileSync(baseConfigPath, "utf8"));
  const activitiesPayload = JSON.parse(fs.readFileSync(activitiesPath, "utf8"));

  const activityRoutes = activitiesPayload.activities.map((activity) => ({
    path: `/activities/${activity.slug}`,
    title: activity.title,
    description: activity.seoDescription,
    changefreq: "monthly",
    priority: 0.7,
    noindex: activity.noindex ?? false,
  }));

  return {
    ...baseConfig,
    routes: [...baseConfig.routes, ...activityRoutes],
  };
};

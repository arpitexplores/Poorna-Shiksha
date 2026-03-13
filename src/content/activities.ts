import activitiesData from "@/content/activities.json";

export type ActivitySection = {
  heading: string;
  paragraphs: string[];
};

export type ActivityRoleBlock = {
  heading: string;
  paragraphs: string[];
};

export type ActivityGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type Activity = {
  slug: string;
  isSample: boolean;
  noindex?: boolean;
  title: string;
  date: string;
  dateLabel: string;
  location: string;
  category: string;
  heroImage: string;
  cardImage: string;
  summary: string;
  seoDescription: string;
  supporterImpact: string;
  storySections: ActivitySection[];
  seemaRole: ActivityRoleBlock;
  learnings: string[];
  gallery: ActivityGalleryItem[];
};

type ActivitiesPayload = {
  activities: Activity[];
};

const payload = activitiesData as ActivitiesPayload;

export const activities = [...payload.activities].sort((left, right) => right.date.localeCompare(left.date));

export const getActivityBySlug = (slug?: string) => activities.find((activity) => activity.slug === slug);

const getActivityNoindex = (activity: Activity) => activity.noindex ?? activity.isSample;

export const activitySeoRoutes = activities.map((activity) => ({
  path: `/activities/${activity.slug}`,
  title: activity.title,
  description: activity.seoDescription,
  changefreq: "monthly" as const,
  priority: 0.7,
  type: "article" as const,
  image: activity.heroImage,
  noindex: getActivityNoindex(activity),
}));

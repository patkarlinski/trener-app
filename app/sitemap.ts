type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";


const SITE_CONTENT_LAST_UPDATED = "2026-10-15";

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: ChangeFrequency;
  priority?: number;
};

export default function sitemap(): SitemapEntry[] {
  return [
    {
      url: "https://trenerkarlinski.pl",
      lastModified: SITE_CONTENT_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://trenerkarlinski.pl/nauka-plywania-szczecin",
      lastModified: SITE_CONTENT_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://trenerkarlinski.pl/nauka-plywania-police",
      lastModified: SITE_CONTENT_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://trenerkarlinski.pl/oferta",
      lastModified: SITE_CONTENT_LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://trenerkarlinski.pl/kontakt",
      lastModified: SITE_CONTENT_LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://trenerkarlinski.pl/polityka-prywatnosci",
      lastModified: SITE_CONTENT_LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
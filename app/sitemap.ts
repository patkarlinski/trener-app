type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

/**
 * Data ostatniej **realnej** zmiany treści / SEO na stronie (format ISO dzień).
 * Podbij ją przy kolejnym wdrożeniu, gdy faktycznie coś zmieniasz — nie ustawiaj `new Date()`.
 */
const SITE_CONTENT_LAST_UPDATED = "2026-04-09";

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
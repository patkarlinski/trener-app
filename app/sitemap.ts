type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

/**
 * Bez lastModified, dopóki nie masz pewnej daty ostatniej realnej zmiany treści (np. z CMS / git).
 * `new Date()` przy każdym buildzie/żądaniu = zawsze „dzisiaj” mimo że strona się nie zmieniła —
 * Google traktuje wtedy <lastmod> jako mało wiarygodny.
 */
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
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://trenerkarlinski.pl/nauka-plywania-szczecin",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://trenerkarlinski.pl/nauka-plywania-police",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://trenerkarlinski.pl/oferta",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://trenerkarlinski.pl/kontakt",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://trenerkarlinski.pl/polityka-prywatnosci",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
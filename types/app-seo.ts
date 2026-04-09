/**
 * Lokalne typy pod eksporty `metadata` / `robots`, gdy TS nie widzi eksportów z pakietu `next`
 * (np. niepełny `node_modules`, brak wygenerowanego `.next/types`).
 */

export type AppRootMetadata = {
  metadataBase: URL;
  title: string;
  description: string;
  keywords?: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    locale: string;
    type: string;
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
};

export type AppPageMetadata = {
  title: string;
  description: string;
  alternates?: {
    canonical: string;
  };
  openGraph?: {
    title: string;
    description: string;
    url: string;
    locale: string;
    type: string;
  };
};

export type AppRobots = {
  rules:
    | {
        userAgent: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
      }
    | Array<{
        userAgent: string | string[];
        allow?: string | string[];
        disallow?: string | string[];
      }>;
  sitemap?: string | string[];
  host?: string;
};

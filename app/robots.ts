import type { AppRobots } from "@/types/app-seo";

export default function robots(): AppRobots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://trenerkarlinski.pl/sitemap.xml',
  }
}
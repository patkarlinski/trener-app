import type { AppPageMetadata } from "@/types/app-seo";
import SeoLandingPage from "@/components/SeoLandingPage";
import { SEO_LANDINGS } from "@/lib/seo-landings";

const content = SEO_LANDINGS.szczecin;

export const metadata: AppPageMetadata = {
  title: content.title,
  description: content.description,
  alternates: {
    canonical: `https://trenerkarlinski.pl${content.path}`,
  },
  openGraph: {
    title: content.ogTitle,
    description: content.ogDescription,
    url: `https://trenerkarlinski.pl${content.path}`,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/banner.webp",
        width: 1200,
        height: 630,
        alt: "Nauka pływania Szczecin — Patryk Karliński",
      },
    ],
  },
};

export default function NaukaPlywaniaSzczecinPage() {
  return <SeoLandingPage content={content} />;
}

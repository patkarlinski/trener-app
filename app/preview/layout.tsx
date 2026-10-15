import type { AppPageMetadata } from "@/types/app-seo";

/** Stary URL podglądu — 301 na `/` w next.config; noindex na wypadek bezpośredniego hit. */
export const metadata: AppPageMetadata = {
  title: "Patryk Karliński | Trener Pływania i Trening Personalny",
  description:
    "Indywidualne lekcje pływania i trening personalny w Szczecinie i Policach.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

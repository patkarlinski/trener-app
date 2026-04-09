import type { AppPageMetadata } from "@/types/app-seo";

export const metadata: AppPageMetadata = {
  title: "Kontakt | Patryk Karliński — trener pływania Szczecin, Police",
  description:
    "Umów lekcje pływania lub trening personalny: telefon, e-mail i formularz kontaktowy. Szczecin i Police.",
  alternates: {
    canonical: "https://trenerkarlinski.pl/kontakt",
  },
  openGraph: {
    title: "Kontakt | Patryk Karliński",
    description:
      "Skontaktuj się w sprawie indywidualnych lekcji pływania i treningu personalnego w Szczecinie i Policach.",
    url: "https://trenerkarlinski.pl/kontakt",
    locale: "pl_PL",
    type: "website",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

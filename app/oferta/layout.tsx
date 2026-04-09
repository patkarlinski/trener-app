import type { AppPageMetadata } from "@/types/app-seo";

export const metadata: AppPageMetadata = {
  title: "Oferta | Nauka pływania i trening personalny | Patryk Karliński",
  description:
    "Lekcje pływania dla dzieci i dorosłych, pływanie sportowe, triathlon oraz trening siłowy — Szczecin i Police. Sprawdź pakiety i umów zajęcia.",
  alternates: {
    canonical: "https://trenerkarlinski.pl/oferta",
  },
  openGraph: {
    title: "Oferta | Patryk Karliński",
    description:
      "Nauka pływania, doskonalenie techniki, przygotowanie do zawód oraz trening personalny — dopasowany program.",
    url: "https://trenerkarlinski.pl/oferta",
    locale: "pl_PL",
    type: "website",
  },
};

export default function OfertaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

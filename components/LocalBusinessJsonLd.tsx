const SITE = "https://trenerkarlinski.pl";

/** Structured data dla wyszukiwarek: typ działalności, obszar (Szczecin, Police), kontakt. */
export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Patryk Karliński – trener pływania i trening personalny",
    description:
      "Indywidualne lekcje pływania dla dzieci i dorosłych, doskonalenie techniki, przygotowanie do triathlonu oraz trening personalny w Szczecinie i Policach.",
    url: SITE,
    telephone: "+48511258922",
    email: "kontakt@trenerkarlinski.pl",
    image: `${SITE}/banner.webp`,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Szczecin" },
      { "@type": "City", name: "Police" },
    ],
    sameAs: ["https://www.instagram.com/karlinski.patryk"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

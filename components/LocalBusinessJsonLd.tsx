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
    knowsAbout: [
      "nauka pływania",
      "nauka pływania dla dorosłych",
      "doskonalenie pływania",
      "indywidualne lekcje pływania",
      "trening pływacki",
      "triatlon — pływanie",
      "trening personalny",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Oferta treningowa",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nauka pływania",
            url: `${SITE}/#oferta`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Doskonalenie pływania",
            url: `${SITE}/#oferta`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trening siłowy",
            url: `${SITE}/#oferta`,
          },
        },
      ],
    },
    sameAs: ["https://www.instagram.com/karlinski.patryk"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

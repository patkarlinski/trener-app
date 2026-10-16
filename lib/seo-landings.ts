export type SeoCity = "szczecin" | "police";

export type SeoFaqItem = { q: string; a: string };

export type SeoLandingContent = {
  city: SeoCity;
  cityName: string;
  cityNameLocative: string; // w Szczecinie / w Policach
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  intro: string[];
  sections: Array<{ h2: string; paragraphs: string[] }>;
  poolsNote?: string;
  otherCity: { label: string; href: string; sentence: string };
  faq: SeoFaqItem[];
};

export const SEO_LANDINGS: Record<SeoCity, SeoLandingContent> = {
  szczecin: {
    city: "szczecin",
    cityName: "Szczecin",
    cityNameLocative: "w Szczecinie",
    path: "/nauka-plywania-szczecin",
    title:
      "Nauka pływania Szczecin | Dla dorosłych i dzieci | Patryk Karliński",
    description:
      "Nauka i doskonalenie pływania w Szczecinie. Indywidualne lekcje pływania dla dorosłych i dzieci — trener na basenie, technika, triathlon. Umów pierwszy trening.",
    ogTitle: "Nauka pływania Szczecin | Indywidualne lekcje | Patryk Karliński",
    ogDescription:
      "Lekcje pływania 1:1 w Szczecinie — nauka dla dorosłych, doskonalenie techniki i trening pod zawody.",
    h1: "Nauka i doskonalenie pływania w Szczecinie",
    intro: [
      "Szukasz trenera pływania w Szczecinie? Prowadzę indywidualne lekcje pływania dopasowane do wieku, poziomu i celu — od spokojnego startu w wodzie, przez naukę pływania dla dorosłych, po doskonalenie techniki i przygotowanie pod starty.",
      "Każdy trening planuję osobno. Tempo, objętość i ćwiczenia zależą od Twojej sprawności. Pracuję z dziećmi, młodzieżą i dorosłymi na obiektach m.in. Floating Arena i SDS. Na basenie stawiam na bezpieczeństwo, prawidłowy oddech i czystą technikę stylów.",
    ],
    sections: [
      {
        h2: "Nauka pływania dla dorosłych w Szczecinie",
        paragraphs: [
          "Wielu dorosłych zaczyna od zera albo wraca do wody po latach przerwy. Lekcje pływania dla dorosłych prowadzę w spokoju, bez presji grupy — uczymy się leżenia na wodzie, oddechu, podstawowych stylów i pewności w głębszej części basenu.",
          "Jeśli już pływasz „jako tako”, ale męczy Cię oddech, nieefektywny kraul albo brak regularności, układamy plan pod realny cel: swobodne przepłynięcie dystansu, lepsza kondycja albo start w amatorskich zawodach.",
        ],
      },
      {
        h2: "Doskonalenie pływania i poprawa techniki",
        paragraphs: [
          "Doskonalenie pływania to precyzyjna korekta techniki, ekonomii ruchu i oddechu. Na treningach łączymy ćwiczenia techniczne z kontrolowaną objętością — tak, by poprawa była widoczna w wodzie, a nie tylko „na sucho”.",
          "Osobom trenującym sportowo lub pod triathlon pomagam w doskonaleniu stylów, pracy nóg i przygotowaniu pod konkretny dystans. Tam, gdzie ma sens, korzystamy też z wideoanalizy.",
        ],
      },
      {
        h2: "Indywidualne lekcje pływania — trener na basenie",
        paragraphs: [
          "Zajęcia odbywają się w formule 1:1. Masz pełną uwagę trenera na basenie: korektę na bieżąco, dobór ćwiczeń i jasny plan na kolejne spotkania. To wygodna opcja, gdy zależy Ci na szybkim postępie albo prywatności.",
          "Pierwszy trening wprowadzający jest w niższej cenie startowej — poznajemy się w wodzie i ustalamy dalszą współpracę bez zobowiązań „w ciemno”.",
        ],
      },
      {
        h2: "Dla kogo są zajęcia i jak zacząć",
        paragraphs: [
          "Pracuję z dziećmi, młodzieżą i dorosłymi — od kompletnych początkujących po osoby doskonalące technikę. Basen w Szczecinie dopasowujemy do dostępności i lokalizacji (m.in. Floating Arena, SDS).",
          "Napisz lub zadzwoń, podaj wiek, poziom i cel. Ustalamy termin i formę zajęć. Szczegóły programów są w ofercie na stronie głównej.",
        ],
      },
    ],
    poolsNote: "Floating Arena, SDS i inne baseny w Szczecinie — dobieramy obiekt do Ciebie.",
    otherCity: {
      label: "Police",
      href: "/nauka-plywania-police",
      sentence: "Prowadzę też indywidualne lekcje pływania w okolicy Polic.",
    },
    faq: [
      {
        q: "Czy nauka pływania w Szczecinie jest też dla dorosłych od zera?",
        a: "Tak. Wielu podopiecznych to dorośli zaczynający od podstaw lub wracający po przerwie. Zaczynamy w bezpiecznym tempie, na odpowiedniej głębokości, z naciskiem na oddech i pewność w wodzie.",
      },
      {
        q: "Czym różni się doskonalenie pływania od zwykłej nauki?",
        a: "Nauka buduje fundamenty (leżenie, oddech, podstawowe style). Doskonalenie pływania to korekta techniki, ekonomii ruchu i przygotowanie pod konkretny cel — np. dłuższy dystans, zawody lub triathlon.",
      },
      {
        q: "Czy lekcje są indywidualne?",
        a: "Tak — pracujemy 1:1. Dzięki temu trener na basenie na bieżąco koryguje technikę i dopasowuje plan do Twojego poziomu.",
      },
      {
        q: "Na jakich basenach w Szczecinie są zajęcia?",
        a: "Najczęściej Floating Arena i SDS, a także inne obiekty w zależności od dostępności i Twojej lokalizacji. Basen ustalamy przy umawianiu pierwszego treningu.",
      },
      {
        q: "Jak umówić pierwszy trening?",
        a: "Napisz na WhatsApp, SMS lub e-mail — podaj wiek, poziom i cel. Pierwszy trening wprowadzający jest w niższej cenie startowej.",
      },
    ],
  },
  police: {
    city: "police",
    cityName: "Police",
    cityNameLocative: "w Policach",
    path: "/nauka-plywania-police",
    title:
      "Nauka pływania Police | Dla dorosłych i dzieci | Patryk Karliński",
    description:
      "Nauka i doskonalenie pływania w Policach. Indywidualne lekcje pływania dla dorosłych i dzieci — trener na basenie, technika, triathlon. Umów pierwszy trening.",
    ogTitle: "Nauka pływania Police | Indywidualne lekcje | Patryk Karliński",
    ogDescription:
      "Lekcje pływania 1:1 w Policach — nauka dla dorosłych, doskonalenie techniki i trening pod Twój cel.",
    h1: "Nauka i doskonalenie pływania w Policach",
    intro: [
      "W Policach oferuję spersonalizowane lekcje pływania w kameralnej formule 1:1. To dobry wybór zarówno przy nauce pływania dla dorosłych i dzieci od zera, jak i przy doskonaleniu stylu, oddechu oraz czasów.",
      "Na treningach łączymy technikę z budowaniem pewności w wodzie. Jeśli celem są zawody lub triathlon, układam plan pod wymagania startowe i Twój harmonogram — bez chaosu i przypadkowych ćwiczeń.",
    ],
    sections: [
      {
        h2: "Nauka pływania dla dorosłych w Policach",
        paragraphs: [
          "Dorosłym, którzy dopiero zaczynają lub boją się wody, proponuję spokojną naukę pływania: oswajanie z basenem, oddech, ułożenie ciała i pierwsze metry bez stresu grupy.",
          "Jeśli już pływasz, ale chcesz pływać lepiej i efektywniej, skupiamy się na nawykach, które realnie poprawiają komfort i dystans — zamiast „więcej tego samego, tylko mocniej”.",
        ],
      },
      {
        h2: "Doskonalenie pływania i technika",
        paragraphs: [
          "Doskonalenie pływania w Policach to praca nad techniką kraula i innych stylów, ekonomią ruchu oraz oddechem. Trening jest indywidualny, więc korekta dzieje się od razu w wodzie.",
          "Osobom przygotowującym się do zawodów lub triathlonu pomagam ułożyć sensowny plan: technika, objętość i regeneracja dopasowane do celu.",
        ],
      },
      {
        h2: "Indywidualne lekcje pływania u trenera",
        paragraphs: [
          "Zajęcia 1:1 oznaczają pełną uwagę trenera na basenie. To wygodne, gdy zależy Ci na prywatności, szybkim feedbacku i planie szytym na miarę — nie na programie „dla całej grupy”.",
          "Pierwszy trening wprowadzający jest w niższej cenie startowej. Sprawdzamy poziom na żywo i dopiero potem decydujesz o dalszej współpracy.",
        ],
      },
      {
        h2: "Jak zacząć zajęcia w Policach",
        paragraphs: [
          "Napisz lub zadzwoń, podaj wiek, poziom i cel. Ustalamy termin oraz basen w Policach lub okolicy. Szczegóły kierunków treningu znajdziesz w ofercie na stronie głównej.",
          "Prowadzę też zajęcia w Szczecinie — jeśli wygodniej Ci dojechać do Floating Arena lub SDS, dopasujemy lokalizację.",
        ],
      },
    ],
    otherCity: {
      label: "Szczecin",
      href: "/nauka-plywania-szczecin",
      sentence: "Prowadzę też indywidualne lekcje pływania w Szczecinie.",
    },
    faq: [
      {
        q: "Czy w Policach są lekcje pływania dla dorosłych?",
        a: "Tak. Prowadzę naukę pływania dla dorosłych od podstaw oraz doskonalenie techniki dla osób, które już pływają i chcą poprawić styl, oddech lub dystans.",
      },
      {
        q: "Czy zajęcia są indywidualne?",
        a: "Tak — formuła 1:1. Trener na basenie koryguje technikę na bieżąco i dopasowuje plan do Twojego celu.",
      },
      {
        q: "Czym jest doskonalenie pływania?",
        a: "To trening techniczny: poprawa ekonomii ruchu, oddechu i skuteczności stylów. Często wybierają go osoby po kursie podstawowym lub trenujące amatorsko / pod triathlon.",
      },
      {
        q: "Dla kogo są zajęcia w Policach?",
        a: "Dla dzieci, młodzieży i dorosłych — od początkujących po osoby doskonalące technikę. Basen i termin ustalamy indywidualnie.",
      },
      {
        q: "Jak umówić pierwszy trening w Policach?",
        a: "Skontaktuj się przez WhatsApp, SMS lub e-mail. Podaj wiek, poziom i cel — odpiszę z propozycją terminu. Pierwszy trening jest w niższej cenie startowej.",
      },
    ],
  },
};

export function buildFaqPageJsonLd(faq: SeoFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildServiceJsonLd(content: SeoLandingContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Nauka i doskonalenie pływania ${content.cityNameLocative}`,
    description: content.description,
    url: `https://trenerkarlinski.pl${content.path}`,
    provider: {
      "@type": "Person",
      name: "Patryk Karliński",
      telephone: "+48511258922",
      email: "kontakt@trenerkarlinski.pl",
      url: "https://trenerkarlinski.pl",
    },
    areaServed: {
      "@type": "City",
      name: content.cityName,
    },
    serviceType: [
      "Nauka pływania",
      "Nauka pływania dla dorosłych",
      "Doskonalenie pływania",
      "Indywidualne lekcje pływania",
      "Trening pływacki",
    ],
  };
}

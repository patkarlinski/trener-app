export type SeoCity = "szczecin" | "police";

export type SeoFaqItem = { q: string; a: string };
export type SeoTile = { h2: string; text: string };
export type SeoStep = { number: string; title: string; text: string };

export type SeoLandingContent = {
  city: SeoCity;
  cityLabel: string;
  cityName: string;
  cityNameLocative: string;
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  lead: string;
  pills: string[];
  tiles: SeoTile[];
  stepsH2: string;
  steps: SeoStep[];
  faqH2: string;
  faq: SeoFaqItem[];
  crossLink: { intro: string; label: string; href: string };
};

export const SEO_LANDINGS: Record<SeoCity, SeoLandingContent> = {
  szczecin: {
    city: "szczecin",
    cityLabel: "Szczecin",
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
    lead: "Prowadzę indywidualne treningi pływania 1:1 na szczecińskich basenach (m.in. Floating Arena, SDS). Niezależnie od tego, czy chcesz przełamać lęk przed głęboką wodą, poprawić ekonomię kraula, czy szukasz trenera, który ułoży Ci pływanie pod start w triathlonie lub zawodach open water — pracujemy na konkretnych założeniach, bez chaosu i przypadkowych ćwiczeń.",
    pills: [
      "📍 Floating Arena i SDS",
      "👤 Tylko formuła 1:1",
      "🎥 Wideoanaliza techniki",
      "🏊‍♂️ Od podstaw i pod Triathlon",
    ],
    tiles: [
      {
        h2: "Nauka pływania dla dorosłych i dzieci w Szczecinie",
        text: "Zaczynasz od zera albo wracasz do wody po latach przerwy? Pracujemy w pełnym komforcie, bez stresu i presji grupy. Krok po kroku opanujesz spokojny wydech do wody, stabilne leżenie na powierzchni i swobodne poruszanie się na głębokim basenie.",
      },
      {
        h2: "Doskonalenie pływania i technika pod Triathlon",
        text: "Pływasz, ale brakuje Ci tlenu po dwóch długościach basenu? Skupiamy się na biomechanice, wysokim łokciu, rotacji i ekonomii ruchu. Korzystamy z wideoanalizy i układamy treningi tak, żebyś pływał szybciej mniejszym kosztem energetycznym.",
      },
      {
        h2: "Indywidualne lekcje pływania — trener na basenie",
        text: "Nie rzucam z brzegu hasła „przepłyń 10 basenów”. Przez cały trening monitoruję Twój ruch i koryguję błędy na bieżąco. Dostajesz konkretny feedback od razu po zatrzymaniu przy ścianie i plan dopasowany dokładnie do Twojej wydolności.",
      },
    ],
    stepsH2: "Jak zacząć treningi w Szczecinie?",
    steps: [
      {
        number: "01",
        title: "Szybki kontakt",
        text: "Napisz na WhatsApp, SMS lub e-mail. Podaj swój wiek (lub wiek dziecka), obecny poziom w wodzie oraz cel, nad którym chcesz popracować.",
      },
      {
        number: "02",
        title: "Trening wprowadzający",
        text: "Spotykamy się na wybranym basenie w Szczecinie (np. Floating Arena lub SDS). Pierwszy trening jest w niższej cenie startowej — sprawdzamy Twój poziom w wodzie.",
      },
      {
        number: "03",
        title: "Plan działania",
        text: "Po zajęciach dostajesz ode mnie konkretną ocenę techniczną i propozycję dalszej pracy. Wtedy na spokojnie decydujesz, czy trenujemy regularnie.",
      },
    ],
    faqH2: "Najczęstsze pytania — Szczecin",
    faq: [
      {
        q: "Na jakich basenach w Szczecinie odbywają się zajęcia?",
        a: "Najczęściej trenujemy na pływalniach Floating Arena oraz SDS (Szczeciński Dom Sportu). Możemy też umówić się na innym obiekcie w Szczecinie — lokalizację i godzinę dobieramy do dostępności torów oraz Twojego grafiku.",
      },
      {
        q: "Czy nauka pływania dla dorosłych od zera odbywa się na głębokiej wodzie?",
        a: "Zaczynamy w warunkach, które dają Ci poczucie bezpieczeństwa. Zanim wejdziemy na głębszą część basenu, opanujesz kontrolę oddechu, balans ciała i pewne leżenie na wodzie przy asekuracji trenera.",
      },
      {
        q: "Czym różni się doskonalenie pływania od zwykłej nauki?",
        a: "Nauka buduje fundamenty od podstaw (oswojenie z wodą, oddech, pierwsze style). Doskonalenie to precyzyjna praca nad detalami technicznymi u osób, które już pływają — eliminujemy opory, poprawiamy chwyt wody i przygotowujemy formę pod konkretny dystans lub zawody triathlonowe.",
      },
      {
        q: "Ile trwa lekcja i czy cena zawiera bilet na basen?",
        a: "Czas trwania treningu oraz aktualne stawki (w tym cenę pierwszego treningu wprowadzającego) znajdziesz w zakładce Oferta na stronie głównej. Wejście na basen opłacane jest osobno w kasie obiektu.",
      },
    ],
    crossLink: {
      intro: "Prowadzę też indywidualne lekcje pływania w Policach:",
      label: "Nauka pływania Police",
      href: "/nauka-plywania-police",
    },
  },
  police: {
    city: "police",
    cityLabel: "Police",
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
    lead: "Szukasz trenera pływania na miejscu, bez konieczności tracenia czasu na dojazdy do Szczecina? W Policach prowadzę indywidualne zajęcia 1:1 dla dorosłych, dzieci i młodzieży. Od pierwszego oswojenia z wodą, przez korektę techniki kraula i pozostałych stylów, aż po poukładane przygotowanie pod zawody i triathlon.",
    pills: [
      "📍 Police i okolice",
      "👤 Indywidualna formuła 1:1",
      "🎯 Od podstaw i korekta stylu",
      "🏆 Przygotowanie pod zawody",
    ],
    tiles: [
      {
        h2: "Nauka pływania dla dorosłych i dzieci w Policach",
        text: "Spokojne wejście do wody dla osób początkujących oraz tych z blokadą przed głębokością. Budujemy pewność w wodzie, uczymy się bezwysiłkowego wydechu i prawidłowej pozycji ciała — we własnym tempie, bez stresu grupy.",
      },
      {
        h2: "Doskonalenie pływania i ekonomia techniki",
        text: "Zamiast pływać „więcej tego samego, tylko mocniej”, zmieniamy nawyki ruchowe. Eliminujemy błędy, które Cię hamują, poprawiamy chwyt wody i ustawiamy rytm oddechowy pod dłuższe dystanse oraz starty w triathlonie.",
      },
      {
        h2: "Indywidualne lekcje pływania 1:1 z trenerem",
        text: "Zajęcia 1:1 oznaczają 100% mojej uwagi na Twojej technice. Każde ćwiczenie dobieram na żywo pod to, co w danym momencie dzieje się w wodzie, dzięki czemu robisz postępy znacznie szybciej niż w grupie zorganizowanej.",
      },
    ],
    stepsH2: "Jak zacząć zajęcia w Policach?",
    steps: [
      {
        number: "01",
        title: "Napisz lub zadzwoń",
        text: "Skontaktuj się przez WhatsApp, SMS lub e-mail. Napisz, dla kogo mają być zajęcia, jaki jest obecny poziom i nad czym zależy Ci najbardziej.",
      },
      {
        number: "02",
        title: "Pierwszy trening (niższa cena)",
        text: "Umawiamy dogodny termin na basenie w Policach. Pierwsze spotkanie wprowadzające jest w niższej cenie startowej — bez zobowiązań sprawdzamy Twój poziom w wodzie.",
      },
      {
        number: "03",
        title: "Decyzja i dalsza współpraca",
        text: "Po pierwszym treningu wiesz dokładnie, jakie błędy warto wyeliminować i jak będzie wyglądać nasza praca. Wtedy decydujesz o kolejnych terminach.",
      },
    ],
    faqH2: "Najczęstsze pytania — Police",
    faq: [
      {
        q: "Dla kogo przeznaczone są zajęcia w Policach?",
        a: "Trenuję z dziećmi, młodzieżą oraz osobami dorosłymi. Prowadzę zarówno osoby zaczynające całkowicie od zera, jak i pływaków amatorów oraz triathlonistów szukających poprawy czasów i techniki.",
      },
      {
        q: "Czy mogę elastycznie dopasować lokalizację między Policami a Szczecinem?",
        a: "Tak. Jeśli w wybrane dni tygodnia wygodniej Ci podjechać na trening do Szczecina (np. przy okazji pracy lub szkoły na Floating Arenę czy SDS), możemy elastycznie łączyć obie lokalizacje.",
      },
      {
        q: "Co zabrać na pierwszy trening wprowadzający?",
        a: "Wystarczy wygodny strój pływacki, okularki, czepek oraz klapki i ręcznik. Jeśli masz własny sprzęt treningowy (np. płetwy, łapki czy rurkę czołową), możesz go zabrać, ale na pierwszym spotkaniu skupiamy się przede wszystkim na ocenie naturalnego ruchu w wodzie.",
      },
      {
        q: "Jak szybko zobaczę efekty indywidualnych lekcji?",
        a: "Przy pracy 1:1 pierwsze wyraźne zmiany — szczególnie w ułożeniu ciała na wodzie i swobodzie oddechu — odczujesz już na pierwszych spotkaniach, bo każdy błąd korygujemy od razu po przepłynięciu odcinka.",
      },
    ],
    crossLink: {
      intro: "Prowadzę też indywidualne lekcje pływania w Szczecinie:",
      label: "Nauka pływania Szczecin",
      href: "/nauka-plywania-szczecin",
    },
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

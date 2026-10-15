import type { AppPageMetadata } from "@/types/app-seo";
import Link from "next/link";

export const metadata: AppPageMetadata = {
  title: "Nauka pływania Szczecin | Indywidualne lekcje | Patryk Karliński",
  description:
    "Trener pływania w Szczecinie: nauka od podstaw, poprawa techniki, przygotowanie sportowe i triathlon. Zajęcia indywidualne dla dzieci i dorosłych.",
  alternates: {
    canonical: "https://trenerkarlinski.pl/nauka-plywania-szczecin",
  },
  openGraph: {
    title: "Nauka pływania Szczecin | Patryk Karliński",
    description:
      "Indywidualne lekcje pływania w Szczecinie — od pierwszych metrów w wodzie po trening pod zawody.",
    url: "https://trenerkarlinski.pl/nauka-plywania-szczecin",
    locale: "pl_PL",
    type: "website",
  },
};

export default function NaukaPlywaniaSzczecinPage() {
  return (
    <main className="relative pt-32 pb-32 bg-[#07090c] text-white min-h-screen overflow-x-clip">
      <div className="absolute top-20 right-8 w-64 h-64 bg-sky-900/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Ta sama szerokość co menu (max-w-6xl), treść wyrównana do lewej jak logo */}
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.14em] uppercase text-sky-300/80 mb-4 font-medium">
            Szczecin
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Nauka i doskonalenie pływania w Szczecinie
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-neutral-400 rounded-full opacity-60 mb-10" />

          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>
              W Szczecinie prowadzę{" "}
              <strong className="text-white">indywidualne lekcje pływania</strong>{" "}
              dopasowane do wieku, poziomu i celu — od bezstresowego przełamania
              lęku przed wodą, przez naukę podstaw, po zaawansowany trening
              techniczny i przygotowanie pod starty w triathlonie.
            </p>
            <p>
              Każdy trening planuję osobno. Tempo, objętość i ćwiczenia zależą od
              Twojej sprawności i tego, co chcesz osiągnąć. Pracuję z dziećmi,
              młodzieżą i dorosłymi, a zajęcia prowadzimy m.in. na obiektach{" "}
              <strong className="text-white">Floating Arena i SDS</strong>. Na
              spotkaniach skupiamy się na pełnym bezpieczeństwie, prawidłowym
              oddechu i bezbłędnej technice stylów.
            </p>
            <p>
              Szukasz trenera pływania w Szczecinie? Zobacz{" "}
              <Link
                href="/#oferta"
                className="text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                ofertę
              </Link>{" "}
              albo{" "}
              <Link
                href="/#kontakt"
                className="text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                umów pierwszy trening
              </Link>
              — ustalimy termin, basen i formę współpracy.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/#kontakt"
              className="inline-flex px-6 py-3 rounded-full bg-sky-400 text-neutral-950 text-base font-semibold tracking-wide hover:bg-sky-300 transition-colors"
            >
              Umów zajęcia
            </Link>
          </div>

          <p className="mt-14 text-base text-neutral-500">
            Prowadzę też zajęcia w okolicy{" "}
            <Link
              href="/nauka-plywania-police"
              className="text-neutral-400 hover:text-white underline underline-offset-4"
            >
              Polic
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

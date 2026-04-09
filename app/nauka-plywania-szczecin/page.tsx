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
    <main className="relative pt-40 pb-32 bg-neutral-950 text-white min-h-screen overflow-hidden">
      <div className="absolute top-20 right-0 w-[480px] h-[480px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
          Szczecin
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Nauka i doskonalenie pływania w Szczecinie
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-neutral-400 rounded-full opacity-60 mb-10" />

        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
        <p>
            W Szczecinie prowadzę <strong className="text-white">indywidualne lekcje pływania</strong>{" "}
            dopasowane do wieku, poziomu i celu — od bezstresowego przełamania lęku przed wodą, przez naukę
            podstaw, po zaawansowany trening techniczny i przygotowanie pod starty w triathlonie.
          </p>
          <p>
            Każdy trening planuję osobno. Tempo, objętość i ćwiczenia zależą od Twojej sprawności i
            tego, co chcesz osiągnąć. Pracuję z dziećmi, młodzieżą i dorosłymi, a zajęcia prowadzimy m.in. na obiektach{" "}
            <strong className="text-white">Floating Arena i SDS</strong>. Na spotkaniach skupiamy się na pełnym
            bezpieczeństwie, prawidłowym oddechu i bezbłędnej technice stylów.
          </p>
          <p>
            Szukasz trenera pływania w Szczecinie? Zobacz{" "}
            <Link href="/oferta" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
              pełną ofertę
            </Link>{" "}
            albo po prostu{" "}
            <Link href="/kontakt" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
              napisz lub zadzwoń
            </Link>
            — ustalimy termin, basen i formę współpracy.
          </p>
          <p className="text-neutral-500 text-base">
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

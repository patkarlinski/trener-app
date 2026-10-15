import type { AppPageMetadata } from "@/types/app-seo";
import Link from "next/link";

export const metadata: AppPageMetadata = {
  title: "Nauka pływania Police | Indywidualne lekcje | Patryk Karliński",
  description:
    "Trener pływania w Policach: lekcje indywidualne dla dzieci i dorosłych, poprawa techniki, trening pod zawody i triathlon.",
  alternates: {
    canonical: "https://trenerkarlinski.pl/nauka-plywania-police",
  },
  openGraph: {
    title: "Nauka pływania Police | Patryk Karliński",
    description:
      "Indywidualne lekcje pływania w Policach — nauka, technika i trening pod Twój cel.",
    url: "https://trenerkarlinski.pl/nauka-plywania-police",
    locale: "pl_PL",
    type: "website",
  },
};

export default function NaukaPlywaniaPolicePage() {
  return (
    <main className="relative pt-32 pb-32 bg-[#07090c] text-white min-h-screen overflow-x-clip">
      <div className="absolute top-32 left-8 w-64 h-64 bg-sky-900/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Ta sama szerokość co menu (max-w-6xl), treść wyrównana do lewej jak logo */}
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.14em] uppercase text-sky-300/80 mb-4 font-medium">
            Police
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Nauka i doskonalenie pływania w Policach
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-neutral-400 rounded-full opacity-60 mb-10" />

          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>
              W Policach oferuję{" "}
              <strong className="text-white">spersonalizowane lekcje pływania</strong>{" "}
              w kameralnej formule 1:1. To optymalna opcja zarówno dla{" "}
              <strong className="text-white">dzieci, młodzieży i dorosłych</strong>{" "}
              dopiero zaczynających przygodę z wodą, jak i dla doświadczonych
              pływaków chcących poprawić styl, oddech lub czasy.
            </p>
            <p>
              Na treningach łączymy elementy techniczne z budową pewności siebie w
              wodzie. Jeśli celem są zawody lub triathlon, układam plan pod
              konkretne wymagania startowe i Twój harmonogram.
            </p>
            <p>
              Chcesz umówić{" "}
              <strong className="text-white">indywidualne zajęcia w Policach</strong>
              ?{" "}
              <Link
                href="/#kontakt"
                className="text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                Napisz lub zadzwoń
              </Link>
              . Szczegóły programów znajdziesz w{" "}
              <Link
                href="/#oferta"
                className="text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                ofercie
              </Link>
              .
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
            Prowadzę też zajęcia w{" "}
            <Link
              href="/nauka-plywania-szczecin"
              className="text-neutral-400 hover:text-white underline underline-offset-4"
            >
              Szczecinie
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

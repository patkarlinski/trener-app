import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
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
    <main className="relative pt-40 pb-32 bg-neutral-950 text-white min-h-screen overflow-hidden">
      <div className="absolute top-32 left-0 w-[420px] h-[420px] bg-teal-900/10 rounded-full blur-[110px] pointer-events-none -translate-x-1/2" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
          Police
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Nauka i doskonalenie pływania w Policach
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-neutral-400 rounded-full opacity-60 mb-10" />

        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
        <p>
            W Policach oferuję <strong className="text-white">spersonalizowane lekcje pływania</strong>{" "}
            w kameralnej formule 1:1. To optymalna opcja zarówno dla <strong className="text-white">dzieci, młodzieży i dorosłych</strong> dopiero zaczynających swoją przygodę z wodą, jak i dla doświadczonych pływaków chcących poprawić styl, oddech lub czasy na dystansach.
          </p>
          <p>
            Na treningach łączymy elementy techniczne z budową pełnej pewności siebie w wodzie. Jeśli Twoim celem są zawody pływackie lub triathlon, układam plan pod konkretne wymagania startowe i Twój prywatny harmonogram.
          </p>
          <p>
            Chcesz umówić <strong className="text-white">indywidualne zajęcia w Policach</strong>? Zapraszam do{" "}
            <Link href="/kontakt" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
              kontaktu
            </Link>
            . Szczegóły programów znajdziesz też w sekcji{" "}
            <Link href="/oferta" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
              Oferta
            </Link>
            .
          </p>
          <p className="text-neutral-500 text-base">
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

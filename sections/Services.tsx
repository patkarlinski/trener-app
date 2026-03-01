// 1. DODAJ IMPORT
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Usługi</h2>
          <div className="w-16 h-1 bg-white mt-6 mx-auto rounded-full opacity-20" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Pływanie */}
          <Link href="/oferta#plywanie" className="group block h-[480px] lg:h-[520px]">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/30 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
              
              {/* ZMIANA: Zoptymalizowane zdjęcie w tle z zachowanym efektem przybliżenia */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/swim.webp"
                  alt="Nauka i doskonalenie pływania"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Gradient tła */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Zawartość */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Nauka i doskonalenie pływania
                </h3>

                <p className="text-neutral-300 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-md transform transition-all duration-500 opacity-90 group-hover:opacity-100">
                  Indywidualne lekcje dla dzieci i dorosłych — od pierwszego
                  wejścia do wody aż po trening sportowy. Nauka wszystkich
                  stylów i poprawa techniki.
                </p>

                <div className="flex items-center text-white font-medium">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Zobacz szczegóły</span>
                    <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-blue-400">Zobacz szczegóły</span>
                  </span>
                  <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Trening */}
          <Link href="/oferta#trening" className="group block h-[480px] lg:h-[520px]">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/30 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
              
              {/* ZMIANA: Zoptymalizowane zdjęcie w tle z zachowanym efektem przybliżenia */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src="/gym.webp"
                  alt="Trening personalny"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Gradient tła */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Zawartość */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Trening personalny
                </h3>

                <p className="text-neutral-300 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-md transform transition-all duration-500 opacity-90 group-hover:opacity-100">
                  Program treningowy dopasowany do Twojego celu. Budowanie siły,
                  kondycji i sprawności — od rekreacji po przygotowanie
                  sportowe.
                </p>

                <div className="flex items-center text-white font-medium">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Zobacz szczegóły</span>
                    <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-blue-400">Zobacz szczegóły</span>
                  </span>
                  <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Umów trening
          </Link>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function Oferta() {
  return (
    <main className="relative pt-40 pb-32 bg-neutral-950 text-white min-h-screen overflow-hidden">
      
      {/* Subtelne rozmycia w tle dla głębi (Premium feel) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* NAGŁÓWEK */}
        <div className="text-center mb-20">
          <span className="mb-4 inline-block px-4 py-1.5 border border-white/10 rounded-full text-xs font-semibold tracking-widest text-neutral-400 uppercase bg-white/5 backdrop-blur-sm">
            Wybierz swój cel
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Oferta
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light tracking-wide">
            Lekcje pływania i trening personalny w Szczecinie / Policach
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-neutral-400 mx-auto mt-8 rounded-full opacity-50" />
        </div>

        {/* GRID Z OFERTAMI (1 kolumna mobile, 3 na desktopie) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* KARTA 1: Nauka pływania */}
          <div className="group relative bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-neutral-900/80 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500">
              {/* Ikona: Fale/Woda */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Nauka pływania</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">
              Idealne dla osób zaczynających od zera oraz tych, którzy chcą poczuć się pewnie i bezpiecznie w wodzie.
            </p>
            
            <ul className="space-y-4 mb-10 text-neutral-300 font-light">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✔</span>
                Przełamanie lęku przed wodą
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✔</span>
                Nauka od podstaw (dzieci i dorośli)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✔</span>
                Podstawy prawidłowego oddechu
              </li>
            </ul>

            <Link href="/kontakt" className="w-full block text-center py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide uppercase text-sm">
              Umów zajęcia
            </Link>
          </div>

          {/* KARTA 2: Pływanie sportowe */}
          <div className="group relative bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-neutral-900/80 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
            {/* Delikatny glow w tle tej konkretnej karty, żeby ją lekko wyróżnić */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="w-16 h-16 rounded-2xl bg-neutral-100/10 border border-white/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
              {/* Ikona: Stoper/Czas */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Pływanie sportowe</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed flex-grow relative z-10">
              Doskonalenie techniki, poprawa czasów i przygotowanie pod konkretne starty dla zaawansowanych.
            </p>
            
            <ul className="space-y-4 mb-10 text-neutral-300 font-light relative z-10">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✔</span>
                Korekta i optymalizacja techniki
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✔</span>
                Przygotowanie do zawodów / Triathlonu
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✔</span>
                Plany treningowe i analiza wideo
              </li>
            </ul>

            <Link href="/kontakt" className="w-full block text-center py-4 rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-300 font-semibold tracking-wide uppercase text-sm relative z-10">
              Rozpocznij trening
            </Link>
          </div>

          {/* KARTA 3: Trening siłowy */}
          <div className="group relative bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-neutral-900/80 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400 mb-8 group-hover:scale-110 transition-transform duration-500">
              {/* Ikona: Hantle */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M5 6a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Trening siłowy</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">
              Praca na lądzie. Budowanie siły, kondycji i sprawności — od rekreacji po testy sprawnościowe.
            </p>
            
            <ul className="space-y-4 mb-10 text-neutral-300 font-light">
              <li className="flex items-start gap-3">
                <span className="text-neutral-500 mt-1">✔</span>
                Indywidualny plan pod Twój cel
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-500 mt-1">✔</span>
                Budowanie masy mięśniowej / redukcja
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neutral-500 mt-1">✔</span>
                Trening motoryczny dla pływaków
              </li>
            </ul>

            <Link href="/kontakt" className="w-full block text-center py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide uppercase text-sm">
              Umów konsultację
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
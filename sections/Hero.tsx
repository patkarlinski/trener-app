export default function Hero() {
  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">

      {/* ZDJĘCIE W TLE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.webp')" }}
      />

      {/* OGÓLNE PRZYCIEMNIENIE */}
      <div className="absolute inset-0 bg-black/40" />

      {/* GRADIENT Z GÓRY */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />

      {/* GRADIENT Z DOŁU */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />

      {/* KONTENER NA TEKST */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-12">
        <span className="mb-6 px-5 py-1.5 border border-white/20 rounded-full text-xs md:text-sm font-medium tracking-widest text-neutral-300 uppercase bg-black/20 backdrop-blur-md">
          Przekraczaj własne granice
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-[0.15em] leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
          Trening Pływacki
          <span className="block mt-3 text-2xl md:text-4xl lg:text-5xl font-light text-neutral-200 tracking-widest">
            I Trening Siłowy
          </span>
        </h1>
      </div>

      {/* STRZAŁKA SCROLLOWANIA (Teraz poprawnie widoczna też na mobile) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}
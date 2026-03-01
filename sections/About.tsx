import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-neutral-50 overflow-hidden"
    >
      {/* Dekoracyjne rozmyte plamy w tle */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* SEKCJA ZDJĘCIA */}
          <div className="relative group w-full">
            <div className="absolute -inset-4 border-2 border-neutral-200 rounded-[2.5rem] -z-10 hidden md:block transition-transform duration-500 group-hover:scale-105" />
            
            <div className="relative h-[500px] md:h-[680px] rounded-[2rem] overflow-hidden shadow-2xl">
              
              {/* TUTAJ ZMIANA: Zoptymalizowany obrazek z Next.js */}
           <Image
  src="/me.webp"
  alt="Trener pływania Patryk"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  // DODANO object-top PONIŻEJ:
  className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
/>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 z-10" />
            </div>
          </div>

          {/* SEKCJA TEKSTOWA */}
          <div className="
            relative
            bg-white/80
            backdrop-blur-xl
            p-8 md:p-12 lg:p-14
            rounded-[2.5rem]
            shadow-[0_20px_50px_rgba(0,0,0,0.1)]
            border border-white/60
            transition-all duration-500
            hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          ">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-gradient-to-br from-blue-50 to-neutral-100 rounded-full blur-2xl opacity-60"></div>

            <div className="relative">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-neutral-500 uppercase bg-white/50 rounded-full mb-4 shadow-sm border border-neutral-100">
                Poznajmy się
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                O mnie
              </h2>

              <div className="w-16 h-1.5 bg-gradient-to-r from-neutral-800 to-neutral-400 mb-8 rounded-full" />

              <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
                <p>
                  Nazywam się <strong className="text-neutral-900 font-medium">Patryk</strong>. Jako medalista Mistrzostw Świata i Europy oraz licencjonowany trener, wiem dokładnie, jak skutecznie osiągać cele. W swojej pracy trenera pływania i trenera personalnego pomagam dzieciom i dorosłym budować pewność w wodzie, szlifować technikę oraz rozwijać formę fizyczną, oferując w pełni indywidualne podejście do każdego treningu.
                </p>

                <p>
                  Każdy plan dopasowuję do poziomu, celu i możliwości podopiecznego — niezależnie czy zaczynasz od zera, czy chcesz wejść na wyższy poziom sportowy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
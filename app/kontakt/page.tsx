"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/contact"; // 1. IMPORT NASZEJ FUNKCJI

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null); // 2. DODANIE STANU DLA BŁĘDÓW

  // 3. ZMIANA FUNKCJI OBSŁUGUJĄCEJ WYSYŁKĘ
  async function actionHandler(formData: FormData) {
    setIsSubmitting(true);
    setErrorMsg(null);

    // Wywołanie naszej prawdziwej funkcji serwerowej z danymi z formularza
    const result = await sendEmail(formData);

    if (result?.error) {
      setErrorMsg(result.error);
      setIsSubmitting(false);
    } else {
      setSent(true);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative pt-40 pb-32 bg-neutral-950 text-white min-h-screen overflow-hidden">
      
      {/* Subtelna poświata w tle */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Nagłówek strony */}
        <div className="mb-16 md:mb-24">
          <span className="mb-4 inline-block px-4 py-1.5 border border-white/10 rounded-full text-xs font-semibold tracking-widest text-neutral-400 uppercase bg-white/5 backdrop-blur-sm">
            Napisz do mnie
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Zacznijmy <br className="hidden md:block" />wspólny trening
          </h1>
        </div>

        {/* Układ dwukolumnowy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEWA KOLUMNA: Informacje kontaktowe */}
          <div className="space-y-10">
            <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
              Masz pytania dotyczące oferty, chcesz ustalić szczegóły współpracy lub umówić się na pierwszy trening? Wypełnij formularz lub skontaktuj się ze mną bezpośrednio.
            </p>

            <div className="space-y-6">
              {/* Telefon */}
              <a href="tel:511258922" className="flex items-center gap-6 group w-max">
                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-xl font-light tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                  511 258 922
                </span>
              </a>

              {/* Email */}
              <a href="mailto:kontakt@trenerkarlinski.pl" className="flex items-center gap-6 group w-max">
                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-xl font-light tracking-wide text-neutral-300 group-hover:text-white transition-colors">
                  kontakt@trenerkarlinski.pl
                </span>
              </a>
            </div>
          </div>

          {/* PRAWA KOLUMNA: Formularz */}
          <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2rem]">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Wiadomość wysłana!</h3>
                <p className="text-neutral-400">Odezwię się do Ciebie najszybciej jak to możliwe.</p>
                <button 
                  onClick={() => setSent(false)}
                  className="mt-8 px-6 py-2 text-sm text-neutral-400 hover:text-white border border-white/10 rounded-full hover:bg-white/5 transition"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              // 4. ZMIANA Z onSubmit NA action
              <form action={actionHandler} className="space-y-6">
                
                {/* 5. DODANIE HONEYPOTA */}
                <input type="text" name="_hp_username" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* 6. DODANIE name="name" DO IMIENIA (Musiałem dorzucić to pole, bo w backendzie wymagasz 'name') */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-400 uppercase tracking-widest pl-2">
                    Twoje Imię
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="np. Jan Kowalski"
                    required
                    className="w-full p-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 focus:bg-black/80 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-400 uppercase tracking-widest pl-2">
                    Twój Email
                  </label>
                  <input
                    id="email"
                    name="email" 
                    type="email"
                    placeholder="np. jan@kowalski.pl"
                    required
                    className="w-full p-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 focus:bg-black/80 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-400 uppercase tracking-widest pl-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message" 
                    placeholder="Jak mogę Ci pomóc?"
                    required
                    rows={5}
                    className="w-full p-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/40 focus:bg-black/80 transition-all duration-300 resize-none"
                  />
                </div>

                {/* 9. WYŚWIETLANIE BŁĘDU, JEŚLI WYSYŁKA ZAWIEDZIE */}
                {errorMsg && (
                  <p className="text-red-400 text-sm pl-2">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 hover:scale-[1.02] transition-all duration-300 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  {!isSubmitting && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
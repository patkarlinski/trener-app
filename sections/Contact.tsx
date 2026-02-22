export default function Contact() {
  return (
    <section id="kontakt" className="relative py-24 bg-neutral-950 text-white overflow-hidden border-t border-white/5">
      
      {/* Delikatna poświata w tle dla głębi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* NAGŁÓWEK SEKCJI */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block px-4 py-1.5 border border-white/10 rounded-full text-xs font-semibold tracking-widest text-neutral-400 uppercase bg-white/5 backdrop-blur-sm">
            Bądźmy w kontakcie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Kontakt</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto rounded-full opacity-50" />
        </div>

        {/* GŁÓWNE DANE KONTAKTOWE (Grid: 1 kolumna na mobile, 2 na desktopie) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          
          {/* TELEFON */}
          <a
            href="tel:511258922"
            className="group flex flex-col items-center gap-5 p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-white/20 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-light tracking-widest text-neutral-300 group-hover:text-white transition-colors">
              511 258 922
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:kontakt@trenerkarlinski.pl"
            className="group flex flex-col items-center gap-5 p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-white/20 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-light tracking-wide text-neutral-300 group-hover:text-white transition-colors">
              kontakt@trenerkarlinski.pl
            </span>
          </a>

        </div>

        {/* SOCIAL MEDIA */}
        <div className="mt-16 pt-12 border-t border-white/10 flex flex-col items-center gap-6">
          <p className="text-neutral-500 uppercase tracking-widest text-sm font-medium">
            Znajdź mnie w sieci
          </p>
          <div className="flex gap-6">
            
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/karlinski.patryk?igsh=MXJweTJycDhqZjg1eA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com/https://www.facebook.com/share/1ARViCP6Zj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 text-center text-neutral-600 text-xs tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Patryk Karliński. Wszelkie prawa zastrzeżone.
        </div>

      </div>
    </section>
  );
}
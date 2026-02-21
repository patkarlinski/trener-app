export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center">
      
      {/* Subtelnie pulsujący pierścień w tle (przyciąga wzrok) */}
      <div className="absolute w-full h-full bg-white/40 rounded-full animate-ping opacity-75"></div>
      
      {/* Główny przycisk */}
      <a
        href="tel:511258922"
        aria-label="Zadzwoń do mnie"
        className="relative flex items-center justify-center w-14 h-14 bg-white text-neutral-900 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.4)] active:scale-95 transition-transform duration-200"
      >
        {/* Elegancka ikona SVG zamiast Emoji */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

    </div>
  );
}
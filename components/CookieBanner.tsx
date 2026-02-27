"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Sprawdzamy, czy użytkownik już kliknął akceptację
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-neutral-200 p-4 sm:px-8 z-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
      <p className="text-center sm:text-left">
        Ta strona korzysta z ciasteczek (cookies), aby analizować ruch i zapewniać najwyższą jakość usług. 
        Więcej informacji znajdziesz w <Link href="/polityka-prywatnosci" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Polityce Prywatności</Link>.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("cookieConsent", "true");
          setShowBanner(false);
        }}
        className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
      >
        Rozumiem i akceptuję
      </button>
    </div>
  );
}
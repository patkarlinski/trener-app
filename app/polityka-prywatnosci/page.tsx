import Link from "next/link";

export const metadata = {
  title: "Polityka Prywatności | Patryk Karliński",
  description: "Polityka prywatności i zasady przetwarzania danych osobowych.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-24 sm:py-32 text-white">
      <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block">
        &larr; Wróć na stronę główną
      </Link>
      <h1 className="text-3xl font-bold mb-8 text-white">Polityka Prywatności</h1>
      
      <div className="space-y-8 text-neutral-400 leading-relaxed font-light">
        <p>
          Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług trenera Patryka Karlińskiego.
        </p>
        
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Administrator Danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest Patryk Karliński. W sprawach związanych z przetwarzaniem i ochroną danych osobowych możesz kontaktować się drogą elektroniczną pod adresem e-mail: kontakt@trenerkarlinski.pl.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Cele i podstawy prawne przetwarzania</h2>
          <p>Twoje dane osobowe (imię, adres e-mail, ewentualnie numer telefonu i treść wiadomości) przetwarzane są w celu:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy – na podstawie Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora).</li>
            <li>Przedstawienia oferty usług trenerskich na Twoje żądanie – na podstawie Art. 6 ust. 1 lit. b RODO (działania zmierzające do zawarcia umowy).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Odbiorcy danych i okres przechowywania</h2>
          <p>
            Twoje dane mogą być powierzane podmiotom zewnętrznym współpracującym z Administratorem wyłącznie w celu utrzymania strony i obsługi komunikacji (np. dostawca hostingu, dostawca usług e-mailowych – system Resend). Dane nie są sprzedawane podmiotom trzecim.
            <br className="mb-2" />
            Dane będą przechowywane przez okres niezbędny do obsługi zapytania, a po tym czasie – przez okres przedawnienia ewentualnych roszczeń.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Pliki Cookies (Ciasteczka)</h2>
          <p>
            Strona korzysta z plików cookies. Są to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu. Wykorzystujemy je w celach analitycznych i statystycznych (Google Analytics 4), aby zrozumieć, jak Użytkownicy korzystają ze strony i móc ją ulepszać.
            <br className="mb-2" />
            Zgoda na pliki cookies wyrażana jest poprzez kliknięcie odpowiedniego przycisku na banerze informacyjnym. Możesz w każdej chwili zablokować pliki cookies w ustawieniach swojej przeglądarki internetowej.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Twoje prawa</h2>
          <p>W związku z przetwarzaniem Twoich danych osobowych przysługuje Ci prawo do:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
            <li>Sprostowania (poprawiania) swoich danych.</li>
            <li>Usunięcia danych lub ograniczenia ich przetwarzania.</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
            <li>Wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
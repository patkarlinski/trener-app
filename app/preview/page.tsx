"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollToSectionId } from "@/lib/scrollToSection";

const FAQ = [
  {
    q: "Jak wygląda pierwsze spotkanie?",
    a: "Napisz lub zadzwoń — podaj wiek, poziom i cel. Ustalamy termin oraz basen w Szczecinie lub Policach. Na pierwszej lekcji poznajemy się w wodzie (lub na treningu) i układamy dalszy plan. Pierwszy trening wprowadzający jest w niższej cenie startowej.",
  },
  {
    q: "Co zrobić przed pierwszą lekcją i co zabrać?",
    a: "Przyjdź 10–15 min wcześniej. Weź strój kąpielowy, ręcznik, klapki, najlepiej czepek i okularki. Napisz, jeśli to pierwsze wejście do wody albo masz kontuzję. Dodatkowy sprzęt (płetwy, deska) — dam znać, czy i kiedy ma sens.",
  },
  {
    q: "Dla kogo są zajęcia?",
    a: "Dla dzieci, młodzieży i dorosłych — od kompletnych początkujących po osoby trenujące sportowo.",
  },
  {
    q: "Gdzie odbywają się zajęcia?",
    a: "Szczecin (m.in. Floating Arena, SDS) oraz okolice Polic. Basen dopasowujemy do dostępności i Twojej lokalizacji.",
  },
  {
    q: "Ile trwa trening i jak często ćwiczymy?",
    a: "Pojedyncze zajęcia trwają 45 minut. Częstotliwość treningów dobieramy indywidualnie w zależności od Twojego celu i dostępności — najczęściej spotykamy się 1–2 razy w tygodniu.",
  },
  {
    q: "Czy muszę umieć pływać?",
    a: "Absolutnie nie! Wielu moich podopiecznych zaczyna całkowicie od zera lub od spokojnego przełamania lęku przed wodą. Zaczynamy na płytkim basenie, w Twoim tempie i w 100% bezpiecznych warunkach.",
  },
  {
    q: "Jak wygląda współpraca i płatność?",
    a: "Wszystkie zasady współpracy (pojedyncze wejścia lub pakiety, rozliczenia oraz przekładanie zajęć) omawiamy przejrzyście podczas pierwszej rozmowy — tak, abyś miał pełną jasność jeszcze przed wejściem do wody.",
  },
] as const;

const CONTACT_GOALS = [
  "Nauka pływania",
  "Pływanie sportowe",
  "Trening siłowy",
] as const;

type ContactGoal = (typeof CONTACT_GOALS)[number];

const OFFER = [
  {
    title: "Nauka pływania",
    goal: "Nauka pływania" as ContactGoal,
    forWho: "Pierwsze kroki • Przełamanie lęku • Dzieci i dorośli",
    points: [
      "Oswajanie z wodą i budowanie pewności",
      "Prawidłowy oddech i ułożenie ciała w wodzie",
      "Nauka podstawowych stylów od zera",
    ],
  },
  {
    title: "Pływanie sportowe",
    goal: "Pływanie sportowe" as ContactGoal,
    forWho: "Technika • Poprawa czasów • Triathlon i zawody",
    points: [
      "Precyzyjna korekta techniki i ekonomii ruchu",
      "Wideoanaliza pływania i eliminacja błędów",
      "Przygotowanie pod zawody i triathlon",
    ],
  },
  {
    title: "Trening siłowy",
    goal: "Trening siłowy" as ContactGoal,
    forWho: "Siła • Sprawność • Przygotowanie motoryczne",
    points: [
      "Indywidualny plan treningowy na lądzie",
      "Budowanie siły, sprawności i prewencja kontuzji",
      "Trening pod sylwetkę, zdrowie lub wynik w wodzie",
    ],
  },
] as const;

const PHONE_E164 = "48511258922";
const PHONE_DISPLAY = "511 258 922";
const EMAIL = "kontakt@trenerkarlinski.pl";
const CTA_PILL_CLASS =
  "cursor-pointer px-6 py-3 rounded-full bg-sky-400 text-neutral-950 text-base font-semibold tracking-wide hover:bg-sky-300 transition-colors";

function buildContactMessage(goal: ContactGoal) {
  return `Cześć Patryk! Chcę umówić pierwszy trening.
Cel: ${goal}
Kto: [Dziecko / Dorosły]
Miasto: [Szczecin / Police]
Preferowane dni/godziny: `;
}

export default function PreviewPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedGoal, setSelectedGoal] = useState<ContactGoal>(CONTACT_GOALS[0]);
  const [emailCopied, setEmailCopied] = useState(false);
  const [contactSheetOpen, setContactSheetOpen] = useState(false);

  useEffect(() => {
    if (!contactSheetOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [contactSheetOpen]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const t = window.setTimeout(() => scrollToSectionId(hash), 120);
    return () => window.clearTimeout(t);
  }, []);

  function scrollTo(href: string) {
    scrollToSectionId(href.replace("#", ""));
  }

  function bookLesson(goal: ContactGoal) {
    setSelectedGoal(goal);
    requestAnimationFrame(() => scrollToSectionId("kontakt"));
  }

  const message = buildContactMessage(selectedGoal);
  const encodedMessage = encodeURIComponent(message);
  const whatsappHref = `https://wa.me/${PHONE_E164}?text=${encodedMessage}`;
  const smsHref = `sms:+${PHONE_E164}?&body=${encodedMessage}`;
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Pierwszy trening - ${selectedGoal}`,
  )}&body=${encodedMessage}`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  }

  return (
    <main className="bg-[#07090c] text-neutral-100 text-lg min-h-screen">
      {/* 1. Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden pb-12 pt-32 md:pb-20 md:pt-36">
        <Image
          src="/banner.webp"
          alt="Trening pływacki — Patryk Karliński"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] md:object-center"
          quality={82}
        />
        {/* Mobile: ciemny gradient od środka w dół — tekst na jednolitym tle */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/75 to-[#05080d] md:hidden"
          aria-hidden
        />
        {/* Desktop: dotychczasowe gradienty */}
        <div
          className="absolute inset-0 hidden bg-gradient-to-t from-[#07090c] via-[#07090c]/55 to-[#07090c]/30 md:block"
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_top,_transparent_20%,_#07090c_90%)] md:block"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5">
          <p className="mb-3 inline-flex max-w-full items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-sky-400 backdrop-blur-sm md:mb-5 md:text-sm md:tracking-[0.16em]">
            Indywidualne lekcje · Szczecin / Police
          </p>
          <h1
            className="mb-2 max-w-4xl text-4xl font-bold tracking-tight leading-[1.05] md:mb-0 md:text-7xl md:leading-[0.95] lg:text-8xl"
            style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
          >
            Patryk
            <br />
            Karliński
          </h1>
          <p className="mb-2 max-w-xl text-lg font-medium leading-snug text-zinc-100 md:mb-0 md:mt-6 md:text-2xl md:font-normal md:leading-relaxed md:text-neutral-200">
            Nauka i doskonalenie pływania. Trening personalny.
          </p>
          <p className="mb-6 max-w-lg text-sm leading-relaxed text-zinc-400 md:mb-0 md:mt-3 md:text-lg md:text-neutral-400">
            Od pierwszego wejścia do wody po starty w zawodach — jeden trener,
            jasny plan, realny postęp.
          </p>
          <div className="flex flex-col gap-2.5 pb-24 md:mt-10 md:flex-row md:flex-wrap md:gap-4 md:pb-0">
            <button
              type="button"
              onClick={() => scrollTo("#kontakt")}
              className="cursor-pointer w-full rounded-full bg-sky-400 px-8 py-3.5 text-sm font-semibold tracking-wide text-neutral-950 transition-colors hover:bg-sky-300 md:w-auto md:text-lg"
            >
              Umów zajęcia
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#oferta")}
              className="cursor-pointer w-full rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-white/50 hover:bg-white/5 md:w-auto md:text-lg md:font-normal"
            >
              Oferta
            </button>
          </div>
        </div>
      </section>

      {/* 2. O mnie */}
      <section id="about" className="scroll-mt-[4.75rem] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <Image
              src="/me.webp"
              alt="Trener pływania Patryk Karliński"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top scale-105"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              aria-hidden
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.14em] uppercase text-sky-300/80 mb-4 font-medium">
              O mnie
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
            >
              Trener, który wie, jak dojść do celu
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Nazywam się Patryk. Jestem medalistą Mistrzostw Świata i Europy
              oraz licencjonowanym trenerem. Prowadzę indywidualne lekcje
              pływania i treningi personalne dla dzieci oraz dorosłych — od
              nauki pływania dla dorosłych i przełamania lęku przed wodą, przez
              doskonalenie techniki, aż po poprawę czasów i budowanie formy na
              lądzie. Więcej o zajęciach lokalnie:{" "}
              <Link
                href="/nauka-plywania-szczecin"
                className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
              >
                nauka pływania Szczecin
              </Link>{" "}
              i{" "}
              <Link
                href="/nauka-plywania-police"
                className="text-sky-400 underline underline-offset-4 hover:text-sky-300"
              >
                nauka pływania Police
              </Link>
              .
            </p>
            <ul className="list-none space-y-3 text-neutral-300 pl-0">
              {[
                "Medalista Mistrzostw Świata i Europy",
                "Licencjonowany trener pływania i trener personalny",
                "Dwukrotny uczestnik zawodów z cyklu IRONMAN",
                "Ratownik WOPR z ponad 10-letnim doświadczeniem",
                "Zajęcia indywidualne — dzieci, młodzież, dorośli",
                "Szczecin (Floating Arena, SDS) oraz Police",
              ].map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-2 items-start"
                >
                  <span
                    className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 justify-self-center"
                    aria-hidden
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Oferta */}
      <section id="oferta" className="scroll-mt-[4.75rem] bg-[#0c1016] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-sm tracking-[0.14em] uppercase text-sky-300/80 mb-4 font-medium">
            Oferta
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
          >
            Co możesz u mnie trenować
          </h2>
          <p className="text-neutral-400 text-lg mb-14 max-w-2xl">
            Wybierz swój kierunek. Szczegóły i plan działania ustalimy podczas
            pierwszej, tańszej lekcji na start.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
            {OFFER.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col border-t border-white/10 pt-8"
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-6 min-h-[2.75rem]">
                  {item.forWho}
                </p>
                <ul className="mb-8 flex-grow space-y-2 text-neutral-300">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400"
                        aria-hidden
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => bookLesson(item.goal)}
                    className={`${CTA_PILL_CLASS} w-full sm:w-auto justify-center text-center`}
                  >
                    Umów zajęcia
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Kontakt */}
      <section
        id="kontakt"
        className="scroll-mt-[4.75rem] bg-[#0c1016] pt-8 pb-24 md:py-32"
      >
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-sm tracking-[0.14em] uppercase text-sky-300/80 mb-4 font-medium">
            Kontakt
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
          >
            Umów pierwszy trening
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Wybierz interesujący Cię obszar i skontaktuj się w wygodny sposób.
            Podczas prowadzenia zajęć na pływalni nie odbieram telefonu — zostaw
            wtedy wiadomość na WhatsApp lub SMS, a oddzwonię po wyjściu z wody.
          </p>

          <div className="mb-8 w-full rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-500/15 via-sky-500/10 to-transparent px-6 py-5 sm:px-8 sm:py-6 text-center">
            <p className="flex w-full flex-col items-center justify-center gap-2 text-lg font-semibold leading-snug text-white sm:text-xl">
              <span className="inline-flex items-center rounded-md border border-sky-400/40 bg-sky-400/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-300">
                Start
              </span>
              Pierwszy trening w niższej cenie
            </p>
            <p className="mt-2.5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mx-auto">
              Sprawdź, jak pracujemy na żywo, zanim zdecydujesz o dalszej
              współpracy.
            </p>
          </div>

          <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500">
            Wybierz obszar współpracy
          </p>
          <div
            className="mb-8 flex w-full flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
            role="group"
            aria-label="Wybierz cel treningu"
          >
            {CONTACT_GOALS.map((goal) => {
              const active = selectedGoal === goal;
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setSelectedGoal(goal)}
                  aria-pressed={active}
                  className={`cursor-pointer w-full rounded-full px-4 py-2.5 text-sm font-medium transition-colors border sm:w-auto sm:px-5 sm:text-base ${
                    active
                      ? "bg-sky-500/15 border-sky-400 text-sky-100"
                      : "bg-transparent text-zinc-400 border-white/10 hover:border-white/25 hover:text-zinc-200"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-sky-400 text-neutral-950 text-base font-semibold tracking-wide hover:bg-sky-300 transition-colors"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Napisz na WhatsApp
            </a>
            <a
              href={smsHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-white/20 bg-white/[0.03] text-white text-base font-semibold tracking-wide hover:bg-white/[0.08] transition-colors"
            >
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h8M8 14h5M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.25-.92L3 20l1.08-3.26A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Wyślij SMS
            </a>
          </div>

          <div className="mt-3 grid items-stretch gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
            <a
              href={`tel:+${PHONE_E164}`}
              className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 px-4 py-6 transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <span className="mb-3 block text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
                Telefon
              </span>
              <span className="block text-2xl tracking-wide">{PHONE_DISPLAY}</span>
              <span className="mt-3 block text-sm text-neutral-500">
                Kliknij, aby zadzwonić
              </span>
            </a>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/10 px-4 py-6 transition-colors hover:border-white/30 hover:bg-white/5">
              <span className="mb-3 block text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
                E-mail
              </span>
              <a
                href={mailtoHref}
                className="break-all text-base text-neutral-100 transition-colors hover:text-sky-300 sm:text-lg"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-neutral-400 underline underline-offset-4 transition-colors hover:text-white"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                {emailCopied ? "Skopiowano!" : "Skopiuj adres e-mail"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section id="faq" className="scroll-mt-[4.75rem] bg-[#07090c] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-sm tracking-[0.14em] uppercase text-sky-300/80 mb-4 font-medium">
            FAQ
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
          >
            Najczęstsze pytania
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Krótko i konkretnie — jeśli potrzebujesz więcej informacji, śmiało
            napisz lub zadzwoń.
          </p>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQ.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span
                      className="font-semibold text-lg sm:text-xl"
                      style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="text-neutral-500 text-xl leading-none tabular-nums"
                      aria-hidden
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-neutral-400 leading-relaxed pr-8">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stopka — lokalizacje SEO */}
      <footer className="border-t border-white/10 bg-[#07090c]">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-24 md:py-16">
          <p className="text-center text-xs uppercase tracking-wider text-zinc-500 mb-6">
            Lokalizacje i szczegóły zajęć
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/nauka-plywania-szczecin"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-200 transition-all hover:border-sky-400/50 hover:text-white"
            >
              <svg
                className="h-4 w-4 shrink-0 text-sky-400/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className="flex-1 text-left">Nauka pływania Szczecin</span>
              <span aria-hidden className="text-zinc-500">
                →
              </span>
            </Link>
            <Link
              href="/nauka-plywania-police"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-200 transition-all hover:border-sky-400/50 hover:text-white"
            >
              <svg
                className="h-4 w-4 shrink-0 text-sky-400/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className="flex-1 text-left">Nauka pływania Police</span>
              <span aria-hidden className="text-zinc-500">
                →
              </span>
            </Link>
          </div>
          <p className="mt-10 text-center text-xs text-zinc-600 tracking-wide">
            © {new Date().getFullYear()} Patryk Karliński
          </p>
        </div>
      </footer>

      {/* Mobile: przyklejony telefon + sheet z natywnymi akcjami */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setContactSheetOpen(true)}
          aria-label="Zadzwoń lub napisz"
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-sky-400 text-neutral-950 shadow-[0_10px_28px_rgba(56,189,248,0.45)] active:scale-95 transition-transform"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>

        {contactSheetOpen && (
          <div className="fixed inset-0 z-[70] flex flex-col justify-end">
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              aria-label="Zamknij"
              onClick={() => setContactSheetOpen(false)}
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Wybierz sposób kontaktu"
              className="relative z-10 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <div className="rounded-2xl overflow-hidden bg-[#1c1c1e] text-center mb-2">
                <p className="px-4 py-3 text-xs text-neutral-500 border-b border-white/10">
                  Skontaktuj się z Patrykiem
                </p>
                <a
                  href={`tel:+${PHONE_E164}`}
                  onClick={() => setContactSheetOpen(false)}
                  className="block w-full px-4 py-4 text-[17px] font-semibold text-sky-400 border-b border-white/10 active:bg-white/5"
                >
                  Zadzwoń
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setContactSheetOpen(false)}
                  className="block w-full px-4 py-4 text-[17px] font-semibold text-sky-400 border-b border-white/10 active:bg-white/5"
                >
                  WhatsApp
                </a>
                <a
                  href={smsHref}
                  onClick={() => setContactSheetOpen(false)}
                  className="block w-full px-4 py-4 text-[17px] font-semibold text-sky-400 active:bg-white/5"
                >
                  SMS
                </a>
              </div>
              <button
                type="button"
                onClick={() => setContactSheetOpen(false)}
                className="w-full rounded-2xl bg-[#2c2c2e] px-4 py-4 text-[17px] font-semibold text-sky-400"
              >
                Anuluj
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

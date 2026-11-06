"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { scrollToSectionId } from "@/lib/scrollToSection";
import { useMounted } from "@/lib/useMounted";
import {
  CTA_PRIMARY_FX,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_E164,
} from "@/lib/cta";
import InstagramIcon from "@/components/InstagramIcon";

/** Menu one-page — ten sam wygląd na wszystkich stronach. */
const CTA_CLASS = `cursor-pointer px-6 py-3 rounded-full bg-sky-400 text-neutral-950 text-base font-semibold tracking-wide ${CTA_PRIMARY_FX}`;

const MAIN = "/";

const NAV = [
  { href: "#about", label: "O mnie" },
  { href: "#oferta", label: "Oferta" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const ready = useMounted();

  // Zamknij menu po zmianie ścieżki (wzorzec „adjust state during render").
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const onOnePager = pathname === MAIN;
  // SSR i pierwsze malowanie: zawsze solidne tło — pathname w root layout
  // bywa puste przy SSR i powodowało mismatch (transparent vs bg-[#07090c]).
  const solidNav = !ready || scrolled || !onOnePager;

  // Otwarte menu: blokada scrolla tła, zamknięcie klawiszem Esc
  // i automatycznie po przejściu na układ desktopowy.
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goToSection(hash: string) {
    const id = hash.replace("#", "");
    const wasMenuOpen = menuOpen;
    setMenuOpen(false);

    if (pathname !== MAIN) {
      router.push(`${MAIN}${hash}`);
      return;
    }

    // Na mobile najpierw zamknij menu — inaczej pozycja jest liczona
    // przy otwartym panelu i po zamknięciu lądujemy za wysoko pod nav.
    const runScroll = () => scrollToSectionId(id);

    if (wasMenuOpen) {
      window.setTimeout(runScroll, 180);
    } else {
      runScroll();
    }
  }

  function goHome(e: React.MouseEvent) {
    if (pathname === MAIN) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 z-[60] w-full max-w-[100vw] transition-colors duration-300 ${
        solidNav || menuOpen ? "bg-[#07090c]" : "bg-transparent"
      }`}
    >
      <nav className="relative z-10 mx-auto w-full max-w-6xl px-5 h-[4.75rem] flex items-center justify-between gap-4 text-white box-border">
        <Link
          href={MAIN}
          onClick={goHome}
          className="shrink-0 text-left hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-preview-display), sans-serif" }}
        >
          <span className="flex flex-row items-baseline leading-none">
            <span className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-[0.08em] uppercase">
              Karliński
            </span>
            <span className="ml-2 text-xs text-neutral-400 font-medium tracking-[0.14em] uppercase sm:ml-2.5 sm:text-base lg:text-lg">
              Trener
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-base font-medium tracking-[0.06em] uppercase text-neutral-200">
          {NAV.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={(e) => {
                goToSection(item.href);
                e.currentTarget.blur();
              }}
              className="hover:text-white transition-colors outline-none focus:outline-none focus-visible:outline-none"
            >
              {item.label}
            </button>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            title={`Instagram ${INSTAGRAM_HANDLE}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-neutral-200 transition-colors hover:border-sky-400/60 hover:text-sky-300"
          >
            <InstagramIcon className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <button
            type="button"
            onClick={(e) => {
              goToSection("#kontakt");
              e.currentTarget.blur();
            }}
            className={`outline-none focus:outline-none focus-visible:outline-none ${CTA_CLASS}`}
          >
            Umów zajęcia
          </button>
        </div>

        <button
          type="button"
          onClick={(e) => {
            setMenuOpen((v) => !v);
            e.currentTarget.blur();
          }}
          className={`lg:hidden flex h-11 w-11 shrink-0 items-center justify-center outline-none focus:outline-none focus-visible:outline-none transition-all duration-200 ${
            menuOpen
              ? "rounded-xl border border-sky-400/70 bg-sky-400/10 shadow-[0_0_18px_rgba(56,189,248,0.35)]"
              : ""
          }`}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6 text-sky-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span className="h-0.5 w-full rounded-full bg-white" />
              <span className="h-0.5 w-full rounded-full bg-white" />
              <span className="h-0.5 w-full rounded-full bg-white" />
            </span>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="mobile-menu-in fixed inset-0 z-0 overflow-y-auto bg-[#07090c] lg:hidden"
        >
          {/* Poświata w tle — ten sam sky-blue co akcenty strony */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.16),_transparent_65%)]"
            aria-hidden
          />
          <div className="relative flex min-h-full flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[calc(4.75rem+1.5rem)]">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-white/10 first:border-t">
                  <button
                    type="button"
                    onClick={(e) => {
                      goToSection(item.href);
                      e.currentTarget.blur();
                    }}
                    className="group flex w-full items-center justify-center py-5 outline-none focus:outline-none focus-visible:outline-none"
                  >
                    <span
                      className="text-3xl font-bold tracking-tight text-white transition-colors group-active:text-sky-300"
                      style={{
                        fontFamily: "var(--font-preview-display), sans-serif",
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <button
                type="button"
                onClick={(e) => {
                  goToSection("#kontakt");
                  e.currentTarget.blur();
                }}
                className={`w-full py-4 text-lg outline-none focus:outline-none focus-visible:outline-none ${CTA_CLASS}`}
              >
                Umów pierwszy trening
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3.5 text-sm font-medium text-neutral-100 transition-colors active:border-sky-400/60 active:text-sky-300"
                >
                  <InstagramIcon className="h-5 w-5 text-sky-300" />
                  Instagram
                </a>
                <a
                  href={`tel:+${PHONE_E164}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-3 py-3.5 text-sm font-medium text-neutral-100 transition-colors active:border-sky-400/60 active:text-sky-300"
                >
                  <svg
                    className="h-5 w-5 text-sky-300"
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
                  {PHONE_DISPLAY}
                </a>
              </div>

              <p className="pt-1 text-center text-xs text-neutral-500">
                Szczecin · Police · {INSTAGRAM_HANDLE}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

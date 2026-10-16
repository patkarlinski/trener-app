"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/** Menu one-page — ten sam wygląd na wszystkich stronach. */
const CTA_CLASS =
  "cursor-pointer px-6 py-3 rounded-full bg-sky-400 text-neutral-950 text-base font-semibold tracking-wide hover:bg-sky-300 transition-colors";

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
  const [ready, setReady] = useState(false);

  const onOnePager = pathname === MAIN;
  // SSR i pierwsze malowanie: zawsze solidne tło — pathname w root layout
  // bywa puste przy SSR i powodowało mismatch (transparent vs bg-[#07090c]).
  const solidNav = !ready || scrolled || !onOnePager;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function goToSection(hash: string) {
    const id = hash.replace("#", "");
    const wasMenuOpen = menuOpen;
    setMenuOpen(false);

    if (pathname !== MAIN) {
      router.push(`${MAIN}${hash}`);
      return;
    }

    // Na mobile najpierw zamknij menu — inaczej getBoundingClientRect liczy
    // pozycję przy otwartym panelu i po zamknięciu lądujemy za wysoko.
    const runScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const header = document.querySelector("header");
      const headerH = header?.getBoundingClientRect().height ?? 76;
      const gap = window.matchMedia("(min-width: 768px)").matches ? 24 : 20;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerH - gap;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    if (wasMenuOpen) {
      window.setTimeout(runScroll, 80);
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
      className={`fixed top-0 left-0 z-50 w-full max-w-[100vw] transition-colors duration-300 ${
        solidNav ? "bg-[#07090c]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto w-full max-w-6xl px-5 h-[4.75rem] flex items-center justify-between gap-4 text-white box-border">
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
              onClick={() => goToSection(item.href)}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToSection("#kontakt")}
            className={`ml-2 ${CTA_CLASS}`}
          >
            Umów zajęcia
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center focus:outline-none"
          aria-label="Menu"
        >
          <span className="flex flex-col gap-1.5 w-5">
            <span
              className={`h-px bg-white transition-transform ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px bg-white transition-transform ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#07090c] px-5 py-6 flex flex-col gap-5 text-lg font-medium tracking-[0.08em] uppercase">
          {NAV.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => goToSection(item.href)}
              className="text-left text-neutral-200 hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToSection("#kontakt")}
            className={`mt-2 w-full ${CTA_CLASS}`}
          >
            Umów zajęcia
          </button>
        </div>
      )}
    </header>
  );
}

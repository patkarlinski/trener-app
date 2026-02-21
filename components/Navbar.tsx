"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ActiveSection = "about" | "oferta" | "kontakt" | "";

export default function Navbar() {
  const pathname = usePathname() ?? "";
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<ActiveSection>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const newActive =
      pathname === "/oferta"
        ? "oferta"
        : pathname === "/kontakt"
        ? "kontakt"
        : "";
    setActive(newActive);
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goToAbout() {
    setMenuOpen(false);
    if (pathname === "/") {
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#about");
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          // ZMIANA 1: Usunięto obramowanie (border-b) i zmniejszono przezroczystość tła (bg-black/90)
          ? "py-4 bg-black/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white relative z-10">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className={`font-bold tracking-widest uppercase transition-all duration-500 ${
            scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl drop-shadow-lg"
          }`}
        >
          Patryk Karliński <span className="font-light text-neutral-400">| Trener</span>
        </Link>

        {/* DESKTOP MENU */}
        {/* ZMIANA 2: Ujednolicono pisownię na sztywno z wielkich liter (O MNIE) */}
        <div className="hidden lg:flex items-center gap-10 text-sm tracking-widest uppercase font-medium">
          
          <button
            onClick={goToAbout}
            className={`relative group py-2 transition-colors duration-300 hover:text-white ${
              active === "about" ? "text-white" : "text-neutral-400"
            }`}
          >
            O MNIE
            <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${active === "about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </button>

          <Link
            href="/oferta"
            className={`relative group py-2 transition-colors duration-300 hover:text-white ${
              active === "oferta" ? "text-white" : "text-neutral-400"
            }`}
          >
            OFERTA
            <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${active === "oferta" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>

          <Link
            href="/kontakt"
            className={`relative group py-2 transition-colors duration-300 hover:text-white ${
              active === "kontakt" ? "text-white" : "text-neutral-400"
            }`}
          >
            KONTAKT
            <span className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${active === "kontakt" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          
        </div>

        {/* ANIMOWANY HAMBURGER (MOBILE) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col items-end justify-between w-6 h-4 transform transition-all duration-300 origin-center overflow-hidden">
            <span className={`bg-white h-[2px] w-full transform transition-all duration-300 origin-left ${menuOpen ? "rotate-[42deg] w-7" : ""}`}></span>
            <span className={`bg-white h-[2px] w-full rounded transform transition-all duration-300 ${menuOpen ? "opacity-0 -translate-x-10" : ""}`}></span>
            <span className={`bg-white h-[2px] w-full transform transition-all duration-300 origin-left ${menuOpen ? "-rotate-[42deg] w-7" : ""}`}></span>
          </div>
        </button>

      </nav>

    {/* MOBILE MENU (ROZWIJANE PŁYNNIE) */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-10 text-lg uppercase tracking-widest font-medium">
          <button 
            onClick={goToAbout} 
            className={`transition-colors duration-300 ${active === "about" ? "text-white" : "text-neutral-400 hover:text-white"}`}
          >
            O MNIE
          </button>

          <Link 
            href="/oferta" 
            onClick={closeMenu}
            className={`transition-colors duration-300 ${active === "oferta" ? "text-white" : "text-neutral-400 hover:text-white"}`}
          >
            OFERTA
          </Link>

          <Link 
            href="/kontakt" 
            onClick={closeMenu}
            className={`transition-colors duration-300 ${active === "kontakt" ? "text-white" : "text-neutral-400 hover:text-white"}`}
          >
            KONTAKT
          </Link>
        </div>
      </div>
    </header>
  );
}
/** Scroll so section sits clearly below the sticky header (mobile needs more gap). */
export function scrollToSectionId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerH = header?.getBoundingClientRect().height ?? 76;
  const isMd = window.matchMedia("(min-width: 768px)").matches;
  // Mobile: większy zapas — wcześniej lądowało zbyt blisko sticky nav.
  const gap = isMd ? 28 : 72;
  const top =
    el.getBoundingClientRect().top + window.scrollY - headerH - gap;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

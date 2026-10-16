/**
 * Scroll so the section top sits flush under the sticky header.
 * On mobile tuck 1px under the header so the previous section's
 * background never peeks through (subpixel / retina).
 */
export function scrollToSectionId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerH = header?.getBoundingClientRect().height ?? 76;
  const isMd = window.matchMedia("(min-width: 768px)").matches;
  const offset = isMd ? headerH : headerH - 1;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

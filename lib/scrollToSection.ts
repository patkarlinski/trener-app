/**
 * Scroll so the section top sits flush under the sticky header.
 * Breathing room comes from the section's own padding/background —
 * an extra gap would reveal the previous section (visible "pasek").
 */
export function scrollToSectionId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const headerH = header?.getBoundingClientRect().height ?? 76;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

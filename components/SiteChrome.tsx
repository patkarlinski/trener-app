"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Ukrywa sticky CTA na one-page (/), gdzie jest własny przycisk telefonu. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // SSR + pierwsze malowanie klienta: null — unika mismatchu, gdy pathname
  // w root layout jeszcze nie jest znany przy hydratacji.
  if (!ready) return null;
  if (pathname === "/" || pathname.startsWith("/preview")) return null;
  return <>{children}</>;
}

import type { AppRootMetadata } from "@/types/app-seo";
import Navbar from "@/components/Navbar";
import "./globals.css";
import StickyCTA from "@/components/StickyCTA";
import SiteChrome from "@/components/SiteChrome";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-preview-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-preview-body",
  display: "swap",
});

export const metadata: AppRootMetadata = {
  metadataBase: new URL("https://trenerkarlinski.pl"),
  alternates: {
    canonical: "https://trenerkarlinski.pl",
  },
  title: "Patryk Karliński | Trener Pływania i Trening Personalny",
  description:
    "Indywidualne lekcje pływania dla dorosłych i dzieci w Szczecinie i Policach. Nauka i doskonalenie pływania, trener na basenie, trening personalny i triathlon.",
  keywords: [
    "nauka pływania Szczecin",
    "nauka pływania Police",
    "nauka pływania dla dorosłych",
    "nauka pływania dla dzieci Szczecin",
    "doskonalenie pływania",
    "doskonalenie pływania dla dorosłych",
    "lekcje pływania",
    "indywidualne lekcje pływania",
    "trener pływania Szczecin",
    "trener pływania Police",
    "trener basen",
    "trening dla triathlonistów",
    "przygotowanie do triathlonu pływanie",
    "trening personalny Szczecin",
    "trener personalny Police",
    "Patryk Karliński",
  ],
  openGraph: {
    title: "Patryk Karliński | Trener Pływania i Trening Personalny",
    description:
      "Nauka i doskonalenie pływania dla dorosłych i dzieci. Indywidualne lekcje pływania oraz trening personalny w Szczecinie i Policach.",
    url: "https://trenerkarlinski.pl", 
    siteName: "Patryk Karliński – Trener",
    images: [
      {
        url: "/banner.webp",
        width: 1200,
        height: 630,
        alt: "Patryk Karliński w trakcie treningu pływackiego",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${syne.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-preview-body), sans-serif" }}>
        <LocalBusinessJsonLd />
        {/* --- GOOGLE ANALYTICS (Ładowane w tle) --- */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-82EVQGSPQR`}
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-82EVQGSPQR', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* --- KONIEC GOOGLE ANALYTICS --- */}

        {/* --- MICROSOFT CLARITY --- */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xgtqxgo08c");
            `,
          }}
        />
        {/* --- KONIEC MICROSOFT CLARITY --- */}

        <Navbar />
        {children}
        <SiteChrome>
          <StickyCTA />
        </SiteChrome>
        <CookieBanner />
      </body>
    </html>
  );
}
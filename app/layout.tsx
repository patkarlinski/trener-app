import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import StickyCTA from "@/components/StickyCTA";
// NOWE IMPORTY:
import Script from "next/script"; 
import CookieBanner from "@/components/CookieBanner"; 

export const metadata: Metadata = {
  metadataBase: new URL("https://trenerkarlinski.pl"),
  title: "Patryk Karliński | Trener Pływania i Trening Personalny",
  description:
    "Indywidualne lekcje pływania i trening personalny w Szczecinie i Policach. Zajęcia dla dzieci, dorosłych oraz profesjonalne przygotowanie do startów dla triathlonistów.",
  keywords: [
    "nauka pływania Szczecin",
    "nauka pływania Police",
    "nauka pływania dla dzieci Szczecin",
    "trening dla triathlonistów",
    "przygotowanie do triathlonu pływanie",
    "trener pływania Police",
    "trener pływania Szczecin",
    "doskonalenie pływania",
    "trening personalny Szczecin",
    "trener personalny Police",
    "Patryk Karliński",
  ],
  openGraph: {
    title: "Patryk Karliński | Trener Pływania i Trening Personalny",
    description:
      "Zajęcia dla dzieci, dorosłych i triathlonistów. Indywidualne lekcje pływania i trening personalny w Szczecinie i Policach. Buduj formę pod okiem profesjonalisty.",
    url: "https://trenerkarlinski.pl", 
    siteName: "Patryk Karliński – Trener",
    images: [
      {
        url: "/banner.jpg",
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
    <html lang="pl">
      <body>
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

        <Navbar />
        {children}
        <StickyCTA />
        
        {/* BANER CIASTECZEK (Pojawi się tylko, jeśli użytkownik nie kliknął "Rozumiem") */}
        <CookieBanner />
      </body>
    </html>
  );
}
import Link from "next/link";
import type { SeoLandingContent } from "@/lib/seo-landings";
import {
  buildFaqPageJsonLd,
  buildServiceJsonLd,
} from "@/lib/seo-landings";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function SeoLandingPage({
  content,
}: {
  content: SeoLandingContent;
}) {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#07090c] pb-32 pt-32 text-white">
      <JsonLd data={buildFaqPageJsonLd(content.faq)} />
      <JsonLd data={buildServiceJsonLd(content)} />

      <div className="pointer-events-none absolute right-8 top-20 h-64 w-64 rounded-full bg-sky-900/10 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-sky-300/80">
            {content.cityName}
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {content.h1}
          </h1>
          <div className="mb-10 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-neutral-400 opacity-60" />

          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            {content.intro.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          {content.poolsNote ? (
            <p className="mt-6 text-base text-neutral-500">{content.poolsNote}</p>
          ) : null}

          <div className="mt-16 space-y-14">
            {content.sections.map((section) => (
              <section key={section.h2}>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {section.h2}
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-neutral-300">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Najczęstsze pytania — {content.cityName}
            </h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {content.faq.map((item) => (
                <div key={item.q} className="py-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {item.q}
                  </h3>
                  <p className="leading-relaxed text-neutral-400">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/#kontakt"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-base font-semibold tracking-wide text-neutral-950 transition-colors hover:bg-sky-300"
            >
              Umów zajęcia
            </Link>
            <Link
              href="/#oferta"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/25 px-6 py-3 text-base text-neutral-200 transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Zobacz ofertę
            </Link>
          </div>

          <p className="mt-14 text-base text-neutral-500">
            {content.otherCity.sentence}{" "}
            <Link
              href={content.otherCity.href}
              className="text-neutral-400 underline underline-offset-4 hover:text-white"
            >
              Nauka pływania {content.otherCity.label}
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

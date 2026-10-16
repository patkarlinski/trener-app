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
    <main className="relative min-h-screen overflow-x-clip bg-[#07090c] pb-24 pt-32 text-white md:pb-32">
      <JsonLd data={buildFaqPageJsonLd(content.faq)} />
      <JsonLd data={buildServiceJsonLd(content)} />

      <div className="pointer-events-none absolute right-8 top-20 h-64 w-64 rounded-full bg-sky-900/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        {/* 1. Hero */}
        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300/80">
            {content.cityLabel}
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {content.h1}
          </h1>
          <div className="mb-8 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-neutral-400 opacity-60" />
          <p className="text-lg leading-relaxed text-zinc-300">{content.lead}</p>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {content.pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-zinc-800 bg-zinc-900/90 px-4 py-1.5 text-xs font-medium text-zinc-200 md:text-sm"
              >
                {pill}
              </li>
            ))}
          </ul>
        </header>

        {/* 2. Kafelki */}
        <div className="my-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.tiles.map((tile) => (
            <article
              key={tile.h2}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700/80 md:p-7"
            >
              <div>
                <h2 className="mb-3 text-xl font-bold text-white">{tile.h2}</h2>
                <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                  {tile.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 3. Jak zacząć */}
        <section aria-labelledby="jak-zaczac">
          <h2
            id="jak-zaczac"
            className="text-2xl font-bold tracking-tight text-white md:text-3xl"
          >
            {content.stepsH2}
          </h2>
          <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6"
              >
                <span className="mb-2 block text-sm font-bold text-sky-400">
                  {step.number}
                </span>
                <h3 className="mb-2 block font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FAQ */}
        <section className="mt-16 max-w-3xl" aria-labelledby="faq-landing">
          <h2
            id="faq-landing"
            className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl"
          >
            {content.faqH2}
          </h2>
          <div className="divide-y divide-zinc-800/70 border-y border-zinc-800/70">
            {content.faq.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.q}
                </h3>
                <p className="leading-relaxed text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CTA + cross-link */}
        <div className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
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
          <p className="mt-8 text-base text-zinc-500">
            {content.crossLink.intro}{" "}
            <Link
              href={content.crossLink.href}
              className="text-zinc-400 underline underline-offset-4 hover:text-white"
            >
              {content.crossLink.label}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

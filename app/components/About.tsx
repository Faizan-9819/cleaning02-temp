"use client";

import { unsplash } from "@/app/lib/images";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";

const HIGHLIGHTS: Translation[] = [
  { en: "Reliable Service", nl: "Betrouwbare service" },
  { en: "Flexible Scheduling", nl: "Flexibele planning" },
  { en: "Professional Team", nl: "Professioneel team" },
  { en: "Customer Focused", nl: "Klantgericht" },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-white py-[50px] sm:py-[80px]">
      <div className="fix grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-18">
        <div className="relative">
          <div className="h-[540px] overflow-hidden rounded-[28px] bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
            <img
              src={unsplash("1527515637462-cff94eecc1ac")}
              alt="Cleaning professional at work"
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-brand/8 bg-white p-4 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.3)] sm:right-auto sm:-bottom-6.5 sm:-left-6.5 sm:gap-4 sm:rounded-[20px] sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream sm:h-12.5 sm:w-12.5 sm:rounded-2xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#45293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="sm:h-6 sm:w-6">
                <path d="m9 12 2 2 4-4" />
                <path d="M12 3a9 9 0 1 0 9 9" />
                <path d="M21 3v6h-6" />
              </svg>
            </span>
            <div>
              <div className="font-serif text-[22px] leading-none font-semibold text-brand sm:text-[28px]">
                {t({ en: "XX+ years", nl: "XX+ jaar" })}
              </div>
              <div className="mt-1 text-[13px] text-muted sm:mt-1.5 sm:text-[13.5px]">
                {t({ en: "of professional cleaning", nl: "professionele schoonmaak" })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            {t({ en: "About Us", nl: "Over ons" })}
          </p>
          <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            {t({ en: "Professional cleaning built on", nl: "Professionele schoonmaak gebouwd op" })}{" "}
            <span className="italic">{t({ en: "trust", nl: "vertrouwen" })}</span>{" "}
            {t({ en: "and consistency", nl: "en consistentie" })}
          </h2>
          <p className="mt-5.5 text-[17px] leading-[1.7] text-muted">
            {t({
              en: "We are a commercial cleaning company serving businesses, schools, commercial facilities and holiday parks across the region. We deliver dependable, high-quality cleaning tailored to each client — with flexible scheduling and a professional team you can rely on.",
              nl: "Wij zijn een bedrijf voor zakelijke schoonmaak dat bedrijven, scholen, bedrijfspanden en vakantieparken in de hele regio bedient. Wij leveren betrouwbare, hoogwaardige schoonmaak op maat voor elke klant — met flexibele planning en een professioneel team waarop u kunt rekenen.",
            })}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div key={item.en} className="flex items-center gap-2.75">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#45293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-[15.5px] font-medium text-ink">{t(item)}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2.25 rounded-full bg-brand px-7.5 py-3.75 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-brand/90"
          >
            {t({ en: "Learn More About Us", nl: "Meer over ons" })}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

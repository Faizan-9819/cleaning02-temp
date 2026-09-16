"use client";

import { unsplash } from "@/app/lib/images";
import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function Team() {
  const { t } = useLanguage();
  return (
    <section id="team" className="bg-cream-alt py-[50px] sm:py-[80px]">
      <div className="fix grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            {t({ en: "Meet Our Team", nl: "Maak kennis met ons team" })}
          </p>
          <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            {t({ en: "The people behind a", nl: "De mensen achter een" })}{" "}
            <span className="italic">{t({ en: "spotless", nl: "vlekkeloos" })}</span>{" "}
            {t({ en: "result", nl: "resultaat" })}
          </h2>
          <p className="mt-5.5 max-w-[440px] text-[17px] leading-[1.7] text-muted">
            {t({
              en: "Our cleaners are trained, vetted and proud of their work. Friendly, dependable professionals who treat every space as if it were their own — that's the difference behind every clean.",
              nl: "Onze schoonmakers zijn getraind, gescreend en trots op hun werk. Vriendelijke, betrouwbare professionals die elke ruimte behandelen alsof het hun eigen ruimte is — dat is het verschil achter elke schoonmaakbeurt.",
            })}
          </p>
          <div className="mt-8.5 flex gap-10">
            <div>
              <div className="font-serif text-[40px] leading-none font-semibold text-brand">
                XX+
              </div>
              <div className="mt-2 text-sm text-muted">
                {t({ en: "Trained professionals", nl: "Getrainde professionals" })}
              </div>
            </div>
            <div>
              <div className="font-serif text-[40px] leading-none font-semibold text-brand">
                100%
              </div>
              <div className="mt-2 text-sm text-muted">
                {t({ en: "Vetted & insured", nl: "Gescreend & verzekerd" })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4" style={{ gridTemplateRows: "200px 200px" }}>
          <div className="row-span-2 overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
            <img
              src={unsplash("1521737604893-d14cc237f11d")}
              alt={t({ en: "Cleaning team member", nl: "Lid van het schoonmaakteam" })}
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
            <img
              src={unsplash("1600880292203-757bb62b4baf")}
              alt={t({ en: "Cleaning team at work", nl: "Schoonmaakteam aan het werk" })}
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
            <img
              src={unsplash("1521791136064-7986c2920216")}
              alt={t({ en: "Professional handshake", nl: "Professionele handdruk" })}
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

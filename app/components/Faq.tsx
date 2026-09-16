"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";

const FAQS: { q: Translation; a: Translation }[] = [
  {
    q: {
      en: "Do you provide cleaning services outside your home city?",
      nl: "Bieden jullie schoonmaakdiensten aan buiten onze thuisstad?",
    },
    a: {
      en: "Yes. While we're based in our home city, we serve businesses across the wider region — including all surrounding towns and districts.",
      nl: "Ja. Hoewel wij gevestigd zijn in onze thuisstad, bedienen wij bedrijven in de wijdere regio — inclusief alle omliggende steden en wijken.",
    },
  },
  {
    q: { en: "Can cleaning schedules be customised?", nl: "Kunnen schoonmaakschema's op maat worden gemaakt?" },
    a: {
      en: "Absolutely. We build schedules around your operation — daily, weekly, evenings, weekends or one-off — whatever keeps your space at its best.",
      nl: "Zeker. Wij stellen schema's op die aansluiten bij uw bedrijfsvoering — dagelijks, wekelijks, 's avonds, in het weekend of eenmalig — wat uw ruimte er het beste uit laat zien.",
    },
  },
  {
    q: {
      en: "Do you provide cleaning staff for ongoing contracts?",
      nl: "Leveren jullie schoonmaakpersoneel voor doorlopende contracten?",
    },
    a: {
      en: "Yes. Through our staffing support we supply trained, vetted cleaning personnel for ongoing contracts or short-term cover.",
      nl: "Ja. Via onze personeelsondersteuning leveren wij getraind en gescreend schoonmaakpersoneel voor doorlopende contracten of tijdelijke vervanging.",
    },
  },
  {
    q: { en: "What industries do you specialise in?", nl: "In welke sectoren zijn jullie gespecialiseerd?" },
    a: {
      en: "We work with offices, commercial buildings, schools, holiday parks, business centres, property managers and retail businesses.",
      nl: "Wij werken met kantoren, bedrijfspanden, scholen, vakantieparken, bedrijvencentra, vastgoedbeheerders en winkelbedrijven.",
    },
  },
  {
    q: { en: "How can I request a quote?", nl: "Hoe kan ik een offerte aanvragen?" },
    a: {
      en: "Use the contact form on this page, call us on +00 000 000 000, or email hello@example.com. We typically respond within one working day.",
      nl: "Gebruik het contactformulier op deze pagina, bel ons op +00 000 000 000, of mail naar hello@example.com. Wij reageren meestal binnen één werkdag.",
    },
  },
  {
    q: { en: "Can services be scheduled outside business hours?", nl: "Kunnen diensten buiten kantooruren worden ingepland?" },
    a: {
      en: "Yes. We offer early morning, evening and weekend cleaning to minimise disruption to your business.",
      nl: "Ja. Wij bieden schoonmaak vroeg in de ochtend, 's avonds en in het weekend om verstoring van uw bedrijf te minimaliseren.",
    },
  },
];

export default function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-cream-alt py-[50px] sm:py-[80px]">
      <div className="fix second if you want right sheet grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-15">
        <div className="lg:sticky lg:top-24">
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            {t({ en: "FAQ", nl: "Veelgestelde vragen" })}
          </p>
          <h2 className="mt-5 font-serif text-[clamp(32px,3.6vw,46px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            {t({ en: "Got questions? We've got", nl: "Vragen? Wij hebben" })}{" "}
            <span className="italic">{t({ en: "answers", nl: "antwoorden" })}</span>
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted">
            {t({
              en: "Can't find what you're looking for? Reach our team directly and we'll be happy to help.",
              nl: "Vindt u niet wat u zoekt? Neem rechtstreeks contact op met ons team, wij helpen u graag verder.",
            })}
          </p>
          <a
            href="#enquiry"
            className="mt-6.5 inline-flex items-center gap-2.25 rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-brand/90"
          >
            {t({ en: "Contact Us", nl: "Neem contact op" })}
          </a>
        </div>

        <div className="flex flex-col gap-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q.en}
                className="overflow-hidden rounded-[20px] border border-brand/7 bg-white"
              >
                <button
                  onClick={() => setOpen(i)}
                  className="flex w-full items-center justify-between gap-4 px-6.5 py-6 text-left font-sans"
                >
                  <span className="font-serif text-[22px] font-semibold tracking-[-0.01em] text-brand">
                    {t(faq.q)}
                  </span>
                  <span className="flex h-8.5 w-8.5 flex-none items-center justify-center rounded-full bg-cream text-[22px] leading-none font-medium text-brand">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div
                    className={`overflow-hidden transition-opacity duration-300 ease-in-out ${
                      isOpen ? "opacity-100 delay-100" : "opacity-0"
                    }`}
                  >
                    <div className="px-6.5 pb-6.5 text-[15.5px] leading-[1.7] text-muted">
                      {t(faq.a)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

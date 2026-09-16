"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";

const WHY: { n: string; title: Translation; desc: Translation; featured: boolean }[] = [
  {
    n: "01",
    title: { en: "Reliable & Professional Team", nl: "Betrouwbaar & professioneel team" },
    desc: {
      en: "Trained, vetted cleaners who arrive on time and deliver consistent results, every visit.",
      nl: "Getrainde, gescreende schoonmakers die op tijd arriveren en bij elk bezoek consistente resultaten leveren.",
    },
    featured: true,
  },
  {
    n: "02",
    title: { en: "Flexible Cleaning Schedules", nl: "Flexibele schoonmaakschema's" },
    desc: {
      en: "Daytime, evening or weekend cleaning that fits around your operation — not the other way around.",
      nl: "Schoonmaak overdag, 's avonds of in het weekend, afgestemd op uw bedrijfsvoering — niet andersom.",
    },
    featured: false,
  },
  {
    n: "03",
    title: { en: "Tailored Service Plans", nl: "Schoonmaakplannen op maat" },
    desc: {
      en: "Cleaning programmes built around your space, sector and standards. Never one-size-fits-all.",
      nl: "Schoonmaakprogramma's afgestemd op uw ruimte, sector en normen. Nooit standaard.",
    },
    featured: false,
  },
  {
    n: "04",
    title: { en: "Consistent Quality Standards", nl: "Consistente kwaliteitsnormen" },
    desc: {
      en: "Clear checklists and on-site supervision keep quality high across every location we maintain.",
      nl: "Duidelijke checklists en toezicht ter plaatse houden de kwaliteit hoog op elke locatie die wij onderhouden.",
    },
    featured: false,
  },
  {
    n: "05",
    title: { en: "Responsive Customer Support", nl: "Snelle klantenondersteuning" },
    desc: {
      en: "A direct line to our team and a quick response whenever your needs change.",
      nl: "Een directe lijn met ons team en een snelle reactie wanneer uw wensen veranderen.",
    },
    featured: false,
  },
  {
    n: "06",
    title: { en: "Safe & Hygienic Environments", nl: "Veilige & hygiënische omgevingen" },
    desc: {
      en: "The right products and methods to protect the health of everyone who uses your space.",
      nl: "De juiste producten en methoden om de gezondheid van iedereen die uw ruimte gebruikt te beschermen.",
    },
    featured: false,
  },
];

function WhyCard({
  item,
  t,
}: {
  item: (typeof WHY)[number];
  t: (entry: Translation) => string;
}) {
  if (item.featured) {
    return (
      <div className="h-full rounded-3xl bg-brand p-9.5 text-white">
        <div className="font-serif text-[44px] leading-none font-medium tracking-[-0.02em] text-white/40">
          {item.n}
        </div>
        <h3 className="mt-3.5 font-serif text-[26px] font-semibold tracking-[-0.01em]">
          {t(item.title)}
        </h3>
        <p className="mt-3 text-[15.5px] leading-[1.65] text-white/78">
          {t(item.desc)}
        </p>
      </div>
    );
  }

  return (
    <div className="h-full rounded-3xl border border-brand/7 bg-cream p-9.5 transition-shadow hover:shadow-lg">
      <div className="font-serif text-[44px] leading-none font-medium tracking-[-0.02em] text-[#cfc8bc]">
        {item.n}
      </div>
      <h3 className="mt-3.5 font-serif text-2xl font-semibold tracking-[-0.01em] text-brand">
        {t(item.title)}
      </h3>
      <p className="mt-3 text-[15.5px] leading-[1.65] text-muted">
        {t(item.desc)}
      </p>
    </div>
  );
}

export default function WhyUs() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="why" className="bg-white py-[50px] sm:py-[80px]">
      <div className="fix">
        <div className="max-w-[660px]">
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            {t({ en: "Why Choose Us", nl: "Waarom kiezen voor ons" })}
          </p>
          <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            {t({ en: "Cleaning that goes beyond", nl: "Schoonmaak die verder gaat dan" })}{" "}
            <span className="italic">{t({ en: "expectations", nl: "verwachtingen" })}</span>
          </h2>
        </div>

        {/* Desktop / tablet grid */}
        <div className="mt-13 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item) => (
            <WhyCard key={item.n} item={item} t={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-13 sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {WHY.map((item) => (
                <div key={item.n} className="min-w-0 flex-[0_0_100%]">
                  <WhyCard item={item} t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label={t({ en: "Previous", nl: "Vorige" })}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/20 bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-brand/20 disabled:hover:bg-white disabled:hover:text-ink"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="m11 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label={t({ en: "Next", nl: "Volgende" })}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/20 bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-brand/20 disabled:hover:bg-white disabled:hover:text-ink"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
//

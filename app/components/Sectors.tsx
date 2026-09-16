"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { unsplash } from "@/app/lib/images";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";

const SECTORS: { title: Translation; img: string }[] = [
  {
    title: { en: "Corporate Offices", nl: "Bedrijfskantoren" },
    img: unsplash("1497366216548-37526070297c", 600),
  },
  {
    title: { en: "Commercial Buildings", nl: "Bedrijfspanden" },
    img: unsplash("1486406146926-c627a92ad1ab", 600),
  },
  {
    title: { en: "Educational Institutions", nl: "Onderwijsinstellingen" },
    img: unsplash("1580582932707-520aed937b7b", 600),
  },
  {
    title: { en: "Holiday Parks", nl: "Vakantieparken" },
    img: unsplash("1505228395891-9a51e7e86bf6", 600),
  },
  {
    title: { en: "Business Centres", nl: "Bedrijvencentra" },
    img: unsplash("1431540015161-0bf868a2d407", 600),
  },
  {
    title: { en: "Property Management", nl: "Vastgoedbeheer" },
    img: unsplash("1460317442991-0ec209397118", 600),
  },
  {
    title: { en: "Retail Businesses", nl: "Winkelbedrijven" },
    img: unsplash("1555529669-e69e7aa0ba9a", 600),
  },
];

function SectorCard({
  sector,
  t,
}: {
  sector: (typeof SECTORS)[number];
  t: (entry: Translation) => string;
}) {
  return (
    <div className="relative h-[250px] overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb] transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={sector.img}
        alt={t(sector.title)}
        className="absolute inset-0 block h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(69,41,59,0) 40%, rgba(69,41,59,0.82) 100%)",
        }}
      />
      <div className="absolute right-0 bottom-0 left-0 p-5.5">
        <h3 className="m-0 text-lg font-semibold tracking-[-0.01em] text-white">
          {t(sector.title)}
        </h3>
      </div>
    </div>
  );
}

export default function Sectors() {
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
    <section id="sectors" className="bg-white py-[50px] sm:py-[80px]">
      <div className="fix">
        <div className="max-w-[660px]">
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            {t({ en: "Sectors We Support", nl: "Sectoren die wij bedienen" })}
          </p>
          <h2 className="mt-5 font-serif  text-[28px] md:text-[52px] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            {t({ en: "The industries we keep", nl: "De sectoren die wij" })}{" "}
            <span className="italic">{t({ en: "clean", nl: "schoonhouden" })}</span>
          </h2>
        </div>

        {/* Desktop / tablet grid */}
        <div className="mt-8 hidden gap-4.5 sm:grid sm:grid-cols-2 md:mt-13 lg:grid-cols-4">
          {SECTORS.map((sector) => (
            <SectorCard key={sector.title.en} sector={sector} t={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-8 sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-3 flex">
              {SECTORS.map((sector) => (
                <div
                  key={sector.title.en}
                  className="min-w-0 flex-[0_0_50%] pl-3"
                >
                  <SectorCard sector={sector} t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label={t({ en: "Previous sector", nl: "Vorige sector" })}
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
              aria-label={t({ en: "Next sector", nl: "Volgende sector" })}
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

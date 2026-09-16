"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { unsplash } from "@/app/lib/images";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";

const SERVICES: { n: string; title: Translation; desc: Translation; img: string }[] = [
  {
    n: "01",
    title: { en: "Office & Commercial Cleaning", nl: "Kantoor- & bedrijfsreiniging" },
    desc: {
      en: "Daily, scheduled and one-off cleaning that keeps offices and commercial spaces consistently presentable, hygienic and ready for work.",
      nl: "Dagelijkse, geplande en eenmalige schoonmaak die kantoren en bedrijfsruimtes consequent representabel, hygiënisch en werkklaar houdt.",
    },
    img: unsplash("1497366811353-6870744d04b2"),
  },
  {
    n: "02",
    title: { en: "School Cleaning Services", nl: "Schoonmaakdiensten voor scholen" },
    desc: {
      en: "Structured cleaning programmes for schools and educational institutions, creating safe and healthy environments for students and staff.",
      nl: "Gestructureerde schoonmaakprogramma's voor scholen en onderwijsinstellingen, voor een veilige en gezonde omgeving voor leerlingen en personeel.",
    },
    img: unsplash("1503676260728-1c00da094a0b"),
  },
  {
    n: "03",
    title: { en: "Holiday Park Cleaning", nl: "Schoonmaak vakantieparken" },
    desc: {
      en: "Reliable changeover and communal-area cleaning for holiday parks and accommodation — every unit guest-ready, on schedule.",
      nl: "Betrouwbare wisselschoonmaak en onderhoud van gemeenschappelijke ruimtes voor vakantieparken en accommodaties — elke unit gastklaar, op schema.",
    },
    img: unsplash("1505228395891-9a51e7e86bf6"),
  },
  {
    n: "04",
    title: { en: "Building Maintenance Cleaning", nl: "Onderhoudsreiniging van gebouwen" },
    desc: {
      en: "Communal areas, stairwells, glass and facades kept clean and well-maintained for property owners and managers.",
      nl: "Gemeenschappelijke ruimtes, trappenhuizen, glas en gevels schoon en goed onderhouden voor eigenaren en beheerders.",
    },
    img: unsplash("1486406146926-c627a92ad1ab"),
  },
  {
    n: "05",
    title: { en: "Cleaning Staffing Support", nl: "Inzet van schoonmaakpersoneel" },
    desc: {
      en: "Trained, vetted cleaning staff to support your in-house operation on ongoing contracts or at short notice.",
      nl: "Getraind en gescreend schoonmaakpersoneel ter ondersteuning van uw eigen organisatie, op doorlopende contracten of op korte termijn.",
    },
    img: unsplash("1581578731548-c64695cc6952"),
  },
];

type Service = (typeof SERVICES)[number];

function ServiceCard({
  service,
  reverse,
  t,
}: {
  service: Service;
  reverse?: boolean;
  t: (entry: Translation) => string;
}) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-[28px] border border-brand/7 bg-white transition-shadow hover:shadow-lg lg:flex-row lg:items-stretch ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative min-h-[220px] flex-none bg-gradient-to-br from-cream-alt to-[#dcd6cb] lg:min-h-[320px] lg:w-[42%]">
        <img
          src={service.img}
          alt={t(service.title)}
          className="absolute inset-0 block h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-8 sm:p-11 lg:p-12">
        <div className="text-[13px] font-semibold tracking-[0.08em] text-muted-light">
          ( {service.n} )
        </div>
        <h3 className="mt-2 font-serif text-[32px] font-semibold tracking-[-0.01em] text-brand">
          {t(service.title)}
        </h3>
        <p className="mt-3.5 max-w-[480px] text-base leading-[1.65] text-muted">
          {t(service.desc)}
        </p>
        <a
          href="#booking"
          className="mt-6.5 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6.5 py-3.25 text-[14.5px] font-semibold text-white no-underline transition-colors hover:bg-brand/90"
        >
          {t({ en: "Request a Quote", nl: "Vraag een offerte aan" })}
          <svg
            width="16"
            height="16"
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
        </a>
      </div>
    </div>
  );
}

function SliderButton({
  direction,
  onClick,
  disabled,
  t,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  t: (entry: Translation) => string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        direction === "prev"
          ? t({ en: "Previous service", nl: "Vorige dienst" })
          : t({ en: "Next service", nl: "Volgende dienst" })
      }
      className="inline-flex h-11.5 w-11.5 items-center justify-center rounded-full border border-brand/20 bg-white text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white disabled:pointer-events-none disabled:opacity-40"
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
        {direction === "prev" ? (
          <>
            <path d="M19 12H5" />
            <path d="m11 18-6-6 6-6" />
          </>
        ) : (
          <>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </>
        )}
      </svg>
    </button>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="services" className="bg-cream-alt py-[50px] sm:py-[80px]">
      <div className="fix">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-[660px]">
            <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
              <span className="inline-block h-px w-7 bg-muted-light" />
              {t({ en: "Our Services", nl: "Onze diensten" })}
            </p>
            <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
              {t({ en: "Services that keep your", nl: "Diensten die uw" })}{" "}
              <span className="italic">
                {t({ en: "business spotless", nl: "bedrijf brandschoon houden" })}
              </span>
            </h2>
          </div>

          <div className="flex gap-2.5 lg:hidden">
            <SliderButton
              direction="prev"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              t={t}
            />
            <SliderButton
              direction="next"
              onClick={scrollNext}
              disabled={!canScrollNext}
              t={t}
            />
          </div>
        </div>

        <div className="mt-8 md:mt-13 overflow-hidden lg:hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {SERVICES.map((service) => (
              <div key={service.n} className="min-w-0 flex-[0_0_100%]">
                <ServiceCard service={service} t={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-13 hidden flex-col gap-6 lg:flex">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.n}
              service={service}
              reverse={i % 2 === 1}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

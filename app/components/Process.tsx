"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/app/i18n/LanguageProvider";
import type { Translation } from "@/app/i18n/config";

const STEPS: { n: string; title: Translation; desc: Translation }[] = [
  {
    n: "01",
    title: { en: "Request a Quote", nl: "Vraag een offerte aan" },
    desc: {
      en: "Tell us about your space and needs. We'll assess the scope and send a clear, tailored quote — usually within one working day.",
      nl: "Vertel ons over uw ruimte en wensen. Wij beoordelen de omvang en sturen een duidelijke, op maat gemaakte offerte — meestal binnen één werkdag.",
    },
  },
  {
    n: "02",
    title: { en: "Schedule Your Service", nl: "Plan uw dienst in" },
    desc: {
      en: "We agree a cleaning plan and schedule that fits your operation, and assign a dedicated, professional team.",
      nl: "Wij stellen samen een schoonmaakplan en schema op dat aansluit bij uw bedrijfsvoering en wijzen een toegewijd, professioneel team toe.",
    },
  },
  {
    n: "03",
    title: { en: "Enjoy a Cleaner Environment", nl: "Geniet van een schonere omgeving" },
    desc: {
      en: "Your team arrives on time and gets to work, leaving a consistently clean, healthy and presentable space.",
      nl: "Uw team komt op tijd aan en gaat aan de slag, en laat een consequent schone, gezonde en representabele ruimte achter.",
    },
  },
];

function StepCard({
  step,
  t,
}: {
  step: (typeof STEPS)[number];
  t: (entry: Translation) => string;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-brand/7 bg-cream p-9 sm:p-10.5">
      <div className="absolute -top-2.5 right-2.5 font-serif text-[130px] leading-none font-medium tracking-[-0.04em] text-brand/5">
        {step.n}
      </div>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand font-serif text-2xl font-semibold text-white">
        {step.n}
      </div>
      <h3 className="relative mt-5.5 font-serif text-2xl font-semibold tracking-[-0.01em] text-brand">
        {t(step.title)}
      </h3>
      <p className="relative mt-3 text-[15.5px] leading-[1.65] text-muted">
        {t(step.desc)}
      </p>
    </div>
  );
}

export default function Process() {
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
    <section id="process" className="bg-white py-[50px] sm:py-[80px]">
      <div className="fix">
        <div className="mx-auto max-w-[660px] text-center">
          <p className="inline-flex items-center justify-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            {t({ en: "Our Process", nl: "Ons proces" })}
          </p>
          <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            {t({ en: "Our cleaning ", nl: "Ons schoonmaak" })}
            <span className="italic">{t({ en: "process", nl: "proces" })}</span>
          </h2>
          <p className="mt-4.5 text-[17px] leading-[1.7] text-muted">
            {t({
              en: "Simple, reliable and professional from start to finish.",
              nl: "Eenvoudig, betrouwbaar en professioneel van begin tot eind.",
            })}
          </p>
        </div>

        {/* Desktop / tablet grid */}
        <div className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.n} step={step} t={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-14 sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {STEPS.map((step) => (
                <div key={step.n} className="min-w-0 flex-[0_0_100%]">
                  <StepCard step={step} t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label={t({ en: "Previous step", nl: "Vorige stap" })}
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
              aria-label={t({ en: "Next step", nl: "Volgende stap" })}
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

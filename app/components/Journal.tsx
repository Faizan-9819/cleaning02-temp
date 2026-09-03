"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { unsplash } from "@/app/lib/images";

const ARTICLES = [
  {
    title: "How Professional Cleaning Improves Workplace Productivity",
    tag: "Workplace",
    read: "5 min read",
    img: unsplash("1497366754035-f200968a6e72", 600),
  },
  {
    title: "7 Signs Your Office Needs a Structured Cleaning Program",
    tag: "Offices",
    read: "4 min read",
    img: unsplash("1604328698692-f76ea9498e76", 600),
  },
  {
    title: "Creating Healthier Learning Environments Through School Cleaning",
    tag: "Schools",
    read: "6 min read",
    img: unsplash("1580582932707-520aed937b7b", 600),
  },
  {
    title: "A Complete Guide to Commercial Cleaning for Growing Businesses",
    tag: "Commercial",
    read: "8 min read",
    img: unsplash("1431540015161-0bf868a2d407", 600),
  },
  {
    title: "What Businesses Should Look For in a Cleaning Service Partner",
    tag: "Guide",
    read: "5 min read",
    img: unsplash("1556761175-5973dc0f32e7", 600),
  },
];

function ArticleCard({ article }: { article: (typeof ARTICLES)[number] }) {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-brand/8 bg-white transition-shadow hover:shadow-lg">
      <div className="relative h-53.75 bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
        <img
          src={article.img}
          alt={article.title}
          className="absolute inset-0 block h-full w-full object-cover"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.25 py-1.5 text-xs font-semibold text-brand">
          {article.tag}
        </span>
      </div>
      <div className="p-6.5">
        <div className="text-[13px] font-medium text-muted-light">
          {article.read}
        </div>
        <h3 className="mt-2.5 text-pretty font-serif text-2xl leading-[1.2] font-semibold tracking-[-0.01em] text-brand">
          {article.title}
        </h3>
        <a
          href="#journal"
          className="mt-4.5 inline-flex items-center gap-1.75 text-[14.5px] font-semibold text-brand no-underline"
        >
          Read article
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function SliderButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous articles" : "Next articles"}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/20 bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white disabled:pointer-events-none disabled:opacity-30"
    >
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isPrev ? (
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

export default function Journal() {
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
    <section id="journal" className="bg-white py-[50px] sm:py-[80px]">
      <div className="fix">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[660px]">
            <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
              <span className="inline-block h-px w-7 bg-muted-light" />
              The Cleaning Journal
            </p>
            <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
              The cleaning <span className="italic">journal</span>
            </h2>
            <p className="mt-4.5 text-[17px] leading-[1.7] text-muted">
              Insights, tips and expert advice for cleaner, healthier and more productive environments.
            </p>
          </div>
          <div className="flex gap-2.5">
            <SliderButton
              direction="prev"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            />
            <SliderButton
              direction="next"
              onClick={scrollNext}
              disabled={!canScrollNext}
            />
          </div>
        </div>
      </div>

      <div className="fix mt-11">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {ARTICLES.map((article) => (
              <div
                key={article.title}
                className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fix mt-7.5 text-center">
        <a
          href="#journal"
          className="inline-flex items-center gap-2.25 rounded-full border border-brand/22 px-8 py-3.75 text-[15px] font-semibold text-ink no-underline transition-colors hover:bg-brand/4"
        >
          View All Articles
        </a>
      </div>
    </section>
  );
}

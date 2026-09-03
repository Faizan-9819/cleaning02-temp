"use client";

import { useState } from "react";
import { unsplash } from "@/app/lib/images";

const TESTIMONIALS = [
  {
    quote:
      "They have been completely reliable from day one. Our offices are consistently spotless and their team is professional and easy to work with.",
    name: "Alex Morgan",
    role: "Facility Manager · Downtown",
    img: unsplash("1507003211169-0a1dd7228f2d", 600),
    badge: "100% Satisfaction",
  },
  {
    quote:
      "Switching to this team was the best decision for our school. The cleaning is thorough, the schedule is flexible, and our classrooms have never been healthier.",
    name: "Jordan Lee",
    role: "Operations Director · Riverside",
    img: unsplash("1573497019940-1c28c88b4f3e", 600),
    badge: "100% Satisfaction",
  },
  {
    quote:
      "They handle our holiday park changeovers flawlessly. Every unit is guest-ready on time, every single week.",
    name: "Sam Taylor",
    role: "Property Manager · Westend",
    img: unsplash("1560250097-0b93528c311a", 600),
    badge: "100% Satisfaction",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const testimonial = TESTIMONIALS[active];

  const goTo = (index: number) => {
    if (index === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(index);
      setVisible(true);
    }, 220);
  };

  const prev = () =>
    goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => goTo((active + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="bg-white py-[50px] sm:py-[80px]">
      <div className="fix ">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="inline-flex items-center justify-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            Testimonials
          </p>
          <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            Trusted by the businesses we <span className="italic">serve</span>
          </h2>
        </div>

        <div className="mt-13 flex flex-col overflow-hidden rounded-[32px] border border-brand/7 bg-cream md:flex-row md:items-stretch">
          <div className="relative min-h-[240px] flex-none overflow-hidden bg-gradient-to-br from-cream-alt to-[#dcd6cb] md:min-h-[400px] md:w-2/5">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-[220ms] ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
            <div
              className={`absolute bottom-5.5 left-5.5 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.25 text-[13px] font-semibold text-white shadow-lg transition-opacity duration-[220ms] ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {testimonial.badge}
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center p-9 sm:p-13">
            <div className="grid grid-cols-1">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  aria-hidden={i !== active}
                  className={`col-start-1 row-start-1 transition-opacity duration-[220ms] ${
                    i === active && visible
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="font-serif text-[80px] leading-[0.6] font-semibold text-brand">
                    &ldquo;
                  </div>
                  <p className="mt-4.5 font-serif text-[27px] leading-[1.4] font-medium tracking-[-0.005em] text-brand italic">
                    {t.quote}
                  </p>
                  <div className="mt-7">
                    <div className="text-base font-bold text-brand">
                      {t.name}
                    </div>
                    <div className="mt-1.25 text-sm text-muted">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2.25">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => goTo(i)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? "w-6.5 bg-brand" : "w-2 bg-[#cfc8bc]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2.5">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="inline-flex h-11.5 w-11.5 items-center justify-center rounded-full border border-brand/20 bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
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
                  onClick={next}
                  aria-label="Next testimonial"
                  className="inline-flex h-11.5 w-11.5 items-center justify-center rounded-full border border-brand/20 bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
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
        </div>
      </div>
    </section>
  );
}

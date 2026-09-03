"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do you provide cleaning services outside your home city?",
    a: "Yes. While we're based in our home city, we serve businesses across the wider region — including all surrounding towns and districts.",
  },
  {
    q: "Can cleaning schedules be customised?",
    a: "Absolutely. We build schedules around your operation — daily, weekly, evenings, weekends or one-off — whatever keeps your space at its best.",
  },
  {
    q: "Do you provide cleaning staff for ongoing contracts?",
    a: "Yes. Through our staffing support we supply trained, vetted cleaning personnel for ongoing contracts or short-term cover.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We work with offices, commercial buildings, schools, holiday parks, business centres, property managers and retail businesses.",
  },
  {
    q: "How can I request a quote?",
    a: "Use the contact form on this page, call us on +00 000 000 000, or email hello@example.com. We typically respond within one working day.",
  },
  {
    q: "Can services be scheduled outside business hours?",
    a: "Yes. We offer early morning, evening and weekend cleaning to minimise disruption to your business.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-cream-alt py-[50px] sm:py-[80px]">
      <div className="fix second if you want right sheet grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-15">
        <div className="lg:sticky lg:top-24">
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            FAQ
          </p>
          <h2 className="mt-5 font-serif text-[clamp(32px,3.6vw,46px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            Got questions? We&apos;ve got{" "}
            <span className="italic">answers</span>
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted">
            Can&apos;t find what you&apos;re looking for? Reach our team
            directly and we&apos;ll be happy to help.
          </p>
          <a
            href="#enquiry"
            className="mt-6.5 inline-flex items-center gap-2.25 rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-brand/90"
          >
            Contact Us
          </a>
        </div>

        <div className="flex flex-col gap-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-[20px] border border-brand/7 bg-white"
              >
                <button
                  onClick={() => setOpen(i)}
                  className="flex w-full items-center justify-between gap-4 px-6.5 py-6 text-left font-sans"
                >
                  <span className="font-serif text-[22px] font-semibold tracking-[-0.01em] text-brand">
                    {faq.q}
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
                      {faq.a}
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

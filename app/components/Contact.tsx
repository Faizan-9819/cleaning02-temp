import LeadEnquiryForm from "@/app/global/LeadEnquiryForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-alt py-[50px] sm:py-[80px]">
      <div className="fix grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-brand/7 bg-white p-8 sm:p-12">
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            Contact
          </p>
          <h2 className="mt-4.5 font-serif text-[clamp(30px,3.4vw,44px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            Request your cleaning quote <span className="italic">today</span>
          </h2>

          <LeadEnquiryForm
            idPrefix="contact-page"
            className="mt-7.5"
            submitLabel={{ en: "Request a Quote", nl: "Offerte aanvragen" }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-[28px] bg-brand p-10 text-white">
            <h3 className="font-serif text-[28px] font-semibold tracking-[-0.01em]">
              Get in touch
            </h3>
            <p className="mt-3 mb-7 text-[15px] leading-[1.65] text-muted-light">
              Looking for a reliable cleaning partner? Contact our team and we&apos;ll help you find the right solution.
            </p>

            <div className="mb-6 flex items-start gap-3.5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[13px] bg-white/8">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div>
                <div className="text-xs font-semibold tracking-[0.1em] text-muted-light uppercase">
                  Phone
                </div>
                <a href="tel:+00000000000" className="text-base font-semibold text-white no-underline">
                  +00 000 000 000
                </a>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-3.5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[13px] bg-white/8">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <div className="text-xs font-semibold tracking-[0.1em] text-muted-light uppercase">
                  Email
                </div>
                <a href="mailto:hello@example.com" className="text-base font-semibold text-white no-underline">
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[13px] bg-white/8">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
              </span>
              <div>
                <div className="text-xs font-semibold tracking-[0.1em] text-muted-light uppercase">
                  Address
                </div>
                <div className="text-base leading-[1.5] font-semibold text-white">
                  123 Example Street
                  <br />
                  City, Country
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-3xl border border-brand/7 bg-white p-7 sm:px-8">
            <span className="flex h-11.5 w-11.5 flex-none items-center justify-center rounded-[13px] bg-cream">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <div>
              <div className="text-[15.5px] font-semibold text-brand">
                Working hours
              </div>
              <div className="mt-0.75 text-sm text-muted">
                Mon–Sat: 9:00 – 17:00 · Sun closed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { unsplash } from "@/app/lib/images";

export default function Team() {
  return (
    <section id="team" className="bg-cream-alt py-[50px] sm:py-[80px]">
      <div className="fix grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            Meet Our Team
          </p>
          <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            The people behind a <span className="italic">spotless</span> result
          </h2>
          <p className="mt-5.5 max-w-[440px] text-[17px] leading-[1.7] text-muted">
            Our cleaners are trained, vetted and proud of their work. Friendly, dependable professionals who treat every space as if it were their own — that&apos;s the difference behind every clean.
          </p>
          <div className="mt-8.5 flex gap-10">
            <div>
              <div className="font-serif text-[40px] leading-none font-semibold text-brand">
                XX+
              </div>
              <div className="mt-2 text-sm text-muted">Trained professionals</div>
            </div>
            <div>
              <div className="font-serif text-[40px] leading-none font-semibold text-brand">
                100%
              </div>
              <div className="mt-2 text-sm text-muted">Vetted &amp; insured</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4" style={{ gridTemplateRows: "200px 200px" }}>
          <div className="row-span-2 overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
            <img
              src={unsplash("1521737604893-d14cc237f11d")}
              alt="Cleaning team member"
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
            <img
              src={unsplash("1600880292203-757bb62b4baf")}
              alt="Cleaning team at work"
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb]">
            <img
              src={unsplash("1521791136064-7986c2920216")}
              alt="Professional handshake"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

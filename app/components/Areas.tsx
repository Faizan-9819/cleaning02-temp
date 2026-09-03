const PINS = [
  { name: "Westend", top: "24%", left: "24%" },
  { name: "Riverside", top: "34%", left: "44%" },
  { name: "Eastgate", top: "46%", left: "17%" },
  { name: "Northside", top: "50%", left: "54%" },
  { name: "Downtown", top: "56%", left: "36%" },
  { name: "Midtown", top: "60%", left: "70%" },
  { name: "Harbourview", top: "74%", left: "45%" },
];

const AREAS = [
  "Downtown",
  "Northside",
  "Riverside",
  "Westend",
  "Eastgate",
  "Midtown",
  "Harbourview",
];

export default function Areas() {
  return (
    <section id="areas" className="bg-cream-alt py-[50px] sm:py-[80px]">
      <div className="fix grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div
          className="relative h-[480px] overflow-hidden rounded-[28px] bg-brand"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        >
          <svg
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full opacity-30"
          >
            <path
              d="M40 120 L150 90 L260 140 L340 70"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />
            <path
              d="M70 230 L190 200 L300 240"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />
            <path
              d="M110 60 L120 130 L180 220"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />
          </svg>

          {PINS.map((pin) => (
            <div
              key={pin.name}
              className="absolute -translate-x-1/2 -translate-y-full text-center"
              style={{ top: pin.top, left: pin.left }}
            >
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12.5px] font-semibold whitespace-nowrap text-brand">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                {pin.name}
              </div>
              <div className="mx-auto h-3.5 w-px bg-white/70" />
            </div>
          ))}
        </div>

        <div>
          <p className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.18em] text-muted-light uppercase">
            <span className="inline-block h-px w-7 bg-muted-light" />
            Service Areas
          </p>
          <h2 className="mt-5 font-serif text-[clamp(34px,4vw,52px)] leading-[1.08] font-medium tracking-[-0.01em] text-brand">
            Cleaning coverage across <br />{" "}
            <span className="italic">your region</span>
          </h2>
          <p className="mt-5 max-w-[480px] text-[17px] leading-[1.7] text-muted">
            Based in your city, we serve businesses, schools and facilities
            throughout the wider region — reliable, on-site and on schedule.
          </p>
          <div className="mt-7.5 flex flex-wrap gap-2.75">
            {AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-brand/8 bg-white px-4.5 py-2.75 text-[15px] font-medium text-ink transition-colors hover:bg-cream"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#45293b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

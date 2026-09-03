import { unsplash } from "@/app/lib/images";

const COLLAGE_IMAGES = [
  { id: "1581578731548-c64695cc6952", alt: "Cleaning supplies", w: 222, h: 340 },
  { id: "1497366811353-6870744d04b2", alt: "Office interior", w: 300, h: 248 },
  { id: "1628177142898-93e36e4e3a50", alt: "Mopping floor", w: 210, h: 382 },
  { id: "1600880292203-757bb62b4baf", alt: "Professional team", w: 318, h: 288 },
  { id: "1486406146926-c627a92ad1ab", alt: "Commercial building", w: 228, h: 360 },
  { id: "1563453392212-326f5e854473", alt: "Window cleaning", w: 300, h: 262 },
  { id: "1503676260728-1c00da094a0b", alt: "Classroom", w: 220, h: 330 },
  { id: "1505228395891-9a51e7e86bf6", alt: "Holiday park", w: 300, h: 280 },
];

export default function Hero() {
  const loop = [...COLLAGE_IMAGES, ...COLLAGE_IMAGES];

  return (
    <section
      id="home"
      className="relative py-[50px] sm:py-[80px]"
      style={{
        background:
          "radial-gradient(1100px 560px at 6% -10%, rgba(239,236,230,0.9), transparent 60%)",
      }}
    >
      <div className="fix grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.12fr]">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/[.08] bg-white px-4 py-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#45293b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-[13px] font-medium text-muted">
              Trusted by businesses across the region
            </span>
          </div>

          <h1 className="mt-6 text-balance font-serif text-[clamp(44px,5.4vw,74px)] leading-[1.02] font-medium tracking-[-0.015em] text-brand">
            Professional cleaning services for <span className="italic">businesses</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-lg leading-[1.7] text-muted">
            Reliable, flexible and professional cleaning for offices, schools, commercial facilities and holiday parks — delivered by a team you can count on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-[15.5px] font-semibold text-white no-underline transition-colors hover:bg-brand/90"
            >
              Request a Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border border-brand/[.22] px-7.5 py-4 text-[15.5px] font-semibold text-ink no-underline transition-colors hover:bg-brand/4"
            >
              Book an Appointment
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5.5">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#45293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              <span className="text-[14.5px] font-medium text-muted">Serving your region</span>
            </div>
            <div className="h-5.5 w-px bg-brand/[.12]" />
            <div className="text-[14.5px] font-medium text-muted">
              Reliable · Flexible · Professional
            </div>
          </div>
        </div>

        <div
          className="relative h-[420px] overflow-hidden lg:h-[520px]"
          style={{
            mask: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
          }}
        >
          <div
            className="flex h-full w-max items-center gap-4.5"
            style={{
              animationName: "heromarquee",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDuration: "48s",
              animationDirection: "normal",
            }}
          >
            {loop.map((img, i) => (
              <div
                key={i}
                className="relative flex-none overflow-hidden rounded-[22px] bg-gradient-to-br from-cream-alt to-[#dcd6cb] transition-[transform,filter] duration-500"
                style={{ width: img.w, height: img.h }}
              >
                <img
                  src={unsplash(img.id)}
                  alt={img.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

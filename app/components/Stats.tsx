const STATS = [
  { value: "XX+", label: "Cleaning Professionals" },
  { value: "XX+", label: "Projects Completed" },
  { value: "XX+", label: "Satisfied Clients" },
  { value: "20XX", label: "Established" },
];

export default function Stats() {
  return (
    <section className="bg-brand py-[50px] sm:py-[80px]">
      <div className="fix">
        <div className="relative grid grid-cols-2 gap-5 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/10 lg:hidden" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10 lg:hidden" />
          {STATS.map((stat) => (
            <div key={stat.label} className="p-4.5 text-center lg:border-r lg:border-white/10">
              <div className="font-serif text-[clamp(46px,5.4vw,68px)] leading-none font-medium tracking-[-0.02em] text-white">
                {stat.value}
              </div>
              <div className="mt-4 text-sm font-medium tracking-[0.02em] text-muted-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

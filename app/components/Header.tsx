const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Areas", href: "#areas" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#enquiry" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[60] border-b border-brand/[.07] bg-cream/80 backdrop-blur-2xl">
      <div className="fix flex items-center justify-between gap-6 py-4">
        <a href="#home" className="flex items-center gap-3 no-underline">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand font-serif text-xl font-semibold tracking-tight text-white">
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[22px] font-semibold tracking-tight text-brand">
              Cleaning Co.
            </span>
            <span className="mt-1 text-[10.5px] font-semibold tracking-[0.2em] text-muted-light uppercase">
              Commercial Cleaning
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[rgb(107_107_107)] no-underline transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden items-center gap-2 rounded-full bg-brand px-6 py-3 text-[14.5px] font-semibold text-white no-underline transition-colors hover:bg-brand/90 sm:inline-flex"
        >
          Request a Quote
        </a>
      </div>
    </header>
  );
}

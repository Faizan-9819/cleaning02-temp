"use client";

import { openCookiePreferences } from "./CookieConsent";

const SERVICE_LINKS = [
  "Office & Commercial",
  "School Cleaning",
  "Holiday Park Cleaning",
  "Building Maintenance",
  "Staffing Support",
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Service Areas", href: "#areas" },
  { label: "Blog", href: "#journal" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#enquiry" },
];

const LEGAL_LINKS = ["Privacy Policy", "Cookie Policy", "Terms & Conditions"];

export default function Footer() {
  return (
    <footer className="bg-brand px-8 pt-[50px] text-muted-light sm:pt-[80px]">
      <div className="fix">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 font-serif text-xl font-semibold text-white">
                C
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[22px] font-semibold text-white">
                  Cleaning Co.
                </span>
                <span className="mt-1 text-[10.5px] font-semibold tracking-[0.2em] text-muted uppercase">
                  Commercial Cleaning
                </span>
              </div>
            </div>
            <p className="mt-5.5 max-w-75 text-[14.5px] leading-[1.7] text-muted-light">
              Reliable, professional commercial cleaning for businesses, schools, facilities and holiday parks across the region.
            </p>
            <div className="mt-6 flex gap-2.75">
              <a
                href="#home"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-[#cfc8bc] no-underline transition-colors hover:bg-white/16"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 9H15V6.5h-1.5c-1.93 0-3 1.07-3 3V11H9v2.5h1.5V19H13v-5.5h1.7l.3-2.5h-2V9.5c0-.3.2-.5.5-.5Z" />
                </svg>
              </a>
              <a
                href="#home"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-[#cfc8bc] no-underline transition-colors hover:bg-white/16"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#home"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-[#cfc8bc] no-underline transition-colors hover:bg-white/16"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.4 8.9h3.1V20H3.4V8.9Zm5.06 0h2.97v1.52h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.7 2.06 3.7 4.74V20h-3.1v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V20H8.46V8.9Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[13px] font-bold tracking-[0.12em] text-white uppercase">
              Services
            </h4>
            <div className="flex flex-col gap-3.25">
              {SERVICE_LINKS.map((label) => (
                <a
                  key={label}
                  href="#services"
                  className="text-[14.5px] text-muted-light no-underline transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[13px] font-bold tracking-[0.12em] text-white uppercase">
              Company
            </h4>
            <div className="flex flex-col gap-3.25">
              {COMPANY_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14.5px] text-muted-light no-underline transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[13px] font-bold tracking-[0.12em] text-white uppercase">
              Newsletter
            </h4>
            <p className="mb-4 text-sm leading-[1.65] text-muted-light">
              Cleaning tips and updates, occasionally — no spam.
            </p>
            <div className="flex gap-2 rounded-full bg-white/8 p-1.5">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-3.5 py-2 font-sans text-sm text-white outline-none placeholder:text-muted-light"
              />
              <button className="rounded-full bg-white px-4.5 py-2.5 font-sans text-sm font-semibold text-brand transition-opacity hover:opacity-90">
                Subscribe
              </button>
            </div>
            <div className="mt-5.5 text-[13.5px] leading-[1.7] text-muted-light">
              123 Example Street, City, Country
              <br />
              +00 000 000 000 · hello@example.com
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4.5 py-7">
          <div className="text-[13.5px] text-muted">
            © 2026 Cleaning Co. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {LEGAL_LINKS.map((label) => (
              <a
                key={label}
                href="#home"
                className="text-[13.5px] text-muted-light no-underline transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={openCookiePreferences}
              className="cursor-pointer text-[13.5px] text-muted-light transition-colors hover:text-white"
            >
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

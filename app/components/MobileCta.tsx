export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[75] flex gap-2.5 border-t border-brand/8 bg-white p-3.5 shadow-[0_-8px_24px_-14px_rgba(0,0,0,0.2)] sm:hidden">
      <a
        href="#booking"
        className="flex-1 rounded-full bg-brand py-3.5 text-center text-[14.5px] font-semibold text-white no-underline"
      >
        Request a Quote
      </a>
      <a
        href="#booking"
        className="flex-1 rounded-full border border-brand/22 py-3.5 text-center text-[14.5px] font-semibold text-ink no-underline"
      >
        Book Appointment
      </a>
    </div>
  );
}

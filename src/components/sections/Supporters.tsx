import { ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
export default function Supporters() {
  return (
    <section
      aria-labelledby="supporters-heading"
      className="relative w-full overflow-hidden border-y border-slate-200/60 bg-[#f8f9fa] px-4 py-16 font-serif selection:bg-amber-500 selection:text-white sm:px-6 lg:px-8"
    >
      {/* grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
        {/* text */}
        <div className="flex-1 space-y-2.5 text-center md:text-left">
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.25em] text-slate-800 sm:text-base">
            Proud Supporters of
          </p>

          <h2
            id="supporters-heading"
            className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#0B2545] sm:text-4xl md:text-5xl"
          >
            Texas Center For The Missing
          </h2>

          <p className="flex items-center justify-center gap-1.5 pt-1 font-sans text-xs font-medium tracking-wide text-amber-700/90 sm:text-sm md:justify-start">
            <MapPin aria-hidden className="h-3.5 w-3.5 text-amber-600" />
            <span>
              Houston <span aria-hidden className="mx-1 text-amber-500/60">|</span>
              <span className="sr-only">, </span>Texas
            </span>
          </p>
        </div>

        {/* logo card */}
        <div className="group relative shrink-0">
          <a
            href="https://centerforthemissing.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="block transform rounded-xl border border-slate-200/80 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl sm:p-6"
          >
            <Image
              src="/clients/tcftm-web-logo.png"
              alt="Texas Center For The Missing"
              width={250}
              height={115}
              className="h-12 w-auto object-contain sm:h-14"
            />
            <span className="sr-only"> website (opens in a new tab)</span>

            {/* hover / focus indicator */}
            <span
              aria-hidden
              className="absolute right-2 top-2 text-slate-400 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
import { FileSearch, Handshake, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";
import { audit } from "@/data/contract-management";

// One icon per card, in the same order as `audit` in the data file
const ICONS: LucideIcon[] = [FileSearch, ShieldCheck, Handshake, Workflow];

export default function HipaaAuditors() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B2240] py-16 text-white md:py-24">
      {/* Background: soft glows + oversized HIPAA watermark */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-6 -z-10 -translate-x-1/2 select-none text-[22vw] font-black leading-none tracking-tight text-white/[0.04] lg:text-[200px]"
      >
        HIPAA
      </span>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300">
            <ShieldCheck aria-hidden className="h-3.5 w-3.5" />
            Contract Auditors and HIPAA Specialists
          </p>
          <h2 className="font-serif text-2xl font-extrabold leading-tight md:text-4xl">
            Our contract auditors and <span className="italic text-amber-400">HIPAA specialists</span> optimize and
            enhance the contract management process in several ways
          </h2>
        </div>

        {/* Cards: 2 × 2 on desktop */}
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {audit.map((a, i) => {
            const Icon = ICONS[i] ?? FileSearch;
            return (
              <li
                key={a.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/[0.07] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
              >
                {/* step number */}
                <span
                  aria-hidden
                  className="absolute right-6 top-5 font-serif text-5xl font-black text-white/[0.06] transition-colors group-hover:text-amber-400/20"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-[#0B2240] shadow-lg shadow-amber-500/20">
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={2} />
                </div>

                <h3 className="mb-3 font-serif text-lg font-bold md:text-xl">{a.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">{a.text}</p>

                {/* accent line on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber-500 to-amber-300 transition-transform duration-300 group-hover:scale-x-100"
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
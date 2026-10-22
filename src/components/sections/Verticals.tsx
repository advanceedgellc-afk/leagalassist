import Link from "next/link";
import { Gavel, ShieldCheck, Briefcase, FileText, BookOpen, Building2, type LucideIcon } from "lucide-react";
import { verticals, verticalHref } from "@/data/verticals";
import BookCallButton from "../booking/BookCallButton";

const ICONS: Record<string, LucideIcon> = {
  "mass-tort": Gavel,
  "personal-injury": ShieldCheck,
  "workers-compensation": Briefcase,
  "social-security-disability": FileText,
  "academia-research": BookOpen,
  "legal-marketing": Building2,
};

export default function Verticals() {
  return (
    <section id="verticals" className="scroll-mt-24  bg-slate-50/60 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {verticals.map((v) => {
            const Icon = ICONS[v.slug] ?? FileText;
            return (
              <li
                key={v.slug}
                className="group relative flex min-h-[300px] flex-col justify-between rounded-2xl border border-slate-700/50 bg-[#0B2240] p-7 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-inner transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Icon aria-hidden className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-white">{v.title}</h3>
                  <p className="mb-6 text-xs font-normal leading-relaxed text-slate-300 sm:text-sm">{v.desc}</p>
                </div>

                <div>
                  <Link
                    href={verticalHref(v.slug)}
                    aria-label={`Read more about ${v.title}`}
                    className="inline-block rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0B2240] shadow-sm transition-all duration-200 after:absolute after:inset-0 after:content-[''] group-hover:bg-amber-400 group-hover:text-slate-950"
                  >
                    Read More
                  </Link>
                </div>
              </li>
            );
          })}

          {/* Text block: fills the last two columns on large screens */}
          <li className="flex flex-col items-start justify-center space-y-4 p-6 sm:p-8 md:col-span-2 lg:col-span-2">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-800">
              Where we deliver expertise
            </p>
            <h2 className="font-serif text-3xl font-extrabold leading-tight text-[#0B2240] sm:text-4xl">
              Specialized Support Across Key Legal Verticals
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-slate-700 sm:text-base">
              At Legal Assist, we are dedicated to providing the highest quality support services to law firms and
              legal professionals across a variety of different business verticals.
            </p>
            <div className="pt-2">
              <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-[#0f2b5c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#0e357a4d] transition hover:scale-[1.02] hover:bg-[#0e357a] active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              
              Schedule A Free Call
            </BookCallButton>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
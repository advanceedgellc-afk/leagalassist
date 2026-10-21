import Link from "next/link";
import {
  Users, FileCheck2, FolderSearch, Stethoscope, FileText, Database, Scale, Headphones,
  ChevronRight, Sparkles, type LucideIcon,
} from "lucide-react";
import { services, serviceHref } from "@/data/services";

const ICONS: Record<string, LucideIcon> = {
  "lead-management": Users,
  "contract-management": FileCheck2,
  "record-retrieval": FolderSearch,
  "medical-record-review": Stethoscope,
  "deposition-summarization": FileText,
  "e-discovery": Database,
  "litigation-support": Scale,
  "call-audit": Headphones,
};

// cards shown in the grid, in design order
const GRID = [
  "lead-management",
  "contract-management",
  "record-retrieval",
  "medical-record-review",
  "deposition-summarization",
  "e-discovery",
];
const FEATURED = "medical-record-review";

// the two buttons beside the heading
const EXTRA = ["litigation-support", "call-audit"];

const bySlug = (slug: string) => services.find((s) => s.slug === slug)!;

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-slate-50/50 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + extra links */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-800">
              <Sparkles aria-hidden className="h-3.5 w-3.5 text-amber-600" />
              <span>What we do best</span>
            </div>
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#0B2240] sm:text-4xl lg:text-5xl">
              Our Comprehensive Legal Support Services
            </h2>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {EXTRA.map((slug) => (
              <Link
                key={slug}
                href={serviceHref(slug)}
                className="rounded-xl bg-[#0B2240] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-amber-500 hover:text-slate-950 sm:text-sm"
              >
                {bySlug(slug).title}
              </Link>
            ))}
          </div>
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {GRID.map((slug) => {
            const s = bySlug(slug);
            const Icon = ICONS[slug] ?? FileText;
            const featured = slug === FEATURED;

            return (
              <li
                key={slug}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  featured
                    ? "border-slate-800 bg-[#0B2240] text-white shadow-2xl shadow-slate-950/20"
                    : "border-slate-200/80 bg-white text-slate-800 hover:border-amber-400/80 hover:shadow-xl hover:shadow-amber-500/5"
                }`}
              >
                {featured && (
                  <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />
                )}

                <div>
                  <div
                    className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      featured
                        ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                        : "border-slate-200/80 bg-slate-100 text-slate-800 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950"
                    }`}
                  >
                    <Icon aria-hidden className="h-7 w-7" />
                  </div>

                  <h3 className={`mb-3 text-2xl font-extrabold leading-snug ${featured ? "text-white" : "text-[#0B2240]"}`}>
                    {s.title}
                  </h3>
                  <p className={`mb-8 text-sm leading-relaxed ${featured ? "text-slate-300" : "text-slate-600"}`}>
                    {s.desc}
                  </p>
                </div>

                <div className={`border-t pt-4 ${featured ? "border-slate-700" : "border-slate-100"}`}>
                  <Link
                    href={serviceHref(slug)}
                    aria-label={`Read more about ${s.title}`}
                    className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider transition-colors after:absolute after:inset-0 after:content-[''] ${
                      featured ? "text-amber-400 hover:text-amber-300" : "text-[#0B2240] group-hover:text-amber-600"
                    }`}
                  >
                    Read More
                    <ChevronRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}
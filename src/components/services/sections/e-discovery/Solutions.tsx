import CtaButton from "@/components/ui/CtaButton";
import { solutions } from "@/data/e-discovery";
import { LegalReviewIllustration } from "./Illustrations";

export function BoxCheck() {
  return (
    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0f2b5c] text-white shadow-sm">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Solutions() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/60 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-5">
            <LegalReviewIllustration />
            <div className="pt-2 text-center"><CtaButton>Schedule A Call</CtaButton></div>
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
            <div>
              <h2 className="mb-2 font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">
                Comprehensive E-Discovery Solutions for All Your Legal Needs
              </h2>
              <p className="text-sm font-bold leading-relaxed pb-4 text-slate-600 md:text-sm">
                Legal Assist offers a range of e-discovery services to help you streamline your legal process.
              </p>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                At Legal Assist, we offer a comprehensive range of e-discovery services to help you manage your legal proceedings efficiently and effectively. Our services include:
              </p>
            </div>
            <ul className="space-y-4 pt-1">
              {solutions.map((s) => (
                <li key={s.title} className="flex items-start gap-3.5 rounded-lg border border-slate-200/80 bg-white p-4 shadow-sm">
                  <BoxCheck />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 md:text-base">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
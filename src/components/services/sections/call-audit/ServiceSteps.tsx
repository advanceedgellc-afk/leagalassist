import { Database, Eye, FileSearch, FileText } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { steps } from "@/data/call-audit";
import { AuditServicesIllustration } from "./Illustrations";

const ICONS = [Database, FileSearch, FileText, Eye];

export function BoxCheck() {
  return (
    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0f2b5c] text-white shadow-sm">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function ServiceSteps() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* badges */}
          <div className="lg:col-span-5">
            <AuditServicesIllustration />
            <p className="mt-8 text-xs leading-relaxed text-slate-700 md:text-sm">
              At Legal Assist, we are committed to providing our clients with high-quality Call Audit services that meet
              their unique needs. Contact us today to learn more about how we can help you.
            </p>
          </div>

          {/* list */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <h2 className="mb-3 font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">Our Call Audit Service</h2>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                Legal Assist understands the importance of a streamlined and effective Call Audit process. Our
                comprehensive Call Audit process is designed to ensure accuracy, quality, and compliance.
              </p>
            </div>
            <ul className="space-y-5">
              {steps.map((s) => (
                <li key={s.title} className="flex items-start gap-3">
                  <BoxCheck />
                  <div className="space-y-1">
                    <h3 className="font-serif text-sm font-bold text-[#0f2b5c] md:text-base">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-2 text-center"><CtaButton /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
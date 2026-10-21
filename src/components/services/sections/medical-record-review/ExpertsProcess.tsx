import CtaButton from "@/components/ui/CtaButton";
import { steps } from "@/data/medical-record-review";
import ProcessSteps from "./ProcessSteps";

export function BoxCheck() {
  return (
    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0f2b5c] text-white shadow-sm">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function ExpertsProcess() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/60 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* LEFT: stays in view on desktop while the steps scroll */}
          <div className="relative space-y-6 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="block text-xs font-bold uppercase tracking-widest text-slate-500">
              Nurses Consultants Physical Therapists
            </p>
            <div className="relative isolate">
              <span aria-hidden className="absolute -left-2 -top-10 -z-10 select-none text-6xl font-black tracking-tight text-slate-200/70 md:text-7xl">
                REVIEW
              </span>
              <h2 className="font-serif text-2xl font-extrabold leading-tight text-[#0f2b5c] md:text-4xl">
                Nurses Consultants Physical Therapists, Pharmacists, Dental Doctors, Medical Doctors, Specialists like{" "}
                <span className="text-amber-600">Cardiologists, Gynecologists, Radiologists</span> etc.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              At Legal Assist, we understand that medical record review is a critical component of any legal case. That’s why we’ve developed a comprehensive process that ensures timely, accurate, and cost-effective results. Our team is always available to answer any questions or provide additional support as needed. Contact us today to learn more about how we can assist with your medical record review needs.
            </p>
            <CtaButton />
          </div>

          {/* RIGHT: scrolling steps */}
          <div className="space-y-8 lg:col-span-7">
            <div>
              <h2 className="mb-2 font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">
                Our Comprehensive Process for Medical Record Review
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                At Legal Assist, we take pride in our comprehensive medical review process, designed to provide attorneys
                with clear, actionable insights into their medical evidence. Here is a breakdown of our comprehensive
                process:
              </p>
            </div>

            <ProcessSteps steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
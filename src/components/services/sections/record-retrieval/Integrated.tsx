import CtaButton from "@/components/ui/CtaButton";
import { IntegratedReviewIllustration } from "./Illustrations";

const integrated = [
  {
    title: "Medical Record Review Services",
    text: "Our medical record review services are performed by experienced medical professionals with over 10 years of review experience. They can perform a full-fledged review, producing mass tort matrix or chronological summaries, or simply find missing records, ensure all dates of service are accurate, and confirm the record set has documents supporting proof of use and proof of injury.",
  },
  {
    title: "Combining Record Retrieval and Review",
    text: "When you combine our record retrieval and review services, you have a powerful tool that can help ensure accuracy and completeness of the record set, identify missing records or other potential issues, and accelerate the case litigation process. This not only leads to more effective outcomes but can also result in lowered costs without compromising quality.",
  },
];

const skills = [
  { label: "HIPAA Specialists", value: 50 },
  { label: "Document Management", value: 30 },
  { label: "Contact Center Agents", value: 75 },
  { label: "Medical Record Reviewers", value: 25 },
];

function BoxCheck() {
  return (
    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0f2b5c] text-white shadow-sm">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Integrated() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* ===== Left: main content ===== */}
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-3xl">
              From Records to Results: The Power of Integrating Retrieval and Review Services for Case Success
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              When it comes to litigating <span className="font-semibold text-blue-700">mass tort cases</span>, obtaining
              and reviewing medical records is a critical component of the process. However, managing the record
              retrieval process can be time-consuming and complex, with a multitude of steps and potential roadblocks.
              That&apos;s why Legal Assist offers both{" "}
              <span className="font-semibold text-blue-700">record retrieval and review services</span> to help
              streamline and optimize your case litigation process.
            </p>
            <p className="text-sm font-medium leading-relaxed text-slate-700 md:text-base">
              By combining record retrieval and review services, you&apos;ll have access to a powerful tool that can
              accelerate your case litigation process, help ensure accuracy and completeness of the record set, and
              ultimately lead to <span className="font-semibold text-amber-600">more effective outcomes</span>.
            </p>

            <ul className="space-y-4 pt-1">
              {integrated.map((i) => (
                <li key={i.title} className="flex items-start gap-3.5 rounded-lg border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
                  <BoxCheck />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 md:text-base">{i.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{i.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Whether you need record retrieval, review, or a combination of both, Legal Assist has the experience,
              expertise, and resources to help you achieve success in your mass tort litigation cases. Contact us today
              to learn more about how our record retrieval and review services can benefit your firm.
            </p>
            <CtaButton />
          </div>

          {/* ===== Right: skills + illustration ===== */}
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-base font-bold text-[#0f2b5c] md:text-lg">Skilled Resources, Delivering Results.</h3>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                Legal Assist&apos;s record retrieval and review services are designed to provide exceptional results by
                harnessing the power of collaboration. Our skilled resources work together to deliver accurate, timely,
                and comprehensive information, enabling our clients to make informed decisions and build stronger cases.
                With a focus on quality, efficiency, and customization, Legal Assist is committed to helping our clients
                succeed in their legal endeavors.
              </p>

              <ul className="space-y-3 pt-2">
                {skills.map((s) => (
                  <li key={s.label}>
                    <div className="mb-1 flex justify-between text-xs font-bold text-slate-700">
                      <span>{s.label}</span>
                      <span>{s.value}%</span>
                    </div>
                    <div
                      role="progressbar"
                      aria-label={s.label}
                      aria-valuenow={s.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="h-2 w-full overflow-hidden rounded-full bg-slate-100"
                    >
                      <div className="h-full rounded-full bg-[#0f2b5c]" style={{ width: `${s.value}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <IntegratedReviewIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
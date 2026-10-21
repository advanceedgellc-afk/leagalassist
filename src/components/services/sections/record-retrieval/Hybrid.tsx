import { Building2, CheckCircle2, Headphones, PhoneCall, Send } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const weHandle = ["Facility verification", "Follow-up calls", "Tracking calls"];

export default function Hybrid() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-24">
      {/* soft background accents */}
      <div aria-hidden className="absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div aria-hidden className="absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== Heading ===== */}
        <div className="relative mx-auto mb-14 max-w-4xl text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-6 select-none text-7xl font-black tracking-tight text-slate-100 md:text-9xl"
          >
            REQUEST
          </span>
          <p className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-800">
            Retrieval and Review Specialists
          </p>
          <h2 className="font-serif text-2xl font-extrabold leading-tight text-[#0f2b5c] md:text-4xl">
            Revolutionize Your <span className="text-amber-600">Record Retrieval</span> with Legal Assist&apos;s Hybrid
            Solution: Keep it In-house, Increase Efficiency, and Cut Costs
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ===== Text ===== */}
          <div className="space-y-5 lg:col-span-7">
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Looking for a new and innovative approach to medical record retrieval? Look no further than Legal
              Assist&apos;s <span className="font-semibold text-blue-700">Hybrid Record Retrieval services</span>. Our
              unique offering is born from our experience working with a variety of law firms and understanding the
              challenges they face in outsourcing the entire retrieval process. With our Hybrid solution, you can{" "}
              <span className="font-semibold text-blue-700">keep the retrieval process in-house</span>, submitting
              requests directly from your team, while still leveraging our expertise for the middle stages of the
              process.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              We know that maintaining a call center and handling facility verification, follow-up, and tracking calls
              can be a pain point of the retrieval process. That&apos;s why we have a{" "}
              <span className="font-semibold text-amber-600">dedicated call center</span> to handle all of these tasks
              for you. This not only saves you on overall costs, but also increases efficiency and productivity.
            </p>

            {/* closing CTA box */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="mb-5 text-sm leading-relaxed text-slate-700 md:text-base">
                If you&apos;re interested in learning more about our innovative Hybrid Record Retrieval services,
                schedule a call with us today. Our experienced team will be happy to answer any questions you may have
                and provide you with the information you need to make an informed decision about your record retrieval
                needs.
              </p>
              <CtaButton />
            </div>
          </div>

          {/* ===== How the hybrid model works ===== */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-500">How the Hybrid model works</p>

              {/* Step 1: your team */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef2ff] text-[#0f2b5c]">
                  <Building2 aria-hidden className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">Your team · In-house</p>
                  <h3 className="mt-0.5 flex items-center gap-2 font-serif text-lg font-bold text-[#0f2b5c]">
                    <Send aria-hidden className="h-4 w-4" /> Submit requests
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">You keep control and send requests directly from your firm.</p>
                </div>
              </div>

              {/* connector */}
              <div aria-hidden className="my-3 ml-6 h-8 border-l-2 border-dashed border-slate-300" />

              {/* Step 2: Legal Assist */}
              <div className="rounded-2xl bg-[#0f2b5c] p-5 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-[#0f2b5c]">
                    <Headphones aria-hidden className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Legal Assist · Call center</p>
                    <h3 className="mt-0.5 font-serif text-lg font-bold">We handle the middle stages</h3>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {weHandle.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <PhoneCall aria-hidden className="h-4 w-4 shrink-0 text-amber-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* outcomes */}
              <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
                {["Lower overall costs", "More efficiency & productivity"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import CtaButton from "@/components/ui/CtaButton";
import { features } from "@/data/record-retrieval";
import { RetrievalCallsIllustration } from "./Illustrations";

export default function Advantage() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/60 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#0f2b5c] bg-[#eef2ff]">
            <span className="text-2xl font-black text-[#0f2b5c]">11+</span>
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <p className="block text-xs font-bold uppercase tracking-widest text-slate-500">
              Years of Record Retrieval Expertise
            </p>
            <h2 className="font-serif text-xl font-bold text-[#0f2b5c] md:text-2xl">
              Unmatched Medical Record Retrieval Support: The Legal Assist Advantage
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
              Our medical record retrieval services are designed to{" "}
              <span className="font-medium text-blue-700">make your life easier</span>. We offer{" "}
              <span className="font-semibold text-blue-700">three distinct services</span> that can be tailored to your
              needs, allowing you to pick and choose what works best for your firm. We also offer{" "}
              <span className="font-semibold text-amber-600">hybrid solutions</span> that allow you to keep certain
              aspects of the retrieval process in-house, while we handle the rest. This means you have more control over
              the process and can save money in the long run.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RetrievalCallsIllustration />
          </div>

          <div className="space-y-6 lg:col-span-7">
            <ol className="space-y-6">
              {features.map((f, i) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 md:text-lg">{f.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{f.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="pt-2">
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
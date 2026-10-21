import CtaButton from "@/components/ui/CtaButton";
import { why } from "@/data/deposition-summarization";
import { BoxCheck } from "./Services";

export default function WhyChoose() {
  return (
    <section className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Deposition Summarization</p>
          <h2 className="font-serif text-2xl font-extrabold leading-tight text-[#0f2b5c] md:text-4xl">
            Why Choose Legal Assist for Your <span className="text-amber-600">Deposition Summarization</span> Needs
          </h2>
        </div>

        {/* Reasons: one per row */}
        <ul className="space-y-4">
          {why.map((w) => (
            <li
              key={w.title}
              className="flex items-start gap-3.5 rounded-lg border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm sm:p-5"
            >
              <BoxCheck />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 md:text-base">{w.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{w.text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div>
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
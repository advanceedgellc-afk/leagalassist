import CtaButton from "@/components/ui/CtaButton";
import { formats } from "@/data/medical-record-review";
import { BoxCheck } from "./ExpertsProcess";
import { OutputFormatsIllustration } from "./Illustrations";

export default function OutputFormats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div>
              <h2 className="mb-2 font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-3xl">
                Versatile Medical Record Review Services with Multiple Output Formats
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                At Legal Assist, we understand that our clients may have unique needs and requirements when it comes to their medical record review. That’s why we offer a range of customizable output options from our review services, including but not limited to:
              </p>
            </div>

            <ul className="space-y-4 pt-1">
              {formats.map((f) => (
                <li key={f.title} className="flex items-start gap-3.5 rounded-lg border border-slate-200/80 bg-white p-4 shadow-sm">
                  <BoxCheck />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 md:text-base">{f.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <CtaButton />
          </div>

          <div className="flex justify-center lg:col-span-4"><OutputFormatsIllustration /></div>
        </div>
      </div>
    </section>
  );
}
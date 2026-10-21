import CtaButton from "@/components/ui/CtaButton";
import { process } from "@/data/litigation-support";
import { ProcessNodesIllustration } from "./Illustrations";

export default function Process() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/60 py-14 md:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#0f2b5c] md:text-4xl">Our Comprehensive Litigation Support Process</h2>
          <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
            At Legal Assist, we understand the importance of a streamlined process when it comes to litigation support.
            Our team of experts has developed a comprehensive process that is designed to help you navigate every stage of
            litigation with ease. Here&apos;s a breakdown of our process:
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex justify-center lg:col-span-4"><ProcessNodesIllustration /></div>

          <ol className="space-y-4 lg:col-span-8">
            {process.map((s, i) => (
              <li key={s.title} className="space-y-1 rounded-lg border border-slate-200/80 bg-white p-4 shadow-sm">
                <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 md:text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-xs text-white">{i + 1}</span>
                  {s.title}
                </h3>
                <p className="pl-8 text-xs leading-relaxed text-slate-600 md:text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto max-w-3xl space-y-4 pt-4 text-center">
         
          <p className="text-sm italic leading-relaxed text-slate-600 md:text-sm">
            At Legal Assist, we are committed to providing comprehensive litigation support services that are tailored to your specific needs. Our process is designed to ensure timely, accurate, and cost-effective litigation support services. Contact us today to learn more.
          </p>
           <CtaButton label="Schedule A Call" />
        </div>
      </div>
    </section>
  );
}
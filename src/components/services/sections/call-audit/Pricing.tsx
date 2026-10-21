import CtaButton from "@/components/ui/CtaButton";
import { pricing } from "@/data/call-audit";
import { TurnaroundIllustration } from "./Illustrations";

export default function Pricing() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <h2 className="text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-4xl lg:text-left">
              Pricing and Turnaround Time Of Call Audit
            </h2>
            {pricing.map((p) => (
              <p key={p.slice(0, 30)} className="text-xs leading-relaxed text-slate-700 md:text-sm">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5"><TurnaroundIllustration /></div>
        </div>
        <div className="pt-10 text-center"><CtaButton /></div>
      </div>
    </section>
  );
}
import CtaButton from "@/components/ui/CtaButton";
import { security } from "@/data/call-audit";

export default function Security() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/60 py-14 md:py-20">
      <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-4xl">Technology and Security</h2>
        {security.map((p) => (
          <p key={p.slice(0, 30)} className="text-xs leading-relaxed text-slate-700 md:text-sm">{p}</p>
        ))}
        <div className="pt-4 text-center"><CtaButton /></div>
      </div>
    </section>
  );
}
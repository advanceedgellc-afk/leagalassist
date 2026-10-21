import { introduction } from "@/data/call-audit";

export default function Introduction() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/60 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-2 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-700">Call Auditing</p>
            <h2 className="font-serif text-3xl font-extrabold leading-tight text-[#0f2b5c] md:text-5xl">
              Introduction to <span className="block text-[#F97316]">Call Audit</span>
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-7">
            {introduction.map((p) => (
              <p key={p.slice(0, 30)} className="text-xs leading-relaxed text-slate-700 md:text-sm">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
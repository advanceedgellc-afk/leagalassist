import { CheckSquare, MinusSquare } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { salesProcess as d } from "@/data/lead-management";

function Column({ title, items, positive }: { title: string; items: { title: string; text: string }[]; positive: boolean }) {
  const Icon = positive ? CheckSquare : MinusSquare;
  return (
    <div>
      <h3 className="text-center text-2xl font-bold text-[#0b2a5b] underline underline-offset-4">{title}</h3>
      <ul className="mt-8 space-y-6">
        {items.map((i) => (
          <li key={i.title} className="flex gap-3">
            <Icon aria-hidden className={`mt-1 h-5 w-5 shrink-0 ${positive ? "text-[#0b2a5b]" : "text-red-500"}`} />
            <div>
              <h4 className="text-lg font-bold text-[#0b2a5b]">{i.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{i.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SalesProcess() {
  return (
    <section className="bg-[#eef3ff]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-[#f28c28] md:text-4xl">{d.title}</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <Column title={d.withTitle} items={d.with} positive />
          <Column title={d.withoutTitle} items={d.without} positive={false} />
        </div>
        <div className="mt-12 text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
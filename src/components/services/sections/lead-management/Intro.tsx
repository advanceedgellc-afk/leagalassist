import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import { intro } from "@/data/lead-management";

export default function Intro() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#0b2a5b]">{intro.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0b2a5b] md:text-4xl">{intro.title}</h2>
          <p className="mt-5 text-justify text-sm leading-relaxed text-slate-700">{intro.body}</p>

          <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
            {intro.stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 font-semibold text-[#0b2a5b]">{s.label}</dt>
                <dd className="text-4xl font-medium text-slate-900">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 text-center">
            <CtaButton />
          </div>
        </div>

        <Image
          src="/services/lead-management/leadm-1.webp"
          alt="Lead management funnel from lead capture to customers"
          width={640}
          height={560}
          priority
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
}
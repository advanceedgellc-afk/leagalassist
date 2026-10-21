import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";
import { strategy } from "@/data/lead-management";

export default function Strategy() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#0b2a5b] md:text-4xl">{strategy.title}</h2>
          <Image
            src="/services/lead-management/leadm-2.webp"
            alt="Leads icons: email, calendar, search and chat"
            width={540}
            height={360}
            className="mt-8 h-auto w-full max-w-[540px] rounded-lg"
          />
          <div className="mt-8 max-w-[540px] text-center">
            <CtaButton />
          </div>
        </div>

        <div className="space-y-6">
          {strategy.items.map((i) => (
            <div key={i.title}>
              <h3 className="text-lg font-bold text-[#0b2a5b]">{i.title}</h3>
              <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
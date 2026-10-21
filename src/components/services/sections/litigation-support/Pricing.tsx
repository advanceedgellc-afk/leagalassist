import CtaButton from "@/components/ui/CtaButton";
import { pricing } from "@/data/litigation-support";
import { PricingClipboardIllustration } from "./Illustrations";

export default function Pricing() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Litigation Support</p>
              <h2 className="mb-2 font-serif text-2xl font-extrabold leading-tight text-[#0f2b5c] md:text-4xl">
                Transparent, Affordable Pricing for Your <span className="text-amber-600">Litigation Support</span> Needs
              </h2>
              <p className="mb-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                At Legal Assist, we understand the importance of transparent and predictable pricing when it comes to litigation support services. That’s why we offer flexible pricing models to suit our clients’ needs, whether it’s hourly rates or fixed project pricing. We believe in providing affordable and high-quality litigation support services without compromising on quality.
              </p>
              
            </div>

            <ul className="space-y-3.5 pt-1">
              {pricing.map((p) => (
                <li key={p.title} className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 md:text-base">{p.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{p.text}</p>
                </li>
              ))}
            </ul>
            <div className="pt-2"><CtaButton /></div>
          </div>

          <div className="flex justify-center lg:col-span-5"><PricingClipboardIllustration /></div>
        </div>
      </div>
    </section>
  );
}
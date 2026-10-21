import CtaButton from "@/components/ui/CtaButton";
import { pricing } from "@/data/e-discovery";
import { PricingClipboardIllustration } from "./Illustrations";

export default function Pricing() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <div>
              <h2 className="mb-2 font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-3xl">
                Transparent, Affordable Pricing for Your E-Discovery Needs
              </h2>
              <p className="mb-2 font-serif text-base font-bold text-[#0f2b5c]">
                Legal Assist offers transparent, affordable pricing for e-discovery services
              </p>
              <p className="mb-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                At Legal Assist, we understand that pricing is a major concern for our clients when it comes to e-discovery services. That’s why we’ve developed a pricing structure that is both transparent and affordable. Here’s what you can expect:
              </p>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                At Legal Assist, we believe that transparent, affordable pricing is a crucial component of our commitment to client satisfaction. Contact us today to learn more about our e-discovery services and pricing options.
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
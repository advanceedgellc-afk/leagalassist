import CtaButton from "@/components/ui/CtaButton";
import { EDiscoveryHeroIllustration } from "./Illustrations";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">E-Discovery Services</p>
              <h2 className="mb-2 font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
                E-Discovery Services for a Smarter, More Efficient Legal Process
              </h2>
              <p className="font-serif text-lg font-bold leading-snug text-[#0f2b5c] md:text-xl">
                Streamline your legal process with Legal Assist&apos;s e-discovery services
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              In today&apos;s digital age, electronic data plays a vital role in legal proceedings. E-discovery, or
              electronic discovery, is the process of collecting, reviewing, and producing electronically stored
              information (ESI) for legal cases and investigations.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              At Legal Assist, we understand the importance of e-discovery in modern legal proceedings. Our team of
              experts provides comprehensive e-discovery services to help legal teams navigate the complex landscape of
              ESI efficiently and effectively.
            </p>
            <div className="pt-2"><CtaButton /></div>
          </div>
          <div className="lg:col-span-5"><EDiscoveryHeroIllustration /></div>
        </div>
      </div>
    </section>
  );
}
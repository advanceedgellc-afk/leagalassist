import CtaButton from "@/components/ui/CtaButton";
import { LitigationHeroIllustration } from "./Illustrations";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Litigation Support</p>
              <h2 className="mb-2 font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
                Comprehensive Litigation Support Services for Your Legal Needs
              </h2>
              <p className="font-serif text-lg font-bold leading-snug text-[#0f2b5c] md:text-xl">
                Streamline your litigation process with Legal Assist&apos;s expert support
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              At Legal Assist, we understand that litigation can be a complex and time-consuming process. That’s why we offer comprehensive litigation support services to help you streamline your legal proceedings and achieve your desired outcomes. Our experienced team of legal professionals is dedicated to providing you with the support you need to succeed.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Our litigation support services cover a wide range of areas, including document management, trial preparation, coding and indexing etc.. We use cutting-edge technology and proven methodologies to ensure that you have the tools and resources you need to win your case.
            </p>
            <div className="pt-2"><CtaButton /></div>
          </div>
          <div className="lg:col-span-5"><LitigationHeroIllustration /></div>
        </div>
      </div>
    </section>
  );
}
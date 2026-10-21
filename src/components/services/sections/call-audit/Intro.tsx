import CtaButton from "@/components/ui/CtaButton";
import { CallAuditHeroIllustration } from "./Illustrations";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Call Audit</p>
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
                Expert Call Audit Services to Ensure Quality and Accuracy
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              When it comes to ensuring quality and accuracy in the Call Audit process, you need a trusted partner you can
              rely on. Legal Assist is here to help with our expert Call Auditing services. Our team of experienced
              reviewers has the knowledge and expertise necessary to provide comprehensive and unbiased reviews of your
              work.
            </p>
            <p className="font-serif text-lg font-bold italic text-[#0f2b5c] md:text-xl">Streamline Your Call Audit Process</p>
            <div className="pt-2"><CtaButton /></div>
          </div>
          <div className="lg:col-span-5"><CallAuditHeroIllustration /></div>
        </div>
      </div>
    </section>
  );
}
import CtaButton from "@/components/ui/CtaButton";
import { DepositionHeroIllustration } from "./Illustrations";

const b = "font-semibold text-blue-700";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Deposition Summarization</p>
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
                Streamline Your Litigation Process with Accurate and Comprehensive Deposition Summaries
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Depositions can be lengthy and overwhelming, making it difficult to identify key information. Legal Assist
              understands the importance of <span className={b}>accurate and comprehensive deposition summaries</span> in
              litigation. We offer deposition summarization services to help our clients{" "}
              <span className={b}>streamline their litigation process</span> by providing them with detailed and
              well-organized summaries of depositions that are easy to navigate and understand. Our team of legal experts
              has years of experience in <span className="font-semibold text-amber-600">deposition summarization</span> and
              is committed to delivering high-quality work that meets the needs of our clients.
            </p>
            <div className="pt-2"><CtaButton /></div>
          </div>
          <div className="lg:col-span-5"><DepositionHeroIllustration /></div>
        </div>
      </div>
    </section>
  );
}
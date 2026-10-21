import CtaButton from "@/components/ui/CtaButton";
import { RecordSupportIllustration } from "./Illustrations";

const b = "font-semibold text-blue-700";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Record Retrieval</p>
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
                Streamlined Record Retrieval: Our Unique Approach to Legal Assistance
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              At Legal Assist, we understand the importance of having{" "}
              <span className={b}>accurate and timely access to medical records</span>. Our{" "}
              <span className={b}>medical record retrieval services</span> help you obtain the necessary information to{" "}
              <span className={b}>build a strong case</span> for your clients. We offer a range of services, from{" "}
              <span className={b}>facility research</span> to <span className={b}>status calling</span>, and{" "}
              <span className="font-semibold text-amber-600">medical record review</span>, to ensure that you have
              everything you need to succeed.
            </p>

            <p className="border-l-4 border-[#0f2b5c] bg-slate-50/80 py-1 pl-4 text-sm font-semibold leading-relaxed text-slate-700 md:text-base">
              Our team comprises <span className="text-blue-700">Case Managers</span>,{" "}
              <span className="text-blue-700">HIPAA Specialists</span>,{" "}
              <span className="text-blue-700">Contact Center Executives</span> and{" "}
              <span className="text-amber-600">Data Processing Specialists</span>.
            </p>

            <div className="pt-2">
              <CtaButton />
            </div>
          </div>

          <div className="lg:col-span-6">
            <RecordSupportIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
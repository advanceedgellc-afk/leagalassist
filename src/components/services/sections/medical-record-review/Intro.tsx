import CtaButton from "@/components/ui/CtaButton";
import { MedicalHeroIllustration } from "./Illustrations";

const b = "font-semibold text-blue-700";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Medical Record Review</p>
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
                Accurate Medical Record Review for Successful Case Outcomes
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              At Legal Assist, we understand the importance of{" "}
              <span className={b}>comprehensive medical record review</span> in achieving{" "}
              <span className={b}>successful case outcomes</span>. Our team of experienced professionals is trained to
              identify key medical issues and accurately interpret complex medical information.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              We know that the medical record review process can be time-consuming and overwhelming, which is why we
              offer a range of services <span className={b}>tailored to meet your specific needs</span>. Whether you need
              a <span className={b}>full review of all medical records</span> or a{" "}
              <span className="font-semibold text-amber-600">targeted review focused on specific issues</span>, we have
              the expertise to provide accurate and reliable results.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Our team will work closely with you to understand the specific requirements of your case and provide{" "}
              <span className={b}>personalized support</span> throughout the review process. With our attention to detail
              and commitment to accuracy, you can trust that your case will be in good hands.
            </p>

            <p className="rounded-xl border-l-4 border-[#0f2b5c] bg-slate-50 p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm md:text-base">
              Our team comprises <span className="text-blue-700">Case Managers</span>,{" "}
              <span className="text-blue-700">HIPAA Specialists</span>,{" "}
              <span className="text-blue-700">Contact Center Executives</span>, and{" "}
              <span className="text-amber-600">Data Processing Specialists</span>.
            </p>

            <p className="text-sm font-medium leading-relaxed text-slate-700 md:text-base">
              Schedule a consultation with us today to discuss how our expertise and attention to detail can help support
              your case.
            </p>
            <div className="pt-2">
              <CtaButton />
            </div>
          </div>

          <div className="lg:col-span-5">
            <MedicalHeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
import CtaButton from "@/components/ui/CtaButton";
import { SmartContractIllustration } from "./Illustrations";

const b = "font-semibold text-blue-700";

const benefits = [
  "Improved contract visibility and control",
  "Increased compliance and risk mitigation",
  "Reduced costs and increased efficiency",
  "Streamlined processes and faster turnaround times",
  "Access to expert guidance and support throughout the contract lifecycle",
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="mb-1 block text-xs font-bold uppercase tracking-widest text-slate-500">Contract Management</p>
              <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
                Streamline Your Contract Management with Our Standalone Service
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Our standalone <span className={b}>contract management service</span> is designed to{" "}
              <span className={b}>simplify your contract management process</span> and provide you with the tools and
              support you need to <span className={b}>ensure compliance and mitigate risk</span>. Our team of experts can
              handle all aspects of the contract lifecycle, from{" "}
              <span className={b}>drafting and negotiation to execution and renewal</span>, allowing you to focus on
              your <span className="font-semibold text-amber-600">core business activities</span>. With our standalone
              service, you can expect:
            </p>

            <ul className="space-y-2.5">
              {benefits.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-slate-700 md:text-base">
                  <span aria-hidden className="mt-0.5 font-bold text-[#0f2b5c]">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <p className="border-l-4 border-amber-500 pl-4 text-sm font-medium leading-relaxed text-slate-700 md:text-base">
              Partner with us to take your contract management to the next level and achieve your business objectives
              with ease.
            </p>

            <div className="pt-2">
              <CtaButton />
            </div>
          </div>

          <div className="lg:col-span-5">
            <SmartContractIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
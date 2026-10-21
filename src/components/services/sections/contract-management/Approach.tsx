import CtaButton from "@/components/ui/CtaButton";
import { ContractSigningIllustration } from "./Illustrations";

const principles = [
  {
    title: "Streamlined Contract Management",
    text: "With our Contract Management Services, you can easily create, store, track and manage all your contracts in one place. This helps in reducing errors and improving efficiency.",
  },
  {
    title: "Improved Compliance",
    text: "Our team of experts ensures that all contracts comply with legal requirements, thereby reducing the risk of penalties and litigation.",
  },
  {
    title: "Better Visibility",
    text: "Our Contract Management Services provide a complete overview of all your contracts, including key dates and milestones, so that you can take proactive steps to manage them.",
  },
];

function BoxCheck() {
  return (
    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0f2b5c] text-white shadow-sm">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Approach() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/60 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <ContractSigningIllustration />
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
            <h2 className="font-serif text-2xl font-bold text-[#0f2b5c] md:text-4xl">Our Approach to Contract Management</h2>

            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              At Legal Assist, we understand that every business has unique contract management needs. That&apos;s why
              we take a personalized approach to our services, working closely with each client to develop a{" "}
              <span className="font-semibold text-blue-700">customized solution</span> that meets their specific
              requirements.
            </p>
            <p className="text-sm font-semibold text-slate-700 md:text-base">
              Our approach to contract management is based on three key principles:
            </p>

            <ul className="space-y-5 pt-1">
              {principles.map((p) => (
                <li key={p.title} className="flex items-start gap-3.5 rounded-lg border border-slate-200/80 bg-white p-4 shadow-sm">
                  <BoxCheck />
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
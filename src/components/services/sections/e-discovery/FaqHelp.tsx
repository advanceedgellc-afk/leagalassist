import CtaButton from "@/components/ui/CtaButton";
import { faqs, help } from "@/data/e-discovery";
import { BoxCheck } from "./Solutions";

export default function FaqHelp() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="border-t border-slate-200/80 bg-slate-50 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* FAQ */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-3xl font-extrabold text-[#0f2b5c] md:text-4xl">FAQs</h2>
                <p className="mx-auto max-w-lg text-xs font-bold leading-relaxed text-[#0f2b5c] md:text-sm">
                 Answers to common questions about Legal Assist&apos;s e-discovery services
                </p>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                At Legal Assist, we understand that e-discovery can be a complex process. To help answer your questions and address your concerns, we’ve compiled a list of common questions about e-discovery and our services.
              </p>

              <div className="mb-6 space-y-3">
                {faqs.map((f, i) => (
                  <details key={f.q} name="ediscovery-faq" open={i === 0} className="group overflow-hidden rounded-sm border border-[#0f2b5c]/80">
                    <summary className="flex cursor-pointer list-none items-center gap-3 bg-[#eef2ff] px-4 py-3.5 text-xs font-bold text-[#0f2b5c] transition-colors hover:bg-[#e2eafc] md:text-sm [&::-webkit-details-marker]:hidden">
                      <span aria-hidden className="flex h-5 w-5 shrink-0 select-none items-center justify-center text-lg font-bold">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">–</span>
                      </span>
                      <h3 className="flex-1">{f.q}</h3>
                    </summary>
                    <p className="border-t border-slate-200 bg-white px-5 py-4 text-xs leading-relaxed text-slate-600 md:text-sm">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-100 pt-4 text-center">
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-800">
                Looking for more personalized assistance? Our team is here to help. If the above FAQs don&apos;t answer
                your questions, let&apos;s schedule a free call today to discuss your specific requirements. Contact us
                today to get started.
              </p>
             
            </div>
          </div>

          {/* How we help */}
          <div className="flex flex-col  rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="space-y-5 pb-10">
              <div>
                <h2 className="mb-3 text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">How Legal Assist Can Help</h2>
                <p className="mb-4 text-center text-xs font-bold text-[#0f2b5c] md:text-sm">Benefits of Our E-Discovery Solutions:</p>
              </div>

              <ul className="space-y-5 pt-1">
                {help.map((h) => (
                  <li key={h.title} className="flex items-start gap-3.5">
                    <BoxCheck />
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900 md:text-base">{h.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{h.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 text-center"><CtaButton /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
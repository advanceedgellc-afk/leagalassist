import CtaButton from "@/components/ui/CtaButton";
import { faqs, results } from "@/data/medical-record-review";
import { BoxCheck } from "./ExpertsProcess";

export default function FaqResults() {
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
                  Common Questions About Our Medical Record Review Services
                </p>
              </div>

              <div className="mb-6 space-y-3">
                {faqs.map((f, i) => (
                  <details key={f.q} name="mrr-faq" open={i === 0} className="group overflow-hidden rounded-sm border border-[#0f2b5c]/80">
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
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-500">
                Looking for more personalized assistance? Our team is here to help. If the above FAQs don’t answer your questions, let’s schedule a free one-on-one meeting at your convenience to better understand your specific requirements. Contact us today to get started.
              </p>
              <CtaButton />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <h2 className="mb-3 text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">
                Medical Record Review Services that Deliver Results
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                Medical record review is a complex and time-consuming process that requires specialized medical knowledge
                and legal expertise. At Legal Assist, our medical record review services are designed to help law firms
                streamline their workflow, reduce turnaround times, and build stronger cases. Here are some of the key
                benefits of our medical record review services:
              </p>
            </div>

            <ul className="space-y-4 pt-1">
              {results.map((r) => (
                <li key={r.title} className="flex items-start gap-3">
                  <BoxCheck />
                  <div className="space-y-0.5">
                    <h3 className="text-xs font-bold text-slate-900 md:text-sm">{r.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="border-t border-slate-100 pt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
              At Legal Assist, we are committed to providing our clients with the highest quality medical record review services. Contact us today to learn more about how we can help streamline your medical record review process and deliver the results you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
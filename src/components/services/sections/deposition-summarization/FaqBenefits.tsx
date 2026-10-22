import CtaButton from "@/components/ui/CtaButton";
import { benefits, faqs } from "@/data/deposition-summarization";

export default function FaqBenefits() {
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
          {/* self-start: card fits its own content instead of stretching to the Benefits card's height.
              sticky: on desktop it stays in view while the longer Benefits column scrolls past. */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:sticky lg:top-24 lg:self-start">
            <div>
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-3xl font-extrabold text-[#0f2b5c] md:text-4xl">FAQs</h2>
                <p className="mx-auto max-w-lg text-xs font-bold leading-relaxed text-[#0f2b5c] md:text-sm">
                  Frequently asked questions about our Deposition Summarization service
                </p>
              </div>

              <div className="mb-6 space-y-4">
                {faqs.map((f, i) => (
                  <details key={f.q} name="depo-faq" open={i === 0} className="group overflow-hidden rounded-sm border border-[#0f2b5c]/80">
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

            <div className="space-y-4 border-t border-slate-100 pt-6 text-center">
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600 md:text-base">
                Looking for more personalized assistance? Our team is here to help. If the above FAQs don&apos;t answer
                your questions, let&apos;s schedule a free one-on-one meeting at your convenience to better understand
                your specific requirements. Contact us today to get started.
              </p>
              <CtaButton />
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <h2 className="mb-3 text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">
                Benefits of Deposition Summarization by Legal Assist
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                Depositions are critical pieces of evidence in legal proceedings, providing firsthand accounts of events
                and actions related to a case. However, deposition transcripts can be lengthy, complex, and
                time-consuming to review. That&apos;s where Legal Assist&apos;s deposition summarization service comes in.
                Here are some of the key benefits of using our deposition summarization services:
              </p>
            </div>

            <ul className="space-y-4 pt-1">
              {benefits.map((b, i) => (
                <li key={b.title} className={`space-y-1 ${i < benefits.length - 1 ? "border-b border-slate-100 pb-3" : ""}`}>
                  <h3 className="text-sm font-bold text-slate-900 md:text-base">{b.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{b.text}</p>
                </li>
              ))}
            </ul>

            <p className="border-t border-slate-200 pt-3 text-xs italic leading-relaxed text-slate-600 md:text-sm">
              At Legal Assist, we are committed to providing our clients with the highest quality deposition
              summarization services. Contact us today to learn more about how we can help streamline your deposition
              review process and deliver the results you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import CtaButton from "@/components/ui/CtaButton";
import { benefits, faqs } from "@/data/litigation-support";
import { BoxCheck } from "./Security";

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
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <div className="mb-8 text-center">
                <h2 className="mb-3 text-2xl font-extrabold text-[#0f2b5c] md:text-3xl">
                  Frequently Asked Questions about Litigation Support
                </h2>
                <p className="mx-auto max-w-lg text-xs font-bold leading-relaxed text-[#0f2b5c] md:text-sm">
                  Empowering You with Knowledge: Frequently Asked Questions About Our Litigation Support Services.
                </p>
              </div>

              <p className="mb-4 text-xs leading-relaxed text-slate-600">
                At Legal Assist, we understand that litigation support can be a complex and time-consuming process.
                That&apos;s why we&apos;ve compiled a list of common questions about our litigation support services. Below
                are answers to some of the most common questions we receive about our litigation support services:
              </p>

              <div className="mb-6 space-y-3">
                {faqs.map((f, i) => (
                  <details key={f.q} name="litigation-faq" open={i === 0} className="group overflow-hidden rounded-sm border border-[#0f2b5c]/80">
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
              <p className="mx-auto max-w-md text-sm  leading-relaxed text-slate-500">
                If you have any additional questions about our litigation support services, or if you’re ready to get started, please contact us for more information. Our team is always here to help you with your legal needs.
              </p>
              <CtaButton />
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-col  space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <h2 className="mb-3 text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">Benefits of Litigation Support</h2>
              <p className="mb-4 text-xs leading-relaxed text-slate-600 md:text-sm">
                Legal Assist&apos;s litigation support services offer a range of benefits for legal teams. Here are some of
                the key benefits of working with Legal Assist for your litigation support needs:
              </p>

              <ul className="space-y-4 pt-1">
                {benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-3.5">
                    <BoxCheck />
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900 md:text-base">{b.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{b.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 border-t border-slate-100 pt-6 text-center">
              <p className="text-xs italic leading-relaxed text-slate-600 md:text-sm">
                By choosing Legal Assist for your litigation support needs, you can rest assured that your case is in good
                hands. Contact us today to learn more about how our litigation support services can benefit your firm.
              </p>
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
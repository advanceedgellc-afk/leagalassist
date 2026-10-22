import CtaButton from "@/components/ui/CtaButton";
import { benefits, faqs } from "@/data/call-audit";
import { BoxCheck } from "./ServiceSteps";

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
                <h2 className="mb-3 font-serif text-3xl font-extrabold text-[#0f2b5c] md:text-4xl">FAQs</h2>
                <p className="mx-auto max-w-lg text-xs font-bold leading-relaxed text-slate-900 md:text-sm">
                  Here are some common questions and answers about Call Audit and Legal Assist&apos;s services:
                </p>
              </div>

              <div className="mb-6 space-y-3">
                {faqs.map((f, i) => (
                  <details key={f.q} name="call-audit-faq" open={i === 0} className="group overflow-hidden rounded-sm border border-slate-200">
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

            <div className="space-y-4 pt-4 text-center">
              <p className="mx-auto max-w-md text-xs font-bold leading-relaxed text-slate-900 md:text-sm">
                If you have any additional questions or would like more information about Legal Assist&apos;s Call
                Auditing services, please contact us today. We are always here to help.
              </p>
              <CtaButton />
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-4xl">Benefits of Call Audit</h2>
            <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
              Call Audit is an important process that helps organizations ensure the accuracy, quality, and integrity of
              their work. At Legal Assist, we understand the importance of Call Auditing and offer comprehensive Call
              Audit services to clients across a variety of industries. Here are some of the key benefits of our Call
              Review services:
            </p>

            <ul className="space-y-5">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <BoxCheck />
                  <div className="space-y-1">
                    <h3 className="font-serif text-sm font-bold text-[#0f2b5c] md:text-base">{b.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-xs leading-relaxed text-slate-700 md:text-sm">
              At Legal Assist, our Call Auditing services are designed to help clients achieve these benefits and more.
              With our team of experienced reviewers and commitment to quality, you can trust us to provide accurate,
              reliable Call Auditing services that meet your needs.
            </p>
            <p className="text-xs leading-relaxed text-slate-700 md:text-sm">
              Contact us today to learn more about how our Call Auditing services can benefit your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
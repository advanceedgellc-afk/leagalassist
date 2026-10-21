import CtaButton from "@/components/ui/CtaButton";
import { faqs, trusted, trustedSub } from "@/data/record-retrieval";

function BoxCheck() {
  return (
    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0f2b5c] text-white shadow-sm">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function FaqExperts() {
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
                <h2 className="mb-3 text-3xl font-extrabold text-[#0f2b5c] md:text-4xl">FAQ&apos;s</h2>
                <p className="mx-auto max-w-lg text-xs font-bold leading-relaxed text-[#0f2b5c] md:text-sm">
                  Empowering You with Knowledge: Frequently Asked Questions About Our Record Retrieval and Review Services.
                </p>
              </div>

              <div className="mb-6 space-y-3">
                {faqs.map((f, i) => (
                  <details key={f.q} name="record-faq" open={i === 0} className="group overflow-hidden rounded-sm border border-[#0f2b5c]/80">
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
              <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-500">
                Looking for more personalized solutions? Our team is here to help. If the above FAQs don&apos;t answer
                your questions, let&apos;s schedule a free call today to explore how our custom solutions can fit your
                record retrieval needs.
              </p>
              <CtaButton />
            </div>
          </div>

          {/* Trusted experts */}
          <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div>
              <h2 className="mb-3 text-center font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">
                Trusted Experts in Record Retrieval: Our Proven Track Record of Success
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                We have a team of experienced professionals with a deep understanding of the medical record retrieval process. Our team has handled hundreds of cases, and we know what it takes to get the job done quickly and efficiently. Whether you need help with facility research, creating and submitting requests for medical records, or status calling and follow-up calling, we have the experience and expertise to help.
              </p>
            </div>

            <ul className="space-y-3.5 pt-1">
              {trusted.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <BoxCheck />
                  <span className="text-xs font-medium text-slate-800 md:text-sm">{t}</span>
                </li>
              ))}
            </ul>

            <ul className="my-2 space-y-2 border-l-2 border-[#0f2b5c]/30 pl-8 text-xs font-medium text-slate-700 md:text-sm">
              {trustedSub.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#0f2b5c]" />
                  {t}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
import { Sparkles } from "lucide-react";
import { faqs } from "@/data/faqs";
import FaqList from "./FaqList";

export default function FAQ() {
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
    <section id="faq" className="scroll-mt-24 bg-slate-50/60 py-12 lg:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-800 shadow-sm">
            <Sparkles aria-hidden className="h-3.5 w-3.5 text-amber-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0B2240] sm:text-4xl lg:text-5xl">
            Have questions about how <span className="text-amber-600">Legal Assist</span> can help your business?
          </h2>

          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Check out our FAQ section for answers to common inquiries about our services, pricing, and more. If you
            can&apos;t find what you&apos;re looking for, feel free to contact us for additional support.
          </p>
        </div>

        <FaqList faqs={faqs} />

    
      </div>
    </section>
  );
}
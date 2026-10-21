import { CheckSquare, Plus, Minus } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import { faqs, advantages } from "@/data/lead-management";

export default function FaqAdvantages() {
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
    <section className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
        {/* FAQ */}
        <div>
          <h2 className="text-center text-3xl font-bold text-[#0b2a5b]">FAQ&apos;s</h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm font-bold text-[#0b2a5b]">
            Empowering You with Knowledge: Frequently Asked Questions About Our Lead Management and Review Services.
          </p>

          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} name="lead-faq" open={i === 0} className="group rounded border bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center gap-4 bg-[#eef3ff] px-4 py-3 text-sm font-bold text-[#0b2a5b] [&::-webkit-details-marker]:hidden">
                  <Plus aria-hidden className="h-4 w-4 group-open:hidden" />
                  <Minus aria-hidden className="hidden h-4 w-4 group-open:block" />
                  <h3>{f.q}</h3>
                </summary>
                <p className="px-4 py-4 text-sm leading-relaxed text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-8 text-sm font-bold leading-relaxed text-[#0b2a5b]">
            Looking for more personalized assistance? Our team is here to help. If the above FAQs don&apos;t answer your
            questions, let&apos;s schedule a free one-on-one meeting at your convenience to better understand your specific
            requirements. Contact us today to get started.
          </p>
        </div>

        {/* Advantages */}
        <div>
          <h2 className="text-center text-3xl font-bold text-[#0b2a5b]">{advantages.title}</h2>
          <ul className="mt-8 space-y-5">
            {advantages.items.map((t) => (
              <li key={t} className="flex gap-3">
                <CheckSquare aria-hidden className="mt-1 h-5 w-5 shrink-0 text-[#0b2a5b]" />
                <p className="text-sm font-bold leading-relaxed text-[#0b2a5b]">{t}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
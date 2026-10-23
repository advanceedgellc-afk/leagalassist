import Image from "next/image";
import BookCallButton from "../booking/BookCallButton";
import { PhoneCall } from "lucide-react";

const SUBSECTIONS = [
  {
    title: "Lead Management",
    text: "Our lead management services are designed to help legal marketing firms streamline their operations and maximize their ROI. We provide comprehensive lead management solutions that include everything from lead tracking and analysis to follow-up and conversion.",
  },
  {
    title: "Contract Management",
    text: "Legal marketing firms often deal with a large number of contracts, which can be difficult to manage. Our contract management services help our clients stay organized and on top of their contractual obligations, so they can focus on growing their business.",
  },
  {
    title: "Call Auditing",
    text: "We understand that every call is an opportunity to build your business, which is why we offer call auditing services to help legal marketing firms optimize their call handling and improve their customer experience.",
  },
  {
    title: "Quality Assurance",
    text: "We take quality seriously at Legal Assist, and our quality assurance services help legal marketing firms ensure that they are delivering top-notch service to their clients. We provide customized QA solutions that are tailored to the specific needs of each client.",
  },
];

const bodyCls = "text-xs leading-relaxed text-slate-700 sm:text-sm lg:text-base";

export default function LegalMarketingSupport() {
  return (
    <section id="legal-marketing" className="scroll-mt-24 bg-[#F4F7FC] px-4 py-12 font-sans text-slate-800 selection:bg-amber-500 selection:text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl space-y-10 sm:space-y-12">
        {/* header */}
        <div className="max-w-6xl space-y-4">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#002244] sm:text-4xl lg:text-5xl">
            Legal Marketing Firms
          </h2>
          <p className={bodyCls}>
            At Legal Assist, we&apos;re proud to serve a diverse range of industries with our high-quality services and
            deep domain knowledge. One of the industries we specialize in serving is legal marketing. We understand that
            legal marketing firms have unique needs when it comes to managing leads, contracts, and call auditing.
            That&apos;s why we offer customizable solutions that are tailored to the specific needs of each client. Our
            team of experts brings years of experience in the legal domain to every project, ensuring that our clients
            have a significant advantage over their competitors. Read on to learn more about the unique services we
            offer to legal marketing firms.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* left: subsections */}
          <div className="space-y-6 lg:col-span-7">
            {SUBSECTIONS.map((s) => (
              <div key={s.title} className="space-y-1.5">
                <h3 className="font-serif text-base font-bold text-[#002244] sm:text-lg lg:text-xl">{s.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm lg:text-base">{s.text}</p>
              </div>
            ))}
          </div>

          {/* right: photo + button */}
          <div className="flex flex-col items-center justify-center space-y-8 lg:col-span-5">
            {/* Photo: save as /public/verticals/legal-marketing.jpg (landscape, ~1200 × 900 px) */}
            <div className="group relative aspect-[4/4] w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-lg lg:max-w-none">
              <Image
                src="/verticals/vertical-3.webp"
                alt="Lead management, contract management and call auditing support for legal marketing firms"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>

            <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-[#0f2b5c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-[#123159] active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              <PhoneCall aria-hidden className="h-4 w-4" />
              Schedule A Free Call
            </BookCallButton>
          </div>
        </div>

        {/* closing paragraph */}
        <div className="border-t border-slate-200/80 pt-4">
          <p className={`${bodyCls} max-w-6xl`}>
            At Legal Assist, we are committed to helping legal marketing firms achieve their business goals. With our
            deep knowledge of the legal domain and our customized services, we provide a unique advantage that no other
            services business can match. Contact us today to learn more about how we can help your business succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
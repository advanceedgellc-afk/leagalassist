import { PhoneCall } from "lucide-react";
import BookCallButton from "../booking/BookCallButton";
import Image from "next/image";
export default function VerticalsIntro() {
  return (
    <section className="bg-[#EEF2F8] px-4 py-12 font-sans text-slate-800 selection:bg-amber-500 selection:text-white sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT: content */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-7">
            <h2 className="font-serif text-3xl font-extrabold leading-tight tracking-tight text-[#002244] sm:text-4xl lg:text-5xl">
              Expert Services for Your Business Type
            </h2>

            <p className="font-sans text-base font-bold leading-snug text-[#002244] sm:text-lg">
              Legal Assist provides specialized services tailored to your industry.
            </p>

            <div className="space-y-4 text-xs leading-relaxed text-slate-700 sm:text-sm lg:text-base">
              <p>
                At Legal Assist, we pride ourselves on our expertise in providing a range of services to different
                verticals or business types. Our services are tailored to meet the specific needs of each client and
                vertical, ensuring that they receive the support they require to achieve their goals.
              </p>
              <p>
                Our services cover a wide range of industries, including mass tort, personal injury, workmen&apos;s
                compensation, social security disability, healthcare, academia, and research. Each of these verticals
                has its unique set of challenges and requirements, which is why we work closely with our clients to
                understand their specific needs.
              </p>
              <p>
                Our team of experts is well-versed in the legal and medical aspects of each vertical, and we provide
                comprehensive services that cover everything from data collection and analysis to report generation and
                trial preparation. Whether our clients are looking for support in medical record review, deposition
                summarization, or peer review, we have the experience and expertise to deliver high-quality services
                that meet their needs.
              </p>
              <p>
                So, whether you are a law firm, healthcare provider, or academic institution, Legal Assist can provide
                you with the services you need to achieve your goals. Contact us today to learn more about how we can
                help you.
              </p>
            </div>
          </div>

          {/* RIGHT: illustration (decorative) */}
          <div className="flex justify-center lg:col-span-5">
            <div className="group relative aspect-[4/4] w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-xl sm:max-w-lg lg:max-w-none">
              <Image
                src="/verticals/vertical-1.webp"
                alt="Legal Assist specialists partnering with businesses across industries"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 512px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
          </div>
          </div>

        {/* callout + CTA */}
        <div className="mx-auto max-w-3xl space-y-6 border-t border-slate-200/80 pt-4 text-center">
          <p className="font-serif text-base font-bold italic tracking-tight text-[#002244] sm:text-lg lg:text-xl">
            Discover how our team of experts can assist your business in achieving its legal goals.
          </p>
          <div className="flex justify-center  ">
            <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-[#0f2b5c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-[#123159] active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              <PhoneCall aria-hidden className="h-4 w-4" />
              Schedule A Free Call
            </BookCallButton>
          </div>
        </div>
      </div>
    </section>
  );
}
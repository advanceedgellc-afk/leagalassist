import CtaButton from "@/components/ui/CtaButton";
import { process } from "@/data/e-discovery";

export default function Process() {
  return (
    <section className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <p className="block text-xs font-bold uppercase tracking-widest text-slate-500">E-Discovery Process</p>
            <h2 className="font-serif text-2xl font-extrabold leading-tight text-[#0f2b5c] md:text-4xl">
              A Comprehensive Process for Streamlined <span className="text-amber-600">E-Discovery</span>
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
              At Legal Assist, we prioritize quality control and client satisfaction at every step of our e-discovery process. We use industry-leading tools and technology to ensure that our e-discovery process is efficient, accurate, and cost-effective for our clients. Our experienced team is always available to answer any questions and provide additional support as needed.
            </p>
            <p className="text-xs font-medium leading-relaxed text-slate-600 md:text-sm">
              To learn more about our e-discovery process and how we can assist with your legal needs, schedule a consultation with Legal Assist today.
            </p>
            <CtaButton />
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div>
              <h2 className="mb-2 font-serif text-2xl font-bold text-[#0f2b5c] md:text-3xl">
                Legal Assist&apos;s Comprehensive E-Discovery Process
              </h2>
              <p className="mb-1 text-xs leading-relaxed text-slate-600 md:text-sm">
                At Legal Assist, we understand the importance of a streamlined and efficient e-discovery process for our clients. That’s why we’ve developed a comprehensive e-discovery process that ensures a smarter and more efficient legal process for all your legal needs.
              </p>
              <p className="text-xs font-semibold text-slate-700 md:text-sm">Our e-discovery process consists of the following steps:</p>
            </div>

            <ol className="space-y-4 pt-1">
              {process.map((s, i) => (
                <li key={s.title} className="flex items-start gap-4 rounded-lg border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b5c] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 md:text-base">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
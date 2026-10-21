import Link from "next/link";
import Image from "next/image";
import {
  Scale, Sliders, Award, Clock, FileText, Users, TrendingUp, ShieldCheck, Trophy,
  Sparkles, ArrowRight, Check, Shield, Star, CheckCircle2,
  type LucideIcon,
  PhoneCall,
} from "lucide-react";
import BookCallButton from "../booking/BookCallButton";

const REASONS: { title: string; icon: LucideIcon }[] = [
  { title: "Tailored solutions for the legal sector", icon: Sliders },
  { title: "Trained and certified specialists", icon: Award },
  { title: "High-quality services within agreed Turn Around Time", icon: Clock },
  { title: "Diverse service lineup including eDiscovery and Deposition Summarization", icon: FileText },
  { title: "Team of experienced paralegals and medical professionals", icon: Users },
  { title: "High volume lead management capabilities", icon: TrendingUp },
  { title: "Compliance with HIPAA regulations", icon: ShieldCheck },
  { title: "Strong track record of delivering results for clients", icon: Trophy },
  { title: "Passionate about helping law firms succeed.", icon: Sparkles },
];

export default function WhyUs() {
  return (
    <section className="relative bg-[#EEF2F8] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Sparkles aria-hidden className="h-3.5 w-3.5 text-amber-600" />
            <span>Expertise, Efficiency, and Results</span>
          </div>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0B2240] sm:text-4xl lg:text-5xl">
            Why Choose Us For{" "}
            <span className="relative whitespace-nowrap text-amber-600">
              <span className="relative z-10">Legal Support Services?</span>
              <span aria-hidden className="absolute bottom-1 left-0 -z-0 h-2.5 w-full rounded-sm bg-amber-200/60" />
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            At Legal Assist, we are dedicated to providing high-quality legal support services to law firms and legal
            marketing companies. Here are just a few reasons why you should choose us for your legal support needs:
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT: sticky visual */}
          <div className="relative lg:sticky lg:top-28 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl shadow-slate-900/10">
              <div className="relative h-[480px] lg:h-[640px]">
                <Image
                  src="/home/why-choose.webp"
                  alt="Legal Assist professional supporting a law firm"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover object-center opacity-90 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* top badges */}
              <div className="pointer-events-none absolute inset-x-5 top-5 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md backdrop-blur-md">
                  <Shield aria-hidden className="h-4 w-4 text-amber-600" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="inline-flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/80 px-2.5 py-1.5 text-xs font-bold text-amber-400 shadow-md backdrop-blur-md">
                  <Star aria-hidden className="h-3.5 w-3.5 fill-amber-400" />
                  <span>Certified</span>
                </div>
              </div>

              {/* bottom card */}
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/60 bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B2240] text-amber-400 shadow-md">
                    <Scale aria-hidden className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold">Legal Operational Excellence</p>
                    <p className="text-xs font-medium text-slate-500">Dedicated Paralegals &amp; Specialists</p>
                  </div>
                </div>
                <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 aria-hidden className="h-4 w-4 text-emerald-500" />
                    Turn Around Time Guaranteed
                  </span>
                  <span className="text-amber-600">100% Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: reasons */}
          <div className="lg:col-span-7">
            <ol className="space-y-3.5">
              {REASONS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/80 hover:bg-slate-50/80 hover:shadow-xl hover:shadow-amber-500/5"
                  >
                    <span className="w-6 shrink-0 text-center font-mono text-xs font-extrabold text-slate-400 transition-colors group-hover:text-amber-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100 text-slate-700 transition-all duration-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <p className="flex-grow text-sm font-bold leading-snug text-slate-800 sm:text-base">{item.title}</p>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:bg-amber-100/80 group-hover:text-amber-700">
                      <Check aria-hidden className="h-4 w-4 stroke-[2.5]" />
                    </span>
                  </li>
                );
              })}
            </ol>

            <div className="pt-6">
              <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-[#0f2b5c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#0e357a4d] transition hover:scale-[1.02] hover:bg-[#0e357a] active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
            
              Schedule A Free Call
            </BookCallButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
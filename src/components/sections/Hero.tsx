import Link from "next/link";
import Image from "next/image";
import { Clock, TrendingDown, ShieldCheck, Scale, Sparkles, PhoneCall } from "lucide-react";
import BookCallButton from "../booking/BookCallButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#e8edff] via-slate-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: content */}
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800">
              <Sparkles aria-hidden className="h-3.5 w-3.5 text-amber-600" />
              <span>Innovative Legal Support Services</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0B2240] sm:text-5xl lg:text-6xl">
              Your Partner in Legal Support Services
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Legal Assist offers comprehensive legal services with 24/7 support, cost savings of up to 40%, and
              overnight turnaround time. Avoid the hassle and expenses of hiring in-house legal support staff. Focus on
              your core legal tasks while we handle the rest.
            </p>

            <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
              <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-[#0f2b5c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#0e357a4d] transition hover:scale-[1.02] hover:bg-[#0e357a] active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              <PhoneCall aria-hidden className="h-4 w-4" />
              Schedule A Free Call
            </BookCallButton>
              <Link
                href="/about"
                className="rounded-xl border border-[#0B2240] px-8 py-3.5 text-center text-sm font-bold text-[#0B2240] transition hover:bg-[#0B2240] hover:text-white"
              >
                Corporate Profile
              </Link>
            </div>

            <ul className="grid grid-cols-1 gap-4 border-t border-slate-200/80 pt-6 text-xs font-semibold text-slate-700 sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Clock aria-hidden className="h-4 w-4 text-amber-600" /> 24/7 Support
              </li>
              <li className="flex items-center gap-2">
                <TrendingDown aria-hidden className="h-4 w-4 text-amber-600" /> Up to 40% Savings
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck aria-hidden className="h-4 w-4 text-amber-600" /> Overnight Turnaround
              </li>
            </ul>
          </div>

          {/* RIGHT: visual */}
          <div className="relative lg:col-span-6">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-amber-500/10 to-sky-500/10 blur-2xl" />

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-2xl sm:p-6">
              <div className="relative h-[400px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[480px]">
                <Image
                  src="/home/hero.webp"
                  alt="Legal support specialist reviewing case documents"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0B2240]/60 via-transparent to-transparent" />
              </div>

              {/* Badge: availability */}
              <div className="absolute left-8 top-8 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/95 p-3 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <Clock aria-hidden className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Availability</p>
                  <p className="text-xs font-extrabold text-slate-900">24/7 Legal Support</p>
                </div>
              </div>

              {/* Badge: savings */}
              <div className="absolute bottom-8 left-8 hidden items-center gap-2.5 rounded-2xl border border-white/60 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <TrendingDown aria-hidden className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900">Save Up To 40%</span>
                  <p className="text-[10px] text-slate-500">In-house staff savings</p>
                </div>
              </div>

              {/* Badge: turnaround */}
              <div className="absolute bottom-8 right-8 hidden items-center gap-3 rounded-2xl border border-slate-700 bg-[#0B2240]/95 p-4 text-white shadow-2xl backdrop-blur-md md:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950">
                  <Scale aria-hidden className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Efficiency</p>
                  <p className="text-xs font-bold">Overnight Turnaround Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
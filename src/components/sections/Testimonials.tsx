import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import TestimonialSlider from "./TestimonialSlider";
import BookCallButton from "../booking/BookCallButton";
import { PhoneCall } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 bg-[#EEF2F8] py-12 text-slate-800 selection:bg-amber-500 selection:text-slate-950 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT COLUMN */}
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-block font-mono text-xs font-extrabold uppercase tracking-widest text-slate-500 sm:text-sm">
              CLIENT REVIEWS
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B192C] sm:text-4xl lg:text-5xl">
              A Testament to Our Quality Services
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Read what our satisfied clients have to say about our services
            </p>
            <div className="pt-2">
              <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-[#0f2b5c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#0e357a4d] transition hover:scale-[1.02] hover:bg-[#0e357a] active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
             
              Schedule A Free Call
            </BookCallButton>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative lg:col-span-7">
            <TestimonialSlider items={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import VerticalsIntro from "@/components/verticals/VerticalsIntro";
import ExperienceApart from "@/components/verticals/ExperienceApart";
import MassTortSupport from "@/components/verticals/MassTortSupport";
import LegalMarketingSupport from "@/components/verticals/LegalMarketingSupport";
import VerticalSections from "@/components/verticals/VerticalSections";
import { verticals, verticalHref } from "@/data/verticals";

export const metadata: Metadata = {
  title: "Legal Verticals We Support",
  description:
    "Specialized support for Mass Tort, Personal Injury, Workers Comp, SSD, Academia & Research and Legal Marketing.",
  alternates: { canonical: "/verticals" },
};

export default function Verticals() {
  return (
    <>
      <PageHero eyebrow="Where we deliver expertise" title="Specialized Support Across Key Legal Verticals" />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <ul className="grid gap-6 md:grid-cols-3">
          {verticals.map((v) => (
            <li key={v.slug}>
              <Link
                href={verticalHref(v.slug)}
                className="block h-full rounded-xl bg-[#0B2240] p-6 text-white transition hover:opacity-90"
              >
                <h2 className="font-semibold">{v.title}</h2>
                <p className="mt-2 text-sm text-slate-200">{v.desc}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-amber-400">
                  Read More ↓
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <VerticalsIntro />
      <ExperienceApart />

      <div id="mass-tort" className="scroll-mt-24">
        <MassTortSupport />
      </div>
      <div id="legal-marketing" className="scroll-mt-24">
        <LegalMarketingSupport />
      </div>
      <VerticalSections />
      
    </>
  );
}
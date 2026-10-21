import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { serviceHref, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Legal Support Services",
  description: "Lead management, e-discovery, deposition summarization, record retrieval and more.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHero eyebrow="What we do best" title="Our Comprehensive Legal Support Services" />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.slug} href={serviceHref(s.slug)} className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
            <h2 className="font-semibold text-[#0b2a5b]">{s.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#0b2a5b]">Read More →</span>
          </Link>
        ))}
      </section>
    </>
  );
}
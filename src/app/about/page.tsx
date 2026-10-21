import type { Metadata } from "next";
import { AboutHero, ApproachSection, CoreValues, HistoryFuture, Leadership } from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Legal Assist delivers cost-effective legal support to law firms and legal marketing companies. Meet our team and learn our approach to litigation support.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <ApproachSection />
      <CoreValues />
      <HistoryFuture />
      <Leadership />
    </>
  );
}
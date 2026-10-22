import type { Metadata } from "next";
import VerticalsIntro from "@/components/verticals/VerticalsIntro";
import ExperienceApart from "@/components/verticals/ExperienceApart";
import MassTortSupport from "@/components/verticals/MassTortSupport";
import LegalMarketingSupport from "@/components/verticals/LegalMarketingSupport";
import VerticalSections from "@/components/verticals/VerticalSections";
import ServiceHero from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Legal Verticals We Support",
  description:
    "Specialized support for Mass Tort, Personal Injury, Workers Comp, SSD, Academia & Research and Legal Marketing.",
  alternates: { canonical: "/verticals" },
};

export default function Verticals() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON) }} />
      
          <ServiceHero title="Legal Verticals We Support" />

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
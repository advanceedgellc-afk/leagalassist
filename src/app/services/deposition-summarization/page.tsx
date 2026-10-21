import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/deposition-summarization/Intro";
import Services from "@/components/services/sections/deposition-summarization/Services";
import WhyChoose from "@/components/services/sections/deposition-summarization/WhyChoose";
import FaqBenefits from "@/components/services/sections/deposition-summarization/FaqBenefits";

const slug = "deposition-summarization";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <Services />
      <WhyChoose />
      <FaqBenefits />
    </ServicePageTemplate>
  );
}
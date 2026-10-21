import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/call-audit/Intro";
import Introduction from "@/components/services/sections/call-audit/Introduction";
import ServiceSteps from "@/components/services/sections/call-audit/ServiceSteps";
import Security from "@/components/services/sections/call-audit/Security";
import Pricing from "@/components/services/sections/call-audit/Pricing";
import FaqBenefits from "@/components/services/sections/call-audit/FaqBenefits";

const slug = "call-audit";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <Introduction />
      <ServiceSteps />
      <Security />
      <Pricing />
      <FaqBenefits />
    </ServicePageTemplate>
  );
}
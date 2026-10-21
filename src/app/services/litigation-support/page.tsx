import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/litigation-support/Intro";
import Process from "@/components/services/sections/litigation-support/Process";
import Security from "@/components/services/sections/litigation-support/Security";
import Pricing from "@/components/services/sections/litigation-support/Pricing";
import FaqBenefits from "@/components/services/sections/litigation-support/FaqBenefits";

const slug = "litigation-support";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <Process />
      <Security />
      <Pricing />
      <FaqBenefits />
    </ServicePageTemplate>
  );
}
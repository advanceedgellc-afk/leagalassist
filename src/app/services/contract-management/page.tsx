import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/contract-management/Intro";
import Approach from "@/components/services/sections/contract-management/Approach";
import HipaaAuditors from "@/components/services/sections/contract-management/HipaaAuditors";
import FaqBenefits from "@/components/services/sections/contract-management/FaqBenefits";

const slug = "contract-management";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <Approach />
      <HipaaAuditors />
      <FaqBenefits />
    </ServicePageTemplate>
  );
}
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/lead-management/Intro";
import Strategy from "@/components/services/sections/lead-management/Strategy";
import SalesProcess from "@/components/services/sections/lead-management/SalesProcess";
import FaqAdvantages from "@/components/services/sections/lead-management/FaqAdvantages";

const slug = "lead-management";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <Strategy />
      <SalesProcess />
      <FaqAdvantages />
    </ServicePageTemplate>
  );
}
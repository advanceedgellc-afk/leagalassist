import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/e-discovery/Intro";
import Solutions from "@/components/services/sections/e-discovery/Solutions";
import Process from "@/components/services/sections/e-discovery/Process";
import Pricing from "@/components/services/sections/e-discovery/Pricing";
import FaqHelp from "@/components/services/sections/e-discovery/FaqHelp";

const slug = "e-discovery";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <Solutions />
      <Process />
      <Pricing />
      <FaqHelp />
    </ServicePageTemplate>
  );
}
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/medical-record-review/Intro";
import ExpertsProcess from "@/components/services/sections/medical-record-review/ExpertsProcess";
import MassTort from "@/components/services/sections/medical-record-review/MassTort";
import OutputFormats from "@/components/services/sections/medical-record-review/OutputFormats";
import FaqResults from "@/components/services/sections/medical-record-review/FaqResults";

const slug = "medical-record-review";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <ExpertsProcess />
      <MassTort />
      <OutputFormats />
      <FaqResults />
    </ServicePageTemplate>
  );
}
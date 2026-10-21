import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { serviceMetadata } from "@/lib/services";
import Intro from "@/components/services/sections/record-retrieval/Intro";
import Advantage from "@/components/services/sections/record-retrieval/Advantage";
import Hybrid from "@/components/services/sections/record-retrieval/Hybrid";
import Integrated from "@/components/services/sections/record-retrieval/Integrated";
import FaqExperts from "@/components/services/sections/record-retrieval/FaqExperts";

const slug = "record-retrieval";
export const metadata = serviceMetadata(slug);

export default function Page() {
  return (
    <ServicePageTemplate slug={slug}>
      <Intro />
      <Advantage />
      <Hybrid />
      <Integrated />
      <FaqExperts />
    </ServicePageTemplate>
  );
}
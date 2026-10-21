export type Service = {
  slug: string;
  title: string;
  desc: string;          // short text for menu and cards
  metaTitle: string;     // under 60 characters
  metaDescription: string; // under 160 characters
};
export const serviceHref = (slug: string) => `/services/${slug}`;
export const services: Service[] = [
  {
    slug: "lead-management",
    title: "Lead Management",
    desc: "Lead the way to success with our lead management services",
    metaTitle: "Lead Management Services",
    metaDescription:
      "Convert more cases with 24/7 lead management: intake, screening, follow-up and lead audits for law firms and legal marketing companies.",
  },
  {
    slug: "deposition-summarization",
    title: "Deposition Summarization",
    desc: "Simplify complex depositions with our expert summarization services",
    metaTitle: "Deposition Summarization Services",
    metaDescription:
      "Accurate page-line and narrative deposition summaries from trained legal professionals, delivered with fast turnaround and up to 40% savings.",
  },
  {
    slug: "contract-management",
    title: "Contract Management",
    desc: "Efficiently manage your contracts for a streamlined business",
    metaTitle: "Contract Management Services",
    metaDescription:
      "Streamline contract review, tracking and compliance with dedicated legal support that keeps your agreements organized and risk-free.",
  },
  {
    slug: "e-discovery",
    title: "E-Discovery",
    desc: "Uncover the evidence you need with our certified eDiscovery specialists",
    metaTitle: "E-Discovery Services",
    metaDescription:
      "Certified eDiscovery specialists for data collection, processing, review and production, with secure workflows and overnight turnaround.",
  },
  {
    slug: "record-retrieval",
    title: "Record Retrieval",
    desc: "Retrieve the records you need for a winning case",
    metaTitle: "Record Retrieval Services",
    metaDescription:
      "Fast, HIPAA-compliant medical and legal record retrieval, with tracking from request to delivery so your case never stalls.",
  },
  {
    slug: "litigation-support",
    title: "Litigation Support",
    desc: "At Legal Assist, we understand that litigation can be a complex and time-consuming process.",
    metaTitle: "Litigation Support Services",
    metaDescription:
      "End-to-end litigation support: case preparation, document review, research and summaries that free your attorneys to focus on strategy.",
  },
  {
    slug: "medical-record-review",
    title: "Medical Record Review",
    desc: "Uncover the critical evidence for your case",
    metaTitle: "Medical Record Review Services",
    metaDescription:
      "Experienced medical professionals review, organize and summarize records with chronologies that surface the critical evidence in your case.",
  },
  {
    slug: "call-audit",
    title: "Call Audit",
    desc: "Proven legal expertise, validated by call audit",
    metaTitle: "Call Audit Services",
    metaDescription:
      "Quality-check intake and sales calls against your criteria, with scoring and feedback that improve conversion and compliance.",
  },
];
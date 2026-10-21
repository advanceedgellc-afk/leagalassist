import Image from "next/image";
import type { ReactNode } from "react";
import BookCallButton from "@/components/booking/BookCallButton";

/* ------------------------------------------------------------------ */
/*  Section images (saved in /public/verticals/)                       */
/*                                                                     */
/*  src   = file path                                                  */
/*  alt   = the image's ALT TEXT (read by screen readers and Google).  */
/*          Describe what the photo shows. Edit it here.               */
/*  width / height = the file's real size in pixels, so the image      */
/*          keeps its exact shape. Check it in the file's Properties.  */
/* ------------------------------------------------------------------ */
type Img = { src: string; alt: string; width: number; height: number };

const IMAGES: Record<string, Img> = {
  personalInjury: {
    src: "/verticals/vertical-4.webp",
    alt: "Legal support for personal injury victims after accidents",
    width: 1200,
    height: 900,
  },
  workersComp: {
    src: "/verticals/vertical-5.webp",
    alt: "Workers' compensation legal support for injured employees",
    width: 1200,
    height: 900,
  },
  socialSecurity: {
    src: "/verticals/vertical-6.webp",
    alt: "Social Security Disability legal assistance for clients",
    width: 1200,
    height: 900,
  },
  healthcare: {
    src: "/verticals/vertical-7.webp",
    alt: "Healthcare litigation support and medical peer review services",
    width: 1200,
    height: 900,
  },
  academia: {
    src: "/verticals/vertical-8.webp",
    alt: "Comprehensive peer review and document review services for academia and legal cases",
    width: 1200,
    height: 900,
  },
  research: {
    src: "/verticals/vertical-9.webp",
    alt: "Legal research support services by Legal Assist team",
    width: 1200,
    height: 900,
  },
};

/* ---------- shared pieces ---------- */

function Block({ id, bg, children }: { id: string; bg: string; children: ReactNode }) {
  return (
    <section id={id} className={`${bg} scroll-mt-24 border-b border-slate-200/80 px-4 py-16 font-sans text-slate-800 sm:px-6 sm:py-24 lg:px-8`}>
      <div className="mx-auto max-w-7xl space-y-10">{children}</div>
    </section>
  );
}

function Cta() {
  return (
    <div className="pt-4 text-center">
      <BookCallButton className="inline-block cursor-pointer rounded-md bg-[#002244] px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#D9531E] hover:shadow-xl sm:text-sm">
        Schedule A Free Call
      </BookCallButton>
    </div>
  );
}

function Title({ title, sub }: { title: string; sub?: string }) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-extrabold leading-tight text-[#002244] sm:text-4xl">{title}</h2>
      {sub && <p className="mt-2 font-serif text-base font-bold text-[#002244] sm:text-lg">{sub}</p>}
    </div>
  );
}

function Paras({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">{children}</div>;
}

/** Shows the whole photo (no cropping) at its natural shape, in a rounded card */
function Photo({ src, alt, width, height, priority = false }: Img & { priority?: boolean }) {
  return (
    <div className="flex justify-center lg:col-span-5">
      <div className="group w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl lg:max-w-none">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 100vw"
          className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
    </div>
  );
}

const grid = "grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14";

/* ---------- 1. Personal Injury ---------- */

export function PersonalInjurySection() {
  return (
    <Block id="personal-injury" bg="bg-[#EEF2F8]">
      <div className={grid}>
        <div className="space-y-5 lg:col-span-5">
        <Photo {...IMAGES.personalInjury} priority />
        <Cta />
       </div>
        <div className="space-y-5 lg:col-span-7">
          <Title title="Personal Injury Services by Legal Assist" />
          <Paras>
            <p>
              When it comes to personal injury cases, every detail matters. From medical records to witness testimonies,
              it is essential to have accurate and comprehensive documentation to support your case. At Legal Assist, we
              understand the complexity of personal injury cases and the need for efficient and effective support
              services.
            </p>
            <p>
              Our comprehensive services for personal injury clients include medical record review, deposition
              summarization, and more. Our team of experts is trained to identify and collect all necessary records,
              including hospital records, physician records, diagnostic test reports, and medication history. We
              carefully review and analyze each record to identify any discrepancies or errors. We then provide a
              detailed summary of the medical records and create customized reports based on the client&apos;s
              requirements.
            </p>
            <p>
              Our deposition summarization service helps streamline the process of reviewing and analyzing depositions
              by providing an easy-to-read summary of the most critical points. We also provide additional support
              services, including trial preparation, coding, and indexing.
            </p>
            <p>
              At Legal Assist, we understand that every case is unique. That&apos;s why we work closely with our clients
              to provide customized support that meets their specific needs. Our services are designed to help our
              clients save time, reduce costs, and achieve successful outcomes. If you&apos;re looking for comprehensive
              and reliable support for your personal injury case, contact Legal Assist today. Our team is ready to help.
            </p>
          </Paras>
        </div>
      </div>
      
    </Block>
  );
}

/* ---------- 2. Workmen's Compensation ---------- */

export function WorkersCompSection() {
  return (
    <Block id="workmens-comp" bg="bg-white">
      <div className={grid}>
        <div className="space-y-5 lg:col-span-7">
          <Title
            title="Workmen’s Compensation Legal Support Services by Legal Assist"
            sub="Comprehensive legal support services to assist injured employees in obtaining the compensation they deserve."
          />
          <Paras>
            <p>
              <strong className="text-slate-900">Workmen&apos;s compensation cases</strong> can be complex, with strict
              requirements and procedures that injured employees must follow in order to receive the compensation they
              are entitled to. At Legal Assist, we understand the importance of workmen&apos;s compensation cases and are
              committed to helping injured employees obtain the compensation they deserve.
            </p>
            <p>
              Our workmen&apos;s compensation legal support services include medical record review, deposition
              summarization, and more. Our team of experts is trained to identify and collect all necessary records,
              including but not limited to hospital records, physician records, diagnostic test reports, and medication
              history. We carefully review and analyze each record to identify any discrepancies, inconsistencies, or
              errors.
            </p>
            <p>
              We provide detailed summaries of the medical records and create customized reports that include our
              analysis of the records, relevant insights, and recommendations. Our team is always available to answer
              any questions or provide additional support as needed.
            </p>
            <p>
              Our commitment to quality control and client satisfaction ensures that our workmen&apos;s compensation
              legal support services are tailored to meet the unique needs of each client. We strive to provide
              transparent, affordable pricing, with a focus on delivering results in a timely manner.
            </p>
            <p className="font-medium text-slate-800">
              Don&apos;t let the complexities of workmen&apos;s compensation cases overwhelm you. Contact Legal Assist
              today to learn more about how our legal support services can help you obtain the compensation you deserve.
            </p>
          </Paras>
        </div>

        <Photo {...IMAGES.workersComp} />
      </div>
      <Cta />
    </Block>
  );
}

/* ---------- 3. Social Security Disability ---------- */

export function SocialSecuritySection() {
  return (
    <Block id="social-security" bg="bg-[#EEF2F8]">
      <div className={grid}>
        <Photo {...IMAGES.socialSecurity} />

        <div className="space-y-5 lg:col-span-7">
          <Title
            title="Social Security Disability Services"
            sub="Legal Assist is here to help you navigate the complexities of Social Security Disability."
          />
          <Paras>
            <p>
              Applying for Social Security Disability benefits can be a challenging and confusing process, especially if
              you are dealing with a medical condition or injury. At Legal Assist, we understand the difficulties that
              come with filing a claim and we are here to help.
            </p>
            <p>
              Our team of experts can assist with a wide range of services, including medical record review, deposition
              summarization, and more. We have a deep understanding of the Social Security Disability process and are
              committed to helping our clients get the benefits they deserve.
            </p>
            <p>
              Our services can help streamline the process, reduce the burden on you, and increase the chances of a
              successful claim. We work closely with our clients to provide personalized support and guidance
              throughout the entire process.
            </p>
            <p className="font-medium text-slate-800">
              Don&apos;t let the complexities of the Social Security Disability process discourage you from seeking the
              benefits you are entitled to. Let Legal Assist help you every step of the way.
            </p>
          </Paras>
        </div>
      </div>
      <Cta />
    </Block>
  );
}

/* ---------- 4. Healthcare Litigation & Peer Review ---------- */

const HEALTHCARE = [
  {
    title: "Medical Record Review",
    text: "Our medical record review services are tailored to meet the needs of healthcare providers. We collect and review medical records in a timely and efficient manner, ensuring that all necessary information is identified and organized. Our team of experts has the knowledge and experience to identify discrepancies, inconsistencies, and errors in the records. We provide a detailed summary of the medical records, including a chronological overview of the medical treatment and key findings and conclusions. Our customized reports can be used in litigation or other legal proceedings.",
  },
  {
    title: "Litigation Support",
    text: "Legal Assist's litigation support services provide healthcare providers with the resources they need to navigate complex legal cases. Our services include document review and production, deposition summarization, and trial preparation. We work closely with healthcare providers to ensure that their legal needs are met and that they are well-prepared for any legal proceedings.",
  },
  {
    title: "Peer Review",
    text: "Our peer review services are designed to provide healthcare providers with expert knowledge and insights. Our team of experts is highly qualified to perform peer review in a variety of areas, including medical malpractice, personal injury, and more. We conduct a comprehensive review of the case and provide a detailed report outlining our findings and recommendations.",
  },
];

export function HealthcareSection() {
  return (
    <Block id="healthcare-litigation" bg="bg-white">
      <div className="max-w-4xl space-y-3">
        <h2 className="font-serif text-3xl font-extrabold leading-tight text-[#002244] sm:text-4xl">
          Healthcare Litigation Support and Peer Review Services
        </h2>
        <Paras>
          <p>
            Legal Assist understands the challenges that healthcare providers face in today&apos;s rapidly evolving
            industry. From managing complex medical records to navigating litigation, healthcare providers require
            support and expertise to ensure their legal needs are met. Our healthcare litigation support and peer review
            services are designed to provide healthcare providers with the resources they need to succeed.
          </p>
          <p>
            Our healthcare services include medical record review, litigation support, and peer review. Our team of
            experts has years of experience working with healthcare providers and is equipped to handle even the most
            complex cases.
          </p>
        </Paras>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 pt-2 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 text-slate-700 lg:col-span-7">
          {HEALTHCARE.map((s) => (
            <div key={s.title} className="space-y-1.5 border-l-4 border-[#D9531E]/70 pl-4">
              <h3 className="font-serif text-lg font-bold text-[#002244]">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{s.text}</p>
            </div>
          ))}
        </div>

        <Photo {...IMAGES.healthcare} />
      </div>

      <div className="border-t border-slate-200/80 pt-4">
        <p className="mx-auto max-w-4xl text-center font-serif text-sm italic text-slate-700 sm:text-base">
          At Legal Assist, we are committed to providing healthcare providers with comprehensive litigation support and
          peer review services. Our team is dedicated to ensuring that our clients receive the support and expertise
          they need to succeed. Contact us today to learn more about our healthcare services.
        </p>
      </div>
      <Cta />
    </Block>
  );
}

/* ---------- 5. Academia peer / document review ---------- */

export function AcademiaSection() {
  return (
    <Block id="academia-review" bg="bg-[#EEF2F8]">
      <div className={grid}>
        <Photo {...IMAGES.academia} />

        <div className="space-y-5 lg:col-span-7">
          <Title title="Legal Assist is committed to providing top-notch peer review and document review services to academia clients." />
          <Paras>
            <p>
              Academia is a field that relies heavily on peer review to ensure the accuracy and quality of research and
              scholarly work. At Legal Assist, we understand the importance of peer review in academia and offer
              comprehensive peer review and document review services to help researchers and scholars achieve their
              goals.
            </p>
            <p>
              Our peer review services include a thorough and objective review of research manuscripts, journal
              articles, conference papers, and more. Our team of experts is trained to identify and flag any
              discrepancies, inconsistencies, or errors in the documents, ensuring that the final product is of the
              highest quality. We also offer document review services to help academics manage large volumes of
              documents and data with efficiency and accuracy.
            </p>
            <p>
              At Legal Assist, we are committed to ensuring the security and confidentiality of our clients&apos;
              information. We employ state-of-the-art technology infrastructure and data security protocols to protect
              our clients&apos; sensitive information.
            </p>
            <p className="font-medium text-slate-800">
              Whether you need peer review or document review services, Legal Assist is here to help. Contact us today
              to learn more about how we can assist you with your academia needs.
            </p>
          </Paras>
        </div>
      </div>
      <Cta />
    </Block>
  );
}

/* ---------- 6. Research support ---------- */

export function ResearchSection() {
  return (
    <Block id="research-support" bg="bg-white">
      <div className={grid}>
        <div className="space-y-5 lg:col-span-7">
          <Title
            title="Research Support Services by Legal Assist"
            sub="Legal Assist offers comprehensive research support services to ensure accuracy and efficiency in your research process."
          />
          <Paras>
            <p>
              Research is a crucial part of any academic or scientific project, and accuracy is of utmost importance. At
              Legal Assist, we understand the unique challenges researchers face when it comes to data analysis and
              review. That&apos;s why we offer a range of services to help ensure accuracy, efficiency, and compliance
              with industry standards.
            </p>
            <p>
              Our research support services include data analysis, peer review, document review, and more. Our team of
              experienced professionals has expertise in various fields, including healthcare, life sciences, and
              technology, and is dedicated to providing high-quality services to our clients.
            </p>
            <p>
              We work closely with our clients to understand their specific needs and requirements and tailor our
              services accordingly. Our goal is to provide timely, accurate, and cost-effective support to help our
              clients achieve their research objectives.
            </p>
            <p className="font-medium text-slate-800">
              Whether you need assistance with data analysis, peer review, or document review, we are here to help.
              Contact us today to learn more about how Legal Assist can support your research needs.
            </p>
          </Paras>
        </div>

        <Photo {...IMAGES.research} />
      </div>
      <Cta />
    </Block>
  );
}

/* ---------- all sections ---------- */

export default function VerticalSections() {
  return (
    <>
      <PersonalInjurySection />
      <WorkersCompSection />
      <SocialSecuritySection />
      <HealthcareSection />
      <AcademiaSection />
      <ResearchSection />
    </>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Headphones,
  ExternalLink,
} from "lucide-react";
import FaqAccordion, { type Faq } from "@/components/contact/FaqAccordion";
import GhlEmbed from "@/components/contact/GhlEmbed";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Legal Assist for medical record review, deposition summarization, peer review and litigation support. Available 24/7.",
    alternates: { canonical: "/contact" },
};

/* ------------------------------------------------------------------ */
/*  Site details: edit these in one place                              */
/* ------------------------------------------------------------------ */
const CONTACT = {
  email: "chahat@legalassistpro.com",
  phoneDisplay: "(800) 350-4672",
  phoneHref: "tel:8003504672",
  address: "Candlelight Lane, Houston, Texas 77018",
  mapsLink: "https://maps.google.com/?q=Candlelight+Lane+Houston+Texas+77018",
  mapEmbed:
    "https://www.google.com/maps?q=Candlelight+Lane+Houston+Texas+77018&output=embed",
  hours: "9:00 am – 6:00 pm",
};

/* ------------------------------------------------------------------ */
/*  GHL embeds: paste your IDs here when ready                         */
/*  Form:     Sites > Forms > Integrate > copy the ID from the iframe  */
/*            src (.../widget/form/<FORM_ID>)                          */
/*  Calendar: Calendars > Share > Embed > copy the ID from the iframe  */
/*            src (.../widget/booking/<CALENDAR_ID>)                   */
/* ------------------------------------------------------------------ */
const GHL_FORM_ID = "WAv4QyikWdEOYZyLtqlH"; // "Legal Form"
const GHL_CALENDAR_ID = "WHS4XOUKmLftnRHmQ61M";

const faqColumn1: Faq[] = [
  {
    q: "What services does Legal Assist offer?",
    a: "Legal Assist offers a range of legal support services, including medical record review, deposition summarization, litigation support, peer review, and e-discovery.",
  },
  {
    q: "How can I request a quote for your services?",
    a: "You can request a quote by filling out our contact form, calling us directly, or scheduling a free call with one of our legal support specialists.",
  },
  {
    q: "What is Legal Assist's turnaround time for services?",
    a: "Our standard turnaround time ranges from 3 to 5 business days depending on volume, with rush and expedited 24 to 48 hour delivery available.",
  },
  {
    q: "How does Legal Assist ensure quality and accuracy?",
    a: "We implement multi-tier quality control reviews led by certified legal nurse consultants, HIPAA specialists, and legal experts to maintain 99.9% accuracy.",
  },
];

const faqColumn2: Faq[] = [
  {
    q: "What is Legal Assist's pricing model?",
    a: "We offer flexible pricing models, including hourly rates and fixed project pricing. We are committed to transparent, predictable pricing and will provide you with a clear breakdown of costs for your project.",
  },
  {
    q: "What industries does Legal Assist serve?",
    a: "We primarily serve law firms, solo practitioners, corporate legal departments, insurance carriers, and healthcare organizations across personal injury, medical malpractice, and mass torts.",
  },
  {
    q: "How can I get in touch with Legal Assist for additional information?",
    a: `You can reach us by email at ${CONTACT.email}, call us at ${CONTACT.phoneDisplay}, or book a consultation through our online calendar.`,
  },
  {
    q: "What sets Legal Assist apart from other legal support service providers?",
    a: "Our combination of specialized medical/legal expertise, strict HIPAA compliance, hybrid offshore efficiency, and dedicated case management sets us apart in reliability and value.",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#0f2b5c] selection:text-white">
      {/* ============ SECTION 1: HERO + FORM ============ */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left */}
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0f2b5c]">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Trusted Legal Support
              </div>

              <h1 className="font-serif text-3xl font-extrabold leading-tight tracking-tight text-[#0f2b5c] md:text-5xl">
                Contact Us
              </h1>

              <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                <p>
                  Are you in need of professional and efficient legal support
                  services? Look no further than{" "}
                  <strong className="font-semibold text-slate-900">
                    Legal Assist
                  </strong>
                  . Our team of skilled professionals is dedicated to providing
                  the highest quality support to our clients.
                </p>
                <p>
                  Whether you are seeking medical record review, deposition
                  summarization, peer review, or other litigation support
                  services, we are here to help. With{" "}
                  <strong className="font-semibold text-slate-900">
                    over 15 years of experience
                  </strong>{" "}
                  in the industry, we have the expertise and knowledge to
                  provide you with the solutions you need.
                </p>
                <p>
                  Contact us today to learn more about our services and how we
                  can help you. Our team is available 24/7 to answer any
                  questions you may have and to provide you with the support
                  you need. Don&apos;t wait, reach out to Legal Assist today!
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-slate-200 pt-4 sm:grid-cols-2">
                <ContactChip
                  href={`mailto:${CONTACT.email}`}
                  label="Email us"
                  value={CONTACT.email}
                  icon={<Mail className="h-5 w-5" />}
                />
                <ContactChip
                  href={CONTACT.phoneHref}
                  label="Call us"
                  value={CONTACT.phoneDisplay}
                  icon={<Phone className="h-5 w-5" />}
                />
              </div>
            </div>

            {/* Right: GHL form card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-800 bg-[#0a192f] p-6 text-white shadow-2xl sm:p-6 md:p-6">
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="mb-8">
                  <h2 className="mb-2 pt-4 font-serif text-2xl font-bold tracking-tight md:text-3xl">
                    Send A Message
                  </h2>
                  <p className="text-xs text-slate-400 md:text-sm">
                    Fill out the form below and our legal support specialists
                    will reach out within 24 hours.
                  </p>
                </div>

                {/* ===== GHL FORM SLOT ===== */}
                <GhlEmbed
                  type="form"
                  id={GHL_FORM_ID}
                  minHeight={603}
                  title="Legal Form"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: GHL CALENDAR ============ */}
      <section className="border-b border-blue-100/80 bg-[#eef2ff] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-xl space-y-2 text-center">
            <span className="block text-xs font-bold uppercase tracking-widest text-orange-600">
              Direct Consultation
            </span>
            <h2 className="font-serif text-2xl font-extrabold text-[#0f2b5c] md:text-3xl">
              Book a Consultation Slot
            </h2>
            <p className="text-xs text-slate-600 md:text-sm">
              Select your preferred date and time to schedule an online
              discussion with our lead executive.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl sm:p-6">
            {/* ===== GHL CALENDAR SLOT ===== */}
            <GhlEmbed
              type="calendar"
              id={GHL_CALENDAR_ID}
              minHeight={700}
              title="Book a consultation"
            />
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: MAP ============ */}
      <section className="relative h-80 w-full overflow-hidden border-b border-slate-300 bg-slate-200 md:h-96">
        <iframe
          title="Legal Assist office location"
          src={CONTACT.mapEmbed}
          className="h-full w-full border-0 opacity-90 contrast-125 grayscale transition-all duration-500 hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="absolute left-4 top-4 max-w-xs rounded-2xl border border-slate-200/80 bg-white/95 p-4 text-xs shadow-xl backdrop-blur-md">
          <div className="mb-1 flex items-center gap-2 text-sm font-bold text-[#0f2b5c]">
            <MapPin className="h-4 w-4 text-orange-500" /> Legal Assist HQ
          </div>
          <p className="leading-relaxed text-slate-600">{CONTACT.address}</p>
          <a
            href={CONTACT.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-600 hover:text-orange-700"
          >
            Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* ============ SECTION 4: FAQ ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-xl space-y-2 text-center">
            <h2 className="font-serif text-3xl font-extrabold text-[#0f2b5c] md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-600 md:text-sm">
              Answers to common inquiries about Legal Assist&apos;s services,
              pricing, and compliance.
            </p>
          </div>

          <FaqAccordion columns={[faqColumn1, faqColumn2]} />
        </div>
      </section>

      {/* ============ SECTION 5: BOTTOM CTA ============ */}
      <section className="border-t border-slate-800 bg-gradient-to-b from-[#0a192f] to-[#050c1a] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-amber-400">
              Get Started
            </span>
            <h2 className="font-serif text-2xl font-extrabold tracking-tight md:text-4xl">
              Get in Touch with Legal Assist: Contact Us Today
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Photo */}
            <div className="group relative h-72 overflow-hidden rounded-3xl border border-slate-700/80 shadow-2xl md:h-[22rem] lg:col-span-6">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Legal Assist support specialist with headset"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-slate-700/60 bg-[#0a192f]/90 p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">
                    24/7 Support Desk
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Always available for urgent legal inquiries
                  </span>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="space-y-4 lg:col-span-6">
              <InfoCard icon={<Mail className="h-6 w-6" />} label="Email us">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm font-bold text-white transition-colors hover:text-orange-400 md:text-base"
                >
                  {CONTACT.email}
                </a>
              </InfoCard>
              <InfoCard icon={<MapPin className="h-6 w-6" />} label="Office">
                <p className="text-sm font-bold text-white md:text-base">
                  {CONTACT.address}
                </p>
              </InfoCard>
              <InfoCard icon={<Clock className="h-6 w-6" />} label="Office Hours">
                <p className="text-sm font-bold text-white md:text-base">
                  {CONTACT.hours}
                </p>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                       */
/* ------------------------------------------------------------------ */
function ContactChip({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-amber-500/50 hover:shadow-md"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10 text-orange-600 transition-all group-hover:bg-orange-500 group-hover:text-white">
        {icon}
      </div>
      <div className="overflow-hidden">
        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {label}
        </span>
        <span className="block truncate text-xs font-bold text-[#0f2b5c] transition-colors group-hover:text-orange-600 md:text-sm">
          {value}
        </span>
      </div>
    </a>
  );
}

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition-all hover:border-amber-500/50">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 transition-all group-hover:bg-orange-500 group-hover:text-white">
        {icon}
      </div>
      <div>
        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}
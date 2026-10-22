import Image from "next/image";
import Link from "next/link";
import {
  Award, Building2, DollarSign, HeartHandshake, PhoneCall, Scale, Sparkles, Users,
} from "lucide-react";
import ApproachVideo from "./ApproachVideo";
import BookCallButton from "../booking/BookCallButton";

/* brand icon (lucide no longer ships brand icons) */
const LinkedinIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-white">
    <path d="M6.9 8.9H3.7V20h3.2V8.9ZM5.3 4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.6c0-3-1.6-4.9-4.2-4.9-1.4 0-2.4.8-2.8 1.5V8.9h-3.2V20h3.2v-6c0-1.6.6-2.6 1.9-2.6s1.8 1 1.8 2.6V20h3.3v-6.4Z" />
  </svg>
);


/* ---------------- Hero ---------------- */
const QTAT_URL = "https://www.qtatinc.com";

export function AboutHero() {
  return (
    <section id="about-hero" className="scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-800">
            <Sparkles aria-hidden className="h-3.5 w-3.5 text-amber-600" />
            <span>Established legal operations excellence</span>
          </div>

          <h1 className="font-serif text-4xl font-extrabold uppercase leading-[1.12] tracking-tight text-[#002244] sm:text-5xl lg:text-6xl">
            Your trusted partner in <span className="text-[#D9531E]">legal support services</span>
          </h1>

          <div className="space-y-4 text-sm font-normal leading-relaxed text-slate-700 sm:text-base">
            <p>
              Welcome to <strong>Legal Assist</strong>, a business unit of{" "}
              <a
                href={QTAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#D9531E] underline decoration-[#D9531E]/40 underline-offset-4 transition-colors hover:text-[#002244] hover:decoration-[#002244]"
              >
                QTAT BPO Solutions Inc.
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              dedicated to providing high-quality services to the legal industry. Our goal is to deliver the
              best-in-class solutions to our clients while maintaining our motto of{" "}
              <strong className="text-[#002244]">Quality and Turnaround Time (QTAT)</strong>.
            </p>
            <p>
              With <strong>over 15 years of experience</strong>, our team of{" "}
              <strong>over 100 skilled professionals</strong> has worked hard to expand our service range, starting
              from HazMat Classification, RCMS, and Mass Tort Vendor Services, all the way to industry-neutral
              back-office services and technology solutions.
            </p>
            <p>
              At Legal Assist, we are proud of our deep domain knowledge and our commitment to delivering exceptional
              service to our clients. We strive to maintain our reputation as a trusted partner for legal firms across
              the nation.
            </p>
            <p className="border-l-4 border-amber-500 pl-3 text-sm font-semibold italic text-slate-800 sm:text-base">
              If you are looking for a dedicated team of professionals that can provide you with efficient,
              cost-effective solutions for your legal needs, then look no further than Legal Assist. Contact us today to
              learn more about how we can help you.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
            <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-amber-500 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-amber-400 active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              <PhoneCall aria-hidden className="h-4 w-4" />
              Schedule A Free Call
            </BookCallButton>
            <a
              href="#approach"
              className="rounded-xl border border-[#002244] px-8 py-4 text-center text-xs font-bold uppercase tracking-wider text-[#002244] transition-all hover:bg-[#002244] hover:text-white"
            >
              Discover Our Approach
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#D9531E] via-amber-500 to-[#002244] p-3 shadow-2xl">
            <div className="relative h-[420px] overflow-hidden rounded-2xl bg-slate-900 sm:h-[500px]">
              <Image
                src="/about/about-hero.webp"
                alt="Office buildings in a city skyline"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-center brightness-95 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#002244]/80 via-transparent to-transparent" />

              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/60 bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#002244] text-amber-400">
                    <Building2 aria-hidden className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-serif text-sm font-extrabold text-[#002244]">Houston | Texas Headquarters</p>
                    <p className="text-xs text-slate-500">
                      A business unit of{" "}
                      <a
                        href={QTAT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#D9531E] hover:underline"
                      >
                        QTAT BPO Solutions Inc.
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Approach + video ---------------- */
const CHAPTERS = [
  { n: "01", title: "Custom Intake & Review", text: "Tailored to your specific firm requirements", cls: "bg-amber-500/20 text-amber-400" },
  { n: "02", title: "Seamless System Integration", text: "Works with Needles, MR8, or custom software", cls: "bg-[#D9531E]/20 text-[#D9531E]" },
  { n: "03", title: "Overnight Quality Assurance", text: "Dedicated paralegal team verification", cls: "bg-sky-500/20 text-sky-400" },
];

export function ApproachSection() {
  return (
    <section id="approach" className="relative scroll-mt-24 overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-white via-slate-50/80 to-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#D9531E]">
              <Sparkles aria-hidden className="h-3.5 w-3.5 text-amber-600" />
              <span>Executive methodology &amp; overview</span>
            </div>
            <h2 className="font-serif text-3xl font-extrabold uppercase leading-tight text-[#002244] sm:text-4xl lg:text-5xl">
              Our approach to <span className="text-[#D9531E]">litigation support</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              At Legal Assist, we understand that no two cases are the same. That&apos;s why we take a customized
              approach to every project, taking the time to understand your specific needs and objectives. We work
              closely with our clients to ensure that we deliver services that meet their exact requirements and exceed
              expectations.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span aria-hidden className="h-3 w-3 animate-pulse rounded-full bg-emerald-500 motion-reduce:animate-none" />
            <span className="font-mono text-xs font-bold text-[#002244]">24/7 ACTIVE OPERATIONS</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#002244] p-3 shadow-2xl sm:p-5">
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#D9531E]/20 blur-3xl" />

          <div className="relative">
            <ApproachVideo />

            <ul className="grid grid-cols-1 gap-3 pt-4 md:grid-cols-3">
              {CHAPTERS.map((c) => (
                <li key={c.n} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3.5 text-white">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${c.cls}`}>{c.n}</span>
                  <div className="text-xs">
                    <span className="block font-bold text-slate-200">{c.title}</span>
                    <span className="text-slate-400">{c.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Core values ---------------- */
export function CoreValues() {
  return (
    <section id="core-values" className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        <div className="flex flex-col justify-between space-y-6 rounded-3xl bg-[#0A0F1D] p-8 text-white shadow-2xl sm:p-10 lg:col-span-4">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/20 text-amber-400">
              <Scale aria-hidden className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
              The partner you need for <span className="text-[#D9531E]">streamlined</span> and{" "}
              <span className="text-amber-400">effective</span> legal support
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-full rounded-xl bg-[#D9531E] py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-amber-500 hover:text-slate-950"
          >
            Connect With Us
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
          <article className="flex flex-col justify-between space-y-4 rounded-3xl border border-slate-700 bg-[#002244] p-8 text-white shadow-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-amber-400">
              <Users aria-hidden className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold uppercase text-white">Expertise in the legal industry</h3>
              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                We have a skilled team of professionals with years of experience in the legal sector, enabling us to
                provide top-notch support.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-slate-800 shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-[#D9531E]">
              <Award aria-hidden className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold uppercase text-[#002244]">Custom tailored solutions</h3>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                We deliver tailored support services designed to streamline your workflows, reduce operational costs,
                and accelerate turnaround.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-slate-800 shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700">
              <DollarSign aria-hidden className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold uppercase text-[#002244]">Transparent and predictable pricing</h3>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                We offer simple and transparent pricing models with no hidden charges, making it easy to budget for
                legal support services.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between space-y-4 rounded-3xl bg-[#D9531E] p-8 text-white shadow-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
              <HeartHandshake aria-hidden className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold uppercase text-white">Collaborative solutions for all your legal needs</h3>
              <p className="text-xs leading-relaxed text-orange-50 sm:text-sm">
                We work closely with our clients to understand their needs and provide custom solutions that deliver
                tangible results.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- History & future ---------------- */
export function HistoryFuture() {
  return (
    <section id="history-future" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-r from-[#E5A924] via-[#F3B72B] to-[#E5A924] px-4 py-16 text-slate-950 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-slate-800">Established 2008</p>
          <h2 className="font-serif text-3xl font-black text-[#002244] sm:text-4xl">Our History</h2>
          <p className="text-xs font-medium leading-relaxed text-slate-900 sm:text-sm">
            Legal Assist was founded in 2008 with a simple mission: to provide law firms and legal marketing companies
            with high-quality, reliable, and cost-effective legal support services. Over the past 15+ years, we have
            grown into a trusted partner for hundreds of clients across the country, handling complex mass torts,
            medical record reviews, lead qualifications, and litigation backoffice processes.
          </p>
        </div>

        <dl className="flex flex-row items-center justify-center gap-8 border-y border-slate-950/20 py-4 lg:col-span-2 lg:flex-col lg:border-x lg:border-y-0">
          <div className="flex flex-col-reverse text-center">
            <dt className="text-[10px] font-black uppercase tracking-wider text-slate-900 sm:text-xs">Team Members</dt>
            <dd className="block font-serif text-4xl font-black text-[#002244] sm:text-5xl">100+</dd>
          </div>
          <div className="flex flex-col-reverse text-center">
            <dt className="text-[10px] font-black uppercase tracking-wider text-slate-900 sm:text-xs">Clients Served</dt>
            <dd className="block font-serif text-4xl font-black text-[#002244] sm:text-5xl">80+</dd>
          </div>
        </dl>

        <div className="space-y-4 lg:col-span-5">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-slate-800">Vision for tomorrow</p>
          <h2 className="font-serif text-3xl font-black text-[#002244] sm:text-4xl">Our Future</h2>
          <p className="text-xs font-medium leading-relaxed text-slate-900 sm:text-sm">
            As we look to the future, Legal Assist remains focused on our core mission: providing high-quality legal
            support services while staying at the forefront of industry trends and technology. We are committed to
            continuing to invest in technology, training, and expanding our team of skilled professionals so we can
            adapt to the needs of the legal industry. We are excited about what the future holds and look forward to
            continuing to serve as a trusted partner for legal marketing and law firms across the nation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Leadership ---------------- */
type Leader = {
  name: string;
  role: string;
  initials: string;
  photo?: string;      // e.g. "/images/team/sarah.jpg"
  qr?: string;         // e.g. "/images/team/sarah-qr.png" (square image)
  linkedin: string;
  bio: string[];
};

const LEADERS: Leader[] = [
  {
    name: "Sarah R. Stuhldreher",
    role: "Partner & Executive Leadership",
    initials: "SS",
    photo: "/about/sarah-s.webp",
    qr: "/about/sarah-card.webp",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "Sarah is a partner at Legal Assist, bringing over 15 years of legal experience to the team. With a background in litigation support and case management, Sarah is dedicated to helping law firms streamline their workflows and achieve their operational goals.",
      "Sarah's expertise lies in building strong relationships with clients and delivering custom support solutions that meet their unique needs. She is passionate about helping law firms succeed and is committed to delivering exceptional service every step of the way.",
    ],
  },
  {
    name: "Vinay K Chabala",
    role: "Partner & Founding Director",
    initials: "VC",
    photo: "/about/vinay-c.webp",
    qr: "/about/vinay-card.webp",
    linkedin: "https://www.linkedin.com/",
    bio: [
      "Vinay is a Partner at Legal Assist and one of the founding members of the business. With 15+ years of experience in legal operations, process optimization, and team leadership, Vinay has been instrumental in growing Legal Assist into a premier provider of legal support services.",
      "Vinay's vision for Legal Assist is built on a foundation of quality, efficiency, and client satisfaction. He oversees daily operations and works closely with clients to ensure that every project is delivered on time, within budget, and to the highest standards.",
    ],
  },
];

function Avatar({ l }: { l: Leader }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-2xl ring-4 ring-slate-200/60 ">
        {l.photo ? (
          <Image
            src={l.photo}
            alt={`${l.name}, ${l.role} at Legal Assist`}
            fill
            sizes="(min-width: 640px) 240px, 192px"
            className="object-cover object-top"
          />
        ) : (
          <div aria-hidden className="flex h-full w-full items-center justify-center bg-[#002244] font-serif text-5xl font-bold text-white sm:text-6xl">
            {l.initials}
          </div>
        )}
      </div>
      <span className="mt-3 rounded-full bg-[#002244] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Partner</span>
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#D9531E]">Executive leadership</p>
          <h2 className="font-serif text-3xl font-extrabold text-[#002244] sm:text-4xl lg:text-5xl">Meet Our Partners</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Dedicated legal operational leaders bringing decades of combined experience in litigation support and
            process optimization.
          </p>
        </div>

        {LEADERS.map((l, i) => (
          <article
            key={l.name}
            className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-slate-200/90 bg-slate-50 p-8 shadow-lg sm:p-12 lg:grid-cols-12"
          >
            <div className={`flex justify-center lg:col-span-4 ${i % 2 === 0 ? "lg:order-2" : ""}`}>
              <Avatar l={l} />
            </div>

            <div className={`space-y-4 lg:col-span-8 ${i % 2 === 0 ? "lg:order-1" : ""}`}>
              <div>
                <h3 className="font-serif text-2xl font-extrabold text-[#002244] sm:text-3xl">{l.name}</h3>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#D9531E]">{l.role}</p>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                {l.bio.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
                <a
                  href={l.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#0077b5] px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-[#005885]"
                >
                  <LinkedinIcon />
                  Connect on LinkedIn
                  <span className="sr-only"> with {l.name} (opens in a new tab)</span>
                </a>

                {l.qr && (
                  <figure className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2.5 pr-4 shadow-sm">
                    <Image
                      src={l.qr}
                      alt={`QR code to connect with ${l.name}`}
                      width={200}
                      height={200}
                      className="h-50 w-50"
                    />
                    <figcaption className="text-xs leading-snug text-slate-600">
                      <span className="block font-bold text-[#002244]">Scan to connect</span>
                      with {l.name.split(" ")[0]}
                    </figcaption>
                  </figure>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
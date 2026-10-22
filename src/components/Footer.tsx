import Link from "next/link";
import Image from "next/image";
import { services, serviceHref } from "@/data/services";
import { site } from "@/data/site";
import ScrollToTop from "./ScrollToTop";

const USEFUL_LINKS = [
  { label: "About Company", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Verticals", href: "/verticals" },
];

// the four services shown in the design, in order
const EXPERTISE = [
  "lead-management",
  "contract-management",
  "record-retrieval",
  "medical-record-review",
]
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

const headingCls =
  "inline-block border-b border-white/10 pb-2 font-serif text-base font-bold tracking-wide text-white sm:text-lg lg:border-none lg:pb-0";
const linkCls = "block py-0.5 transition-colors duration-200 hover:text-white";

/* brand icons as inline SVG (lucide removed brand icons) */
const FacebookIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-white">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-white">
    <path d="M6.9 8.9H3.7V20h3.2V8.9ZM5.3 4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.6c0-3-1.6-4.9-4.2-4.9-1.4 0-2.4.8-2.8 1.5V8.9h-3.2V20h3.2v-6c0-1.6.6-2.6 1.9-2.6s1.8 1 1.8 2.6V20h3.3v-6.4Z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-white">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);

const SOCIALS = [
  { label: "Facebook", href:"https://www.facebook.com/legalassistpro", bg: "bg-[#3b5998] hover:bg-[#2d4373]", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/legal-assist-pro/", bg: "bg-[#0077b5] hover:bg-[#005885]", Icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCQwSilxlocrodvnjkaeg9JQ", bg: "bg-[#ff0000] hover:bg-[#cc0000]", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#002244] font-serif text-white selection:bg-amber-500 selection:text-slate-950">
        {/* top accent */}
        <div aria-hidden className="h-1 w-full bg-gradient-to-r from-[#001B36] via-[#D9531E]/40 to-[#001B36]" />

        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* COLUMN 1: logo + call */}
            <div className="space-y-4 lg:col-span-4">
              <Link
              href="/"
              className="group flex items-center"
              aria-label="Legal Assist - Home"
            >
              <Image
                src="/legalassistpro-white-logo.webp"
                alt="Legal Assist"
                width={200}
                height={48}
                style={{ width: "auto" }}
                className="h-10 w-auto"
              />
            </Link>

              <p className="pt-2 font-sans text-base font-bold tracking-wide text-[#D9531E] sm:text-lg">
                Have a question? Call us 24/7
              </p>

              <a
                href={`tel:${site.phone}`}
                className="block font-sans text-2xl font-extrabold tracking-tight text-white transition-colors duration-200 hover:text-[#D9531E] sm:text-3xl lg:text-4xl"
              >
                {site.phoneDisplay}
              </a>
            </div>

            {/* COLUMN 2: useful links */}
            <nav aria-labelledby="footer-useful" className="space-y-4 font-serif lg:col-span-2">
              <h2 id="footer-useful" className={headingCls}>Useful links</h2>
              <ul className="space-y-2.5 font-sans text-sm font-normal text-slate-300 sm:text-base">
                {USEFUL_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkCls}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* COLUMN 3: expertise */}
            <nav aria-labelledby="footer-expertise" className="space-y-4 font-serif lg:col-span-3">
              <h2 id="footer-expertise" className={headingCls}>Expertise</h2>
              <ul className="space-y-2.5 font-sans text-sm font-normal text-slate-300 sm:text-base">
                {EXPERTISE.map((s) => (
                  <li key={s.slug}>
                    <Link href={serviceHref(s.slug)} className={linkCls}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* COLUMN 4: contact + socials */}
            <div className="space-y-4 font-serif lg:col-span-3">
              <h2 className={headingCls}>Contact Info</h2>

              <address className="space-y-1 font-sans text-sm font-normal not-italic leading-relaxed text-slate-300 sm:text-base">
                <p>{site.addressLine1}</p>
                <p>{site.addressLine2}</p>
              </address>

              <ul className="flex items-center gap-3 pt-3">
                {SOCIALS.map(({ label, href, bg, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:scale-110 ${bg}`}
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* bottom: divider with 3 dots + copyright */}
          <div className="relative pt-8">
            <div aria-hidden className="relative mb-8 flex items-center justify-center">
              <div className="w-full border-t border-slate-600/50" />
              <div className="absolute flex items-center gap-1.5 bg-[#002244] px-4">
                <span className="h-2 w-2 rounded-full bg-[#D9531E]" />
                <span className="h-2 w-2 rounded-full bg-[#D9531E]" />
                <span className="h-2 w-2 rounded-full bg-[#D9531E]" />
              </div>
            </div>

            <p className="text-center font-sans text-xs font-medium text-slate-300 sm:text-sm">
              © Copyright <span className="font-bold text-[#D9531E]"><Link href="/" className="hover:underline">Legal Assist</Link></span> {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
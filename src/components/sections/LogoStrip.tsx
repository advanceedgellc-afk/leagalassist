import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Client logos: 250 × 115 px each, saved in /public/clients/         */
/* ------------------------------------------------------------------ */
const LOGO_W = 250;
const LOGO_H = 115;

type Client = { id: string; name: string; logo: string };

const CLIENTS: Client[] = [
  { id: "fitts-firm", name: "Fitts Law Firm", logo: "/clients/cl1.png" },
  { id: "coxwell-associates", name: "Coxwell Associates", logo: "/clients/cl2.png" },
  { id: "aiyl-stock-witken", name: "Aiyl Stock Witken", logo: "/clients/cl3.png" },
  { id: "amazon", name: "Amazon", logo: "/clients/cl4.png" },
  { id: "watts-guerra", name: "Watts Guerra", logo: "/clients/cl5.webp" },
  { id: "thomson-reuters", name: "Thomson-Reuters", logo: "/clients/cl6.webp" },
  { id: "paul-maccuness", name: "Paul Maccuness", logo: "/clients/cl7.webp" },
  { id: "moore-law-firm", name: "Moore Law Firm", logo: "/clients/cl8.webp" },
  { id: "meade-neese", name: "Meade & Neese LLP", logo: "/clients/cl9.webp" },
  { id: "mcdonald-worley", name: "McDonald Worley", logo: "/clients/cl10.webp" },
  { id: "kennedy-hodges", name: "Kennedy Hodges LLP", logo: "/clients/cl11.webp" },
  { id: "josephson-dunlap", name: "Josephson Dunlap LLP", logo: "/clients/cl12.webp" },
  { id: "junell-associates", name: "Junell & Associates", logo: "/clients/cl13.webp" },
  { id: "the-havines", name: "The Havines", logo: "/clients/cl14.webp" },
];

/* Seconds for one full loop. Higher = slower. */
const SPEED = 60;

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    // pr matches the gap, so the seam between the two copies is identical to every other gap
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16">
      {CLIENTS.map((c) => (
        <li
          key={c.id}
          title={c.name}
          className="relative h-[74px] w-[160px] shrink-0 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-[115px] sm:w-[250px]"
        >
          <Image
            src={c.logo}
            alt={hidden ? "" : `${c.name} logo`}
            width={LOGO_W}
            height={LOGO_H}
            className="h-full w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoStrip() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="relative w-full overflow-hidden border-y border-slate-200/80 bg-white py-8 sm:py-10"
    >
      {/* Self-contained animation: no globals.css changes needed */}
      <style>{`
        @keyframes logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .logo-marquee-track { animation: logo-marquee ${SPEED}s linear infinite; will-change: transform; }
        .logo-marquee:hover .logo-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .logo-marquee-track { animation: none; } }
      `}</style>

      <h2 id="clients-heading" className="sr-only">
      Companies that trust Legal Assist     
 </h2>

      {/* accent lines */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-[#BFDBFE]/60" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-[#BFDBFE]/60" />

      {/* edge fades */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-32" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-32" />

      <div className="logo-marquee flex w-full overflow-hidden">
        {/* Two identical halves; moving left by exactly one half (-50%) makes the loop seamless.
            Each half holds the logos twice so wide screens never show an empty gap. */}
        <div className="logo-marquee-track flex w-max">
          <LogoGroup />
          <LogoGroup hidden />
          <LogoGroup hidden />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
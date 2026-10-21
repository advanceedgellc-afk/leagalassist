import Image from "next/image";

const hex = (
  <>
    <path d="M420 50 L460 70 L460 110 L420 130 L380 110 L380 70 Z" fill="#E0E7FF" opacity="0.5" />
    <path d="M450 140 L490 160 L490 200 L450 220 L410 200 L410 160 Z" fill="#EEF2FF" opacity="0.6" />
    <path d="M30 290 L70 310 L70 350 L30 370 L-10 350 L-10 310 Z" fill="#E0E7FF" opacity="0.4" />
  </>
);

const hexCell = (d: string, icon: React.ReactNode) => (
  <>
    <path d={d} fill="#1E3A8A" stroke="#38BDF8" strokeWidth="1.5" />
    {icon}
  </>
);

export function MedicalHeroIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
          <Image
            src="/services/medical-record/medical-1.webp"
            alt="Illustration of a deposition summary being prepared"
            width={800}
            height={800}
            sizes="(min-width: 768px) 448px, 100vw"
            className="h-auto w-full"
          />
        </div>
  );
}

export function MassTortIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Image
        src="/services/medical-record/medicalr-2.webp"
        alt="Illustration of a deposition summary being prepared"
        width={800}
        height={800}
        sizes="(min-width: 768px) 448px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}

const pill = (y: number, color: string, n: string, label: string, size = 13) => (
  <g transform={`translate(20, ${y})`}>
    <rect width="240" height="55" rx="28" fill={color} />
    <circle cx="28" cy="27.5" r="20" fill="#FFFFFF" />
    <text x="28" y="33" textAnchor="middle" fill={color} fontSize="14" fontWeight="900" fontFamily="sans-serif">{n}</text>
    <text x="60" y="33" fill="#FFFFFF" fontSize={size} fontWeight="bold" fontFamily="sans-serif">{label}</text>
  </g>
);

export function OutputFormatsIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
          <Image
            src="/services/medical-record/medical-3.webp"
            alt="Illustration of a deposition summary being prepared"
            width={800}
            height={800}
            sizes="(min-width: 768px) 448px, 100vw"
            className="h-auto w-full"
          />
        </div>
  );
}
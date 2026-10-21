import Image from "next/image";


const Star = ({ x, filled = true }: { x: number; filled?: boolean }) => (
  <path
    transform={`translate(${x} 0)`}
    d="M10 0 L12.9 6.6 L20 7.3 L14.6 12 L16.2 19 L10 15.4 L3.8 19 L5.4 12 L0 7.3 L7.1 6.6 Z"
    fill={filled ? "#FBBF24" : "none"}
    stroke="#FBBF24"
    strokeWidth="1.5"
  />
);

export function CallAuditHeroIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
              <Image
                src="/services/call-audit/call-1.webp"
                alt="Illustration of a legal professional analyzing a deposition document"
                width={800}
                height={800}
                priority
                sizes="(min-width: 1024px) 576px, 100vw"
                className="h-auto w-full"
              />
            </div>
  );
}
export function AuditServicesIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
              <Image
                src="/services/call-audit/call-2.webp"
                alt="Illustration of a legal professional analyzing a deposition document"
                width={800}
                height={800}
                priority
                sizes="(min-width: 1024px) 576px, 100vw"
                className="h-auto w-full"
              />
            </div>
  );
}

export function TurnaroundIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
              <Image
                src="/services/call-audit/call-3.webp"
                alt="Illustration of a legal professional analyzing a deposition document"
                width={800}
                height={800}
                priority
                sizes="(min-width: 1024px) 576px, 100vw"
                className="h-auto w-full"
              />
            </div>
  );
}
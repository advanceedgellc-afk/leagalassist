import Image from "next/image";




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
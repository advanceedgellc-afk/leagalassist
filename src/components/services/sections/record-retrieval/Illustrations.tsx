import Image from "next/image";

const bgHex = (
  <>
    <path d="M420 50 L460 70 L460 110 L420 130 L380 110 L380 70 Z" fill="#E0E7FF" opacity="0.5" />
    <path d="M450 140 L490 160 L490 200 L450 220 L410 200 L410 160 Z" fill="#EEF2FF" opacity="0.6" />
    <path d="M30 290 L70 310 L70 350 L30 370 L-10 350 L-10 310 Z" fill="#E0E7FF" opacity="0.4" />
  </>
);

export function RecordSupportIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
              <Image
                src="/services/record-retrieval/record-1.webp"
                alt="Illustration of a deposition summary being prepared"
                width={800}
                height={800}
                sizes="(min-width: 768px) 448px, 100vw"
                className="h-auto w-full"
              />
            </div>
  );
}

export function RetrievalCallsIllustration() {
  return (
    <div className="mx-auto w-full max-w-md">
              <Image
                src="/services/record-retrieval/record-2.webp"
                alt="Illustration of a deposition summary being prepared"
                width={800}
                height={800}
                sizes="(min-width: 768px) 448px, 100vw"
                className="h-auto w-full"
              />
            </div>
  );
}

export function IntegratedReviewIllustration() {
  return (
    <div className="mx-auto w-full max-w-md">
              <Image
                src="/services/record-retrieval/record-3.webp"
                alt="Illustration of a deposition summary being prepared"
                width={800}
                height={800}
                sizes="(min-width: 768px) 448px, 100vw"
                className="h-auto w-full"
              />
            </div>
  );
}
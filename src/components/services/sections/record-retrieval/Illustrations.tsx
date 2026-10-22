import Image from "next/image";

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
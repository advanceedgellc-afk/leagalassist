import Image from "next/image";

export function LitigationHeroIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Image
        src="/services/litigation-support/litigation-1.webp"
        alt="Illustration of a deposition summary being prepared"
        width={800}
        height={800}
        sizes="(min-width: 768px) 448px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}

export function ProcessNodesIllustration() {
  return (
   <div className="mx-auto w-full max-w-xl">
    <Image
      src="/services/litigation-support/litigation-2.webp"
      alt="Illustration of a deposition summary being prepared"
      width={800}
      height={800}
      sizes="(min-width: 768px) 448px, 100vw"
      className="h-auto w-full"
    />
  </div>
  );
}

export function PricingClipboardIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Image
        src="/services/litigation-support/litigation-3.webp"
        alt="Illustration of a deposition summary being prepared"
        width={800}
        height={800}
        sizes="(min-width: 768px) 448px, 100vw"
        className="h-auto w-full"
      />
    </div>
);
}
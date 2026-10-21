import Image from "next/image";

export function DepositionHeroIllustration() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <Image
        src="/services/depo-summ/depo-1.webp"
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

export function DepositionWorkstationIllustration() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Image
        src="/services/depo-summ/depo-2.webp"
        alt="Illustration of a deposition summary being prepared"
        width={800}
        height={800}
        sizes="(min-width: 768px) 448px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
import Image from "next/image";

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
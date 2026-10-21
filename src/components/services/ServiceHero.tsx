import Link from "next/link";

export default function ServiceHero({ title }: { title: string }) {
  return (
    <section className="bg-[#e8edff]">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-[#0b2a5b]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/services" className="hover:underline">Services</Link>
          <span className="mx-1">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="mt-16 text-center text-4xl font-bold text-[#0b2a5b] md:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
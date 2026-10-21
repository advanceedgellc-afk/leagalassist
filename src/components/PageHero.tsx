export default function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-[#e8edff]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-widest text-[#0b2a5b]">{eyebrow}</p>}
        <h1 className="mt-2 text-4xl font-bold text-[#0b2a5b] md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg text-slate-700">{description}</p>}
      </div>
    </section>
  );
}
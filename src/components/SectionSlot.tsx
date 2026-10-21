export default function SectionSlot({ name }: { name: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-xl border-2 border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
        Section placeholder: {name}
      </div>
    </section>
  );
}
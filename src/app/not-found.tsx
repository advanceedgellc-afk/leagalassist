import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-5xl font-bold text-[#0b2a5b]">404</h1>
      <p className="mt-3 text-slate-600">This page could not be found.</p>
      <Link href="/" className="mt-6 inline-block rounded bg-[#0b2a5b] px-5 py-3 text-sm font-semibold text-white">Back to Home</Link>
    </section>
  );
}
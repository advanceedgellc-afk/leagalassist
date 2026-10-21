import CtaButton from "@/components/ui/CtaButton";
import { security } from "@/data/litigation-support";

export function BoxCheck() {
  return (
    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#0f2b5c] text-white shadow-sm">
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Security() {
  return (
    <section className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#0f2b5c] md:text-4xl">Technology and Security for Litigation Support</h2>
          <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
            At Legal Assist, we take technology and security seriously in the litigation support process. We understand the importance of maintaining the highest standards of data security, privacy, and confidentiality, while also leveraging the latest technology to provide the most efficient and effective litigation support services. Here’s a breakdown of our approach:
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {security.map((s) => (
            <li key={s.title} className="space-y-2 rounded-xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <BoxCheck />
                <h3 className="text-base font-bold text-slate-900 md:text-lg">{s.title}</h3>
              </div>
              <p className="pl-8 text-xs leading-relaxed text-slate-600 md:text-sm">{s.text}</p>
            </li>
          ))}
        </ul>

        <div className="pt-2 text-center"><CtaButton>Schedule A Call</CtaButton></div>
      </div>
    </section>
  );
}
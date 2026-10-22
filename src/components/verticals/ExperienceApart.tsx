import { CheckSquare, FileSpreadsheet, FileText, Phone, PhoneCall, Scale, Users } from "lucide-react";
import BookCallButton from "../booking/BookCallButton";

const POINTS: { title: string; text?: string; bullets?: { label: string; text: string }[] }[] = [
  {
    title: "Worked on 20+ Mass Torts and 150K+ cases",
    text: "Medical Record Review with Bates labeling, Highlighting and Hyperlinking for 150K+ cases",
  },
  {
    title: "Over 2.5 Million Record Retrieval Calls",
    text: "Provided contact center services for Medical Record Retrieval process including verification, status check and follow up calls",
  },
  {
    title: "Worked on multiple litigation cases",
    bullets: [
      { label: "Syngenta Lawsuit", text: "Extracted corn produce data from 6 million+ FSA 578 forms" },
      {
        label: "Hospital Liens",
        text: "Downloaded liens from US county web portal and Extracted Patient and Hospital data for 2 million+ Hospital Liens",
      },
      { label: "Workers Compensation Lawsuit", text: "Extracted and Compiled wage details from 25k+ payroll sheets" },
    ],
  },
  {
    title: "Fast & Efficient Legal Backoffice Services",
    text: "Worked on over 1 Million tasks for multiple paralegal projects like Questionnaire Data Extraction, Case Packet Creation, SFC and PPF Form Filling etc.",
  },
  {
    title: "Experience with Multiple Litigation Management (LM) Systems",
    text: "Proficient in many types of software for Litigation Management such as MR 8, Needles, Uptime Legal. We also provide support through our client's custom software.",
  },
  {
    title:
      "In addition to medical records, we have expertise in retrieving other types of records, such as Certified NRF (No Records Found), Response of No Records, and more.",
  },
];

export default function ExperienceApart() {
  return (
    <section className="bg-white px-4 py-12 font-sans text-slate-800 selection:bg-amber-500 selection:text-white sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        {/* header */}
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#002244] sm:text-4xl lg:text-5xl">
            Experience Sets Us Apart
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            It&apos;s time to stop struggling to manage in-house teams that can be expensive and hard to scale. Choose
            the experts.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 pt-4 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: points */}
          <ul className="space-y-6 text-xs text-slate-700 sm:text-sm lg:col-span-7 lg:text-base">
            {POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <CheckSquare aria-hidden className="mt-0.5 h-5 w-5 shrink-0 stroke-[2] text-[#002244] sm:h-6 sm:w-6" />
                <div className="space-y-1">
                  {p.text || p.bullets ? (
                    <h3 className="font-serif text-base font-bold text-[#002244] sm:text-lg">{p.title}</h3>
                  ) : (
                    <p className="font-serif text-base font-bold leading-snug text-[#002244] sm:text-lg">{p.title}</p>
                  )}

                  {p.text && <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{p.text}</p>}

                  {p.bullets && (
                    <ul className="list-inside list-disc space-y-2 pl-2 pt-1 text-xs text-slate-700 sm:text-sm">
                      {p.bullets.map((b) => (
                        <li key={b.label} className="leading-relaxed">
                          <strong className="text-slate-900">{b.label}</strong> – {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* RIGHT: infographic */}
          <div className="flex justify-center lg:col-span-5">
            <dl className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl">
              {/* 1 */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-white p-6">
                <div className="space-y-1">
                  <p className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Our work helped settle
                  </p>
                  <dd className="text-2xl font-black tracking-tight text-[#002244] sm:text-3xl">150K+</dd>
                  <dt className="text-xs font-bold uppercase tracking-wide text-[#002244]">MassTort Claimants</dt>
                </div>
                <div aria-hidden className="flex flex-col items-center gap-1.5 text-[#002244]">
                  <Scale className="h-8 w-8 stroke-[2]" />
                  <Users className="h-6 w-6 stroke-[2]" />
                </div>
              </div>

              {/* 2 */}
              <div className="flex items-center justify-between bg-[#FF8C00] p-6 text-white">
                <div className="space-y-0.5">
                  <dd className="text-2xl font-black tracking-tight sm:text-3xl">1.5M+</dd>
                  <dt className="max-w-[140px] text-sm font-bold leading-tight">Medical Records Reviewed</dt>
                </div>
                <div aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <FileText className="h-7 w-7 stroke-[2.5]" />
                </div>
              </div>

              {/* 3 */}
              <div className="flex items-center justify-between bg-[#00B4D8] p-6 text-white">
                <div aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Phone className="h-7 w-7 stroke-[2.5]" />
                </div>
                <div className="space-y-0.5 text-right">
                  <dd className="text-2xl font-black tracking-tight sm:text-3xl">2.5M+</dd>
                  <dt className="ml-auto max-w-[140px] text-sm font-bold leading-tight">Record Retrieval Calls</dt>
                </div>
              </div>

              {/* 4 */}
              <div className="flex items-center justify-between bg-[#00A896] p-6 text-white">
                <div className="space-y-0.5">
                  <p className="block text-[10px] font-bold uppercase tracking-wider text-teal-100">Processed</p>
                  <dd className="text-xl font-black tracking-tight sm:text-2xl">6M+ FSA 578</dd>
                  <dt className="text-xs font-extrabold uppercase tracking-wide">Syngenta Corn Forms</dt>
                </div>
                <div aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M12 2C8 2 6 6 6 12c0 4 2 8 6 10 4-2 6-6 6-10 0-6-2-10-6-10z" fill="#FACC15" />
                    <path d="M7 10c2 1 4 1 6 0M7 14c2 1 4 1 6 0M7 18c2 1 4 1 6 0" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4 18c3-1 5 1 8 3M20 18c-3-1-5 1-8 3" stroke="#16A34A" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>

              {/* 5 */}
              <div className="flex items-center justify-between bg-[#2196F3] p-6 text-white">
                <div aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <FileSpreadsheet className="h-7 w-7 stroke-[2.5]" />
                </div>
                <div className="space-y-0.5 text-right">
                  <p className="block text-[10px] font-bold uppercase tracking-wider text-blue-100">Executed</p>
                  <dd className="text-2xl font-black tracking-tight sm:text-3xl">1M+</dd>
                  <dt className="text-xs font-extrabold uppercase tracking-wide">Paralegal Tasks</dt>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 pt-8 text-center">
          <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-amber-500 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-amber-400 active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              <PhoneCall aria-hidden className="h-4 w-4" />
              Schedule A Free Call
            </BookCallButton>
        </div>
      </div>
    </section>
  );
}
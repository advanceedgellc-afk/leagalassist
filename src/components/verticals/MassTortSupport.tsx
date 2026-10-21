import Link from "next/link";
import { BarChart3, Layers, PhoneCall } from "lucide-react";
import BookCallButton from "../booking/BookCallButton";

const POINTS = [
  { label: "Inconsistency Due Date", value: "Verified", cls: "text-emerald-400" },
  { label: "Bates Stamping Progress", value: "100% Complete", cls: "text-blue-400" },
  { label: "Medical Records Reviewed", value: "150,000+", cls: "text-amber-400" },
  { label: "Deposition Summaries", value: "Ready", cls: "text-purple-400" },
];

const ROWS = [
  { name: "Texas Storm", total: "2,410", progress: "120", done: "95.0%" },
  { name: "TV Mesh", total: "1,830", progress: "45", done: "97.5%" },
  { name: "NEC / Camp Lejeune", total: "3,250", progress: "210", done: "93.5%" },
];

const CHART: [number, number][] = [
  [0, 70], [30, 50], [70, 55], [110, 35], [150, 40], [190, 25], [230, 30],
  [270, 15], [310, 20], [350, 10], [390, 18], [430, 8], [470, 15], [500, 5],
];
const linePath = CHART.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");

const paragraphCls = "text-sm font-normal leading-relaxed text-slate-100 sm:text-base";

export default function MassTortSupport() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-sans">
      {/* ---------- dashboard mockup (decorative) ---------- */}
      <div className="relative w-full overflow-hidden border-b border-slate-200/60 bg-[#f8fafc] px-4 pb-16 pt-12 sm:px-6 sm:pb-24 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#002244 1px, transparent 1px), linear-gradient(90deg, #002244 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div aria-hidden className="relative z-10 mx-auto flex max-w-6xl justify-center">
          <div className="w-full max-w-5xl origin-center transition-transform duration-700 [perspective:1200px] hover:scale-[1.01] motion-reduce:transition-none">
            <div className="w-full rounded-2xl border border-slate-700/80 bg-slate-900 p-4 font-sans text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-transform duration-500 motion-reduce:transition-none sm:p-6 md:[transform:rotateX(22deg)_rotateZ(-4deg)_skewX(6deg)] lg:[transform:rotateX(28deg)_rotateZ(-6deg)_skewX(8deg)] md:hover:[transform:rotateX(15deg)_rotateZ(-2deg)_skewX(3deg)]">
              {/* top bar */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid grid-cols-2 gap-1 rounded-sm border border-amber-500/20 bg-amber-500/10 p-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5A924]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2B546E]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E65B28]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5A924]" />
                  </div>
                  <span className="font-serif text-lg font-bold tracking-tight text-white sm:text-xl">
                    Legal<span className="font-normal text-amber-400">Assist</span>
                  </span>
                  <span className="ml-2 hidden rounded border border-blue-500/30 bg-blue-600/30 px-2 py-0.5 font-mono text-[10px] text-blue-300 sm:inline-block">
                    PRO PLATFORM
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
                  <span className="hidden sm:inline-block">
                    Total Cases: <strong className="text-white">9,007</strong>
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                    LIVE SYNC
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 font-sans text-xs md:grid-cols-12">
                {/* summary */}
                <div className="space-y-2.5 rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 md:col-span-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-bold text-slate-400">
                    <span className="text-[11px] text-amber-400">Claimant Summary Report</span>
                    <Layers className="h-3.5 w-3.5 text-amber-400" />
                  </div>
                  <div className="space-y-1.5 font-mono text-[10px] text-slate-300">
                    {POINTS.map((p, i) => (
                      <div key={p.label} className={`flex justify-between py-1 ${i < POINTS.length - 1 ? "border-b border-slate-900" : ""}`}>
                        <span>{p.label}</span>
                        <span className={p.cls}>{p.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* analytics table */}
                <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 md:col-span-8">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-bold text-slate-300">
                    <span className="text-xs text-white">Analytics by Tort</span>
                    <BarChart3 className="h-4 w-4 text-sky-400" />
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-[10px] text-slate-300">
                      <thead className="border-b border-slate-800 text-[9px] uppercase text-slate-400">
                        <tr>
                          <th className="py-1">Name</th>
                          <th className="py-1">Total Cases</th>
                          <th className="py-1">In Progress</th>
                          <th className="py-1">% Complete</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-900">
                        {ROWS.map((r) => (
                          <tr key={r.name}>
                            <td className="py-1 font-medium text-white">{r.name}</td>
                            <td className="py-1">{r.total}</td>
                            <td className="py-1 text-amber-400">{r.progress}</td>
                            <td className="py-1 text-emerald-400">{r.done}</td>
                          </tr>
                        ))}
                        <tr className="border-t border-slate-700 font-bold text-white">
                          <td className="py-1.5 text-amber-400">Total</td>
                          <td className="py-1.5">9,007</td>
                          <td className="py-1.5 text-amber-400">375</td>
                          <td className="py-1.5 text-emerald-400">95.8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* chart */}
                <div className="space-y-2 rounded-xl border border-slate-800 bg-slate-950/90 p-4 md:col-span-12">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span>Total Cases by Year / Month / WeekNo</span>
                    <div className="flex items-center gap-3 text-[10px]">
                      <span className="flex items-center gap-1 text-blue-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Total Cases
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> % Complete
                      </span>
                    </div>
                  </div>
                  <div className="h-20 w-full pt-2 sm:h-24">
                    <svg className="h-full w-full overflow-visible text-blue-500" viewBox="0 0 500 80" preserveAspectRatio="none">
                      <line x1="0" y1="20" x2="500" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
                      <path d={`${linePath} L500 80 L0 80 Z`} fill="rgba(59, 130, 246, 0.15)" />
                      <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                      {CHART.map(([x, y]) => (
                        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#60a5fa" stroke="#1e3a8a" strokeWidth="1.5" />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- blue content block ---------- */}
      <div className="w-full bg-[#2E60EA] px-4 py-14 text-white selection:bg-amber-400 selection:text-slate-950 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* left */}
            <div className="space-y-6 lg:col-span-6">
              <h2 className="font-serif text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Mass Tort Litigation Support Services by Legal Assist
              </h2>
              <p className={paragraphCls}>
                Mass tort litigation involves a large number of plaintiffs who have suffered harm from a common
                defendant or defendants. These cases can be complex, with extensive medical records and various legal
                issues to address. Legal Assist has extensive experience in providing litigation support services for
                mass tort clients.
              </p>
              <p className={paragraphCls}>
                At Legal Assist, we understand the unique challenges of mass tort litigation. Our team of experts is
                trained to handle the complex nature of these cases, and we provide a range of services to support our
                clients through the process. We specialize in medical record review, deposition summarization, and
                other litigation support services that help our clients build strong cases.
              </p>
            </div>

            {/* right */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-6 lg:pt-2">
              <div className="space-y-6">
                <p className={paragraphCls}>
                  Our team of experienced medical record reviewers carefully reviews and analyzes each record to
                  identify and flag any discrepancies, inconsistencies, or errors. We also provide deposition
                  summarization services to help our clients efficiently navigate the large amount of information
                  presented during depositions.
                </p>
                <p className={paragraphCls}>
                  Don&apos;t just take our word for it. We have a track record of success in supporting mass tort
                  clients, and we have received numerous testimonials from satisfied clients. Let us help you build a
                  strong case and achieve a favorable outcome.
                </p>
                <p className={paragraphCls}>
                  If you need support for mass tort litigation, contact Legal Assist today. Our team is always
                  available to answer your questions and provide the services you need to succeed.
                </p>
              </div>

              <div className="pt-4 sm:pt-6">
                <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-amber-500 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-amber-400 active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              <PhoneCall aria-hidden className="h-4 w-4" />
              Schedule A Free Call
            </BookCallButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Clock, UserCheck, DollarSign, Zap, Globe, type LucideIcon } from "lucide-react";
import BookCallButton from "../booking/BookCallButton";

type Pill = {
  icon: LucideIcon;
  bold: string;
  text?: string;
  highlight?: string;
  after?: string;
};

const PILLS: Pill[] = [
  { icon: Clock, bold: "Get 24/7 Legal support", text: "with a", highlight: "30-40% Cost savings." },
  { icon: UserCheck, bold: "No Employee related expenses.", text: "No vacation, sick leave, 401k, Insurance costs." },
  { icon: DollarSign, bold: "Pay only for the Hours worked.", text: "No rush fees or weekend overtimes." },
  { icon: Zap, bold: "Overnight turnaround time", text: "Get", highlight: "Quick results", after: "without sacrificing quality." },
  { icon: Globe, bold: "Global Delivery Centers", highlight: "Round the clock support,", after: "wherever you are." },
];

export default function Benefits() {
  return (
    <section className="bg-[#EEF2F8] py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: text */}
          <div className="space-y-6 lg:col-span-7">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-600 sm:text-sm">
              Get the best of both worlds with Legal Assist
            </p>

            <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-[#0B2240] sm:text-4xl lg:text-5xl">
              Cost-Effective Solutions with Lightning-Fast Turnaround Times
            </h2>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Legal Assist offers a unique combination of cost-effective legal support services and fast turnaround
              times, making us the go-to choice for businesses and organizations in need of top-notch legal support
              services. Our innovative delivery model and global delivery centers enable us to provide round-the-clock
              services, giving you peace of mind, and more time to focus on growing your business.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              With Legal Assist, you can save 30-40% on operational costs compared to your in-house workforce. Our
              services are designed to provide you with all the benefits of in-house support, without any of the
              associated employee-related expenses. No paid vacations, sick leave, 401k contributions, insurance costs,
              or other overheads - just a highly trained and efficient team, working to support you, 24/7.
            </p>

            <div className="pt-4">
              <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-[#0f2b5c] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#0e357a4d] transition hover:scale-[1.02] hover:bg-[#0e357a] active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              
              Schedule A Free Call
            </BookCallButton>
            </div>
          </div>

          {/* RIGHT: navy panel with pills */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-[#091D36] via-[#0B2343] to-[#08172B] p-6 shadow-2xl shadow-slate-950/20 sm:p-8 md:p-10">
              <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

              <ul className="relative space-y-5">
                {PILLS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.bold} className="group flex items-center transition-transform duration-300 hover:scale-[1.02]">
                      {/* icon badge */}
                      <span className="relative z-10 -mr-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 p-[3px] shadow-lg shadow-amber-500/20 sm:h-16 sm:w-16 sm:-mr-9">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#091D36] text-amber-400 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                          <Icon aria-hidden className="h-6 w-6 stroke-[2.2] sm:h-7 sm:w-7" />
                        </span>
                      </span>

                      {/* white capsule */}
                      <p className="flex min-h-[64px] w-full items-center rounded-full border border-slate-100 bg-white py-3 pl-12 pr-5 text-xs font-medium leading-snug text-slate-800 shadow-md transition-shadow duration-300 group-hover:shadow-xl sm:pl-14 sm:text-sm">
                        <span>
                          <strong className="font-extrabold text-slate-900">{p.bold}</strong>
                          {p.text && <> {p.text}</>}
                          {p.highlight && <> <strong className="font-bold text-slate-900">{p.highlight}</strong></>}
                          {p.after && <> {p.after}</>}
                        </span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
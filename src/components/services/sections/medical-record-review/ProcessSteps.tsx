"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; text: string };

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const [progress, setProgress] = useState(0);

  // Reveal each step as it scrolls into view
  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLLIElement>("[data-step]");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.step);
          setVisible((v) => (v[i] ? v : v.map((x, j) => (j === i ? true : x))));
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  // Fill the timeline line as you scroll through the list
  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.6;
      setProgress(Math.min(1, Math.max(0, (mid - r.top) / r.height)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={listRef} className="relative space-y-5 pt-1">
      {/* timeline track + fill */}
      <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-0.5 bg-slate-200" />
      <span
        aria-hidden
        className="absolute left-[19px] top-6 w-0.5 origin-top bg-amber-500 transition-[height] duration-150"
        style={{ height: `calc((100% - 3rem) * ${progress})` }}
      />

      {steps.map((s, i) => (
        <li
          key={s.title}
          data-step={i}
          className={`relative flex items-start gap-4 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
            visible[i] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span
            className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors duration-500 ${
              visible[i] ? "border-[#0f2b5c] bg-[#0f2b5c] text-white" : "border-slate-300 bg-white text-slate-400"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 space-y-1 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
            <h3 className="text-sm font-bold text-slate-900 md:text-base">{s.title}</h3>
            <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
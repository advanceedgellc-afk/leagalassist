"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ columns }: { columns: Faq[][] }) {
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {columns.map((faqs, col) => (
        <div key={col} className="space-y-3">
          {faqs.map((faq, i) => {
            const id = `${col}-${i}`;
            const isOpen = open === id;
            return (
              <div
                key={id}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 transition-all duration-200 hover:border-blue-300"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${id}`}
                  className={`flex w-full items-center gap-3.5 px-5 py-4 text-left text-xs font-bold uppercase text-[#0f2b5c] transition-colors md:text-sm ${
                    isOpen ? "bg-[#eef2ff]" : "hover:bg-slate-100/60"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0f2b5c] text-xs font-bold text-white">
                    {isOpen ? "–" : "+"}
                  </span>
                  <span className="flex-1 leading-snug">{faq.q}</span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-${id}`}
                    className="border-t border-slate-200/80 bg-white px-6 py-4 text-xs leading-relaxed text-slate-600 md:text-sm"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
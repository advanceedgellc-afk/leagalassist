"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import type { Faq } from "@/data/faqs";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q));
  }, [faqs, query]);

  return (
    <>
      {/* Search */}
      <div className="mx-auto mb-10 max-w-2xl">
        <div className="relative flex items-center">
          <Search aria-hidden className="absolute left-4 h-5 w-5 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search frequently asked questions"
            placeholder="Search questions or keywords (e.g., pricing, 24/7, services)..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-10 text-sm font-medium text-slate-900 shadow-lg shadow-slate-200/50 transition-all placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <p aria-live="polite" className="mt-3 px-2 text-xs font-semibold text-slate-500">
          {query ? `Showing ${visible.length} of ${faqs.length} questions` : `Showing all ${faqs.length} questions`}
        </p>
      </div>

      {/* Accordion */}
      <div className="mb-14 space-y-4">
        {visible.map((f) => (
          <details
            key={f.q}
            name="home-faq"
            className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-amber-400/80 hover:shadow-md open:border-amber-500 open:ring-2 open:ring-amber-500/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="text-base font-bold text-[#0B2240] transition-colors group-hover:text-amber-700 sm:text-lg">
                {f.q}
              </h3>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors group-hover:bg-amber-100 group-hover:text-amber-800 group-open:bg-amber-500 group-open:text-slate-950">
                <ChevronDown aria-hidden className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
              </span>
            </summary>
            <p className="border-t border-slate-100/80 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {f.a}
            </p>
          </details>
        ))}

        {visible.length === 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white px-4 py-12 text-center">
            <h3 className="text-base font-bold text-slate-900">No matching questions found</h3>
            <p className="mb-4 mt-1 text-xs text-slate-500">
              Try a different term, or schedule a direct consultation.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-xs font-bold text-amber-700 underline hover:text-amber-800"
            >
              Clear search filter
            </button>
          </div>
        )}
      </div>
    </>
  );
}
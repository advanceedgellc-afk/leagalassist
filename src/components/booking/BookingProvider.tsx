"use client";

import Script from "next/script";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { CalendarDays, X } from "lucide-react";
import { GHL_BASE, GHL_CALENDAR_ID } from "@/lib/ghl";

type BookingCtx = {
  openBooking: () => void;
  closeBooking: () => void;
  /** Start loading the calendar early (hover / focus / touch on a button) so it opens instantly */
  prefetchBooking: () => void;
};

const Ctx = createContext<BookingCtx | null>(null);

/** Call this from any client component: const { openBooking } = useBooking(); */
export function useBooking() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // iframe added to the page
  const [ready, setReady] = useState(false); // iframe finished loading
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const prefetchBooking = useCallback(() => setMounted(true), []);

  const openBooking = useCallback(() => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setMounted(true);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus?.();
  }, []);

  // Preload quietly once the page is idle, so even the first click is fast
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    const t = w.requestIdleCallback
      ? w.requestIdleCallback(() => setMounted(true), { timeout: 5000 })
      : window.setTimeout(() => setMounted(true), 3000);
    return () => {
      if (!w.requestIdleCallback) window.clearTimeout(t);
    };
  }, []);

  // While closed, make the overlay completely non-interactive (fixes "buttons not clickable")
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [open, mounted]);

  // Esc to close, lock page scroll, move focus into the dialog
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeBooking();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, closeBooking]);

  return (
    <Ctx.Provider value={{ openBooking, closeBooking, prefetchBooking }}>
      {children}

      {mounted && (
        <div
          ref={dialogRef}
          onClick={closeBooking}
          aria-hidden={!open}
          className={`fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm transition-opacity duration-200 sm:p-6 ${
            open ? "visible opacity-100" : "pointer-events-none invisible opacity-0 [&_*]:pointer-events-none"
          }`}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            onClick={(e) => e.stopPropagation()}
            className={`relative flex max-h-[92vh] w-full max-w-4xl flex-col lg:max-w-6xl xl:max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-200 ${
              open ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
            }`}
          >
            {/* header */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <CalendarDays aria-hidden className="h-5 w-5" />
                </div>
                <div>
                  <h2 id="booking-title" className="font-serif text-lg font-bold text-[#0B2240]">
                    Schedule A Free Call
                  </h2>
                  <p className="text-xs text-slate-500">Pick a time that works for you</p>
                </div>
              </div>
              <button
                ref={closeBtn}
                type="button"
                onClick={closeBooking}
                aria-label="Close"
                className="rounded-xl bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* calendar */}
            <div className="relative overflow-y-auto">
              {!ready && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white">
                  <span
                    aria-hidden
                    className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#0B2240] motion-reduce:animate-none"
                  />
                  <p className="text-sm text-slate-500" role="status">
                    Loading available times…
                  </p>
                </div>
              )}
              <iframe
                src={`${GHL_BASE}/widget/booking/${GHL_CALENDAR_ID}`}
                id={`${GHL_CALENDAR_ID}_popup`}
                title="Book a free consultation call"
                allow="payment"
                onLoad={() => setReady(true)}
                className="block w-full border-0"
                style={{ minHeight: 680 }}
              />
            </div>
          </div>

          <Script id="ghl-form-embed" src={`${GHL_BASE}/js/form_embed.js`} strategy="lazyOnload" />
        </div>
      )}
    </Ctx.Provider>
  );
}
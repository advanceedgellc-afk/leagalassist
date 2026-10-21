"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Scroll to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 rounded-md border border-slate-700/80 bg-[#001328] p-3 text-white shadow-2xl transition-all duration-300 hover:bg-[#D9531E] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <ChevronUp aria-hidden className="h-5 w-5 stroke-[2.5]" />
    </button>
  );
}
"use client";

import { useEffect, useRef } from "react";

const fmt = (n: number) => n.toLocaleString("en-US");

/**
 * Counts up from 0 to `end` when it scrolls into view.
 *
 * The real number is in the server HTML, so Google, link previews and visitors
 * without JavaScript always see "16+", never "0+". The animation only rewrites
 * the visible text in the browser, without React re-renders.
 */
export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect "reduce motion": keep the final number, no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const show = (n: number) => {
      el.textContent = `${fmt(n)}${suffix}`;
    };

    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out
        show(Math.round(end * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      show(0);
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      show(end); // never leave a half-counted number behind
    };
  }, [end, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {fmt(end)}
      {suffix}
    </span>
  );
}
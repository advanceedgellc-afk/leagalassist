"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

const INTERVAL = 3500;
const DURATION = 600; // ms, keep in sync with duration-[600ms] below

const initials = (name: string) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();

function Slide({
  t,
  label,
  active,
  clone,
}: {
  t: Testimonial;
  label: string;
  active: boolean;
  clone?: boolean;
}) {
  return (
    <figure
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={!active || clone}
      inert={!active || clone}
      className="flex w-full shrink-0 flex-col justify-between"
    >
      <div className="-mt-2 mb-6 flex justify-center">
        <div className="relative">
          {t.avatar ? (
            <Image
              src={t.avatar}
              alt={clone ? "" : t.name}
              width={88}
              height={88}
              className="h-20 w-20 rounded-full border-4 border-white object-cover object-top shadow-md ring-1 ring-slate-200/80"
            />
          ) : (
            <div
              aria-hidden
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#0B2240] text-xl font-bold text-white shadow-md ring-1 ring-slate-200/80"
            >
              {initials(t.name)}
            </div>
          )}
          <span className="absolute -bottom-1 -right-1 rounded-full bg-amber-500 p-1 text-slate-950 shadow-sm">
            <Star aria-hidden className="h-3 w-3 fill-slate-950" />
          </span>
        </div>
      </div>

      <blockquote className="relative flex min-h-[160px] flex-grow items-center justify-center rounded-xl border border-slate-100 bg-slate-50/80 p-6 text-center sm:p-8">
        <span aria-hidden className="pointer-events-none absolute left-3 top-2 select-none font-serif text-6xl text-slate-300/60">
          “
        </span>
        <p className="relative z-10 text-sm font-normal italic leading-relaxed text-slate-700 sm:text-base">
          {t.quote}
        </p>
      </blockquote>

      <div aria-hidden className="my-4 select-none text-center text-lg font-extrabold tracking-[0.4em] text-blue-600">
        • • •
      </div>

      <figcaption className="mb-2 space-y-1 text-center">
        <span className="block font-serif text-lg font-bold text-[#0B192C] sm:text-xl">{t.name}</span>
        <span className="block text-xs font-medium text-slate-500 sm:text-sm">{t.title}</span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const count = items.length;
  const multi = count > 1;

  // extended track: [clone of last, ...real slides, clone of first]
  const track = multi ? [items[count - 1], ...items, items[0]] : items;

  const [pos, setPos] = useState(multi ? 1 : 0);
  const [animate, setAnimate] = useState(true);
  const [tick, setTick] = useState(0); // restarts autoplay + progress after every move
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  const posRef = useRef(pos);
  const lock = useRef(false);
  const fallback = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // after reaching a clone, jump (without animation) to the matching real slide
  const settle = useCallback(() => {
    if (fallback.current) clearTimeout(fallback.current);
    const p = posRef.current;
    if (p > count || p < 1) {
      const next = p > count ? 1 : count;
      setAnimate(false);
      posRef.current = next;
      setPos(next);
      // re-enable the transition only after the browser painted the jump
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true);
          lock.current = false;
        })
      );
    } else {
      lock.current = false;
    }
  }, [count]);

  const moveTo = useCallback(
    (next: number) => {
      if (!multi || lock.current) return;
      lock.current = true;
      setAnimate(true);
      posRef.current = next;
      setPos(next);
      setTick((t) => t + 1);
      // fallback in case transitionend never fires (e.g. background tab)
      fallback.current = setTimeout(settle, DURATION + 150);
    },
    [multi, settle]
  );

  const next = useCallback(() => moveTo(posRef.current + 1), [moveTo]);
  const prev = useCallback(() => moveTo(posRef.current - 1), [moveTo]);
  const goTo = useCallback((i: number) => moveTo(i + 1), [moveTo]);

  const playing = multi && !paused && !reduced;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(next, INTERVAL);
    return () => clearTimeout(t);
  }, [playing, tick, next]);

  useEffect(() => () => { if (fallback.current) clearTimeout(fallback.current); }, []);

  const realIndex = multi ? (pos - 1 + count) % count : 0;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] sm:p-10 md:p-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex w-full ${animate ? "transition-transform duration-[600ms] ease-in-out" : "transition-none"} motion-reduce:transition-none`}
          style={{ transform: `translateX(-${pos * 100}%)` }}
          onTransitionEnd={(e) => {
            if (e.target === e.currentTarget && e.propertyName === "transform") settle();
          }}
          aria-live={playing ? "off" : "polite"}
        >
          {track.map((t, i) => {
            const isClone = multi && (i === 0 || i === track.length - 1);
            const real = multi ? (i - 1 + count) % count : i;
            return (
              <Slide
                key={isClone ? `clone-${i}` : t.name}
                t={t}
                label={`${real + 1} of ${count}`}
                active={i === pos}
                clone={isClone}
              />
            );
          })}
        </div>
      </div>

      {multi && (
        <>
          <div className="flex flex-col items-center gap-3 border-t border-slate-100 pt-4">
            <div className="flex items-center justify-center gap-3">
              {items.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === realIndex}
                  className="group p-1"
                >
                  {i === realIndex ? (
                    <span className="block h-3.5 w-3.5 rotate-45 scale-110 rounded-[2px] bg-blue-600 shadow-sm" />
                  ) : (
                    <span className="block h-2.5 w-2.5 rounded-full bg-slate-300 transition-colors group-hover:bg-slate-400" />
                  )}
                </button>
              ))}
            </div>

            {/* progress bar (decorative) */}
            <div aria-hidden className="h-1 w-32 overflow-hidden rounded-full bg-slate-100">
              <div
                key={`${tick}-${playing}`}
                className="h-full rounded-full bg-blue-600"
                style={{
                  width: playing ? undefined : "0%",
                  animation: playing ? `testimonial-progress ${INTERVAL}ms linear forwards` : "none",
                }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-100 bg-white p-2 text-slate-600 opacity-80 shadow-md transition hover:scale-110 hover:text-blue-600 hover:opacity-100 sm:flex"
          >
            <ChevronLeft aria-hidden className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-slate-100 bg-white p-2 text-slate-600 opacity-80 shadow-md transition hover:scale-110 hover:text-blue-600 hover:opacity-100 sm:flex"
          >
            <ChevronRight aria-hidden className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}
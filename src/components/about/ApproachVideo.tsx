"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

const VIMEO_ID = "762589574";
const THUMB =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600";

export default function ApproachVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-inner sm:aspect-[21/9]">
      {playing ? (
        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`}
          title="Legal Assist: Our Approach to Litigation Support"
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={THUMB}
            alt=""
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-center brightness-[0.65]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />

          {/* top badges */}
          <div aria-hidden className="pointer-events-none absolute inset-x-4 top-4 z-10 flex items-center justify-between sm:inset-x-6 sm:top-6">
            <span className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-xs font-bold text-amber-400 backdrop-blur-md">
              <Play className="h-3.5 w-3.5 fill-current" /> HD WORKFLOW DEMO
            </span>
            <span className="hidden rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-md sm:inline">
              Custom Mass Tort &amp; Litigation Process
            </span>
          </div>

          {/* bottom bar */}
          <div aria-hidden className="pointer-events-none absolute inset-x-4 bottom-4 z-10 flex flex-col justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-end sm:p-5">
            <div className="space-y-1">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">Inside Legal Assist operations</p>
              <p className="font-serif text-lg font-bold text-white sm:text-xl">How We Tailor Litigation Backoffice Solutions</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#002244]">
              <Play className="h-4 w-4 fill-current" /> Play full presentation
            </span>
          </div>

          {/* the one real button */}
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Play video: Our approach to litigation support"
            className="group absolute inset-0 z-20 flex flex-col items-center justify-center gap-4"
          >
            <span className="relative flex items-center justify-center">
              <span aria-hidden className="absolute inline-flex h-28 w-28 animate-ping rounded-full bg-[#D9531E]/30 opacity-75 motion-reduce:animate-none sm:h-36 sm:w-36" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-gradient-to-tr from-[#D9531E] to-amber-500 text-white shadow-[0_0_50px_rgba(217,83,30,0.6)] transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                <Play aria-hidden className="ml-1 h-9 w-9 fill-current sm:h-11 sm:w-11" />
              </span>
            </span>
            <span className="rounded-full border border-white/20 bg-slate-900/80 px-4 py-1.5 font-mono text-[11px] font-extrabold uppercase tracking-widest text-white shadow-lg backdrop-blur-md">
              Watch executive overview (3 min)
            </span>
          </button>
        </>
      )}
    </div>
  );
}
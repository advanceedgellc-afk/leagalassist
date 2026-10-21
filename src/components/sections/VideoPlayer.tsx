"use client";

import { useState } from "react";
import { Clock, Code, Heart, Maximize, Play, Share2, Volume2 } from "lucide-react";

export default function VideoPlayer({
  vimeoId,
  title,
  channel,
  poster,
}: {
  vimeoId: string;
  title: string;
  channel: string;
  poster: string;
}) {
  const [playing, setPlaying] = useState(false);
const embedUrl = `https://player.vimeo.com/video/${vimeoId}?wmode=opaque`;
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-slate-950">
      {playing ? (
        <iframe
          src={embedUrl}
          title={title}
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-center brightness-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/60" />

          {/* top bar (decorative) */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 text-white sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-emerald-600 text-sm font-extrabold shadow-md">
                S
              </div>
              <div>
                <p className="text-sm font-extrabold leading-snug drop-shadow-md sm:text-base">{title}</p>
                <p className="text-xs font-medium text-slate-300 drop-shadow-sm">{channel}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[Heart, Clock, Share2, Code].map((Icon, i) => (
                <span key={i} className="rounded-full bg-slate-950/60 p-2 backdrop-blur-md">
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          {/* bottom bar (decorative) */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-3 text-xs text-white">
            <div className="flex items-center gap-3">
              <Play className="h-4 w-4 fill-white" />
              <span className="font-mono text-[11px] text-slate-300">00:42</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Volume2 className="h-4 w-4" />
              <Maximize className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest text-sky-400">vimeo</span>
            </div>
          </div>

          {/* the one real button: covers the whole cover */}
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400 sm:h-20 sm:w-20">
              <Play aria-hidden className="ml-1 h-8 w-8 fill-slate-950 sm:h-10 sm:w-10" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
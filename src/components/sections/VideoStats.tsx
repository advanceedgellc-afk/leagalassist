import { video, stats } from "@/data/video";
import AnimatedCounter from "./AnimatedCounter";
import VideoPlayer from "./VideoPlayer";

type Meta = {
  thumbnail?: string;
  uploadDate?: string;
  description?: string;
  duration?: string;
};

/**
 * Fetch Vimeo metadata from Vimeo's oEmbed API.
 *
 * Cached for 24 hours so we don't request Vimeo metadata
 * on every page request.
 */
async function getVimeoMeta(id: string): Promise<Meta> {
  try {
    const vimeoUrl = `https://vimeo.com/${id}`;

    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
        vimeoUrl
      )}&width=1280`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!res.ok) {
      return {};
    }

    const data = await res.json();

    return {
      thumbnail: data.thumbnail_url,
      uploadDate: data.upload_date
        ? String(data.upload_date).slice(0, 10)
        : undefined,
      description: data.description || undefined,
      duration: data.duration
        ? `PT${data.duration}S`
        : undefined,
    };
  } catch {
    return {};
  }
}

export default async function VideoStats() {
  /**
   * Vimeo video ID
   *
   * https://player.vimeo.com/video/817092739?wmode=opaque
   *
   * ID = 817092739
   */
  const meta = await getVimeoMeta(video.vimeoId);

  const poster = meta.thumbnail || video.fallbackPoster;

  /**
   * VideoObject structured data for SEO.
   */
  const videoLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description:
      meta.description ||
      `${video.title} by ${video.channel}`,
    thumbnailUrl: poster,
    ...(meta.uploadDate && {
      uploadDate: meta.uploadDate,
    }),
    ...(meta.duration && {
      duration: meta.duration,
    }),
    embedUrl: `https://player.vimeo.com/video/${video.vimeoId}`,
  };

  return (
    <section
      aria-labelledby="video-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#FA8438] to-[#F77626] px-4 pb-16 pt-12 sm:px-6 sm:pb-24 lg:px-8"
    >
      {/* VideoObject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoLd),
        }}
      />

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Accessible heading */}
        <h2
          id="video-heading"
          className="sr-only"
        >
          Watch: {video.title}
        </h2>

        {/* Video */}
        <div className="mb-14 sm:mb-20">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xl shadow-slate-900/20 sm:p-5">
            <VideoPlayer
              vimeoId={video.vimeoId}
              title={video.title}
              channel={video.channel}
              poster={poster}
            />
          </div>
        </div>

        {/* Statistics */}
        <dl className="grid grid-cols-2 gap-8 text-center sm:gap-12 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group flex cursor-default flex-col-reverse items-center justify-center"
            >
              <dt className="text-xs font-extrabold uppercase tracking-widest text-[#0B2240] sm:text-sm">
                {s.label}
              </dt>

              <dd className="mb-2 font-serif text-4xl font-extrabold tracking-tight text-[#0B2240] transition-transform duration-300 group-hover:scale-105 sm:text-5xl lg:text-6xl">
                <AnimatedCounter
                  end={s.value}
                  suffix={s.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
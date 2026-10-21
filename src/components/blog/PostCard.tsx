import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  author?: string;
  category?: string;
  publishedAt?: string;
  mainImage?: { alt?: string; asset?: unknown };
  words?: number;
};

const fmtDate = (iso?: string) =>
  iso
    ? new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(iso))
    : "";

export default function PostCard({ post }: { post: PostSummary }) {
  const minutes = post.words ? Math.max(1, Math.round(post.words / 200)) : null;
  const img = post.mainImage?.asset ? urlFor(post.mainImage).width(800).height(520).fit("crop").url() : null;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/80 hover:shadow-2xl">
      <div>
        <div className="relative h-48 w-full overflow-hidden bg-[#0B2240] sm:h-52">
          {img && (
            <Image
              src={img}
              alt={post.mainImage?.alt || post.title}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-center opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          )}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {post.category && (
            <span className="absolute left-4 top-4 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-400 shadow-md backdrop-blur-md">
              {post.category}
            </span>
          )}
          {minutes && (
            <span className="absolute bottom-3 right-4 flex items-center gap-1 rounded-md bg-slate-950/40 px-2 py-0.5 text-[11px] font-semibold text-slate-200">
              <Clock aria-hidden className="h-3 w-3 text-amber-400" />
              {minutes} min read
            </span>
          )}
        </div>

        <div className="p-6 sm:p-7">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500">
            {post.author && (
              <span className="flex items-center gap-1.5 text-slate-700">
                <User aria-hidden className="h-3.5 w-3.5 text-amber-600" />
                {post.author}
              </span>
            )}
            {post.publishedAt && (
              <span className="flex items-center gap-1.5">
                <Calendar aria-hidden className="h-3.5 w-3.5 text-slate-400" />
                <time dateTime={post.publishedAt}>{fmtDate(post.publishedAt)}</time>
              </span>
            )}
          </div>

          <h3 className="mb-3 text-xl font-extrabold leading-snug text-[#0B2240] transition-colors group-hover:text-amber-700">
            {post.title}
          </h3>
          {post.excerpt && <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 px-6 pb-6 pt-4 text-xs font-extrabold text-[#0B2240] transition-colors group-hover:text-amber-600">
        <Link
          href={`/blog/${post.slug}`}
          className="uppercase tracking-wider after:absolute after:inset-0 after:content-['']"
        >
          Read Full Update
          <span className="sr-only">: {post.title}</span>
        </Link>
        <span
          aria-hidden
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all group-hover:bg-amber-500 group-hover:text-slate-950"
        >
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
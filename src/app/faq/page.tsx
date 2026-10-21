import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, Newspaper, PhoneCall, Sparkles, User } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PostCard, { type PostSummary } from "@/components/blog/PostCard";
import BookCallButton from "@/components/booking/BookCallButton";

export const revalidate = 60;

const PER_PAGE = 9;

/* Same shape as PostSummary, so PostCard works unchanged */
const blogIndexQuery = `{
  "posts": *[_type=="post" && defined(slug.current) && ($category == "" || category == $category) && ($q == "" || title match $q || excerpt match $q || pt::text(body) match $q)]
    | order(publishedAt desc) [$start...$end]{
      _id, title, "slug": slug.current, excerpt, author, category, publishedAt,
      mainImage{ ..., alt },
      "words": round(length(pt::text(body)) / 5)
    },
  "total": count(*[_type=="post" && defined(slug.current) && ($category == "" || category == $category) && ($q == "" || title match $q || excerpt match $q || pt::text(body) match $q)]),
  "categories": array::compact(array::unique(*[_type=="post" && defined(slug.current)].category))
}`;

type BlogData = { posts: PostSummary[]; total: number; categories: string[] };
type Props = { searchParams: Promise<{ category?: string; page?: string; q?: string }> };

async function getBlogData(category: string, page: number, q: string): Promise<BlogData> {
  const start = (page - 1) * PER_PAGE;
  try {
    return await client.fetch<BlogData>(
      blogIndexQuery,
      { category, q: q ? `${q}*` : "", start, end: start + PER_PAGE },
      { next: { revalidate: 60 } }
    );
  } catch (e) {
    console.error("Sanity fetch failed:", e);
    return { posts: [], total: 0, categories: [] };
  }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { category, page, q } = await searchParams;
  const title = category ? `${category} Articles | Legal Assist Blog` : "Blog: News & Insights | Legal Assist";
  const description =
    "Insights on medical record review, deposition summarization, e-discovery and litigation support from the Legal Assist team.";
  const isFiltered = Boolean(category) || Boolean(q) || (page && page !== "1");
  return {
    title,
    description,
    alternates: { canonical: "/blog" },
    // Keep filtered / paginated views out of the index; posts are still crawled via links
    robots: isFiltered ? { index: false, follow: true } : undefined,
    openGraph: { type: "website", title, description, url: "/blog" },
  };
}

const fmtDate = (iso?: string) =>
  iso
    ? new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(iso))
    : "";

function hrefFor(category: string, page: number, search = "") {
  const q = new URLSearchParams();
  if (category) q.set("category", category);
  if (search) q.set("q", search);
  if (page > 1) q.set("page", String(page));
  const s = q.toString();
  return s ? `/blog?${s}` : "/blog";
}

export default async function BlogPage({ searchParams }: Props) {
  const sp = await searchParams;
  const category = sp.category?.trim() ?? "";
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);
  const q = sp.q?.trim().slice(0, 80) ?? "";

  const { posts, total, categories } = await getBlogData(category, page, q);
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));

  // Feature the newest post only on the unfiltered first page
  const showFeatured = !category && !q && page === 1 && posts.length > 0;
  const featured = showFeatured ? posts[0] : null;
  const rest = showFeatured ? posts.slice(1) : posts;

  return (
    <main className="bg-[#EEF2F8]">
      {/* ============ HERO ============ */}
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-white to-[#EEF2F8] pb-10 pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#0B2240]">
            <Link href="/" className="hover:underline">Home</Link> / <span className="text-slate-500">Blog</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-800 shadow-sm">
              <Newspaper aria-hidden className="h-3.5 w-3.5 text-amber-600" />
              <span>Legal Assist Blog</span>
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0B2240] sm:text-4xl lg:text-5xl">
              News, Insights &amp; Updates
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Practical guidance on medical record review, deposition summarization, e-discovery and litigation
              support, written by our legal support specialists.
            </p>
          </div>

          {/* Category filter */}
          {categories.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-2" role="list" aria-label="Filter by category">
              <CategoryPill href="/blog" active={!category && !q} label="All" />
              {categories.map((c) => (
                <CategoryPill key={c} href={hrefFor(c, 1)} active={category === c} label={c} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {q && (
            <p className="mb-8 text-center text-sm text-slate-600">
              {total} result{total === 1 ? "" : "s"} for <strong className="text-[#0B2240]">“{q}”</strong> ·{" "}
              <Link href="/blog" className="font-bold underline underline-offset-4 hover:text-amber-600">Clear search</Link>
            </p>
          )}

          {posts.length === 0 ? (
            <EmptyState category={category} />
          ) : (
            <>
              {featured && <FeaturedPost post={featured} />}

              {rest.length > 0 && (
                <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${featured ? "mt-12" : ""}`}>
                  {rest.map((p) => (
                    <PostCard key={p._id} post={p} />
                  ))}
                </div>
              )}

              {totalPages > 1 && <Pagination category={category} q={q} page={page} totalPages={totalPages} />}
            </>
          )}

          {/* ============ CTA ============ */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-800 bg-gradient-to-r from-[#0B2240] via-[#10243E] to-[#0B2240] p-8 text-white shadow-2xl sm:mt-20 sm:p-10 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
                <Sparkles aria-hidden className="h-4 w-4" />
                Stay ahead in legal support
              </p>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to optimize your law firm&apos;s operations?</h2>
              <p className="max-w-xl text-sm text-slate-300">
                Connect with our team of legal specialists to implement e-Discovery, deposition summarization, and
                litigation support tailored to your practice.
              </p>
            </div>
            <BookCallButton className="flex shrink-0 cursor-pointer items-center gap-2 rounded-2xl bg-amber-500 px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-amber-400 active:scale-[0.98] motion-reduce:hover:scale-100 sm:text-sm">
              <PhoneCall aria-hidden className="h-4 w-4" />
              Schedule A Free Call
            </BookCallButton>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function CategoryPill({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      role="listitem"
      aria-current={active ? "page" : undefined}
      className={`rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition ${
        active
          ? "border-[#0B2240] bg-[#0B2240] text-white shadow-md"
          : "border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-[#0B2240]"
      }`}
    >
      {label}
    </Link>
  );
}

function FeaturedPost({ post }: { post: PostSummary }) {
  const img = post.mainImage?.asset ? urlFor(post.mainImage).width(1200).height(760).fit("crop").url() : null;
  const minutes = post.words ? Math.max(1, Math.round(post.words / 200)) : null;

  return (
    <article className="group relative grid overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-amber-400/80 hover:shadow-2xl lg:grid-cols-2">
      <div className="relative h-64 bg-[#0B2240] sm:h-80 lg:h-full lg:min-h-[420px]">
        {img && (
          <Image
            src={img}
            alt={post.mainImage?.alt || post.title}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
        )}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-amber-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
          Latest
        </span>
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-10">
        {post.category && (
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-amber-700">{post.category}</p>
        )}
        <h2 className="mb-4 text-2xl font-extrabold leading-snug text-[#0B2240] transition-colors group-hover:text-amber-700 sm:text-3xl">
          {post.title}
        </h2>
        {post.excerpt && <p className="mb-6 line-clamp-4 text-base leading-relaxed text-slate-600">{post.excerpt}</p>}

        <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
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
          {minutes && (
            <span className="flex items-center gap-1.5">
              <Clock aria-hidden className="h-3.5 w-3.5 text-slate-400" />
              {minutes} min read
            </span>
          )}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#0B2240] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition after:absolute after:inset-0 after:content-[''] group-hover:bg-amber-500 group-hover:text-slate-950"
        >
          Read Article
          <span className="sr-only">: {post.title}</span>
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

function Pagination({ category, q, page, totalPages }: { category: string; q: string; page: number; totalPages: number }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const base = "flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-bold transition";

  return (
    <nav aria-label="Blog pagination" className="mt-14 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        <Link href={hrefFor(category, page - 1, q)} rel="prev" className={`${base} border-slate-200 bg-white text-[#0B2240] hover:border-amber-400`}>
          <ChevronLeft aria-hidden className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Link>
      ) : null}

      {pages.map((n) => (
        <Link
          key={n}
          href={hrefFor(category, n, q)}
          aria-current={n === page ? "page" : undefined}
          className={`${base} ${
            n === page
              ? "border-[#0B2240] bg-[#0B2240] text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-[#0B2240]"
          }`}
        >
          {n}
        </Link>
      ))}

      {page < totalPages ? (
        <Link href={hrefFor(category, page + 1, q)} rel="next" className={`${base} border-slate-200 bg-white text-[#0B2240] hover:border-amber-400`}>
          <ChevronRight aria-hidden className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Link>
      ) : null}
    </nav>
  );
}

function EmptyState({ category }: { category: string }) {
  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <Newspaper aria-hidden className="mx-auto mb-4 h-8 w-8 text-amber-500" />
      <h2 className="mb-2 text-xl font-extrabold text-[#0B2240]">
        {category ? `No articles in “${category}” yet` : "No articles yet"}
      </h2>
      <p className="mb-6 text-sm text-slate-600">New insights are on the way. Check back soon.</p>
      {category && (
        <Link href="/blog" className="text-sm font-bold text-[#0B2240] underline underline-offset-4 hover:text-amber-600">
          View all articles
        </Link>
      )}
    </div>
  );
}
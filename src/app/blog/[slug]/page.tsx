import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { ChevronLeft, Clock, ImageIcon, LayoutGrid, User } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { portableTextComponents } from "@/components/blog/Portabletextcomponents ";
import BlogSidebar from "@/components/blog/BlogSidebar";
import ShareButtons from "@/components/blog/Sharebuttons";

export const revalidate = 60;

const postQuery = `*[_type=="post" && slug.current==$slug][0]{
  _id, title, excerpt, body, author, category, publishedAt, _updatedAt,
  seoTitle, seoDescription, mainImage{ ..., alt },
  "words": round(length(pt::text(body)) / 5),
  "related": *[_type=="post" && defined(slug.current) && _id != ^._id && category == ^.category]
    | order(publishedAt desc)[0...3]{ _id, title, "slug": slug.current, publishedAt, mainImage{ ..., alt } },
  "latest": *[_type=="post" && defined(slug.current) && _id != ^._id]
    | order(publishedAt desc)[0...3]{ _id, title, "slug": slug.current, publishedAt, mainImage{ ..., alt } }
}`;

type MiniPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  mainImage?: { alt?: string; asset?: unknown };
};

type Props = { params: Promise<{ slug: string }> };

const fmtDate = (iso?: string) =>
  iso ? new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso)) : "";

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(`*[_type=="post" && defined(slug.current)].slug.current`);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await client.fetch(postQuery, { slug });
  if (!p) return {};
  const img = p.mainImage?.asset ? urlFor(p.mainImage).width(1200).height(630).url() : undefined;
  return {
    title: p.seoTitle || p.title,
    description: p.seoDescription || p.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: p.seoTitle || p.title,
      description: p.seoDescription || p.excerpt,
      publishedTime: p.publishedAt,
      images: img ? [img] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = await client.fetch(postQuery, { slug });
  if (!p) notFound();

  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const url = `${base}/blog/${slug}`;
  const img = p.mainImage?.asset ? urlFor(p.mainImage).width(1200).height(630).url() : null;
  const minutes = p.words ? Math.max(1, Math.round(p.words / 200)) : null;
  // Same-category posts first; fall back to the newest posts
  const related: MiniPost[] = p.related?.length ? p.related : p.latest ?? [];

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.publishedAt,
    dateModified: p._updatedAt,
    mainEntityOfPage: url,
    image: img ?? undefined,
    author: { "@type": "Person", name: p.author || "Legal Assist" },
    publisher: { "@type": "Organization", name: "Legal Assist", url: base },
  };

  return (
    <main className="bg-white font-serif text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* ================= MAIN COLUMN ================= */}
          <article className="lg:col-span-8">
            {/* Back / all posts */}
            <div className="mb-8 flex items-center justify-between text-slate-500">
              <Link href="/blog" aria-label="Back to blog" className="rounded p-1 transition hover:text-[#0B2240]">
                <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
              </Link>
              <Link href="/blog" aria-label="All articles" className="rounded p-1 transition hover:text-[#0B2240]">
                <LayoutGrid className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-[15px]">
              <p className="flex flex-wrap items-center gap-1.5 text-amber-800">
                Published by
                <User aria-hidden className="h-4 w-4 fill-amber-800" />
                <span className="text-slate-800">{p.author || "Legal Assist"}</span>
                {p.publishedAt && (
                  <>
                    on
                    <Clock aria-hidden className="h-4 w-4" />
                    <time dateTime={p.publishedAt}>{fmtDate(p.publishedAt)}</time>
                  </>
                )}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                {minutes && <span>{minutes} min read</span>}
                {p.category && (
                  <Link
                    href={`/blog?category=${encodeURIComponent(p.category)}`}
                    className="transition hover:text-[#0B2240]"
                  >
                    {p.category} ▾
                  </Link>
                )}
              </div>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-[#0B2240] sm:text-4xl">{p.title}</h1>

            {img && (
              <Image
                src={img}
                alt={p.mainImage?.alt || p.title}
                width={1200}
                height={630}
                priority
                className="mt-8 h-auto w-full rounded-lg"
              />
            )}

            {/* Body */}
            <div className="mt-8 [&_p]:mb-5 [&_p]:text-[17px] [&_p]:leading-[1.75]">
              {p.body && <PortableText value={p.body} components={portableTextComponents} />}
            </div>

            {/* Share */}
            <div className="mt-10 border-t border-slate-200 pt-6">
              <ShareButtons url={url} title={p.title} />
            </div>

            {/* Author box */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0B2240] text-xl font-bold uppercase text-white shadow-md ring-4 ring-white">
                {(p.author || "L").charAt(0)}
              </div>
              <div className="flex-1 rounded bg-slate-50 px-5 py-5 text-[#0B2240]">
                {p.author || "Legal Assist"}
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <section className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="related-heading">
                <h2 id="related-heading" className="mb-8 text-lg font-bold text-[#0B2240]">
                  Related posts
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {related.map((r) => (
                    <RelatedCard key={r._id} post={r} />
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* ================= SIDEBAR ================= */}
          <aside className="lg:col-span-4 lg:pt-14">
            <BlogSidebar currentSlug={slug} />
          </aside>
        </div>
      </div>
    </main>
  );
}

function RelatedCard({ post }: { post: MiniPost }) {
  const img = post.mainImage?.asset ? urlFor(post.mainImage).width(600).height(400).fit("crop").url() : null;
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative mb-4 flex aspect-[3/2] items-center justify-center overflow-hidden rounded bg-slate-50">
        {img ? (
          <Image
            src={img}
            alt={post.mainImage?.alt || post.title}
            fill
            sizes="(min-width: 640px) 250px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <ImageIcon aria-hidden className="h-10 w-10 text-slate-300" strokeWidth={1.25} />
        )}
      </div>
      {post.publishedAt && (
        <time dateTime={post.publishedAt} className="text-[11px] text-slate-500">
          {fmtDate(post.publishedAt)}
        </time>
      )}
      <h3 className="mt-2 text-[17px] font-bold leading-snug text-[#0B2240] transition group-hover:text-amber-700">
        {post.title}
      </h3>
    </Link>
  );
}
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

/* ------------------------------------------------------------------ */
/*  "About Us" card: edit here. Put the photo in /public/team/         */
/* ------------------------------------------------------------------ */
const ABOUT = {
  name: "Sarah R. Stuhldreher",
  role: "Partner",
  photo: "/about/sarah-s.webp",
  bio: "Sarah is a partner at Legal Assist, bringing with her extensive experience in business development and a passion for building lasting business connections. With a keen focus on client satisfaction, Sarah is committed to delivering high-quality services and ensuring that clients feel that Legal Assist is an extension of their own team.",
};

const sidebarQuery = `{
  "latest": *[_type=="post" && defined(slug.current)] | order(publishedAt desc)[0...5]{
    _id, title, "slug": slug.current
  },
  "categories": array::compact(array::unique(*[_type=="post" && defined(slug.current)].category))
}`;

type SidebarData = {
  latest: { _id: string; title: string; slug: string }[];
  categories: string[];
};

async function getSidebar(): Promise<SidebarData> {
  try {
    return await client.fetch<SidebarData>(sidebarQuery, {}, { next: { revalidate: 60 } });
  } catch (e) {
    console.error("Sidebar fetch failed:", e);
    return { latest: [], categories: [] };
  }
}

export default async function BlogSidebar({ currentSlug }: { currentSlug?: string }) {
  const { latest, categories } = await getSidebar();

  return (
    <div className="space-y-10 font-serif">
      {/* Search: submits to /blog?q=... */}
      <form action="/blog" method="get" role="search" className="flex gap-2">
        <label htmlFor="blog-search" className="sr-only">Search articles</label>
        <input
          id="blog-search"
          name="q"
          type="search"
          className="min-w-0 flex-1 border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#0B2240]"
        />
        <button
          type="submit"
          className="rounded bg-slate-800 px-4 py-2.5 text-sm text-white transition hover:bg-[#0B2240]"
        >
          Search
        </button>
      </form>

      {/* Categories */}
      {categories.length > 0 && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Categories List</h2>
          <ul className="space-y-1 bg-[#3B8DDB] px-4 py-3">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  href={`/blog?category=${encodeURIComponent(c)}`}
                  className="flex items-center gap-3 py-1.5 text-[15px] text-white transition hover:text-amber-200"
                >
                  <span aria-hidden className="h-1.5 w-1.5 bg-white" />
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Latest posts */}
      {latest.length > 0 && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Latest Posts</h2>
          <ul className="space-y-4">
            {latest.map((post) => {
              const active = post.slug === currentSlug;
              return (
                <li key={post._id} className="border-r-4 border-[#3B8DDB]">
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`mr-3 block border-b border-slate-100 px-3 py-3 text-[15px] leading-relaxed transition hover:text-[#3B8DDB] ${
                      active ? "font-bold text-[#0B2240]" : "text-slate-800"
                    }`}
                  >
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* About us */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">About Us</h2>
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-100">
          <Image src={ABOUT.photo} alt={ABOUT.name} fill sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" />
        </div>
        <p className="mt-4 text-lg font-bold text-[#0B2240]">{ABOUT.name}</p>
        <p className="mt-2 text-[15px] text-amber-600">{ABOUT.role}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-800">{ABOUT.bio}</p>
      </div>
    </div>
  );
}
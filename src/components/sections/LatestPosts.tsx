import Link from "next/link";
import { Newspaper, PhoneCall, Sparkles } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";
import PostCard, { type PostSummary } from "@/components/blog/PostCard";
import BookCallButton from "../booking/BookCallButton";

async function getPosts(): Promise<PostSummary[]> {
  try {
    return await client.fetch(latestPostsQuery, { limit: 3 }, { next: { revalidate: 60 } });
  } catch (e) {
    console.error("Sanity fetch failed:", e);
    return [];
  }
}

export default async function LatestPosts() {
  const posts = await getPosts();
  if (posts.length === 0) return null;

  return (
    <section id="news" className="scroll-mt-24 bg-[#EEF2F8] py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-800 shadow-sm">
            <Newspaper aria-hidden className="h-3.5 w-3.5 text-amber-600" />
            <span>News &amp; Updates</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0B2240] sm:text-4xl lg:text-5xl">
            News &amp; Updates
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore the latest happenings at Legal Assist: breaking news, feature updates, and insights to keep you at
            the forefront of legal support innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p._id} post={p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm font-bold text-[#0B2240] underline underline-offset-4 hover:text-amber-600">
            View all articles
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-800 bg-gradient-to-r from-[#0B2240] via-[#10243E] to-[#0B2240] p-8 text-white shadow-2xl sm:mt-20 sm:p-10 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
              <Sparkles aria-hidden className="h-4 w-4" />
              Stay ahead in legal support
            </p>
            <h3 className="text-2xl font-extrabold sm:text-3xl">Ready to optimize your law firm&apos;s operations?</h3>
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
  );
}
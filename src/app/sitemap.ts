import type { MetadataRoute } from "next";
import { services, serviceHref } from "@/data/services";
import { client } from "@/sanity/lib/client";

// Rebuild the sitemap at most once an hour so new blog posts appear without a redeploy.
export const revalidate = 3600;

const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.legalassistpro.com").replace(/\/$/, "");

const staticPages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/verticals", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
];

async function getPosts(): Promise<{ slug: string; _updatedAt: string }[]> {
  try {
    return await client.fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`);
  } catch {
    // If Sanity is unreachable or env vars are missing, still ship a sitemap instead of failing the build.
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const now = new Date();

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${base}${serviceHref(s.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
// import type { MetadataRoute } from "next";
// import { services } from "@/data/services";
// // import { client } from "@/sanity/lib/client";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const base = process.env.NEXT_PUBLIC_SITE_URL!;
//   const posts: { slug: string; _updatedAt: string }[] =
//     // await client.fetch(`*[_type=="post" && defined(slug.current)]{"slug":slug.current,_updatedAt}`);
//   return [
//     { url: base, priority: 1 },
//     { url: `${base}/blog`, priority: 0.8 },
//     ...services.map((s) => ({ url: `${base}${serviceHref(s.slug)}`, priority: 0.9 })),
//     ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p._updatedAt })),
//   ];
// }
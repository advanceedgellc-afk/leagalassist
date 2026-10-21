export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/studio" },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
export const latestPostsQuery = `
*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...$limit]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  category,
  publishedAt,
  mainImage{ ..., alt },
  "words": length(string::split(pt::text(body), " "))
}`;
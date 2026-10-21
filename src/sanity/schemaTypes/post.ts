import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "author", type: "string" }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ["e-Discovery", "Litigation Support", "Lead Management", "Medical Record Review", "Legal Tech", "News"],
      },
    }),
    defineField({ name: "publishedAt", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.max(160).warning("Keep under 160 characters for SEO"),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt text" })],
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "seoTitle", type: "string", title: "SEO title" }),
    defineField({ name: "seoDescription", type: "text", rows: 2, title: "SEO description" }),
  ],
  preview: {
    select: { title: "title", subtitle: "author", media: "mainImage" },
  },
  orderings: [
    { title: "Newest first", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
});
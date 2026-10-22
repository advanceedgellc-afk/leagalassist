import Image from "next/image";
import Link from "next/link";
import type { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

/**
 * Styles for the Sanity "Body" field.
 * Works without @tailwindcss/typography, so spacing, headings and lists
 * always render correctly.
 */
export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-base leading-8 text-slate-700 sm:text-[17px]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 scroll-mt-24 text-2xl font-extrabold leading-snug text-[#0B2240] sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-10 text-xl font-bold leading-snug text-[#0B2240] sm:text-2xl">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="mb-3 mt-8 text-lg font-bold text-[#0B2240]">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50/60 px-6 py-4 text-lg italic leading-8 text-slate-700">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-8 text-slate-700 marker:text-amber-500 sm:text-[17px]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-base leading-8 text-slate-700 marker:font-bold marker:text-[#0B2240] sm:text-[17px]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-4">{children}</span>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-[#0B2240]">{children}</code>
    ),
    link: ({ value, children }) => {
      const href: string = value?.href || "#";
      const isInternal = href.startsWith("/");
      const cls = "font-semibold text-amber-700 underline underline-offset-4 hover:text-[#0B2240]";
      return isInternal ? (
        <Link href={href} className={cls}>{children}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
      );
    },
  },

  types: {
    // Images inserted in the Body with the "Image" button
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1400).fit("max").auto("format").url()}
            alt={value.alt || ""}
            width={1400}
            height={800}
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};
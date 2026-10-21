import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, serviceHref } from "@/data/services";

export function getService(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return s;
}

export function serviceMetadata(slug: string): Metadata {
  const s = getService(slug);
  const url = serviceHref(s.slug);
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: "website", title: s.metaTitle, description: s.metaDescription, url },
  };
}
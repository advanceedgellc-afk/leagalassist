import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <article className="prose mx-auto max-w-3xl px-6 py-14"><p>Privacy policy content goes here.</p></article>
    </>
  );
}
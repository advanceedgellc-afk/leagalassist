import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Terms() {
  return (
    <>
      <PageHero title="Terms and Conditions" />
      <article className="prose mx-auto max-w-3xl px-6 py-14">
        <p>Terms and conditions content goes here.</p>
      </article>
    </>
  );
}
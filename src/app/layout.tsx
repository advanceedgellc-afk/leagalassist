import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import BookingProvider from "@/components/booking/BookingProvider";
const SITE = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Legal Assist | Legal Support Services, 24/7", template: "%s | Legal Assist" },
  description: "Cost-effective legal support with 24/7 turnaround. Save up to 40% on eDiscovery, deposition summarization, record retrieval and more.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Legal Assist", images: ["/og.png"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org", "@type": "LegalService",
    name: "Legal Assist", url: SITE, telephone: "+1-800-350-4672",
    address: { "@type": "PostalAddress", addressLocality: "Houston", addressRegion: "TX" },
  };
  return (
    <html lang="en">
  <body suppressHydrationWarning>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
    <BookingProvider>
    <Header />
    <div className="h-0" aria-hidden />
    <main>{children}</main>
    <Footer />
    </BookingProvider>
  </body>
</html>
  );
}
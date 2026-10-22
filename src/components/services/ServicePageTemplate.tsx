import SectionSlot from "@/components/SectionSlot";
import ServiceHero from "@/components/services/ServiceHero";
import { getService } from "@/lib/services";
import {  serviceHref } from "@/data/services";
import { SITE_URL } from "@/lib/site-url";
export default function ServicePageTemplate({
  slug,
  children,
}: {
  slug: string;
  children?: React.ReactNode; // your custom sections; placeholders show if empty
}) {
  const s = getService(slug);
  const base = SITE_URL;
  const pageUrl = `${base}${serviceHref(s.slug)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      description: s.metaDescription,
      url: pageUrl,
      provider: { "@type": "LegalService", name: "Legal Assist", url: base },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Services", item: `${base}/services` },
        { "@type": "ListItem", position: 3, name: s.title, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero title={s.title} />

      {children ?? (
        <>
          <SectionSlot name={`${s.title}: overview`} />
          <SectionSlot name={`${s.title}: process steps`} />
          <SectionSlot name={`${s.title}: FAQ`} />
        </>
      )}

      {/* Other services: internal linking helps SEO */}
      {/* <section className="mx-auto max-w-6xl px-6 py-1">
        <h2 className="text-2xl font-bold text-[#0b2a5b]">Explore Our Other Services</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((x) => x.slug !== s.slug)
            .slice(0, 4)
            .map((x) => (
              <li key={x.slug}>
                <Link
                  href={serviceHref(x.slug)}
                  className="block rounded-lg border p-4 text-sm font-semibold text-[#0b2a5b] hover:shadow-md"
                >
                  {x.title}
                </Link>
              </li>
            ))}
        </ul>
      </section> */}

     
    </>
  );
}
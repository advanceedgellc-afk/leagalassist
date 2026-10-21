import { MassTortIllustration } from "./Illustrations";

const b = "font-semibold text-blue-700";
const p = "text-sm leading-relaxed text-slate-600 md:text-base";

export default function MassTort() {
  return (
    <section className="relative bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:order-2 lg:col-span-7">
            <h2 className="font-serif text-2xl font-bold leading-tight text-[#0f2b5c] md:text-4xl">
              Medical Record Review in Mass Tort Litigation: How Legal Assist Helps Build Strong Cases
            </h2>

            <p className={p}>
              Medical record review plays a crucial role in mass tort litigation. As cases involving{" "}
              <span className={b}>defective drugs, medical devices, and other products</span> can potentially affect
              thousands of people, medical record review becomes a crucial factor in determining the outcome of the case.
            </p>

            <p className={p}>
              Medical record review helps in establishing{" "}
              <span className="font-semibold text-amber-600">proof of use and proof of injury</span>, which are the two
              most important aspects of mass tort litigation. By analyzing medical records, our team of experienced
              medical professionals can identify the injuries caused by the product in question and establish a{" "}
              <span className={b}>causal link between the product and the injury</span>.
            </p>

            <p className={p}>
              In mass tort litigation, the sheer volume of medical records can be overwhelming, and it can be challenging
              to identify and review all relevant records in a timely and cost-effective manner. That&apos;s where Legal
              Assist comes in. Our team has the expertise and experience needed to{" "}
              <span className={b}>efficiently and accurately review large volumes of medical records</span>, ensuring
              that all necessary records are reviewed and analyzed.
            </p>

            <p className={p}>
              By providing <span className={b}>detailed summaries and customized reports</span>, we help our clients
              understand the key findings and conclusions of the medical record review. This not only helps in
              establishing proof of injury and use but also assists in building a strong case for compensation.
            </p>

            {/* summary callout */}
            <p className="rounded-xl border-l-4 border-amber-500 bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-700 shadow-sm md:text-base">
              <span className="font-bold text-[#0f2b5c]">In summary,</span> medical record review is an essential aspect
              of mass tort litigation. It helps in establishing proof of use and proof of injury, which are critical in
              determining the outcome of the case. With our expertise and experience, Legal Assist is well-equipped to
              handle the complex and time-consuming task of medical record review, ensuring that our clients have the
              information they need to succeed in their case.
            </p>
          </div>

          <div className="lg:order-1 lg:col-span-5">
            <MassTortIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
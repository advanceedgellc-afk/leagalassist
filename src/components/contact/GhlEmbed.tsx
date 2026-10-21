"use client";

import Script from "next/script";

type Props = {
  type: "form" | "calendar";
  /** The GHL form ID or calendar ID. Leave empty to show a placeholder. */
  id: string;
  minHeight?: number;
  title?: string;
};

/**
 * Embeds a GoHighLevel (LeadConnector) form or booking calendar.
 *
 * Paste only the ID, not the whole embed code. You'll find it at the end of
 * the iframe src that GHL gives you:
 *   form:     https://api.advanceedgellc.com/widget/form/<FORM_ID>
 *   calendar: https://api.advanceedgellc.com/widget/booking/<CALENDAR_ID>
 *
 * BASE is your white-label GHL domain. Change it here if that ever changes.
 */
const BASE = "https://api.advanceedgellc.com";

export default function GhlEmbed({ type, id, minHeight = 575, title }: Props) {
  if (!id) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center ${
          type === "form" ? "border-slate-700 text-slate-400" : "border-slate-300 text-slate-500"
        }`}
        style={{ minHeight: Math.min(minHeight, 360) }}
      >
        <p className="text-sm font-bold">GHL {type === "form" ? "form" : "calendar"} goes here</p>
        <p className="mt-1 text-xs">
          Add the {type === "form" ? "GHL_FORM_ID" : "GHL_CALENDAR_ID"} in app/contact/page.tsx
        </p>
      </div>
    );
  }

  return (
    <>
      {type === "form" ? (
        <iframe
          src={`${BASE}/widget/form/${id}`}
          id={`inline-${id}`}
          title={title ?? "Contact form"}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={title ?? "Legal Form"}
          data-height={String(minHeight)}
          data-layout-iframe-id={`inline-${id}`}
          data-form-id={id}
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          className="w-full rounded-xl border-0"
          style={{ minHeight: 575, height: minHeight }}
        />
      ) : (
        <iframe
          src={`${BASE}/widget/booking/${id}`}
          id={`${id}_calendar`}
          title={title ?? "Book a consultation"}
          allow="payment"
          scrolling="no"
          className="w-full rounded-xl border-0"
          style={{ minHeight, overflow: "hidden" }}
        />
      )}

      {/* GHL's script auto-resizes the iframe to fit its content.
          A fixed id makes Next.js load it only once, even with both embeds on the page. */}
      <Script id="ghl-form-embed" src={`${BASE}/js/form_embed.js`} strategy="afterInteractive" />
    </>
  );
}
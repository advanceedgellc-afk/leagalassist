/** The public site address, without a trailing slash.
 *  Set NEXT_PUBLIC_SITE_URL in Vercel (Settings → Environment Variables) and in .env.local. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://legalassistpro.com").replace(/\/+$/, "");
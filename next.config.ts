import type { NextConfig } from "next";
import { services } from "./src/data/services";

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },

  async redirects() {
    return services
      .filter((s) => s.slug && s.slug.trim() !== "")
      .map((s) => ({
        source: `/${s.slug}`,
        destination: `/services/${s.slug}`,
        permanent: true,
      }));
  },
};

export default config;
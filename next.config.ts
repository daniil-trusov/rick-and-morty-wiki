import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        // optional pathname pattern, e.g. to allow all paths under /api/character/
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;

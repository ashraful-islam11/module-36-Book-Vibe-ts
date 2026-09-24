import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "**",
        hostname: "i.ibb.co.com",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
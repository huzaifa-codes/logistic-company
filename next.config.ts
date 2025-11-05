import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // ✅ allow external images from Unsplash
  },
};

export default nextConfig;

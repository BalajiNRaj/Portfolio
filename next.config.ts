import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@radix-ui/themes', '@radix-ui/colors']
  }
};

export default nextConfig;

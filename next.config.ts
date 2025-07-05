import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Important for Vercel App Router deployments
  reactStrictMode: true,
  experimental: {
  },
};

export default nextConfig;

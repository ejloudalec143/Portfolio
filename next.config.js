/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // <- ✅ required for /app
  },
};

export default nextConfig;
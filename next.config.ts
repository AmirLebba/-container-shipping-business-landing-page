/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost"],
    formats: ["image/webp", "image/avif"],
  },
  env: {
    CUSTOM_KEY: "my-value",
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;

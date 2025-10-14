/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    formats: ["image/webp", "image/avif"],
  },
  env: {
    CUSTOM_KEY: "my-value",
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;

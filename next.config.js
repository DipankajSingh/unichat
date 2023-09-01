/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["icons8.com","pub-static.fotor.com"],
  },
};

module.exports = nextConfig;

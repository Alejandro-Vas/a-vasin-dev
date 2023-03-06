/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactStrictMode: true,
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

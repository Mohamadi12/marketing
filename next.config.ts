import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "wordpress-1364048-5022361.cloudwaysapps.com",
      }
    ]
  }
};

export default nextConfig;

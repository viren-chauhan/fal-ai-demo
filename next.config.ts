import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'encrypted-tbn0.gstatic.com',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
};

module.exports = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
};

export default nextConfig;

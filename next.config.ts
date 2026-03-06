import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;

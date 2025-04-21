import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ This disables ESLint during production builds (like on Vercel)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

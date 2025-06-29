import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  webpack: (config, { dev }) => {
    // Optimize webpack caching to reduce serialization warnings
    if (!dev) {
      config.cache = {
        type: 'filesystem',
        compression: 'gzip',
        maxAge: 172800000, // 2 days
      }
    }
    return config
  },
}

export default nextConfig

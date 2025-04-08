import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.pravatar.cc",
        protocol: "https",
      },
    ],
  },
}

export default nextConfig

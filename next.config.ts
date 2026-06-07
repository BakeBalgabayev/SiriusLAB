import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/instruction",
        destination: "/instruction/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

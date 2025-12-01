import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    domains: ["m.media-amazon.com", "upload.wikimedia.org", "i0.wp.com"],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

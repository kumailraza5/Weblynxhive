import type { NextConfig } from "next";

// Next.js exports the Render site; the existing Sites build uses vite.config.ts.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

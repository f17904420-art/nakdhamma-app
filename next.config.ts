import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone mode when building inside Docker, default for Vercel
  output: process.env.DOCKER_BUILD === "1" ? "standalone" : undefined,
};

export default nextConfig;

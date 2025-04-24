import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // TypeScriptのエラーを無視してビルド
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Since GitHub Pages usually hosts on <username>.github.io/<repo-name>,
  // we keep the basePath configurable if deployed to a subpath.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;


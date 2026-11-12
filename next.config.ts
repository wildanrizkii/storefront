import type { NextConfig } from "next";
import { withRedact } from "@tanstack/redact/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default withRedact(nextConfig);

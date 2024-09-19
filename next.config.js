/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;

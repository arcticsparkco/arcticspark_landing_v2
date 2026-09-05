/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: process.env.ASSET_PREFIX ?? "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

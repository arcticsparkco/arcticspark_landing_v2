/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "https://storage.googleapis.com/arcticspark-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

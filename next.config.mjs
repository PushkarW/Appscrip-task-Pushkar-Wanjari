/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;

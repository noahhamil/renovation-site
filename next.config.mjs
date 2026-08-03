/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Keep images unoptimized for faster dev builds (optimized in production)
  images: {
    unoptimized: true,
  },
}

export default nextConfig


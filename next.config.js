/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.cdnlogo.com",
      },
    ],
  },
}

module.exports = nextConfig

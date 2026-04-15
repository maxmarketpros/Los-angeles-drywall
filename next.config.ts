import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/drywall-services-beverly-hills-ca",
        destination: "/areas/beverly-hills",
        permanent: true,
      },
      {
        source: "/framing-carpentry-los-angeles-ca",
        destination: "/services/residential-framing",
        permanent: true,
      },
      {
        source: "/exterior-painting-stucco-beverly-hills-ca",
        destination: "/services/exterior-painting",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;

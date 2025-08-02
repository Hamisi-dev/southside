import type { NextConfig } from "next";

// Next.js configuration for the Southside project
const nextConfig: NextConfig = {
  // Configure image domains to allow Next.js Image component to load images from external sources
  images: {
    // Allow images from Sanity CDN - this is required for Next.js Image component
    // to load images from our Sanity CMS
    domains: ['cdn.sanity.io'],
    
    // Alternative modern configuration (remotePatterns) - more secure and flexible
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**', // Only allow images from the /images path
      },
    ],
  },
};

export default nextConfig;

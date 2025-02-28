/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'georgiiparla.github.io',
            pathname: '/mmxFront/public/**', // Optionally restrict to specific paths
          },
        ],
      },
};

export default nextConfig;

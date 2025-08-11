// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'georgiiparla.github.io',
//             pathname: '/mmxFront/public/**', // Optionally restrict to specific paths
//           },
//         ],
//       },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'georgiiparla.github.io',
        // This allows any path on the domain
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

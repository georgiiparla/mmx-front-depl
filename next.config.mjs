/** @type {import('next').NextConfig} */

/* This entire block is now commented out
const nextConfig = {
     images: {
         remotePatterns: [
           {
             protocol: 'https',
             hostname: 'georgiiparla.github.io',
             pathname: '/mmxFront/public/**',
           },
         ],
       },
};
*/


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'georgiiparla.github.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'symfony.com',
      },
      {
        protocol: 'https',
        hostname: 'images.seeklogo.com',
      },
      {
        protocol: 'https',
        hostname: 'mariadb.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mongodb.com',
      },
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
      },
    ],
  },
};

export default nextConfig;

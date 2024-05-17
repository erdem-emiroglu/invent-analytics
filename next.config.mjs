/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  sassOptions: {
    prependData: `@import "./src/styles/variables.scss";`,
  },
};

export default nextConfig;

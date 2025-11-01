/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ensure Three.js is only loaded once by aliasing to a single instance
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        three: 'three',
      };
    }
    return config;
  },
};

export default nextConfig;

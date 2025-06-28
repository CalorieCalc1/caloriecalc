/**
 * Next.js configuration with MDX support
 * @type {import('next').NextConfig}
 */
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
};

module.exports = withMDX(nextConfig);

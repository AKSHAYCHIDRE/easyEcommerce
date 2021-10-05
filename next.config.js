const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://headless.geexu.org', 'headless.geexu.org'],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);

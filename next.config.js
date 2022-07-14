const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins(
  [
    [withImages, {
      images: {
        disableStaticImages: true,
      }
    }]
  ],
  {
    reactStrictMode: true
  },
);
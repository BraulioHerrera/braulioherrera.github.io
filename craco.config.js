const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@routes/*': path.resolve(__dirname, 'src/routes/*'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@layouts/*': path.resolve(__dirname, 'src/layouts/*'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@api/*': path.resolve(__dirname, 'src/api/*'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@types/*': path.resolve(__dirname, 'src/types/*'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@components/*': path.resolve(__dirname, 'src/components/*'),
    },
  },
};

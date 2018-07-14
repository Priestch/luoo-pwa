module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};

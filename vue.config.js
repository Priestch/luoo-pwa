module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/variables.scss";`,
      },
    },
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};

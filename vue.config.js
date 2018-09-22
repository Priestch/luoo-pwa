const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

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
  configureWebpack: {
    plugins: [new LodashModuleReplacementPlugin()],
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};

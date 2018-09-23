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
  configureWebpack: config => {
    config.plugins.push(
      new LodashModuleReplacementPlugin({
        collections: true,
      }),
    );
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel-loader')
      .loader('babel-loader')
      .tap(() => {
        return {
          plugins: ['lodash'],
        };
      });
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
};

const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");

const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

const pathPrefix = process.env.VUE_APP_PATH_PREFIX;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: process.env.NODE_ENV !== "development",
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: `${pathPrefix}/`,
  outputDir: `dist${pathPrefix}`,
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  /**
   * interface proxy config
   */
  devServer: {
    proxy: {
      // "/api": {
      //   target: "<url>",
      //   ws: true,
      //   changeOrigin: true,
      // },
      "/tianDiTu": {
        target: "http://10.1.100.146:19007",
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      },
      fallback: { https: false, zlib: false, http: false, url: false }
    },
    plugins: [
      new DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(pathPrefix)
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSource, "Assets"), to: "Assets" },
          { from: path.join(cesiumSource, "ThirdParty"), to: "ThirdParty" },
          { from: path.join(cesiumSource, "Widgets"), to: "Widgets" },
          { from: path.join(cesiumSource, cesiumWorkers), to: "Workers" }
        ]
      })
    ]
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    //  config.plugin('preload').tap(() => [
    //    {
    //      rel: 'preload',
    //      // to ignore runtime.js
    //      // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
    //      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
    //      include: 'initial'
    //    }
    //  ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete("prefetch");

    config.when(process.env.NODE_ENV !== "development", (config) => {
      // config
      //   .plugin("ScriptExtHtmlWebpackPlugin")
      //   .after("html")
      //   .use("script-ext-html-webpack-plugin", [
      //     {
      //       // `runtime` must same as runtimeChunk name. default is `runtime`
      //       inline: /runtime\..*\.js$/
      //     }
      //   ])
      //   .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  }
});

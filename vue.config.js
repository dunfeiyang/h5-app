let path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  publicPath: process.env.VUE_APP_URL,
  // lintOnSave: "error",
  configureWebpack: {
    // 去掉console/debugger
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          sourceMap: true,
          uglifyOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"]
            }
          }
        })
      ]
    },
    // 增加别名
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/components/"),
        "*": path.resolve(__dirname, "src/views"),
        "#": path.resolve(__dirname, "src/assets"),
        "^": path.resolve(__dirname, "src/mixins")
      }
    }
  },
  css: {
    loaderOptions: {
      // 全局引入scss主函数
      sass: {
        prependData: `@import "@/assets/css/mixin.scss";`
      }
    }
  },
  devServer: {
    // mock
    // host: "192.168.18.78",
    disableHostCheck: true,
    // 代理
    proxy: {
      "/dev": {
        target: process.env.VUE_APP_USE_IP,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/dev": ""
        }
      }
    }
  }
};

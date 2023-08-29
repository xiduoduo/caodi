module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      rootValue: 192,
      propList: ["*"]
    }),
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 version", ">1%", "iOS 7"]
    })
  ]
};

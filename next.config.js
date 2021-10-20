const withAntdLess = require("next-plugin-antd-less")

module.exports = withAntdLess({
  images: {
    domains: [
      "gw.alipayobjects.com",
      "img5a.flixcart.com",
      "img6a.flixcart.com",
      "firebasestorage.googleapis.com",
    ],
  },
  lessVarsFilePath: "./styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: true,
  reactStrictMode: true,
  webpack(config) {
    return config
  },
})

const withAntdLess = require("next-plugin-antd-less")

module.exports = withAntdLess({
  images: {
    domains: ["gw.alipayobjects.com"],
  },
  lessVarsFilePath: "./styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: true,
  reactStrictMode: true,
  webpack(config) {
    return config
  },
})

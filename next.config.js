const withAntdLess = require("next-plugin-antd-less")

module.exports = withAntdLess({
  lessVarsFilePath: "./styles/variables.less",
  lessVarsFilePathAppendToEndOfContent: true,
  reactStrictMode: true,
  webpack(config) {
    return config
  },
})

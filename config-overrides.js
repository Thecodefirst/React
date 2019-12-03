const { override, paths } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // 设置别名路径
  config.resolve.alias = {
    ...config.resolve.alias,
    '@src': paths.appSrc, // 在使用中有些 Eslint 规则会报错, 禁用这部分代码的 Eslint 检测即可
  };
  return config;
};
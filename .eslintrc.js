module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // 开启浏览器
    es2020: true // 开启es2020语法
  },
  extends: [
    "eslint:recommended", // 使用eslint的标准验证规则
    "plugin:@typescript-eslint/recommended" // 使用typescript插件推荐的标准验证规则
  ],
  parser: "@typescript-eslint/parser", // 使用typescript作为ESLint的解析器
  parserOptions: {
    ecmaVersion: 2020, // 使用的es版本
    sourceType: "module" // ES6+语法必须用module
  },
  plugins: [
    // 用到的插件
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error", // prettier标记的地方抛出错误信息
    "no-async-promise-executor": "off", // 允许promise的立即执行函数使用async
    "spaced-comment": [2, "always"] // 注释后面必须写两个空格
  }
};

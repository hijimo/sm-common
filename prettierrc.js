// 配置官网 https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
// umi默认：https://github.com/umijs/umi-fabric/blob/master/src/prettier.ts

module.exports = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};

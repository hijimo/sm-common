const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,
  rules: {
    ...strictEslint.rules,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/', '^@common/'] }],
    'jsx-a11y/alt-text': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};

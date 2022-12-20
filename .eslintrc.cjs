/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    '@antfu',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    // https://eslint.org/docs/rules/no-console
    // 'no-console': 'off',

  },
}

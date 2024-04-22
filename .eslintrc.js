/* eslint @stylistic/migrate/migrate-js: "error" */
/* eslint @stylistic/migrate/migrate-ts: "error" */

module.exports = {
  root: true,
  plugins: ['@stylistic/migrate'],
  rules: {
    '@stylistic/js/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_|^e$',
        varsIgnorePattern: '^_|^e$',
      },
    ],
    '@stylistic/multiline-ternary': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*'],
      },
    ],
    '@stylistic/js/comma-dangle': 'off',
    // @TODO turn on this option
    'no-alert': 'off',
    'no-shadow': [
      'warn',
      {
        allow: ['_'],
        hoist: 'all',
      },
    ],
    'no-void': 'off',
  },
}

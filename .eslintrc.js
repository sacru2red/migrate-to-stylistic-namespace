// Migrate built-in rules to @stylistic/js namespace
/* eslint @stylistic/migrate/migrate-js: "error" */

// Migrate `@typescript-eslint` rules to @stylistic/ts namespace
/* eslint @stylistic/migrate/migrate-ts: "error" */

module.exports = {
  // root: true,
  // plugins: ['@stylistic/migrate', stylistic],
  plugins: ['@stylistic/migrate'],
  rules: {
    indent: ['error', 2],
    'no-multi-spaces': 'error',
  },
}

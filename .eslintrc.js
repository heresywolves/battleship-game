module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 0 to turn off
    // 1 for warning
    // 2 for error
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-console': 0,
    'no-plusplus': 0,
  },
};

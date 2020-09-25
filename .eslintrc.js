module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "airbnb-base",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [ "prettier"],
  rules: {},
};

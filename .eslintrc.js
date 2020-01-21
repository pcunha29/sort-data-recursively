module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: [2, 'tab'],
    'max-len': [2, { code: 100, comments: 100 }]
  }
};

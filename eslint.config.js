module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // 在这里添加您的规则
    // 禁止使用console
    'no-console': 'error',
    // 禁止使用debugger
    'no-debugger': 'error',
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 强制使用分号
    semi: ['error', 'always'],
    // 禁止未使用的变量
    'no-unused-vars': 'error',
    // 强制使用 === 和 !==
    eqeqeq: ['error', 'always'],
    // 禁止使用eval
    'no-eval': 'error',
  },
};
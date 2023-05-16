module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      pragma: 'React',
      version: '18.2.0',
    },
  },
  rules: {
    'no-console': 'error',
    // 禁止使用debugger
    'no-debugger': 'error',
    'no-undef': 'off',
    '@typescript-eslint/no-var-requires': 'off', // 允许es6模块使用requires
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
    // 循环复杂度，默认20
    complexity: 'warn',
    // 文件最大行数
    'max-lines': [
      'warn',
      {
        max: 400,
        skipBlankLines: true, // 忽略空白行
        skipComments: true, // 忽略注释行
      },
    ],
    'no-empty-function': 'error',
  },
};

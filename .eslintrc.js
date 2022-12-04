module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^h$',
        argsIgnorePattern: '^_',
      },
    ],
    curly: 2,
    eqeqeq: 2,
    'jest/no-focused-tests': 2,
    'no-shadow': 0,
    'no-undef': 0,
    'no-console': 2,
    'no-nested-ternary': 2,
    'no-restricted-imports': [
      2,
      {
        patterns: ['../*', '../../*', '../../../*', '../../../../*'],
      },
    ],
    'prettier/prettier': 2,
    'react/display-name': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          [
            '^react', // Packages. `react` related packages come first.
            '^@?\\w', // packages from node_modules
            '^\\u0000', // Side effect imports.
            '^src/(hooks|contexts|pages|routes|utils)(/.*|$)',
            '^src/(components)(/.*|$)',
            '^\\.', // relative imports. Anything that starts with a dot.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$', // Parent imports. Put `..` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)", "^\\./?$', // Other relative imports. Put same-folder imports and `.` last.
          ],
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'fp', 'json', 'prettier', 'import'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:fp/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/array-type': [2, { default: 'generic' }],
    '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': [0],
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'fp/no-nil': 0,
    'fp/no-rest-parameters': 0,
    'fp/no-unused-expression': 0,
    'fp/no-mutation': [1, { commonjs: true }],
    'fp/no-mutating-methods': [2, { allowedObjects: ['Array_', 'NonEmptyArray_', 'Tuple_'] }],
    'fp/no-throw': 0,
    'import/no-duplicates': 0,
    'import/no-unresolved': 0,
    'import/order': 2,
    'prettier/prettier': [
      1,
      {
        printWidth: 90,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*'],
      env: {
        jest: true,
      },
      rules: {
        'fp/no-throw': 0,
      },
    },
  ],
};

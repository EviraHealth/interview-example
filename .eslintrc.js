module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-jsx',
    'standard-react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
    }],
    'max-len': ['error', { code: 100 }],
    'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': ['off'], // TODO: there is some bug with this rule
    'react/display-name': ['off'], // TODO: there is some bug with this rule
  },
  overrides: [
    {
      files: ['index.js'],
      rules: {
        'import/order': ['error', {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
        }],
      },
    },
  ],
}

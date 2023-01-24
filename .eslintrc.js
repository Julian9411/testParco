module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        complexity: ['error', 7],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/no-single-element-style-arrays': 'error',
        'max-lines': ['error', {max: 200, skipBlankLines: true}],
      },
    },
  ],
};

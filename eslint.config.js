// @ts-check
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';

export default [
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    ignores: ['node_modules', '.env', 'pnpm-lock.yaml'],
    rules: {
      quotes: [
        'warn',
        'single',
        {
          avoidEscape: true
        }
      ],
      semi: ['warn', 'always'],
      'no-var': 'warn',
      'brace-style': ['warn', '1tbs'],
      'comma-dangle': ['warn', 'never'],
      'default-case': 'error',
      'prefer-const': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'quote-props': ['warn', 'as-needed'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  }
];

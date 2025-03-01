import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['./node_modules'] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'prefer-const': 'error',
      'no-duplicate-imports': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'off', // Disable the old rule
      'react/react-in-jsx-scope': 'off', // Disable the old rule
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: ['react', 'react-hooks'] },
]

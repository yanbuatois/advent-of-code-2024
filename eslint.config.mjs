import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		rules: {
			'@typescript-eslint/comma-dangle': 'always',
		},
	},
	{ languageOptions: { globals: globals.node } },
	eslintConfigPrettier,
	pluginJs.configs.recommended,
];

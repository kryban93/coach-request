/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier",
		"prettier",
		"plugin:prettier/recommended",
	],
	plugins: ["prettier", "pug"],
	overrides: [
		{
			files: [
				"**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}",
				"cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}",
			],
			extends: ["plugin:cypress/recommended"],
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				tabWidth: 1,
				semi: true,
				singleQuote: false,
				trailingComma: "all",
				bracketSpacing: true,
			},
		],
		indent: ["error", "tab"],
	},
};

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,

			// Ignore unused variables but allow warnings instead of errors
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

			// Allow unused imports without breaking the build
			"@typescript-eslint/no-unused-imports": "off",

			// Allow functions with optional parameters to avoid type mismatches
			"@typescript-eslint/no-inferrable-types": "off",

			// Allow explicit any usage if needed
			"@typescript-eslint/no-explicit-any": "off",

			// Allow inconsistent function parameter types without errors
			"@typescript-eslint/ban-ts-comment": "off",

			// Suppress strict function signature mismatches
			"@typescript-eslint/explicit-module-boundary-types": "off",

			// Keep react-refresh warning active
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		},
	}
);

import { builtinModules, } from "module";

import jsLint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import vueLint from "eslint-plugin-vue";
import globals from "globals";
import tsLint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}",],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ["*.vue", "**/*.vue",],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
    },
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, },
    },
  },
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  ...vueLint.configs["flat/essential"],
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [
              `node:`,
              `^(${builtinModules.join("|",)})(/|$)`,
            ],
            // style less,scss,css
            ["^.+\\.less$", "^.+\\.s?css$",],
            // Side effect imports.
            ["^\\u0000",],
            ["^@?\\w.*\\u0000$", "^[^.].*\\u0000$", "^\\..*\\u0000$",],
            ["^vue", "^@vue", "^@?\\w", "^\\u0000",],
            ["^@/utils",],
            ["^@/composables",],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$",],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$",],
          ],
        },
      ],
    },
  },
  stylistic.configs["disable-legacy"],
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    commaDangle: "always",
    jsx: true,
  },),
  {
    files: ["**/*.{ts,tsx}",],
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
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true, },
      ],
    },
  },
  {
    ignores: [
      "**/node_modules",
      "**/dist",
    ],
  },
];

import { builtinModules, } from "module";

import jsLint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tsLint from "typescript-eslint";

export default [
  {
    files: ["./src/**/*.{js,mjs,cjs,ts,mts,jsx,tsx}", "eslint.config.mjs",],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, },
    },
  },
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
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
            ["^@/utils",],
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
  },),
  {
    ignores: [
      "**/node_modules",
      "**/dist",
    ],
  },
];

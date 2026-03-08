import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
  js.configs.recommended,
  eslintPluginPrettier,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "object-shorthand": ["error", "always"],
      "prefer-template": "error",
      "prefer-regex-literals": "error",
      "no-return-assign": "error",
      "no-dupe-keys": "error",
      "no-nested-ternary": "error",
      "consistent-return": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
    },
  },
];
export default config;

import globals from "globals";
import nodePlugin from "eslint-plugin-n";
import base from "./base.js";
import typescript from "./typescript.js";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
  ...base,
  ...typescript,
  nodePlugin.configs["flat/recommended-module"] as Linter.Config,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",
      "require-await": "error",
      "n/no-sync": "warn",
    },
  },
];
export default config;

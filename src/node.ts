import globals from "globals";
import nodePlugin from "eslint-plugin-n";
import base from "./base.js";
import typescript from "./typescript.js";
import type { Linter } from "eslint";

/** Test file patterns – devDependencies (e.g. supertest) are allowed here */
const TEST_FILE_PATTERNS = [
  "**/*.test.ts",
  "**/*.test.tsx",
  "**/*.spec.ts",
  "**/*.spec.tsx",
  "**/test/**",
  "**/tests/**",
  "**/__tests__/**",
];

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
      // TypeScript: use .ts extensions for module resolution (Node's resolver omits them by default)
      "n/no-missing-import": [
        "error",
        {
          tryExtensions: [
            ".ts",
            ".tsx",
            ".mts",
            ".cts",
            ".js",
            ".jsx",
            ".json",
            ".node",
            ".mjs",
            ".cjs",
          ],
          ignoreTypeImport: true,
        },
      ],
    },
  },
  // Allow devDependencies (supertest, jest, etc.) in test files
  {
    files: TEST_FILE_PATTERNS,
    rules: {
      "n/no-unpublished-import": "off",
    },
  },
];
export default config;

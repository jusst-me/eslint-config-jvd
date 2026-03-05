import { globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import base from "./base.js";
import typescript from "./typescript.js";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
  ...base,
  ...typescript,
  nextPlugin.configs["core-web-vitals"] as Linter.Config,
  reactPlugin.configs.flat["jsx-runtime"] as Linter.Config,
  reactHooksPlugin.configs.flat.recommended as Linter.Config,
  {
    rules: {
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "react/no-array-index-key": "error",
      "react/self-closing-comp": [
        "error",
        { component: true, html: true },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        { children: "ignore", propElementValues: "always" },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
];
export default config;

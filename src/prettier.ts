import * as tailwindPlugin from "prettier-plugin-tailwindcss";

export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 100,
  plugins: [tailwindPlugin],
} satisfies import("prettier").Config;

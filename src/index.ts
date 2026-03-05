import base from "./base.js";
import typescript from "./typescript.js";
import type { Linter } from "eslint";

const config: Linter.Config[] = [...base, ...typescript];
export default config;

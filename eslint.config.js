import eslint_js from "@eslint/js";
import tslint_ts from "typescript-eslint";

export default [
  eslint_js.configs.recommended,
  ...tslint_ts.configs.recommended,
];

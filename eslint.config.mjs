// eslint.config.js

import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    ignores: [
      "node_modules/",
      "dist/",
      "artifacts/",
      "cache/",
      "hardhat.config.ts",
    ],
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      indent: ["error", 2], // Enforces a 2-space indent
      quotes: ["error", "single"], // Enforces single quotes
      semi: ["error", "always"], // Enforces semicolons
      "no-unused-vars": "warn", // Warns about unused variables
      "no-console": "warn", // Warns about console.log statements
      eqeqeq: ["error", "always"], // Enforces the use of === and !==
      curly: ["error", "all"], // Enforces consistent brace style for all control statements
      "@typescript-eslint/no-explicit-any": "warn", // Warns about the use of 'any' type
      "@typescript-eslint/explicit-function-return-type": "off", // Disables explicit return types on functions
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Ignores unused variables that start with an underscore
    },
  },
];

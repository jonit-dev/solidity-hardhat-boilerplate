// eslint.config.js

import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/artifacts/**",
      "**/cache/**",
      "**/typechain-types/**",
      "**/coverage/**",
      "**/ignition/deployments/**",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        // Node.js globals
        process: true,
        module: true,
        require: true,
        __dirname: true,
        __filename: true,
        exports: true,
        console: true,
        setTimeout: true,
        clearTimeout: true,
        setInterval: true,
        clearInterval: true,
        Buffer: true,
        // ES2022 globals
        Promise: true,
        Map: true,
        Set: true,
        WeakMap: true,
        WeakSet: true,
        Proxy: true,
        Reflect: true,
        globalThis: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      node: {
        tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"],
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      indent: ["error", 2],
      quotes: "off",
      semi: ["error", "always"],
      "no-unused-vars": "off",
      "no-console": "off",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];

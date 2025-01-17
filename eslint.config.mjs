import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.node, // 启用 Node.js 全局变量
      },
      parser: tseslint.parser, // 使用 TypeScript 解析器
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 支持 JSX
        },
        ecmaVersion: "latest", // 使用最新的 ECMAScript 版本
        sourceType: "module", // 使用 ES 模块
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "react/prop-types": "off", // 关闭 react/prop-types 规则
      "no-commonjs": "off", // 允许使用 CommonJS 语法
      "global-require": "off", // 允许在全局作用域中使用 require
      "@typescript-eslint/no-require-imports": "off", // 允许使用 require() 语法
    },
  },
];
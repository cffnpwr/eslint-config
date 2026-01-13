import type { Linter } from "eslint";

import betterTailwindPlugin from "eslint-plugin-better-tailwindcss";
import tailwindPlugin from "eslint-plugin-tailwindcss";

import { defineConfig } from "../utils/define-config.js";

export function tailwind(): Linter.Config[] {
  return defineConfig([
    {
      name: "cffnpwr/tailwind/setup",
      plugins: {
        tailwindcss: tailwindPlugin,
        "better-tailwindcss": betterTailwindPlugin,
      },
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    },
    {
      name: "cffnpwr/tailwind/rules",
      rules: {
        ...tailwindPlugin.configs["flat/recommended"][1]?.rules,

        //#region eslint-plugin-tailwindcss (linting)
        "tailwindcss/classnames-order": "off", // better-tailwindcss で対応
        "tailwindcss/enforces-negative-arbitrary-values": "warn",
        "tailwindcss/enforces-shorthand": "warn",
        "tailwindcss/no-arbitrary-value": "off",
        "tailwindcss/no-contradicting-classname": "error",
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/no-unnecessary-arbitrary-value": "warn",
        //#endregion eslint-plugin-tailwindcss

        //#region eslint-plugin-better-tailwindcss (formatting)
        "better-tailwindcss/multiline": [
          "warn",
          {
            printWidth: 80,
            indent: 2,
          },
        ],
        "better-tailwindcss/sort-classes": "warn",
        "better-tailwindcss/no-unnecessary-whitespace": "warn",
        //#endregion eslint-plugin-better-tailwindcss
      },
    },
  ]);
}

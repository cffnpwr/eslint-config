import type { ESLint, Linter } from "eslint";

import eslintReact from "@eslint-react/eslint-plugin";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";

import { defineConfig } from "../utils/define-config.js";
import { excludeLegacyRules } from "../utils/exclude-legacy-rules.js";

const eslintReactRecommended = eslintReact.configs["recommended-typescript"];

export const react = (): Linter.Config[] => {
  return defineConfig([
    {
      name: "cffnpwr/react/setup",
      plugins: {
        ...(eslintReactRecommended.plugins as Record<string, ESLint.Plugin>),
        "react-hooks": reactHooksPlugin as ESLint.Plugin,
        "jsx-a11y": jsxA11yPlugin,
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
      name: "cffnpwr/react/rules",
      rules: {
        ...excludeLegacyRules({
          ...eslintReactRecommended.rules,
          ...reactHooksPlugin.configs["recommended-latest"].rules,
          ...jsxA11yPlugin.flatConfigs.recommended.rules,
        }),
      },
    },
  ]);
};

# @cffnpwr/eslint-config

[![GitHub License](https://img.shields.io/github/license/cffnpwr/eslint-config?style=flat)](/LICENSE)
[![JSR Version](https://jsr.io/badges/@cffnpwr/eslint-config)](https://jsr.io/@cffnpwr/eslint-config)

A shared ESLint configuration for cffnpwr.

[日本語のREADMEはこちら](./README-ja.md)

## How to Install

### npm

```sh
npm install -D @cffnpwr/eslint-config
```

or

```sh
npx jsr add -D @cffnpwr/eslint-config
```

### yarn

```sh
yarn add -D @cffnpwr/eslint-config
```

or

```sh
yarn dlx jsr add -D @cffnpwr/eslint-config
```

### pnpm

```sh
pnpm add -D @cffnpwr/eslint-config
```

or

```sh
pnpm dlx jsr add -D @cffnpwr/eslint-config
```

### Bun

```sh
bun add -D @cffnpwr/eslint-config
```

or

```sh
bunx jsr add -D @cffnpwr/eslint-config
```

### Deno

```sh
deno add -D npm:@cffnpwr/eslint-config
```

or

```sh
deno add -D jsr:@cffnpwr/eslint-config
```

## How to Use

Create an `eslint.config.ts` file and configure it as follows.
This shared configuration does not provide `files`, so you need to configure them individually.
You also need to install `@typescript-eslint/parser` separately from this shared configuration.
Other required packages must be installed additionally.

```typescript
import cffnpwrConfig from "@cffnpwr/eslint-config";
import tsEslintParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import globals from "globals";

const files = ["**/*.{js,ts}"];

export default defineConfig([
  {
    files,
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsEslintParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files,
    extends: cffnpwrConfig(), // TypeScript recommended rules + TypeScript/JSX style rules
  },
]);
```

### Optional Rules

React and Tailwind CSS rules can be optionally added.
Here are configuration examples:

```typescript
// Enable React
cffnpwrConfig({ react: true });

// Enable Tailwind CSS
cffnpwrConfig({ tailwind: true });

// Enable React + Tailwind CSS
cffnpwrConfig({ react: true, tailwind: true });
```

## License

[MIT License](./LICENSE)

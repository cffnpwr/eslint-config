# @cffnpwr/eslint-config

[![GitHub License](https://img.shields.io/github/license/cffnpwr/eslint-config?style=flat)](/LICENSE)
[![JSR Version](https://jsr.io/badges/@cffnpwr/eslint-config)](https://jsr.io/@cffnpwr/eslint-config)

cffnpwrのためのESLint共通設定です。

[README.md for English is available here](./README.md).

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

## How to use

`eslint.config.ts`を作成し、以下のように構成します。
この共通設定では`files`を提供していないため、個別に設定を行なう必要があります。
また、この共通設定とは別に`@typescript-eslint/parser`をインストールする必要があります。
その他の必要なパッケージも追加でインストールが必要です。

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
    extends: cffnpwrConfig(), // TypeScript推奨ルール + TypeScript/JSX文体ルール
  },
]);
```

### Optional rules

ReactとTailwind CSSのルールをオプションで追加可能です。
以下に設定例を示します。

```typescript
// Reactを有効化
cffnpwrConfig({ react: true });

// Tailwind CSSを有効化
cffnpwrConfig({ tailwind: true });

// React + Tailwind CSSを有効化
cffnpwrConfig({ react: true, tailwind: true });
```

## License

[MIT License](./LICENSE)

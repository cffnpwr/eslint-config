declare module "eslint-plugin-tailwindcss" {
  import type { ESLint, Linter } from "eslint";

  const plugin: ESLint.Plugin & {
    configs: {
      "flat/recommended": Linter.Config[];
    };
  };

  export default plugin;
}

import type { Linter } from "eslint";

type TypedLinterConfig = Linter.Config & {
  name: string;
};

export const defineConfig = (configs: TypedLinterConfig[]): Linter.Config[] => {
  return configs;
};

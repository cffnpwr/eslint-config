import type { Linter } from "eslint";

type TypedLinterConfig = Linter.Config & {
  name: string;
};

export function defineConfig(configs: TypedLinterConfig[]): Linter.Config[] {
  return configs;
}

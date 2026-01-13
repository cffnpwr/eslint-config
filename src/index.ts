import type { Linter } from "eslint";

import { react } from "./configs/react.js";
import { stylistic } from "./configs/stylistic.js";
import { tailwind } from "./configs/tailwind.js";
import { typescript } from "./configs/typescript.js";

export type CffnpwrConfigOptions = {
  /**
   * Enable React rules
   * @default false
   */
  react?: boolean;
  /**
   * Enable Tailwind CSS rules
   * @default false
   */
  tailwind?: boolean;
};

/**
 * @cffnpwr/eslint-config
 *
 * Common ESLint configurations for cffnpwr.
 *
 * @example
 * ```ts
 * import cffnpwrConfig from "@cffnpwr/eslint-config";
 *
 * // Only TypeScript + stylistic
 * export default cffnpwrConfig();
 *
 * // Enable React
 * export default cffnpwrConfig({ react: true });
 *
 * // Enable Tailwind CSS
 * export default cffnpwrConfig({ tailwind: true });
 *
 * // Enable both React and Tailwind CSS
 * export default cffnpwrConfig({ react: true, tailwind: true });
 * ```
 */
export default function cffnpwrConfig(
  options: CffnpwrConfigOptions = {},
): Linter.Config[] {
  const { react: enableReact = false, tailwind: enableTailwind = false } = options;

  const configs: Linter.Config[] = [
    ...typescript(),
    ...stylistic(),
  ];

  if (enableReact) {
    configs.push(...react());
  }

  if (enableTailwind) {
    configs.push(...tailwind());
  }

  return configs;
}

export { react, stylistic, tailwind, typescript };

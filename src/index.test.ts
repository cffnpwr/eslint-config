import { describe, expect, it } from "bun:test";

import type { Linter } from "eslint";

import cffnpwrConfig from "./index.ts";

const configNames = (configs: Linter.Config[]): string[] => configs
  .map((config) => config.name)
  .filter((name): name is string => name !== undefined);

const hasConfigGroup = (configs: Linter.Config[], prefix: string): boolean => configNames(configs).some((name) => name.startsWith(prefix));

describe("cffnpwrConfig", () => {
  it("[positive] オプション未指定のとき typescript と stylistic を含む", () => {
    const configs = cffnpwrConfig();

    expect(hasConfigGroup(configs, "cffnpwr/typescript/")).toBe(true);
    expect(hasConfigGroup(configs, "cffnpwr/stylistic/")).toBe(true);
  });

  it("[positive] オプション未指定のとき react と tailwind を含まない", () => {
    const configs = cffnpwrConfig();

    expect(hasConfigGroup(configs, "cffnpwr/react/")).toBe(false);
    expect(hasConfigGroup(configs, "cffnpwr/tailwind/")).toBe(false);
  });

  it("[positive] react が true のとき react を含む", () => {
    const configs = cffnpwrConfig({ react: true });

    expect(hasConfigGroup(configs, "cffnpwr/react/")).toBe(true);
  });

  it("[negative] react が false のとき react を含まない", () => {
    const configs = cffnpwrConfig({ react: false });

    expect(hasConfigGroup(configs, "cffnpwr/react/")).toBe(false);
  });

  it("[positive] tailwind が true のとき tailwind を含む", () => {
    const configs = cffnpwrConfig({ tailwind: true });

    expect(hasConfigGroup(configs, "cffnpwr/tailwind/")).toBe(true);
  });

  it("[negative] tailwind が false のとき tailwind を含まない", () => {
    const configs = cffnpwrConfig({ tailwind: false });

    expect(hasConfigGroup(configs, "cffnpwr/tailwind/")).toBe(false);
  });

  it("[positive] react と tailwind が両方 true のとき両方を含む", () => {
    const configs = cffnpwrConfig({ react: true, tailwind: true });

    expect(hasConfigGroup(configs, "cffnpwr/react/")).toBe(true);
    expect(hasConfigGroup(configs, "cffnpwr/tailwind/")).toBe(true);
  });
});

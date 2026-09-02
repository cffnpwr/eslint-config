import { readFileSync } from "node:fs";

import type { Linter } from "eslint";

import { helper } from "./helper.js";

const config: Linter.Config = {};

const value = readFileSync("x");

const greet = (name: string): string => `Hello, ${name}`;

export const result = helper();
export const usedConfig = config;
export const usedGreet = greet("world");
export const usedValue = value;

const pick = (flag: boolean): number => {
  if (flag) {
    return 1;
  }

  return value.length > 0 ? 2 : 3;
};

export const usedPick = pick(true);

// single line comment

/*
 * starred block
 * comment
 */

/** JSDoc one-liner */
export const documented = 1;

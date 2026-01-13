export function detectRuntime(): "bun" | "deno" | "node" {
  if (process.versions.bun) {
    return "bun";
  }

  // @ts-expect-error Deno global is only available in Deno runtime
  if (typeof Deno !== "undefined") {
    return "deno";
  }

  return "node";
}

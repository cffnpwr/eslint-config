import { describe, expect, it } from "bun:test";

import { react } from "../src/configs/react.ts";
import { stylistic } from "../src/configs/stylistic.ts";
import { tailwind } from "../src/configs/tailwind.ts";
import { typescript } from "../src/configs/typescript.ts";

import { lintFixOutput, lintMessages } from "./lint-fixture.ts";

const ts = [...typescript(), ...stylistic()];

describe("ts config (typescript + stylistic)", () => {
  it("[positive] 正しい記法は警告を出さない", async () => {
    expect(await lintMessages(ts, "ts/valid.tsx")).toBe("(none)");
  });

  it("[negative] 誤った記法を error / warn として検知する", async () => {
    expect(await lintMessages(ts, "ts/invalid.tsx")).toMatchSnapshot();
  });

  it("[auto-fix] 修正可能な記法を自動修正する", async () => {
    expect(await lintFixOutput(ts, "ts/fixable.tsx")).toMatchSnapshot();
  });
});

describe("react config", () => {
  it("[positive] 正しい記法は警告を出さない", async () => {
    expect(await lintMessages(react(), "react/valid.tsx")).toBe("(none)");
  });

  it("[negative] 誤った記法を error / warn として検知する", async () => {
    expect(await lintMessages(react(), "react/invalid.tsx")).toMatchSnapshot();
  });

  it("[auto-fix] 修正可能な記法を自動修正する", async () => {
    expect(await lintFixOutput(react(), "react/fixable.tsx")).toMatchSnapshot();
  });
});

describe("tailwind config", () => {
  it("[positive] 正しい記法は警告を出さない", async () => {
    expect(await lintMessages(tailwind(), "tailwind/valid.tsx")).toBe("(none)");
  });

  it("[negative] 誤った記法を error / warn として検知する", async () => {
    expect(await lintMessages(tailwind(), "tailwind/invalid.tsx")).toMatchSnapshot();
  });

  it("[auto-fix] 修正可能な記法を自動修正する", async () => {
    expect(await lintFixOutput(tailwind(), "tailwind/fixable.tsx")).toMatchSnapshot();
  });
});

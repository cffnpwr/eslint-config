import type { Linter } from "eslint";

import { ESLint } from "eslint";
import tsEslint from "typescript-eslint";

const fixturesDir = new URL("./fixtures", import.meta.url).pathname;

const createEslint = (configs: Linter.Config[], fix: boolean): ESLint => new ESLint({
  cwd: fixturesDir,
  overrideConfigFile: true,
  fix,
  overrideConfig: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        parser: tsEslint.parser as Linter.Parser,
        parserOptions: {
          projectService: true,
          tsconfigRootDir: fixturesDir,
        },
      },
      settings: {
        tailwindcss: {
          cssConfigPath: `${fixturesDir}/styles.css`,
        },
        "better-tailwindcss": {
          entryPoint: `${fixturesDir}/styles.css`,
        },
      },
    },
    ...configs,
  ],
});

/**
 * fixture ファイルを lint し、検知された error / warn を
 * `severity ruleId (行:列)` の一覧文字列として返す。
 *
 * 自動修正は行わないため、修正可能なルールも message として現れる。
 * 正常系 fixture では空（`(none)`）になる。
 */
export const lintMessages = async (
  configs: Linter.Config[],
  fixtureFile: string,
): Promise<string> => {
  const [result] = await createEslint(configs, false).lintFiles([
    `${fixturesDir}/${fixtureFile}`,
  ]);
  if (result === undefined) {
    throw new Error(`No lint result for ${fixtureFile}`);
  }

  const messages = [...result.messages]
    .sort((a, b) => a.line - b.line
      || a.column - b.column
      || (a.ruleId ?? "").localeCompare(b.ruleId ?? ""))
    .map((m) => `${m.severity === 2 ? "error" : "warn"} ${m.ruleId} (${m.line}:${m.column})`);

  return messages.length > 0 ? messages.join("\n") : "(none)";
};

/**
 * fixture ファイルへ `--fix` を適用し、修正後のコードを返す。
 * 自動修正可能なルールが期待通り修正されることを検証する。
 */
export const lintFixOutput = async (
  configs: Linter.Config[],
  fixtureFile: string,
): Promise<string> => {
  const [result] = await createEslint(configs, true).lintFiles([
    `${fixturesDir}/${fixtureFile}`,
  ]);
  if (result === undefined) {
    throw new Error(`No lint result for ${fixtureFile}`);
  }

  return result.output ?? "(no auto-fix)";
};

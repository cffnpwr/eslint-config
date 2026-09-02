import { describe, it } from "bun:test";

import { RuleTester } from "eslint";

import { noSingleLineBlockComment } from "./no-single-line-block-comment.ts";

RuleTester.describe = describe;
RuleTester.it = it;

const ruleTester = new RuleTester();

describe("no-single-line-block-comment", () => {
  ruleTester.run("no-single-line-block-comment", noSingleLineBlockComment, {
    valid: [
      "// line comment",
      "/** JSDoc */",
      "/*! preserved */",
      "/* eslint-disable no-console */",
      "/* global foo */",
      "/*\n * multi\n * line\n */",
      "foo(/* inline */ 1);",
      "const x = /* @__PURE__ */ foo();",
    ],
    invalid: [
      {
        code: "/* block */",
        output: "// block",
        errors: [{ messageId: "expectedLineComment" }],
      },
      {
        code: "foo(); /* trailing */",
        output: "foo(); // trailing",
        errors: [{ messageId: "expectedLineComment" }],
      },
      {
        code: "  /*   padded   */",
        output: "  // padded",
        errors: [{ messageId: "expectedLineComment" }],
      },
      {
        code: "/**/",
        output: "//",
        errors: [{ messageId: "expectedLineComment" }],
      },
      {
        code: "/* first */\n/* second */",
        output: "// first\n// second",
        errors: [
          { messageId: "expectedLineComment" },
          { messageId: "expectedLineComment" },
        ],
      },
    ],
  });
});

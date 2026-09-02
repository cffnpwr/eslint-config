import type { Rule } from "eslint";

// @stylistic/multiline-comment-style が対象外にする指示コメントと同じパターン
const DIRECTIVE_COMMENT_PATTERN = /^\s*(?:eslint|jshint\s+|jslint\s+|istanbul\s+|globals?\s+|exported\s+|jscs)/u;

export const noSingleLineBlockComment: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow single-line block comments in favor of line comments",
    },
    fixable: "code",
    schema: [],
    messages: {
      expectedLineComment: "Expected a line comment instead of a single-line block comment.",
    },
  },
  create(context) {
    const { sourceCode } = context;

    return {
      Program() {
        for (const comment of sourceCode.getAllComments()) {
          const { loc, value } = comment;
          if (comment.type !== "Block" || !loc || loc.start.line !== loc.end.line) {
            continue;
          }
          if (value.startsWith("*") || value.startsWith("!") || DIRECTIVE_COMMENT_PATTERN.test(value)) {
            continue;
          }

          // 同じ行にコードが続くコメント（foo(/* x */ 1) 等）は // に置き換えると後続のコードを巻き込むため対象外
          const tokenAfter = sourceCode.getTokenAfter(comment, { includeComments: true });
          if (tokenAfter?.loc?.start.line === loc.end.line) {
            continue;
          }

          context.report({
            loc,
            messageId: "expectedLineComment",
            fix: (fixer) => fixer.replaceText(comment, `// ${value.trim()}`.trimEnd()),
          });
        }
      },
    };
  },
};

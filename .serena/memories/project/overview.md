# @cffnpwr/eslint-config Project Overview

## Purpose
Common ESLint configuration shared by cffnpwr projects. Provides flat config-based ESLint rules for TypeScript, React, Tailwind CSS, and stylistic formatting.

## Tech Stack
- Runtime: Bun
- Language: TypeScript
- Build: tsdown
- Package manager: Bun (bun.lock exists)
- Publish targets: npm + JSR

## Key Dependencies
- eslint (peerDep, >=9.18.0)
- @eslint/js
- typescript-eslint
- @stylistic/eslint-plugin
- eslint-plugin-import
- eslint-plugin-perfectionist
- eslint-plugin-unused-imports
- eslint-plugin-react, eslint-plugin-react-hooks
- eslint-plugin-jsx-a11y
- eslint-plugin-tailwindcss, eslint-plugin-better-tailwindcss

## Scripts
- build: tsdown
- lint: eslint
- lint:fix: eslint --fix
- publish:jsr: jsr publish
- clean: rm -rf dist node_modules

## Project Structure
- src/index.ts - main export, cffnpwrConfig() function
- src/configs/ - react.ts, stylistic.ts, tailwind.ts, typescript.ts
- src/utils/ - define-config.ts, detect-runtime.ts, exclude-legacy-rules.ts
- dist/ - build output

## VCS
Uses both git and jj (Jujutsu)

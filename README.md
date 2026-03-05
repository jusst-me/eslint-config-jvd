# eslint-config-jvd

Shared ESLint and Prettier configuration for Next.js (frontend) and Node.js (backend) TypeScript projects.

## Installation

```bash
npm install -D eslint-config-jvd eslint typescript prettier
```

For Next.js projects, `@next/eslint-plugin-next` is included as a dependency and will be installed automatically.

## Usage

### Frontend (Next.js)

Create or update `eslint.config.js`:

```js
import nextjs from "eslint-config-jvd/nextjs";

export default nextjs;
```

### Backend (Node.js)

Create or update `eslint.config.js`:

```js
import node from "eslint-config-jvd/node";

export default node;
```

### Prettier

Add to your `package.json`:

```json
{
  "prettier": "eslint-config-jvd/prettier"
}
```

The Prettier config includes `prettier-plugin-tailwindcss` for automatic Tailwind class sorting in frontend projects. No extra installation needed.

## What's included

**Base (frontend + backend):**

- ESLint recommended, TypeScript, Prettier (runs as ESLint rule)
- simple-import-sort (import/export sorting)
- Rules: object-shorthand, prefer-template, no-nested-ternary, consistent-return, etc.
- @typescript-eslint/no-unused-vars with `_` prefix ignore

**Next.js (frontend only):**

- Next.js Core Web Vitals
- React (jsx-runtime) + React Hooks
- Rules: react/no-array-index-key, react/self-closing-comp, react/jsx-curly-brace-presence
- no-console (allows info, warn, error)
- globalIgnores: .next, out, build, next-env.d.ts

**Node.js (backend only):**

- Node.js globals
- eslint-plugin-n (recommended-module): no-deprecated-api, no-extraneous-import, no-missing-import, no-process-exit, no-unsupported-features, etc.
- Rules: no-throw-literal, prefer-promise-reject-errors, require-await
- n/no-sync: warn (sync Node APIs)

**Prettier:** Shared formatting with Tailwind CSS class sorting

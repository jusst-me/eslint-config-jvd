# eslint-config-jvd

Shared ESLint and Prettier configuration for Next.js (frontend) and Node.js (backend) TypeScript projects.

## Installation

```bash
npm install -D eslint-config-jvd eslint typescript prettier
```

**Next.js projects only** – also install the React plugins:

```bash
npm install -D eslint-plugin-react eslint-plugin-react-hooks
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
- n/no-missing-import: configured with TypeScript extensions (`.ts`, `.tsx`, etc.) for correct import resolution; path aliases from `tsconfig.json` are used automatically
- n/no-unpublished-import: disabled for test files (`*.test.ts`, `*.spec.ts`, `test/`, `__tests__/`, etc.) so devDependencies like supertest are allowed

### n/no-missing-import – TypeScript and path mapping

The rule uses `tryExtensions` with `.ts`/`.tsx` and `ignoreTypeImport: true` so TypeScript imports are validated correctly. Path aliases from `tsconfig.json` are picked up automatically. If it still fails (e.g. monorepo, custom resolvers), you can disable the rule locally or configure `settings.n.tryExtensions` / `settings.n.tsconfigPath`.

### n/no-sync – local overrides

The `n/no-sync` rule warns about synchronous Node.js API calls (e.g. `fs.readFileSync`). In some cases sync is intentional (e.g. simple JSON file storage, test setup). To disable the rule for specific files, add an override in your `eslint.config.js`:

```js
{
  files: ["src/storage/simple-store.ts"], // or your test setup file
  rules: {
    "n/no-sync": "off",
  },
},
```

**Prettier:** Shared formatting with Tailwind CSS class sorting

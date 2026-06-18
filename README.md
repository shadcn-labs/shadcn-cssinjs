<p align="center">
  <img src="https://shadcn-cssinjs.vercel.app/og" alt="shadcn-cssinjs banner" />
</p>

<h1 align="center">shadcn-cssinjs</h1>

<p align="center">
  shadcn/ui components, restyled with <a href="https://stylexjs.com">StyleX</a> on top of <a href="https://base-ui.com">Base UI</a> primitives. A copy-and-paste registry you install with <code>npx shadcn add</code> — you own the code.
  <br />
  <br />
  <a href="https://github.com/shadcn-labs/shadcn-cssinjs"><img src="https://www.shieldcn.dev/github/stars/shadcn-labs/shadcn-cssinjs.svg?variant=secondary&size=xs&theme=zinc" alt="GitHub Stars" /></a>
  <a href="https://github.com/shadcn-labs/shadcn-cssinjs/actions"><img src="https://www.shieldcn.dev/github/ci/shadcn-labs/shadcn-cssinjs.svg?variant=secondary&size=xs&theme=zinc" alt="CI" /></a>
  <a href="https://discord.com/invite/N6G36KhYK4"><img src="https://www.shieldcn.dev/discord/online-members/N6G36KhYK4.svg?variant=secondary&size=xs&theme=zinc" alt="Discord Members" /></a>
</p>

## What is this?

`shadcn-cssinjs` is a [shadcn registry](https://ui.shadcn.com/docs/registry) where every
component is styled with **StyleX** (atomic, build-time CSS-in-JS) instead of Tailwind, and
built on **Base UI** primitives instead of Radix. The distribution model is unchanged: you
install components with the shadcn CLI and the source lands in your project for you to own
and edit.

## Why StyleX + Base UI?

- 🧩 **StyleX styling** - Type-safe, colocated styles compiled to atomic CSS at build time. No utility-class soup, no runtime style injection.
- 🪄 **Base UI primitives** - Modern, accessible, unstyled primitives from the team behind Radix and Floating UI.
- 🎨 **Theme-token driven** - Styles reference your existing `--background`/`--primary`/… CSS variables, so light/dark theming via `.dark` keeps working out of the box.
- 📦 **Registry compatible** - Install with `npx shadcn add`; you get the real source, not an npm dependency.
- 📚 **Documentation site** - Per-component docs with live previews and copy-paste examples, powered by Fumadocs.

## Built With

- `Next.js 16` with the App Router and `React 19`
- `@stylexjs/stylex` for styling (compiled via Babel + the PostCSS plugin)
- `@base-ui/react` for primitives
- `Tailwind CSS 4` for the docs site itself
- `Fumadocs` for documentation
- `shiki` + `rehype-pretty-code` for code blocks

## Quick Start (developing this registry)

1. **Install dependencies**:

```bash
pnpm install
```

2. **Run the docs site**:

```bash
pnpm dev
```

3. **Build the registry** after editing components:

```bash
pnpm registry:build
```

Components live under `registry/bases/stylex/<name>/` — each folder holds the component
(`<name>.tsx`) and its StyleX rules (`<name>.stylex.ts`), with shared design tokens in
`registry/bases/stylex/tokens.stylex.ts`.

## Installing a component (consumers)

```bash
npx shadcn@latest add https://shadcn-cssinjs.vercel.app/r/button.json
```

Then import it:

```tsx
import { Button } from "@/components/ui/button/button";

export function Demo() {
  return <Button>Click me</Button>;
}
```

## Project Structure

```
├── registry/
│   └── bases/
│       └── stylex/
│           ├── tokens.stylex.ts      # shared design tokens (defineVars)
│           └── <name>/               # one folder per component
│               ├── <name>.tsx        # Base UI + StyleX component
│               └── <name>.stylex.ts  # its StyleX rules
├── registry.json                     # registry manifest
├── content/docs/                     # documentation (MDX)
├── app/                              # Next.js docs app
└── public/r/                         # built registry files (auto-generated)
```

## Scripts

- `pnpm dev` - Start the docs/dev server
- `pnpm build` - Build the registry and the site for production
- `pnpm registry:build` - Rebuild the component registry into `public/r`
- `pnpm typecheck` - Run TypeScript with no emit

## License

[MIT](./LICENSE)

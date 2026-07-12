# Development

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

## Setup

```bash
pnpm install
```

## Running the docs site

```bash
pnpm dev
```

## Building the registry

After editing components, rebuild the registry into `public/r`:

```bash
pnpm registry:build
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

| Command               | Description                                    |
| --------------------- | ---------------------------------------------- |
| `pnpm dev`            | Start the docs/dev server                      |
| `pnpm build`          | Build the registry and the site for production |
| `pnpm registry:build` | Rebuild the component registry into `public/r` |
| `pnpm typecheck`      | Run TypeScript with no emit                    |

## Built With

- [Next.js 16](https://nextjs.org/) with the App Router and [React 19](https://react.dev/)
- [@stylexjs/stylex](https://stylexjs.com) for styling (compiled via Babel + the PostCSS plugin)
- [@base-ui/react](https://base-ui.com) for primitives
- [Tailwind CSS 4](https://tailwindcss.com/) for the docs site itself
- [Fumadocs](https://fumadocs.vercel.app/) for documentation
- [shiki](https://shiki.style/) + [rehype-pretty-code](https://rehype-pretty.pages.dev/) for code blocks

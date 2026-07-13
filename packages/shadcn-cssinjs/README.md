# shadcn-cssinjs CLI

The CLI follows the command and package structure of the shadcn CLI while
adding setup adapters for CSS-in-JS engines.

```bash
pnpm dlx shadcn-cssinjs@latest init --engine stylex
pnpm dlx shadcn-cssinjs@latest add button
pnpm dlx shadcn-cssinjs@latest info
```

The current adapter configures StyleX 0.19 for existing or newly scaffolded
Next.js and Vite React projects. Tokenami and Panda CSS have reserved adapters
and can be enabled when their component registries are added.

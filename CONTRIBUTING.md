# Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## How to contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Adding a new component

1. Create a new folder under `registry/bases/stylex/<component-name>/`
2. Create the component file (`<component-name>.tsx`) using Base UI primitives
3. Create the StyleX styles file (`<component-name>.stylex.ts`)
4. Add the component to `registry.json`
5. Run `pnpm registry:build` to verify the build
6. Add documentation under `content/docs/`

## Code style

- Use TypeScript for all components
- Follow the existing patterns in the codebase
- Use `defineVars` from StyleX for design tokens
- Reference CSS custom properties (`--background`, `--primary`, etc.) for theming

## Questions?

Join the [Discord](https://discord.com/invite/N6G36KhYK4) or open an [issue](https://github.com/shadcn-labs/shadcn-cssinjs/issues).

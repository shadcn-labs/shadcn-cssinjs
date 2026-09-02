# Contributing to shadcn-cssinjs

Thanks for your interest in contributing! For local setup, development commands, and project structure, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## Before opening a pull request

Every pull request must be tied to an issue. Before opening a PR, search the existing issues, discussions, and pull requests so you do not duplicate active work. If there is no existing issue, open one with the relevant template and describe the problem, use case, or bug reproduction.

For non-trivial changes, wait for discussion on the issue before investing in the implementation. The goal is to agree that the problem is real and that the proposed direction fits shadcn-cssinjs before review shifts to code.

To avoid PRs that are unlikely to be reviewed or merged:

- Do not send broad rewrites, style-only churn, or formatting-only changes unless a maintainer asked for them.
- Do not bundle unrelated fixes or refactors into one PR. Split them so each PR has one reviewable purpose.
- Do not change public behavior based only on a hypothetical use case. Include a concrete user story, reproduction, or test that shows the need.
- Do not claim an issue silently. Comment before starting work, and check the thread first in case someone else is already working on it.

## Adding a new component

1. Create a new folder under `registry/bases/stylex/<component-name>/`
2. Create the component file (`<component-name>.tsx`) using Base UI primitives
3. Create the StyleX styles file (`<component-name>.stylex.ts`)
4. Add the component to `registry.json`
5. Run `pnpm build:registry` to verify the build
6. Add documentation under `content/docs/`

## Code style

- Use TypeScript for all components
- Follow the existing patterns in the codebase
- Use `defineVars` from StyleX for design tokens
- Reference CSS custom properties (`--background`, `--primary`, etc.) for theming

## Submitting a pull request

1. Fork the repo and create a branch from `main`.
2. Link the issue where the change was discussed and agreed on.
3. Make your change, including tests and docs where relevant.
4. Sign off every commit with `git commit -s`.
5. Make sure `pnpm check` and `pnpm typecheck` pass.
6. Open the PR with a clear description of the problem and solution.

## Developer Certificate of Origin (DCO)

All contributions are made under the [Developer Certificate of Origin](https://developercertificate.org/). Every commit must include a `Signed-off-by` line matching the commit author's name and email:

```text
Signed-off-by: Jane Doe <jane.doe@example.com>
```

Add it automatically with:

```bash
git commit -s -m "your commit message"
```

If you forget, amend the last commit:

```bash
git commit --amend -s --no-edit
```

To sign off a series of commits, rebase with `--signoff`:

```bash
git rebase --signoff main
```

## Reporting bugs and requesting features

Please use the [issue templates](https://github.com/shadcn-labs/shadcn-cssinjs/issues/new/choose).

## Code of conduct

This project follows the [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Questions?

Join the [Discord](https://discord.com/invite/N6G36KhYK4) or open an [issue](https://github.com/shadcn-labs/shadcn-cssinjs/issues).

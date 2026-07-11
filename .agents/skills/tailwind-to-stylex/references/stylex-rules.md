# StyleX authoring rules & setup

Read this when setting up StyleX in a project, when the ESLint plugin flags something, or
when you need theming for class-based dark mode. These are the constraints that make
StyleX output valid — most conversion bugs are a violation of one of them.

## Contents

- [Authoring rules](#authoring-rules)
- [Common mistakes](#common-mistakes)
- [Theming with variables](#theming-with-variables)
- [Project setup](#project-setup)

## Authoring rules

- **Styles live in `stylex.create({...})`**, defined at module top level (not inside the
  component render). Each key is a namespace holding CSS properties.
- **camelCase properties.** `background-color` → `backgroundColor`, `--my-var` stays as-is.
- **Longhand + single-value shorthands only.** StyleX intentionally disallows *multi-value*
  shorthands because they collide with longhands during merging and make override order
  ambiguous. Split them:
  - `margin: '0 auto'` → `marginBlock: 0, marginInline: 'auto'`
  - `padding: '1rem 2rem'` → `paddingBlock: '1rem', paddingInline: '2rem'`
  - `border: '1px solid #ccc'` → `borderWidth: 1, borderStyle: 'solid', borderColor: '#ccc'`
  - `inset: 0` (single value) is fine; `inset: '0 4px'` is not.
- **Numbers are px** for length properties. `width: 24` = `24px`. Unitless properties
  (`lineHeight`, `flexGrow`, `opacity`, `zIndex`, `fontWeight`) take raw numbers too.
  Anything with a non-px unit is a string (`'1.5rem'`, `'50%'`).
- **Conditional values need a `default`.** Any property with a `:pseudo`, `@media`,
  `@container`, `[attr]`, or `::pseudo-element` key must also have `default` (use `null`
  for "no base value"). This applies at every nesting level.
- **`null` unsets a property** — useful for a variant that removes a base style.
- **No arbitrary nesting / descendant selectors.** You can't write `'& .child'` or
  `'.dark &'`. Conditions are limited to the current element's own pseudo-classes,
  pseudo-elements, attributes, and at-rules. Cross-element styling is done with variables
  (see theming) or by styling each element directly.
- **Dynamic styles are functions** whose args are plain identifiers and whose body is a
  single object literal: `bar: (h) => ({ height: h })`. No destructuring, no defaults, no
  `return`.

## Common mistakes

- Forgetting `default` on a conditional property → the condition is ignored at runtime.
- Putting `stylex.props(...)` on a **custom component** instead of a host element — the
  component must forward the style to its own DOM node.
- Emitting a multi-value shorthand (`padding: '8px 16px'`) — the compiler/ESLint rejects
  it; split into block/inline longhands.
- Dropping the second declaration of a Tailwind utility that sets several (e.g. `text-sm`
  sets `font-size` **and** `line-height`; `truncate` sets three).
- Building styles inside render (`const styles = stylex.create(...)` in the component
  body) — define at module scope so the compiler can extract them.
- Merging in the wrong order: `stylex.props` is last-wins. Keep a caller-supplied
  `style`/override last so consumers can still win, matching `cn(...)` semantics.

## Theming with variables

For values that need theming or runtime overrides (brand colors, class-based dark mode,
spacing scales reused project-wide), use variables. They must be **named exports** and the
**only** exports in a `.stylex.ts` / `.stylex.js` file.

```ts
// tokens.stylex.ts
import * as stylex from '@stylexjs/stylex'

export const colors = stylex.defineVars({
  text: '#111827',
  bg: '#ffffff',
  brand: '#2563eb',
})
```

```tsx
// use them
import * as stylex from '@stylexjs/stylex'
import { colors } from './tokens.stylex'

const styles = stylex.create({
  card: { color: colors.text, backgroundColor: colors.bg },
})
```

Class-based dark mode: define a dark theme with `createTheme` and apply it on an ancestor.
Descendants reading `colors.*` flip automatically — this replaces `dark:` variants that
StyleX can't express as ancestor selectors.

```tsx
// theme-dark.stylex.ts
import * as stylex from '@stylexjs/stylex'
import { colors } from './tokens.stylex'

export const darkTheme = stylex.createTheme(colors, {
  text: '#f9fafb',
  bg: '#111827',
  brand: '#3b82f6',
})

// apply: <div {...stylex.props(darkTheme, styles.app)}> ... </div>
```

## Project setup

StyleX is a compile-time system: without its plugin wired into the build, `stylex.props`
produces no styles and the migration looks broken. Confirm both pieces exist.

1. **Install:** `@stylexjs/stylex` (runtime) and the matching build integration.
2. **Bundler plugin** — pick the one for the project's toolchain:
   - Next.js: `@stylexjs/nextjs-plugin` (or the community SWC plugin) in `next.config`.
   - Vite: `vite-plugin-stylex` (or `@stylexjs/postcss-plugin`) in `vite.config`.
   - Webpack/rspack: `@stylexjs/webpack-plugin`.
   - Babel-only: `@stylexjs/babel-plugin` in `babel.config`.
3. **A CSS entry** the plugin emits into (e.g. the plugin's generated stylesheet imported
   once at the app root), so the extracted styles are actually served.
4. **Optional but recommended:** `@stylexjs/eslint-plugin` — it catches the authoring-rule
   violations above automatically.
5. **react-strict-dom (React Native / universal):** styles come from `css.create` and are
   applied via the `style` prop on `html.*` elements rather than `stylex.props` spreads;
   the authoring rules (conditions, longhands, dynamic functions) are otherwise the same.

Consult the current StyleX docs for exact plugin names/versions before installing — the
integration packages evolve. If you can't verify setup in the environment, convert the
code but tell the user to confirm the plugin is configured.

## Framework support: props vs. attrs

StyleX is framework-agnostic — the Babel/compiler plugin transforms `stylex.create` calls
regardless of the UI framework, so `create` and the authoring rules never change. Only the
*applicator* is framework-specific:

- **`stylex.props(...)`** returns `{ className, style }` — spread it onto a JSX element.
  Use for React, Preact, `react-strict-dom`, and anything else that spreads JSX props.
- **`stylex.attrs(...)`** returns `{ class, style }` where `style` is a **string** (e.g.
  `"color:red;"`) — bind these as plain attributes. Use for Solid, Svelte, Vue, Qwik, and
  other non-React frameworks (some, like Vue/Svelte, may need extra build config; check the
  StyleX docs). It accepts the same arguments as `props` (styles, conditionals, arrays).

So a Solid component that would write `{...stylex.props(styles.a, cond && styles.b)}` in
React writes `{...stylex.attrs(styles.a, cond && styles.b)}` instead — the `styles` object
is identical. When migrating a non-React framework, do Steps 1–3 exactly as written and only
swap the applicator in Step 4.

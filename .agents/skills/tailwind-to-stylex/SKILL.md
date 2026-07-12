---
name: tailwind-to-stylex
description: >-
  Migrate TailwindCSS to StyleX. Use when converting Tailwind `className` utility strings
  into StyleX `stylex.create` + `stylex.props`/`stylex.attrs` — a single component or a whole
  codebase, in React/JSX/TSX, react-strict-dom, or any JS framework StyleX supports (Solid,
  Svelte, Vue, Qwik, Preact, …) — when the user mentions tailwind-to-stylex or tw-to-stylex,
  or when they have something "in Tailwind" and want it "in StyleX", even if they don't name
  this skill.
compatibility: Any JavaScript-framework project (React, Preact, Solid, Svelte, Vue, Qwik, react-strict-dom, …) with StyleX (@stylexjs/stylex) and its compiler plugin configured. If StyleX isn't set up yet, see references/stylex-rules.md ("Project setup").
---

# Migrate Tailwind to StyleX

Convert Tailwind utility classes into StyleX styles: replace `className="..."` strings
with entries in a `stylex.create({...})` call, and apply them with `stylex.props(...)`.

This is a **behavior-preserving refactor**, not a redesign. The rendered pixels should
not change. Don't drop styles you can't cleanly convert — flag them (see Step 6) so the
user can decide, rather than silently changing the design.

## The core mechanic: resolve, then reshape

The reliable way to convert a class string is the same one the `tw-to-stylex` codemod
uses under the hood: **resolve each class to the CSS it actually produces, then reshape
that CSS into a StyleX object.** Don't pattern-match class names to guesses — think in
the computed CSS, because that's what has to stay identical.

```
"px-4 py-2 text-sm font-medium hover:bg-blue-600"
        │
        ▼   resolve to CSS (mind the project's Tailwind version + config)
padding-inline: 1rem; padding-block: .5rem;
font-size: .875rem; line-height: 1.25rem; font-weight: 500;
:hover { background-color: #2563eb }
        │
        ▼   reshape to StyleX (camelCase, conditions as values)
{
  paddingInline: '1rem',
  paddingBlock: '0.5rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: 500,
  backgroundColor: { default: null, ':hover': '#2563eb' },
}
```

If a class uses arbitrary values (`w-[37px]`), the project's custom theme, or a plugin,
resolving-to-CSS still works — you read the value straight out of the class or the
config. When unsure what a class computes to (custom config, unfamiliar plugin), check
the project's `tailwind.config` / CSS `@theme`, or resolve it rather than guessing.

## Two things that trip up conversions

**1. StyleX conditions are values, not rules.** Tailwind spreads state and responsive
variants across separate rules (`hover:`, `md:`, `dark:`). StyleX instead nests the
*condition inside the property value*, and the `default` key is **required** whenever a
property has any condition (use `null` when there's no base value). This is the single
biggest shape difference — get it wrong and styles silently don't apply.

```tsx
// md:flex hover:opacity-80  ->  conditions live on each property
display: { default: 'block', '@media (min-width: 768px)': 'flex' },
opacity: { default: 1, ':hover': 0.8 },
```

**2. Some Tailwind utilities compile to selectors StyleX can't express on one element.**
`space-x-*`, `divide-*`, `group`/`group-hover:*`, `peer`/`peer-*:*`, and typography's
`prose` all rely on descendant, sibling, or ancestor-state selectors. StyleX styles a
single element, so these don't map 1:1. Don't fake them — restructure (e.g. `space-x` →
`gap` on the flex parent; `group-hover` → lift state into React or a CSS variable) and
tell the user. See `references/mapping.md` for each case.

## Workflow

Work one component (file) at a time so each stays reviewable.

### Step 1: Confirm StyleX is set up

StyleX needs its compiler plugin wired into the bundler (Babel/Vite/Next/Webpack/rspack)
and `@stylexjs/stylex` installed — otherwise `stylex.props` returns nothing at runtime
and the migration looks broken. Check `package.json` and the bundler config. If it isn't
set up, read `references/stylex-rules.md` → "Project setup" and either configure it or
tell the user what's missing before converting. Note whether the target is React DOM or
`react-strict-dom` (React Native) — it changes how styles are applied (see the
`react-strict-dom` note in `references/stylex-rules.md` → "Project setup").

### Step 2: Find the Tailwind usage

Locate every `className`/`class` in the file, including dynamic ones: `cn(...)`,
`clsx(...)`, `twMerge(...)`, template literals, and ternaries. You need the *complete*
set of classes that can apply to each element, and under which conditions, to convert
faithfully.

### Step 3: Build the `stylex.create` object

Create one named entry per distinct element/variant (`base`, `label`, `iconActive`…) —
descriptive names beat `$1`, `$2`. For each, resolve its classes to CSS and reshape
(the core mechanic). Apply the StyleX authoring rules that differ from raw CSS:

- **camelCase** every property (`border-radius` → `borderRadius`).
- **Longhand + single-value shorthands only.** StyleX warns on multi-value shorthands
  because they cause merge conflicts. Split them: `border: '1px solid red'` →
  `borderWidth: 1, borderStyle: 'solid', borderColor: 'red'`; a two-value `padding` →
  `paddingBlock` / `paddingInline`. A single-value shorthand (`padding: 16`) is fine.
- **Numbers are px.** `width: 24` means 24px. Keep other units as strings (`'1.5rem'`,
  `'50%'`, `'100vh'`).
- **Conditions as values with a required `default`** (see gotcha 1). Mobile-first: the
  unprefixed class is `default`; `sm/md/lg/xl/2xl` become `@media (min-width: …)` keys.
- Full modifier → condition table (states, dark mode, `first`/`last`, `before`/`after`,
  arbitrary values, gradients, animations) lives in `references/mapping.md` — read it
  whenever you hit anything past plain utilities.

### Step 4: Apply the styles

Steps 1–3 are identical for every framework — StyleX is framework-agnostic, and only
*applying* the result differs. First pick the applicator for the target:

- **React and JSX-spread frameworks** (React DOM, Preact, `react-strict-dom`): spread
  `stylex.props(...)`, which returns `{ className, style }`.
- **Solid, Svelte, Vue, Qwik, and other non-React frameworks**: use `stylex.attrs(...)`
  instead — it returns a plain `class` string and a string `style` value to bind onto the
  element. Which styles you pass and in what order is exactly the same as `props`.

Then, whichever applicator you use:

- **Host elements** (`div`, `span`, `button` — lowercase): apply the result directly,
  replacing the old `className` / `class`.
- **Components** (capitalized): they don't accept `stylex.props`/`attrs` output directly.
  Pass the style tokens down (e.g. a `style` prop) and let the component apply them on its
  own host element. Don't just dump the applicator output onto a component and assume it works.
- **Preserve conditional composition.** The applicator merges left-to-right, last wins —
  the same order semantics as `cn(...)`. So `cn('base', isActive && 'active')` becomes
  `stylex.props(styles.base, isActive && styles.active)` (or `stylex.attrs(...)`), and a
  passed-in override stays last so callers can still win.

### Step 5: Repeated design tokens (optional)

If the same theme value (a brand color, a spacing step) recurs across the file or the
project uses semantic tokens, consider `stylex.defineVars` in a `.stylex.ts` file instead
of hardcoding — this is also the clean answer to class-based `dark:` theming
(`createTheme`). See `references/stylex-rules.md` → "Theming with variables". Don't force
this for one-off values.

### Step 6: Flag what didn't convert

Call out, in your summary, anything you couldn't map 1:1: the selector-based utilities
from gotcha 2, any class you couldn't resolve, and any place you restructured markup.
Losing a hover/dark/responsive style silently is the failure that matters most here.

### Step 7: Verify

Typecheck and run the linter on the changed files. If the project has the StyleX ESLint
plugin, it catches invalid shorthands, missing `default`, and unknown properties — fix
what it reports. Confirm no stray `className` / Tailwind imports remain on migrated
elements, and remove Tailwind directives/config only once the whole codebase is migrated
(not per-file). If deps aren't installed in your environment, say so and mark the check
as structural rather than claiming it runs.

## Worked example

```tsx
// Before
import { cn } from '@/lib/utils'

export function Badge({ active, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600',
        className,
      )}
    >
      Status
    </span>
  )
}
```

```tsx
// After
import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '9999px',
    paddingInline: '0.625rem',
    paddingBlock: '0.125rem',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 600,
  },
  active: { backgroundColor: '#dcfce7', color: '#166534' },
  inactive: { backgroundColor: '#f3f4f6', color: '#4b5563' },
})

export function Badge({ active, style }: Props) {
  return (
    <span
      {...stylex.props(styles.base, active ? styles.active : styles.inactive, style)}
    >
      Status
    </span>
  )
}
```

Note what changed: `text-xs` carried *two* declarations (`font-size` **and**
`line-height`) — both were kept. The caller override moved from `className` to `style`
(StyleX passes styles, not class strings). The `cn` ternary became a `stylex.props`
ternary with identical last-wins order. This example is React; in Solid/Svelte/Vue/Qwik the
`styles` object is byte-for-byte the same — only the `stylex.props` call becomes
`stylex.attrs` and you bind the returned `class`/`style` the way that framework binds attributes.

## Reference files

- `references/mapping.md` — Tailwind modifier/variant → StyleX condition table, and how
  to handle the tricky utilities (`space-x`, `divide`, `group`/`peer`, dark mode,
  arbitrary values, gradients, `before`/`after`, animations, `sr-only`). Read it for
  anything beyond plain single-value utilities.
- `references/stylex-rules.md` — StyleX authoring rules, common mistakes, project setup,
  framework support (`stylex.props` vs `stylex.attrs`), and theming with
  `defineVars`/`createTheme`. Read it when setting up StyleX, migrating a non-React
  framework, or when the ESLint plugin flags something.

# Tailwind → StyleX mapping

Read this whenever a class carries a modifier (`hover:`, `md:`, `dark:`, `group-*`…) or
isn't a plain single-value utility. The guiding rule from `SKILL.md` still holds:
**resolve the class to the CSS it produces, then reshape.** This file is about the
*reshape* step — where Tailwind's variant goes in a StyleX object, and what to do with
utilities that don't have a one-property home.

## Contents

- [Modifiers → conditions](#modifiers--conditions)
- [Responsive breakpoints](#responsive-breakpoints)
- [Dark mode](#dark-mode)
- [Combining conditions](#combining-conditions)
- [Arbitrary values & runtime values](#arbitrary-values--runtime-values)
- [Utilities that need restructuring](#utilities-that-need-restructuring)
- [Pseudo-elements: before / after](#pseudo-elements-before--after)
- [Animations & keyframes](#animations--keyframes)
- [Gradients, shadows, transforms](#gradients-shadows-transforms)
- [Accessibility & misc](#accessibility--misc)

## Modifiers → conditions

Every Tailwind variant becomes a **key inside the property value object**, alongside a
`default`. The value object repeats per property the variant touches.

| Tailwind | StyleX condition key |
| --- | --- |
| `hover:` | `':hover'` |
| `focus:` | `':focus'` |
| `focus-visible:` | `':focus-visible'` |
| `focus-within:` | `':focus-within'` |
| `active:` | `':active'` |
| `visited:` | `':visited'` |
| `disabled:` | `':disabled'` |
| `checked:` | `':checked'` |
| `first:` | `':first-child'` |
| `last:` | `':last-child'` |
| `odd:` | `':nth-child(odd)'` |
| `even:` | `':nth-child(even)'` |
| `empty:` | `':empty'` |
| `aria-*` (e.g. `aria-expanded:`) | `'[aria-expanded="true"]'` (attribute selector as key) |
| `data-*` (e.g. `data-[state=open]:`) | `'[data-state="open"]'` |
| `dark:` | see [Dark mode](#dark-mode) |
| `sm: md: lg: xl: 2xl:` | `@media` — see [Responsive](#responsive-breakpoints) |

```tsx
// hover:bg-blue-600 focus:bg-blue-700
backgroundColor: {
  default: '#3b82f6',
  ':hover': '#2563eb',
  ':focus': '#1d4ed8',
},
```

## Responsive breakpoints

Tailwind is mobile-first: an unprefixed utility is the base, and `sm/md/lg` layer on at
`min-width`. Mirror that — unprefixed → `default`, breakpoints → `@media (min-width: …)`.
Default Tailwind breakpoints:

| Prefix | Media query key |
| --- | --- |
| `sm:` | `'@media (min-width: 640px)'` |
| `md:` | `'@media (min-width: 768px)'` |
| `lg:` | `'@media (min-width: 1024px)'` |
| `xl:` | `'@media (min-width: 1280px)'` |
| `2xl:` | `'@media (min-width: 1536px)'` |

If the project customized breakpoints (`tailwind.config` `theme.screens` or CSS
`@theme`), use those pixel values instead. `max-*` / range variants map to the
corresponding `max-width` / range media queries.

```tsx
// w-full md:w-1/2 lg:w-1/3
width: {
  default: '100%',
  '@media (min-width: 768px)': '50%',
  '@media (min-width: 1024px)': '33.333333%',
},
```

## Dark mode

Which target you pick must match how the project runs dark mode:

- **Media strategy** (`darkMode: 'media'`): map `dark:` →
  `'@media (prefers-color-scheme: dark)'`, just another condition key.
- **Class/selector strategy** (`darkMode: 'class'`, the common one — a `.dark` ancestor
  toggles theme): StyleX can't target an ancestor class from a child's styles. The clean
  equivalent is **themed variables**: define tokens with `stylex.defineVars`, make a dark
  `stylex.createTheme`, and apply the theme class on the root. Colors then reference
  `colors.text` and flip automatically. See `stylex-rules.md` → "Theming with variables".
  Flag this to the user, since it's a structural change, not a per-property swap.

```tsx
// media strategy: bg-white dark:bg-gray-900
backgroundColor: {
  default: '#ffffff',
  '@media (prefers-color-scheme: dark)': '#111827',
},
```

## Combining conditions

Stacked variants (`md:hover:...`, `dark:focus:...`) nest. **Each nested level needs its
own `default`** — a missing inner default silently drops the style.

```tsx
// hover:bg-blue-600 md:hover:bg-blue-700
backgroundColor: {
  default: '#3b82f6',
  ':hover': {
    default: '#2563eb',
    '@media (min-width: 768px)': '#1d4ed8',
  },
},
```

## Arbitrary values & runtime values

- **Static arbitrary value** — read it straight out of the class:
  `top-[117px]` → `top: '117px'`, `bg-[#1da1f2]` → `backgroundColor: '#1da1f2'`,
  `grid-cols-[1fr_500px]` → `gridTemplateColumns: '1fr 500px'`.
- **Runtime value** (a JS expression drives the value, e.g. `w-[${size}px]` or an inline
  `style={{ width }}`) — StyleX can't compute it at build time. Use a **dynamic style
  function**: arguments must be plain identifiers and the body a single object literal.

```tsx
const styles = stylex.create({
  bar: (width: number) => ({ width }),   // number → px
})
// ...
<div {...stylex.props(styles.bar(width))} />
```

## Utilities that need restructuring

These Tailwind utilities compile to descendant / sibling / ancestor-state selectors.
StyleX styles one element, so there's no property to put them on. Restructure and tell
the user.

| Tailwind | Why it doesn't map | What to do instead |
| --- | --- | --- |
| `space-x-*` / `space-y-*` | emits `> * + * { margin… }` | Put `gap` on the flex/grid parent (`gap: '1rem'`). If the parent isn't flex/grid, add margins to the children's own styles. |
| `divide-x-*` / `divide-y-*` | border on `> * + *` | Add a border to the child styles (e.g. `borderTopWidth` on each child after the first), or a separator element. |
| `group` + `group-hover:` / `group-focus:` | styles a child based on ancestor state | Lift the state into React (`isHovered`) and pass a conditional style, or drive a `stylex.defineVars` variable set on the parent's `:hover` and read by the child. |
| `peer` + `peer-*:` | styles based on a sibling's state | Same as `group`: React state or a shared CSS variable. |
| `prose` (typography plugin) | styles a whole subtree of tags | No StyleX equivalent; keep the plugin for that subtree or style tags explicitly. Flag it. |
| `@container` + `@sm:` etc. | container queries | StyleX **does** support `@container` as a condition key — set `containerType` on the parent and use `'@container (min-width: …)'` on children. Not un-convertible, just note it. |

## Pseudo-elements: before / after

`before:` / `after:` become `'::before'` / `'::after'` condition keys. A generated
pseudo-element needs `content` (Tailwind sets `content: ''` implicitly).

```tsx
// before:content-['*'] before:text-red-500
color: { default: null, '::before': '#ef4444' },
content: { default: null, '::before': '"*"' },
```

## Animations & keyframes

`animate-*` utilities reference keyframes. Define them with `stylex.keyframes` and
reference the result in `animationName`.

```tsx
const spin = stylex.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})
const styles = stylex.create({
  spinner: { animationName: spin, animationDuration: '1s', animationIterationCount: 'infinite' },
})
```

For Tailwind's built-in `animate-spin/ping/pulse/bounce`, recreate the keyframes it ships
(spin is the example above). Split the shorthand `animation` into longhands.

## Gradients, shadows, transforms

- **Gradient** (`bg-gradient-to-r from-… to-…`) → resolve to the `background-image`
  linear-gradient it produces: `backgroundImage: 'linear-gradient(to right, #…, #…)'`.
- **Shadow** (`shadow-md`) → the literal `boxShadow` value from the Tailwind scale.
- **Transforms** (`scale-95`, `rotate-3`, `-translate-x-2`) → Tailwind composes these via
  CSS variables into one `transform`. In StyleX, combine them into a single `transform`
  string (`transform: 'translateX(-0.5rem) rotate(3deg) scale(0.95)'`). Keep transition
  utilities as longhand `transitionProperty` / `transitionDuration` / `transitionTimingFunction`.

## Accessibility & misc

- `sr-only` → expand to the known declaration block (position:absolute; width/height 1px;
  padding 0; margin -1px; overflow hidden; clip; whiteSpace nowrap; borderWidth 0). Its
  counterpart `not-sr-only` reverses it.
- `container` → Tailwind's container is `width: 100%` plus `max-width` per breakpoint;
  reproduce with `maxWidth` conditions if used.
- `line-clamp-*` → the `-webkit-box` / `-webkit-line-clamp` block Tailwind emits.

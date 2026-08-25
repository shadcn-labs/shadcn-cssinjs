import { defineConfig } from "@pandacss/dev";

/**
 * Panda CSS configuration for the Panda component base.
 *
 * Each color/radius token wraps the corresponding CSS custom property defined
 * in the app's global stylesheet (e.g. `--primary`). Theming therefore stays
 * driven by the class-based `.dark` toggle (next-themes) and the theme
 * customizer — flipping `.dark` / changing `--primary` updates the underlying
 * variables, which propagate through these tokens. Components reference token
 * names (`bg: "primary"`, `rounded: "md"`) instead of raw shadcn variables, so
 * usage is typed and centralized, mirroring the StyleX and Tokenami bases.
 *
 * The runtime (`styled-system/`) is produced by `panda codegen`; the static
 * stylesheet (`styles/panda.css`) by `pnpm panda:build` (scans the Panda
 * registry + examples). Panda's layers are namespaced (`panda-*`) so they don't
 * merge into Tailwind's `base`/`utilities` layers.
 */
export default defineConfig({
  conditions: {
    extend: {
      // Base UI / Radix state data-attributes (Panda supports them directly,
      // so stateful styling avoids className callbacks).
      ariaInvalid: "&[aria-invalid='true']",
      checked: "&[data-checked]",
      closed: "&[data-closed]",
      dataActive: "&[data-active]",
      dataDisabled: "&[data-disabled]",
      ending: "&[data-ending-style]",
      highlighted: "&[data-highlighted]",
      invalid: "&[data-invalid]",
      open: "&[data-open]",
      panelOpen: "&[data-panel-open]",
      pressed: "&[data-pressed]",
      selected: "&[data-selected]",
      starting: "&[data-starting-style]",
      unchecked: "&[data-unchecked]",
    },
  },
  exclude: [],
  include: [
    "./registry/bases/panda/**/*.{ts,tsx}",
    "./examples-panda/**/*.{ts,tsx}",
  ],
  jsxFramework: "react",
  layers: {
    base: "panda-base",
    recipes: "panda-recipes",
    reset: "panda-reset",
    tokens: "panda-tokens",
    utilities: "panda-utilities",
  },
  outdir: "styled-system",
  preflight: false,
  theme: {
    extend: {
      tokens: {
        colors: {
          accent: {
            DEFAULT: { value: "var(--accent)" },
            foreground: { value: "var(--accent-foreground)" },
          },
          background: { value: "var(--background)" },
          border: { value: "var(--border)" },
          card: {
            DEFAULT: { value: "var(--card)" },
            foreground: { value: "var(--card-foreground)" },
          },
          current: { value: "currentColor" },
          destructive: { value: "var(--destructive)" },
          foreground: { value: "var(--foreground)" },
          input: { value: "var(--input)" },
          muted: {
            DEFAULT: { value: "var(--muted)" },
            foreground: { value: "var(--muted-foreground)" },
          },
          popover: {
            DEFAULT: { value: "var(--popover)" },
            foreground: { value: "var(--popover-foreground)" },
          },
          primary: {
            DEFAULT: { value: "var(--primary)" },
            foreground: { value: "var(--primary-foreground)" },
          },
          ring: { value: "var(--ring)" },
          secondary: {
            DEFAULT: { value: "var(--secondary)" },
            foreground: { value: "var(--secondary-foreground)" },
          },
          sidebar: {
            DEFAULT: { value: "var(--sidebar)" },
            accent: {
              DEFAULT: { value: "var(--sidebar-accent)" },
              foreground: { value: "var(--sidebar-accent-foreground)" },
            },
            border: { value: "var(--sidebar-border)" },
            foreground: { value: "var(--sidebar-foreground)" },
            primary: {
              DEFAULT: { value: "var(--sidebar-primary)" },
              foreground: { value: "var(--sidebar-primary-foreground)" },
            },
            ring: { value: "var(--sidebar-ring)" },
          },
          transparent: { value: "transparent" },
        },
        radii: {
          full: { value: "9999px" },
          lg: { value: "var(--radius)" },
          md: { value: "calc(var(--radius) - 2px)" },
          sm: { value: "calc(var(--radius) - 4px)" },
          xl: { value: "calc(var(--radius) + 4px)" },
        },
      },
    },
  },
});

import * as stylex from "@stylexjs/stylex";

/**
 * Design tokens for the StyleX component set.
 *
 * Each token wraps the corresponding CSS custom property defined in the app's
 * global stylesheet (e.g. `--primary`). Theming therefore stays driven by the
 * class-based `.dark` toggle (next-themes) — flipping `.dark` updates the
 * underlying `--*` variables, which propagate through these tokens. Components
 * reference `colors.primary` / `radius.md` instead of stringly-typed
 * `var(--primary)` so token usage is typed and centralized.
 */
export const colors = stylex.defineVars({
  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",
  background: "var(--background)",
  border: "var(--border)",
  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
  destructive: "var(--destructive)",
  foreground: "var(--foreground)",
  input: "var(--input)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  popover: "var(--popover)",
  popoverForeground: "var(--popover-foreground)",
  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  ring: "var(--ring)",
  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",
  sidebar: "var(--sidebar)",
  sidebarAccent: "var(--sidebar-accent)",
  sidebarAccentForeground: "var(--sidebar-accent-foreground)",
  sidebarBorder: "var(--sidebar-border)",
  sidebarForeground: "var(--sidebar-foreground)",
  sidebarPrimary: "var(--sidebar-primary)",
  sidebarPrimaryForeground: "var(--sidebar-primary-foreground)",
  sidebarRing: "var(--sidebar-ring)",
});

export const darkColors = stylex.createTheme(colors, {
  accent: "oklch(0.371 0 0)",
  accentForeground: "oklch(0.985 0 0)",
  background: "oklch(0.145 0 0)",
  border: "oklch(1 0 0 / 10%)",
  card: "oklch(0.205 0 0)",
  cardForeground: "oklch(0.985 0 0)",
  destructive: "oklch(0.704 0.191 22.216)",
  foreground: "oklch(0.985 0 0)",
  input: "oklch(1 0 0 / 15%)",
  muted: "oklch(0.269 0 0)",
  mutedForeground: "oklch(0.708 0 0)",
  popover: "oklch(0.269 0 0)",
  popoverForeground: "oklch(0.985 0 0)",
  primary: "oklch(0.922 0 0)",
  primaryForeground: "oklch(0.205 0 0)",
  ring: "oklch(0.556 0 0)",
  secondary: "oklch(0.269 0 0)",
  secondaryForeground: "oklch(0.985 0 0)",
  sidebar: "oklch(0.205 0 0)",
  sidebarAccent: "oklch(0.269 0 0)",
  sidebarAccentForeground: "oklch(0.985 0 0)",
  sidebarBorder: "oklch(1 0 0 / 10%)",
  sidebarForeground: "oklch(0.985 0 0)",
  sidebarPrimary: "oklch(0.488 0.243 264.376)",
  sidebarPrimaryForeground: "oklch(0.985 0 0)",
  sidebarRing: "oklch(0.439 0 0)",
});

export const radius = stylex.defineVars({
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
  xl: "calc(var(--radius) + 4px)",
});

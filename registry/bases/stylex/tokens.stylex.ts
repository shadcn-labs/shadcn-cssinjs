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
  background: "var(--background)",
  foreground: "var(--foreground)",
  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
  popover: "var(--popover)",
  popoverForeground: "var(--popover-foreground)",
  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",
  destructive: "var(--destructive)",
  border: "var(--border)",
  input: "var(--input)",
  ring: "var(--ring)",
  sidebar: "var(--sidebar)",
  sidebarForeground: "var(--sidebar-foreground)",
  sidebarPrimary: "var(--sidebar-primary)",
  sidebarPrimaryForeground: "var(--sidebar-primary-foreground)",
  sidebarAccent: "var(--sidebar-accent)",
  sidebarAccentForeground: "var(--sidebar-accent-foreground)",
  sidebarBorder: "var(--sidebar-border)",
  sidebarRing: "var(--sidebar-ring)",
});

export const radius = stylex.defineVars({
  sm: "calc(var(--radius) - 4px)",
  md: "calc(var(--radius) - 2px)",
  lg: "var(--radius)",
  xl: "calc(var(--radius) + 4px)",
});

export const BASES = [
  { label: "Base UI", value: "base" },
  { label: "Radix", value: "radix" },
] as const;

export const STYLES = [
  { label: "Vega", value: "vega" },
  { label: "Nova", value: "nova" },
  { label: "Maia", value: "maia" },
  { label: "Lyra", value: "lyra" },
  { label: "Mira", value: "mira" },
  { label: "Rhea", value: "rhea" },
  { label: "Sera", value: "sera" },
  { label: "Luma", value: "luma" },
] as const;

export const BASE_COLORS = [
  { label: "Neutral", value: "neutral" },
  { label: "Gray", value: "gray" },
  { label: "Zinc", value: "zinc" },
  { label: "Stone", value: "stone" },
  { label: "Slate", value: "slate" },
] as const;

export const THEMES = [
  { color: "#737373", label: "Neutral", value: "neutral" },
  { color: "#2563eb", label: "Blue", value: "blue" },
  { color: "#16a34a", label: "Green", value: "green" },
  { color: "#ea580c", label: "Orange", value: "orange" },
  { color: "#dc2626", label: "Red", value: "red" },
  { color: "#e11d48", label: "Rose", value: "rose" },
  { color: "#7c3aed", label: "Violet", value: "violet" },
  { color: "#ca8a04", label: "Yellow", value: "yellow" },
] as const;

export const FONTS = [
  { family: "Geist, ui-sans-serif, system-ui", label: "Geist", value: "geist" },
  { family: "Inter, ui-sans-serif, system-ui", label: "Inter", value: "inter" },
  {
    family: "Figtree, ui-sans-serif, system-ui",
    label: "Figtree",
    value: "figtree",
  },
  {
    family: "Manrope, ui-sans-serif, system-ui",
    label: "Manrope",
    value: "manrope",
  },
  {
    family: "Montserrat, ui-sans-serif, system-ui",
    label: "Montserrat",
    value: "montserrat",
  },
  {
    family: "Outfit, ui-sans-serif, system-ui",
    label: "Outfit",
    value: "outfit",
  },
  {
    family: "Roboto, ui-sans-serif, system-ui",
    label: "Roboto",
    value: "roboto",
  },
  {
    family: "'Noto Serif', ui-serif, serif",
    label: "Noto Serif",
    value: "noto-serif",
  },
  { family: "Lora, ui-serif, serif", label: "Lora", value: "lora" },
  {
    family: "'JetBrains Mono', ui-monospace, monospace",
    label: "JetBrains Mono",
    value: "jetbrains-mono",
  },
] as const;

export const ICON_LIBRARIES = [
  { label: "Lucide", value: "lucide" },
  { label: "Hugeicons", value: "hugeicons" },
  { label: "Phosphor", value: "phosphor" },
  { label: "Tabler", value: "tabler" },
  { label: "Remix", value: "remix" },
] as const;

export const RADII = [
  { label: "Default", radius: "0.625rem", value: "default" },
  { label: "None", radius: "0rem", value: "none" },
  { label: "Small", radius: "0.45rem", value: "small" },
  { label: "Medium", radius: "0.625rem", value: "medium" },
  { label: "Large", radius: "0.875rem", value: "large" },
] as const;

export const MENU_COLORS = [
  { label: "Default", value: "default" },
  { label: "Inverted", value: "inverted" },
  { label: "Translucent", value: "default-translucent" },
  { label: "Inverted translucent", value: "inverted-translucent" },
] as const;

export const MENU_ACCENTS = [
  { label: "Subtle", value: "subtle" },
  { label: "Bold", value: "bold" },
] as const;

export const PREVIEW_ITEMS = [
  { label: "Preview 01", value: "preview" },
  { label: "Preview 02", value: "preview-02" },
  { label: "Dashboard", value: "dashboard" },
  { label: "Components", value: "components" },
  { label: "Authentication", value: "authentication" },
  { label: "Charts", value: "charts" },
  { label: "Sidebar", value: "sidebar" },
] as const;

export const TEMPLATES = [
  { label: "Next.js", value: "next" },
  { label: "Next.js monorepo", value: "next-monorepo" },
  { label: "Vite", value: "vite" },
  { label: "Vite monorepo", value: "vite-monorepo" },
  { label: "React Router", value: "react-router" },
  { label: "Astro", value: "astro" },
  { label: "Laravel", value: "laravel" },
] as const;

export const DEFAULT_CREATE_CONFIG = {
  base: "base",
  baseColor: "neutral",
  chartColor: "neutral",
  font: "geist",
  fontHeading: "inherit",
  iconLibrary: "lucide",
  item: "preview-02",
  menuAccent: "subtle",
  menuColor: "default",
  pointer: false,
  radius: "default",
  rtl: false,
  size: 100,
  style: "nova",
  template: "next",
  theme: "neutral",
} as const;

export type OptionValue<T extends readonly { value: string }[]> =
  T[number]["value"];
export type BaseValue = OptionValue<typeof BASES>;
export type StyleValue = OptionValue<typeof STYLES>;
export type BaseColorValue = OptionValue<typeof BASE_COLORS>;
export type ThemeValue = OptionValue<typeof THEMES>;
export type FontValue = OptionValue<typeof FONTS>;
export type IconLibraryValue = OptionValue<typeof ICON_LIBRARIES>;
export type RadiusValue = OptionValue<typeof RADII>;
export type MenuColorValue = OptionValue<typeof MENU_COLORS>;
export type MenuAccentValue = OptionValue<typeof MENU_ACCENTS>;
export type PreviewItemValue = OptionValue<typeof PREVIEW_ITEMS>;
export type TemplateValue = OptionValue<typeof TEMPLATES>;

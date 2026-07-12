/**
 * Theme customizer config + DOM helpers.
 *
 * Primary-color themes map to the `.theme-<value>` classes defined in
 * `styles/themes.css` (applied to `<html>`, scoped to `.theme-container`).
 * Radius is applied by overriding the global `--radius` custom property.
 */

export interface ThemeColor {
  name: string;
  value: string;
  /** Tailwind utility used to render the swatch dot in the customizer. */
  swatch: string;
}

export const THEME_COLORS: ThemeColor[] = [
  {
    name: "Default",
    swatch: "bg-neutral-900 dark:bg-neutral-200",
    value: "default",
  },
  { name: "Blue", swatch: "bg-blue-600", value: "blue" },
  { name: "Green", swatch: "bg-lime-600", value: "green" },
  { name: "Amber", swatch: "bg-amber-600", value: "amber" },
  { name: "Orange", swatch: "bg-orange-600", value: "orange" },
  { name: "Red", swatch: "bg-red-600", value: "red" },
  { name: "Rose", swatch: "bg-rose-600", value: "rose" },
  { name: "Purple", swatch: "bg-purple-600", value: "purple" },
  { name: "Violet", swatch: "bg-violet-600", value: "violet" },
  { name: "Teal", swatch: "bg-teal-600", value: "teal" },
  { name: "Yellow", swatch: "bg-yellow-500", value: "yellow" },
  { name: "Mono", swatch: "bg-stone-600", value: "mono" },
];

export const THEME_RADII = [
  "0rem",
  "0.25rem",
  "0.5rem",
  "0.625rem",
  "0.75rem",
  "1rem",
];

export const DEFAULT_THEME_COLOR = "default";
export const DEFAULT_THEME_RADIUS = "0.625rem";

export const THEME_COLOR_STORAGE_KEY = "theme-color";
export const THEME_RADIUS_STORAGE_KEY = "theme-radius";

const THEME_COLOR_CLASSES = THEME_COLORS.map((color) => `theme-${color.value}`);

export const applyThemeColor = (value: string) => {
  const root = document.documentElement;
  root.classList.remove(...THEME_COLOR_CLASSES);
  root.classList.add(`theme-${value}`);
};

export const applyThemeRadius = (value: string) => {
  document.documentElement.style.setProperty("--radius", value);
};

export const radiusLabel = (value: string) => value.replace("rem", "");

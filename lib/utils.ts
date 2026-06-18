import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { SITE } from "@/constants/site";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const absoluteUrl = (path: string) => `${SITE.URL}${path}`;

export const formatLabelFromSlug = (slug: string) =>
  slug
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");

/**
 * Merge multiple StyleX style objects into a single props object
 * (`{ className, style }`). This is the StyleX equivalent of `cn()`.
 *
 * @example
 * <div {...x(styles.root, isActive && styles.active, styles.override)} />
 */
export const x = (
  ...styles: (StyleXStyles | boolean | null | undefined | 0)[]
): ReturnType<typeof stylex.props> =>
  stylex.props(...(styles.filter(Boolean) as StyleXStyles[]));

/**
 * Join className strings (dependency-free), used to merge a StyleX-generated
 * className with a caller-provided `className` escape hatch.
 */
export const cx = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ") || undefined;

export { stylex };

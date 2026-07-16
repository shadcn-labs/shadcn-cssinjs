import type { StyleXStyles } from "@stylexjs/stylex";

export const customClassName = (className: string | undefined) =>
  className ? ({ [className]: className, $$css: true } as StyleXStyles) : null;

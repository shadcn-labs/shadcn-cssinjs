"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  control: {
    alignItems: "center",
    display: "flex",
    height: "1rem",
    width: "100%",
  },
  indicator: {
    backgroundColor: colors.primary,
    borderRadius: "9999px",
    height: "100%",
  },
  root: {
    alignItems: "center",
    display: "flex",
    position: "relative",
    touchAction: "none",
    userSelect: "none",
    width: "100%",
  },
  thumb: {
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderRadius: "9999px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    height: "1rem",
    outline: "none",
    width: "1rem",
  },
  track: {
    backgroundColor: `color-mix(in oklab, ${colors.primary} 20%, transparent)`,
    borderRadius: "9999px",
    height: "0.375rem",
    overflow: "hidden",
    width: "100%",
  },
});

const Slider = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof SliderPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <SliderPrimitive.Root
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="slider"
    {...props}
  >
    <SliderPrimitive.Control
      className={stylex.props(styles.control).className}
      data-slot="slider-control"
    >
      <SliderPrimitive.Track
        className={stylex.props(styles.track).className}
        data-slot="slider-track"
      >
        <SliderPrimitive.Indicator
          className={stylex.props(styles.indicator).className}
          data-slot="slider-indicator"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={stylex.props(styles.thumb).className}
        data-slot="slider-thumb"
      />
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
);

export { Slider };

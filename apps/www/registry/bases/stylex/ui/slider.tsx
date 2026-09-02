"use client";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  control: {
    alignItems: "center",
    display: "flex",
    position: "relative",
    touchAction: "none",
    userSelect: "none",
    width: "100%",
  },
  controlDisabled: {
    opacity: 0.5,
  },
  controlVertical: {
    flexDirection: "column",
    height: "100%",
    minHeight: "10rem",
    width: "auto",
  },
  indicator: {
    backgroundColor: colors.primary,
    userSelect: "none",
  },
  indicatorHorizontal: {
    height: "100%",
  },
  indicatorVertical: {
    width: "100%",
  },
  root: {
    position: "relative",
  },
  rootHorizontal: {
    width: "100%",
  },
  rootVertical: {
    height: "100%",
  },
  thumb: {
    "::after": {
      bottom: "-0.5rem",
      content: '""',
      left: "-0.5rem",
      position: "absolute",
      right: "-0.5rem",
      top: "-0.5rem",
    },
    backgroundColor: "#ffffff",
    borderColor: colors.ring,
    borderRadius: radius.full,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":active": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      ":hover": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    display: "block",
    flexShrink: 0,
    height: "0.75rem",
    outline: "none",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "color, box-shadow",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
    width: "0.75rem",
  },
  thumbDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
  track: {
    backgroundColor: colors.muted,
    borderRadius: radius.full,
    flexGrow: 1,
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
  },
  trackHorizontal: {
    height: "0.25rem",
    width: "100%",
  },
  trackVertical: {
    height: "100%",
    width: "0.25rem",
  },
});

export type SliderProps = Omit<SliderPrimitive.Root.Props, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Slider = ({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  style,
  ...props
}: SliderProps) => {
  let _values = [min, max];
  if (Array.isArray(value)) {
    _values = value;
  } else if (Array.isArray(defaultValue)) {
    _values = defaultValue;
  }

  return (
    <SliderPrimitive.Root
      className={(state) =>
        stylex.props(
          styles.root,
          state.orientation === "vertical"
            ? styles.rootVertical
            : styles.rootHorizontal,
          customClassName(className),
          style
        ).className
      }
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control
        className={(state) =>
          stylex.props(
            styles.control,
            state.orientation === "vertical" && styles.controlVertical,
            state.disabled && styles.controlDisabled
          ).className
        }
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={(state) =>
            stylex.props(
              styles.track,
              state.orientation === "vertical"
                ? styles.trackVertical
                : styles.trackHorizontal
            ).className
          }
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className={(state) =>
              stylex.props(
                styles.indicator,
                state.orientation === "vertical"
                  ? styles.indicatorVertical
                  : styles.indicatorHorizontal
              ).className
            }
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className={(state) =>
              stylex.props(styles.thumb, state.disabled && styles.thumbDisabled)
                .className
            }
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};

export { Slider, styles as sliderStyles };

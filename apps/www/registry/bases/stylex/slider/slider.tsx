"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./slider.stylex";

const Slider = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof SliderPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <SliderPrimitive.Root
    className={
      [stylex.props(styles.root).className, className]
        .filter(Boolean)
        .join(" ") || undefined
    }
    data-slot="slider"
    style={style}
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

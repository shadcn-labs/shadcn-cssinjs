"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cx, x } from "@/lib/utils";

import { styles } from "./slider.stylex";

const Slider = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof SliderPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <SliderPrimitive.Root
    className={cx(x(styles.root).className, className)}
    data-slot="slider"
    style={style}
    {...props}
  >
    <SliderPrimitive.Control
      className={x(styles.control).className}
      data-slot="slider-control"
    >
      <SliderPrimitive.Track
        className={x(styles.track).className}
        data-slot="slider-track"
      >
        <SliderPrimitive.Indicator
          className={x(styles.indicator).className}
          data-slot="slider-indicator"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={x(styles.thumb).className}
        data-slot="slider-thumb"
      />
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
);

export { Slider };

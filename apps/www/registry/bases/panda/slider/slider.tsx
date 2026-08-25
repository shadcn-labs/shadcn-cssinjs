"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { css, cx } from "styled-system/css";

const root = css({
  alignItems: "center",
  display: "flex",
  position: "relative",
  touchAction: "none",
  userSelect: "none",
  width: "100%",
});

const control = css({
  alignItems: "center",
  display: "flex",
  height: "4",
  width: "100%",
});

const trackStyles = css({
  backgroundColor: "color-mix(in oklab, var(--primary) 20%, transparent)",
  borderRadius: "full",
  height: "1.5",
  overflow: "hidden",
  position: "relative",
  width: "100%",
});

const indicator = css({
  backgroundColor: "primary",
  borderRadius: "full",
  height: "100%",
});

const thumb = css({
  _focusVisible: {
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  backgroundColor: "background",
  borderColor: "primary",
  borderRadius: "full",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  height: "4",
  outlineStyle: "none",
  width: "4",
});

const Slider = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof SliderPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <SliderPrimitive.Root
    className={cx(root, className)}
    data-slot="slider"
    {...props}
  >
    <SliderPrimitive.Control className={control} data-slot="slider-control">
      <SliderPrimitive.Track className={trackStyles} data-slot="slider-track">
        <SliderPrimitive.Indicator
          className={indicator}
          data-slot="slider-indicator"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={thumb} data-slot="slider-thumb" />
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
);

export { Slider };

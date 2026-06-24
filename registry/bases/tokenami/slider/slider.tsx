"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--position": "relative",
  "--touch-action": "none",
  "--user-select": "none",
  "--width": "var(---, 100%)",
});

const control = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--height": 4,
  "--width": "var(---, 100%)",
});

const trackStyles = css.compose({
  "--background-color":
    "var(---, color-mix(in oklab, var(--color_primary) 20%, transparent))",
  "--border-radius": "var(--radii_full)",
  "--height": 1.5,
  "--overflow": "hidden",
  "--position": "relative",
  "--width": "var(---, 100%)",
});

const indicator = css.compose({
  "--background-color": "var(--color_primary)",
  "--border-radius": "var(--radii_full)",
  "--height": "var(---, 100%)",
});

const thumb = css.compose({
  "--background-color": "var(--color_background)",
  "--border-color": "var(--color_primary)",
  "--border-radius": "var(--radii_full)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--height": 4,
  "--outline-style": "none",
  "--width": 4,
});

const Slider = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof SliderPrimitive.Root>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = root();
  const [ccn, csx] = control();
  const [tcn, tsx] = trackStyles();
  const [icn, isx] = indicator();
  const [thcn, thsx] = thumb();
  return (
    <SliderPrimitive.Root
      className={cn(className)}
      data-slot="slider"
      style={sx(style)}
      {...props}
    >
      <SliderPrimitive.Control
        className={ccn()}
        data-slot="slider-control"
        style={csx()}
      >
        <SliderPrimitive.Track
          className={tcn()}
          data-slot="slider-track"
          style={tsx()}
        >
          <SliderPrimitive.Indicator
            className={icn()}
            data-slot="slider-indicator"
            style={isx()}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={thcn()}
          data-slot="slider-thumb"
          style={thsx()}
        />
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};

export { Slider };

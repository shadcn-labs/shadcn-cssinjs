"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const group = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2.5,
});

const item = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_full)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--checked_border-color": "var(--color_primary)",
  "--cursor": "pointer",
  "--disabled_cursor": "not-allowed",
  "--disabled_opacity": 0.5,
  "--display": "inline-flex",
  "--flex-shrink": 0,
  "--focus-visible_box-shadow":
    "var(---, 0 0 0 3px color-mix(in oklab, var(--color_ring) 50%, transparent))",
  "--height": 4,
  "--justify-content": "center",
  "--outline-style": "none",
  "--padding": 0,
  "--width": 4,
});

const indicator = css.compose({
  "--background-color": "var(--color_primary)",
  "--border-radius": "var(--radii_full)",
  "--height": 2,
  "--width": 2,
});

const RadioGroup = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof RadioGroupPrimitive>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = group();
  return (
    <RadioGroupPrimitive
      className={cn(className)}
      data-slot="radio-group"
      style={sx(style)}
      {...props}
    />
  );
};

const RadioGroupItem = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof RadioPrimitive.Root>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = item();
  const [icn, isx] = indicator();
  return (
    <RadioPrimitive.Root
      className={cn(className)}
      data-slot="radio-group-item"
      style={sx(style)}
      {...props}
    >
      <RadioPrimitive.Indicator
        className={icn()}
        data-slot="radio-group-indicator"
        style={isx()}
      />
    </RadioPrimitive.Root>
  );
};

export { RadioGroup, RadioGroupItem };

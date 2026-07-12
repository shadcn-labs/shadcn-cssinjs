"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import type { TokenamiStyle } from "@tokenami/css";
import { CheckIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_background)",
  "--border-color": "var(--color_input)",
  "--border-radius": "var(--radii_sm)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  "--checked_background-color": "var(--color_primary)",
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
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property":
    "var(---, background-color, border-color, box-shadow)",
  "--width": 4,
});

const indicator = css.compose({
  "--align-items": "center",
  "--color": "var(--color_primary-foreground)",
  "--display": "flex",
  "--height": "var(---, 100%)",
  "--justify-content": "center",
  "--width": "var(---, 100%)",
});

const Checkbox = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof CheckboxPrimitive.Root>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = root();
  const [icn, isx] = indicator();
  return (
    <CheckboxPrimitive.Root
      className={cn(className)}
      data-slot="checkbox"
      style={sx(style)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={icn()}
        data-slot="checkbox-indicator"
        style={isx()}
      >
        <CheckIcon size={14} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };

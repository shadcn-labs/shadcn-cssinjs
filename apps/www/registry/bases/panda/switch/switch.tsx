"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cva, cx } from "styled-system/css";

const root = cva({
  base: {
    _checked: { backgroundColor: "primary" },
    _disabled: { cursor: "not-allowed", opacity: "0.5" },
    _focusVisible: {
      boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
    },
    alignItems: "center",
    backgroundColor: "input",
    borderRadius: "full",
    borderWidth: "0",
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: "0",
    height: "1.15rem",
    outlineStyle: "none",
    padding: "0",
    position: "relative",
    transitionDuration: "150ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
    width: "8",
  },
  defaultVariants: { size: "default" },
  variants: {
    size: {
      default: {},
      sm: { height: "4", width: "1.65rem" },
    },
  },
});

const thumb = cva({
  base: {
    _checked: { transform: "translateX(0.925rem)" },
    backgroundColor: "background",
    borderRadius: "full",
    display: "block",
    height: "4",
    pointerEvents: "none",
    transform: "translateX(0.075rem)",
    transitionDuration: "150ms",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
    width: "4",
  },
  defaultVariants: { size: "default" },
  variants: {
    size: {
      default: {},
      sm: {
        _checked: { transform: "translateX(0.775rem)" },
        height: "3",
        width: "3",
      },
    },
  },
});

const Switch = ({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<typeof SwitchPrimitive.Root>, "className"> & {
  className?: string;
  size?: "default" | "sm";
}) => (
  <SwitchPrimitive.Root
    className={cx(root({ size }), className)}
    data-size={size}
    data-slot="switch"
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={thumb({ size })}
      data-slot="switch-thumb"
    />
  </SwitchPrimitive.Root>
);

export { Switch };

"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { css, cx } from "styled-system/css";

const root = css({
  _checked: { backgroundColor: "primary", borderColor: "primary" },
  _disabled: { cursor: "not-allowed", opacity: "0.5" },
  _focusVisible: {
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  alignItems: "center",
  backgroundColor: "background",
  borderColor: "input",
  borderRadius: "sm",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: "0",
  height: "4",
  justifyContent: "center",
  outlineStyle: "none",
  padding: "0",
  transitionDuration: "150ms",
  transitionProperty: "background-color, border-color, box-shadow",
  width: "4",
});

const indicator = css({
  alignItems: "center",
  color: "primary.foreground",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "100%",
});

const Checkbox = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <CheckboxPrimitive.Root
    className={cx(root, className)}
    data-slot="checkbox"
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={indicator}
      data-slot="checkbox-indicator"
    >
      <CheckIcon size={14} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };

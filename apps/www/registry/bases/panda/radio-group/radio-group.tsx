"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { css, cx } from "styled-system/css";

const group = css({
  display: "flex",
  flexDirection: "column",
  gap: "2.5",
});

const item = css({
  _checked: { borderColor: "primary" },
  _disabled: { cursor: "not-allowed", opacity: "0.5" },
  _focusVisible: {
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  alignItems: "center",
  backgroundColor: "transparent",
  borderColor: "input",
  borderRadius: "full",
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
  width: "4",
});

const indicator = css({
  backgroundColor: "primary",
  borderRadius: "full",
  height: "2",
  width: "2",
});

const RadioGroup = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof RadioGroupPrimitive>, "className"> & {
  className?: string;
}) => (
  <RadioGroupPrimitive
    className={cx(group, className)}
    data-slot="radio-group"
    {...props}
  />
);

const RadioGroupItem = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof RadioPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <RadioPrimitive.Root
    className={cx(item, className)}
    data-slot="radio-group-item"
    {...props}
  >
    <RadioPrimitive.Indicator
      className={indicator}
      data-slot="radio-group-indicator"
    />
  </RadioPrimitive.Root>
);

export { RadioGroup, RadioGroupItem };

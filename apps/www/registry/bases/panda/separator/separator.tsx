"use client";

import { Separator as SeparatorPrimitive } from "@base-ui/react";
import { cva, cx } from "styled-system/css";

const separator = cva({
  base: {
    backgroundColor: "border",
    flexShrink: "0",
  },
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: { height: "1px", width: "100%" },
      vertical: { height: "100%", width: "1px" },
    },
  },
});

const Separator = ({
  className,
  orientation = "horizontal",
  ...props
}: Omit<React.ComponentProps<typeof SeparatorPrimitive>, "className"> & {
  className?: string;
}) => (
  <SeparatorPrimitive
    className={cx(separator({ orientation }), className)}
    data-slot="separator"
    orientation={orientation}
    {...props}
  />
);

export { Separator };

"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { css, cx } from "styled-system/css";

const popup = css({
  _ending: { opacity: "0", transform: "scale(0.95)" },
  _starting: { opacity: "0", transform: "scale(0.95)" },
  backgroundColor: "popover",
  borderColor: "border",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  color: "popover.foreground",
  opacity: "1",
  outlineStyle: "none",
  padding: "4",
  transform: "scale(1)",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  width: "72",
  zIndex: "50",
});

const header = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.5",
});

const title = css({
  fontSize: "0.875rem",
  fontWeight: "semibold",
  lineHeight: "1",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

const Popover = (props: React.ComponentProps<typeof PopoverPrimitive.Root>) => (
  <PopoverPrimitive.Root data-slot="popover" {...props} />
);

const PopoverTrigger = (
  props: React.ComponentProps<typeof PopoverPrimitive.Trigger>
) => <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;

const PopoverAnchor = (
  props: React.ComponentProps<typeof PopoverPrimitive.Trigger>
) => <PopoverPrimitive.Trigger data-slot="popover-anchor" {...props} />;

const PopoverContent = ({
  className,
  sideOffset = 4,
  align = "center",
  side = "bottom",
  alignOffset,
  collisionPadding,
  children,
  ...props
}: Omit<React.ComponentProps<typeof PopoverPrimitive.Popup>, "className"> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  alignOffset?: number;
  collisionPadding?: number;
}) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      collisionPadding={collisionPadding}
      side={side}
      sideOffset={sideOffset}
    >
      <PopoverPrimitive.Popup
        className={cx(popup, className)}
        data-slot="popover-content"
        {...props}
      >
        {children}
      </PopoverPrimitive.Popup>
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
);

const PopoverHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(header, className)}
    data-slot="popover-header"
    {...props}
  />
);

const PopoverTitle = ({
  className,
  ...props
}: Omit<React.ComponentProps<typeof PopoverPrimitive.Title>, "className"> & {
  className?: string;
}) => (
  <PopoverPrimitive.Title
    className={cx(title, className)}
    data-slot="popover-title"
    {...props}
  />
);

const PopoverDescription = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof PopoverPrimitive.Description>,
  "className"
> & { className?: string }) => (
  <PopoverPrimitive.Description
    className={cx(description, className)}
    data-slot="popover-description"
    {...props}
  />
);

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};

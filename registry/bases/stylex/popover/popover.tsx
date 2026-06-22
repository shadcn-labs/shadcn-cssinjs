"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cx, x } from "@/lib/utils";

import { styles } from "./popover.stylex";

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

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
  style,
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
        data-slot="popover-content"
        className={(state) =>
          cx(
            x(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className
          )
        }
        style={style}
        {...props}
      >
        {children}
      </PopoverPrimitive.Popup>
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
);

const PopoverHeader = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = x(styles.header);
  return (
    <div
      className={cx(p.className, className)}
      data-slot="popover-header"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const PopoverTitle = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof PopoverPrimitive.Title>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.title);
  return (
    <PopoverPrimitive.Title
      className={cx(p.className, className)}
      data-slot="popover-title"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const PopoverDescription = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof PopoverPrimitive.Description>,
  "className"
> & {
  className?: string;
}) => {
  const p = x(styles.description);
  return (
    <PopoverPrimitive.Description
      className={cx(p.className, className)}
      data-slot="popover-description"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};

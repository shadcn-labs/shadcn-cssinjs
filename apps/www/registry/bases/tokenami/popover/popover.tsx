"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const popup = css.compose({
  "--background-color": "var(--color_popover)",
  "--border-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--box-shadow":
    "var(---, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
  "--color": "var(--color_popover-foreground)",
  "--ending_opacity": 0,
  "--ending_transform": "var(---, scale(0.95))",
  "--opacity": 1,
  "--outline-style": "none",
  "--padding": 4,
  "--starting_opacity": 0,
  "--starting_transform": "var(---, scale(0.95))",
  "--transform": "var(---, scale(1))",
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity, transform)",
  "--transition-timing-function": "ease-in-out",
  "--width": 72,
  "--z-index": "var(---, 50)",
});

const header = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 1.5,
});

const title = css.compose({
  "--font-size": "0.875rem",
  "--font-weight": 600,
  "--line-height": "var(---, 1)",
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--line-height": "var(---, 1.25rem)",
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
  style,
  sideOffset = 4,
  align = "center",
  side = "bottom",
  alignOffset,
  collisionPadding,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof PopoverPrimitive.Popup>,
    "className" | "style"
  >
> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  alignOffset?: number;
  collisionPadding?: number;
}) => {
  const [cn, sx] = popup();
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        side={side}
        sideOffset={sideOffset}
      >
        <PopoverPrimitive.Popup
          className={cn(className)}
          data-slot="popover-content"
          style={sx(style)}
          {...props}
        >
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
};

const PopoverHeader = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = header();
  return (
    <div
      className={cn(className)}
      data-slot="popover-header"
      style={sx(style)}
      {...props}
    />
  );
};

const PopoverTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof PopoverPrimitive.Title>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = title();
  return (
    <PopoverPrimitive.Title
      className={cn(className)}
      data-slot="popover-title"
      style={sx(style)}
      {...props}
    />
  );
};

const PopoverDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof PopoverPrimitive.Description>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = description();
  return (
    <PopoverPrimitive.Description
      className={cn(className)}
      data-slot="popover-description"
      style={sx(style)}
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

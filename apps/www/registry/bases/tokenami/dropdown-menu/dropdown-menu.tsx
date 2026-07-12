"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type { TokenamiStyle } from "@tokenami/css";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

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
  "--min-width": 32,
  "--opacity": 1,
  "--outline-style": "none",
  "--overflow-x": "hidden",
  "--overflow-y": "auto",
  "--padding": 1,
  "--starting_opacity": 0,
  "--starting_transform": "var(---, scale(0.95))",
  "--transform": "var(---, scale(1))",
  "--transform-origin": "var(---, var(--transform-origin))",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, opacity, transform)",
  "--transition-timing-function": "ease-in-out",
  "--z-index": "var(---, 50)",
});

const item = css.compose({
  "--align-items": "center",
  "--border-radius": "var(---, 0.125rem)",
  "--cursor": "default",
  "--disabled_opacity": 0.5,
  "--disabled_pointer-events": "none",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--gap": 2,
  "--highlighted_background-color": "var(--color_accent)",
  "--highlighted_color": "var(--color_accent-foreground)",
  "--outline-style": "none",
  "--padding-block": 1.5,
  "--padding-inline": 2,
  "--position": "relative",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color, color)",
  "--user-select": "none",

  variants: {
    indent: {
      inset: { "--padding-inline-start": 8 },
      none: {},
    },
    variant: {
      default: {},
      destructive: {
        "--color": "var(--color_destructive)",
        "--highlighted_background-color":
          "var(---, color-mix(in oklab, var(--color_destructive) 10%, transparent))",
        "--highlighted_color": "var(--color_destructive)",
      },
    },
  },
});

const indicatorWrap = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--height": 3.5,
  "--inset-inline-start": 2,
  "--justify-content": "center",
  "--pointer-events": "none",
  "--position": "absolute",
  "--width": 3.5,
});

const icon = css.compose({
  "--height": 4,
  "--width": 4,
});

const label = css.compose({
  "--color": "var(--color_foreground)",
  "--font-size": "0.875rem",
  "--font-weight": 600,
  "--padding-block": 1.5,
  "--padding-inline": 2,

  variants: {
    indent: {
      inset: { "--padding-inline-start": 8 },
      none: {},
    },
  },
});

const separator = css.compose({
  "--background-color": "var(--color_border)",
  "--height": "var(---, 1px)",
  "--margin-block": 1,
  "--margin-inline": -1,
});

const shortcut = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.75rem",
  "--letter-spacing": "var(---, 0.05em)",
  "--margin-inline-start": "var(---, auto)",
  "--opacity": 0.6,
});

const DropdownMenu = (
  props: React.ComponentProps<typeof MenuPrimitive.Root>
) => <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;

const DropdownMenuPortal = (
  props: React.ComponentProps<typeof MenuPrimitive.Portal>
) => <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;

const DropdownMenuTrigger = (
  props: React.ComponentProps<typeof MenuPrimitive.Trigger>
) => <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;

const DropdownMenuGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.Group>
) => <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;

const DropdownMenuRadioGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>
) => (
  <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
);

const DropdownMenuSub = (
  props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>
) => <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;

const DropdownMenuContent = ({
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
  Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className" | "style">
> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  alignOffset?: number;
  sideOffset?: number;
  collisionPadding?: number;
}) => {
  const [cn, sx] = popup();
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          className={cn(className)}
          data-slot="dropdown-menu-content"
          style={sx(style)}
          {...props}
        >
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};

const DropdownMenuItem = ({
  className,
  style,
  inset,
  variant = "default",
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className" | "style">
> & {
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
}) => {
  const [cn, sx] = item({ indent: inset ? "inset" : "none", variant });
  return (
    <MenuPrimitive.Item
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      style={sx(style)}
      {...props}
    />
  );
};

const DropdownMenuCheckboxItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.CheckboxItem>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item({ indent: "inset", variant: "default" });
  const [wcn, wsx] = indicatorWrap();
  const [icn, isx] = icon();
  return (
    <MenuPrimitive.CheckboxItem
      className={cn(className)}
      data-slot="dropdown-menu-checkbox-item"
      style={sx(style)}
      {...props}
    >
      <span className={wcn()} style={wsx()}>
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className={icn()} style={isx()} />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
};

const DropdownMenuRadioItem = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.RadioItem>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = item({ indent: "inset", variant: "default" });
  const [wcn, wsx] = indicatorWrap();
  return (
    <MenuPrimitive.RadioItem
      className={cn(className)}
      data-slot="dropdown-menu-radio-item"
      style={sx(style)}
      {...props}
    >
      <span className={wcn()} style={wsx()}>
        <MenuPrimitive.RadioItemIndicator>
          <CircleIcon
            style={{ fill: "currentColor", height: "0.5rem", width: "0.5rem" }}
          />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
};

const DropdownMenuLabel = ({
  className,
  style,
  inset,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & { inset?: boolean }) => {
  const [cn, sx] = label({ indent: inset ? "inset" : "none" });
  return (
    <div
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="dropdown-menu-label"
      style={sx(style)}
      {...props}
    />
  );
};

const DropdownMenuSeparator = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.Separator>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = separator();
  return (
    <MenuPrimitive.Separator
      className={cn(className)}
      data-slot="dropdown-menu-separator"
      style={sx(style)}
      {...props}
    />
  );
};

const DropdownMenuShortcut = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = shortcut();
  return (
    <span
      className={cn(className)}
      data-slot="dropdown-menu-shortcut"
      style={sx(style)}
      {...props}
    />
  );
};

const DropdownMenuSubTrigger = ({
  className,
  style,
  inset,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
    "className" | "style"
  >
> & { className?: string; inset?: boolean }) => {
  const [cn, sx] = item({
    indent: inset ? "inset" : "none",
    variant: "default",
  });
  const [icn, isx] = icon();
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn(className)}
      data-inset={inset ? "" : undefined}
      data-slot="dropdown-menu-sub-trigger"
      style={sx(style)}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className={icn()}
        style={isx({ "--margin-inline-start": "var(---, auto)" })}
      />
    </MenuPrimitive.SubmenuTrigger>
  );
};

const DropdownMenuSubContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = popup();
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner>
        <MenuPrimitive.Popup
          className={cn(className)}
          data-slot="dropdown-menu-sub-content"
          style={sx(style)}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};

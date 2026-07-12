"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { css, cva, cx } from "styled-system/css";

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
  minWidth: "32",
  opacity: "1",
  outlineStyle: "none",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "1",
  transform: "scale(1)",
  transformOrigin: "var(--transform-origin)",
  transitionDuration: "150ms",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "ease-in-out",
  zIndex: "50",
});

const item = cva({
  base: {
    _disabled: { opacity: "0.5", pointerEvents: "none" },
    _highlighted: { backgroundColor: "accent", color: "accent.foreground" },
    alignItems: "center",
    borderRadius: "0.125rem",
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    gap: "2",
    outlineStyle: "none",
    paddingBlock: "1.5",
    paddingInline: "2",
    position: "relative",
    transitionDuration: "100ms",
    transitionProperty: "background-color, color",
    userSelect: "none",
  },
  defaultVariants: { indent: "none", variant: "default" },
  variants: {
    indent: {
      inset: { paddingInlineStart: "8" },
      none: {},
    },
    variant: {
      default: {},
      destructive: {
        _highlighted: {
          backgroundColor:
            "color-mix(in oklab, var(--destructive) 10%, transparent)",
          color: "destructive",
        },
        color: "destructive",
      },
    },
  },
});

const indicatorWrap = css({
  alignItems: "center",
  display: "flex",
  height: "3.5",
  insetInlineStart: "2",
  justifyContent: "center",
  pointerEvents: "none",
  position: "absolute",
  width: "3.5",
});

const icon = css({ height: "4", width: "4" });
const iconAuto = css({ height: "4", marginInlineStart: "auto", width: "4" });

const label = cva({
  base: {
    color: "foreground",
    fontSize: "0.875rem",
    fontWeight: "semibold",
    paddingBlock: "1.5",
    paddingInline: "2",
  },
  defaultVariants: { indent: "none" },
  variants: {
    indent: { inset: { paddingInlineStart: "8" }, none: {} },
  },
});

const separator = css({
  backgroundColor: "border",
  height: "1px",
  marginBlock: "1",
  marginInline: "-1",
});

const shortcut = css({
  color: "muted.foreground",
  fontSize: "0.75rem",
  letterSpacing: "0.05em",
  marginInlineStart: "auto",
  opacity: "0.6",
});

const ContextMenu = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.Root>
) => <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;

const ContextMenuTrigger = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>
) => (
  <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
);

const ContextMenuGroup = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.Group>
) => <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />;

const ContextMenuRadioGroup = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>
) => (
  <ContextMenuPrimitive.RadioGroup
    data-slot="context-menu-radio-group"
    {...props}
  />
);

const ContextMenuSub = (
  props: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>
) => (
  <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
);

const ContextMenuContent = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Popup>,
  "className"
> & {
  className?: string;
}) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Positioner>
      <ContextMenuPrimitive.Popup
        className={cx(popup, className)}
        data-slot="context-menu-content"
        {...props}
      >
        {children}
      </ContextMenuPrimitive.Popup>
    </ContextMenuPrimitive.Positioner>
  </ContextMenuPrimitive.Portal>
);

const ContextMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: Omit<React.ComponentProps<typeof ContextMenuPrimitive.Item>, "className"> & {
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
}) => (
  <ContextMenuPrimitive.Item
    className={cx(
      item({ indent: inset ? "inset" : "none", variant }),
      className
    )}
    data-inset={inset ? "" : undefined}
    data-slot="context-menu-item"
    data-variant={variant}
    {...props}
  />
);

const ContextMenuCheckboxItem = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>,
  "className"
> & { className?: string }) => (
  <ContextMenuPrimitive.CheckboxItem
    className={cx(item({ indent: "inset", variant: "default" }), className)}
    data-slot="context-menu-checkbox-item"
    {...props}
  >
    <span className={indicatorWrap}>
      <ContextMenuPrimitive.CheckboxItemIndicator>
        <CheckIcon className={icon} />
      </ContextMenuPrimitive.CheckboxItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
);

const ContextMenuRadioItem = ({
  className,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>,
  "className"
> & { className?: string }) => (
  <ContextMenuPrimitive.RadioItem
    className={cx(item({ indent: "inset", variant: "default" }), className)}
    data-slot="context-menu-radio-item"
    {...props}
  >
    <span className={indicatorWrap}>
      <ContextMenuPrimitive.RadioItemIndicator>
        <CircleIcon
          style={{ fill: "currentColor", height: "0.5rem", width: "0.5rem" }}
        />
      </ContextMenuPrimitive.RadioItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
);

const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & { inset?: boolean }) => (
  <div
    className={cx(label({ indent: inset ? "inset" : "none" }), className)}
    data-inset={inset ? "" : undefined}
    data-slot="context-menu-label"
    {...props}
  />
);

const ContextMenuSeparator = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Separator>,
  "className"
> & { className?: string }) => (
  <ContextMenuPrimitive.Separator
    className={cx(separator, className)}
    data-slot="context-menu-separator"
    {...props}
  />
);

const ContextMenuShortcut = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    className={cx(shortcut, className)}
    data-slot="context-menu-shortcut"
    {...props}
  />
);

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>,
  "className"
> & { className?: string; inset?: boolean }) => (
  <ContextMenuPrimitive.SubmenuTrigger
    className={cx(
      item({ indent: inset ? "inset" : "none", variant: "default" }),
      className
    )}
    data-inset={inset ? "" : undefined}
    data-slot="context-menu-sub-trigger"
    {...props}
  >
    {children}
    <ChevronRightIcon className={iconAuto} />
  </ContextMenuPrimitive.SubmenuTrigger>
);

const ContextMenuSubContent = ({
  className,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Popup>,
  "className"
> & {
  className?: string;
}) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Positioner>
      <ContextMenuPrimitive.Popup
        className={cx(popup, className)}
        data-slot="context-menu-sub-content"
        {...props}
      />
    </ContextMenuPrimitive.Positioner>
  </ContextMenuPrimitive.Portal>
);

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};

"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  icon: {
    height: "1rem",
    width: "1rem",
  },
  indicatorWrap: {
    alignItems: "center",
    display: "flex",
    height: "0.875rem",
    insetInlineStart: "0.5rem",
    justifyContent: "center",
    pointerEvents: "none",
    position: "absolute",
    width: "0.875rem",
  },
  item: {
    alignItems: "center",
    borderRadius: "0.125rem",
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
    outline: "none",
    paddingBottom: "0.375rem",
    paddingInline: "0.5rem",
    paddingTop: "0.375rem",
    position: "relative",
    transition: "background-color 0.1s ease, color 0.1s ease",
    userSelect: "none",
  },
  itemDestructive: {
    color: colors.destructive,
  },
  itemDestructiveHighlighted: {
    backgroundColor: `color-mix(in oklab, ${colors.destructive} 10%, transparent)`,
    color: colors.destructive,
  },
  itemDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
  itemHighlighted: {
    backgroundColor: colors.accent,
    color: colors.accentForeground,
  },
  itemIndented: {
    paddingInlineStart: "2rem",
  },
  itemInset: {
    paddingInlineStart: "2rem",
  },
  label: {
    color: colors.foreground,
    fontSize: "0.875rem",
    fontWeight: 600,
    paddingBottom: "0.375rem",
    paddingInline: "0.5rem",
    paddingTop: "0.375rem",
  },
  labelInset: {
    paddingInlineStart: "2rem",
  },
  popup: {
    backgroundColor: colors.popover,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    color: colors.popoverForeground,
    minWidth: "8rem",
    opacity: 1,
    outline: "none",
    overflowX: "hidden",
    overflowY: "auto",
    padding: "0.25rem",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    zIndex: 50,
  },
  popupHidden: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  separator: {
    backgroundColor: colors.border,
    height: "1px",
    marginBottom: "0.25rem",
    marginInline: "-0.25rem",
    marginTop: "0.25rem",
  },
  shortcut: {
    color: colors.mutedForeground,
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    marginInlineStart: "auto",
    opacity: 0.6,
  },
});

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

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
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  alignOffset?: number;
  sideOffset?: number;
  collisionPadding?: number;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      collisionPadding={collisionPadding}
      side={side}
      sideOffset={sideOffset}
    >
      <MenuPrimitive.Popup
        data-slot="dropdown-menu-content"
        className={(state) =>
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className)
          ).className
        }
        style={style}
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const DropdownMenuItem = ({
  className,
  style,
  inset,
  variant = "default",
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className"> & {
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
}) => (
  <MenuPrimitive.Item
    data-slot="dropdown-menu-item"
    data-inset={inset ? "" : undefined}
    data-variant={variant}
    className={(state) =>
      stylex.props(
        styles.item,
        inset && styles.itemInset,
        variant === "destructive" && styles.itemDestructive,
        state.highlighted &&
          (variant === "destructive"
            ? styles.itemDestructiveHighlighted
            : styles.itemHighlighted),
        state.disabled && styles.itemDisabled,
        customClassName(className)
      ).className
    }
    style={style}
    {...props}
  />
);

const DropdownMenuCheckboxItem = ({
  className,
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.CheckboxItem>,
  "className"
> & {
  className?: string;
}) => {
  const indicator = stylex.props(styles.indicatorWrap);
  const icon = stylex.props(styles.icon);
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={(state) =>
        stylex.props(
          styles.item,
          styles.itemIndented,
          state.highlighted && styles.itemHighlighted,
          state.disabled && styles.itemDisabled,
          customClassName(className)
        ).className
      }
      style={style}
      {...props}
    >
      <span className={indicator.className} style={indicator.style}>
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className={icon.className} style={icon.style} />
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
}: Omit<React.ComponentProps<typeof MenuPrimitive.RadioItem>, "className"> & {
  className?: string;
}) => {
  const indicator = stylex.props(styles.indicatorWrap);
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={(state) =>
        stylex.props(
          styles.item,
          styles.itemIndented,
          state.highlighted && styles.itemHighlighted,
          state.disabled && styles.itemDisabled,
          customClassName(className)
        ).className
      }
      style={style}
      {...props}
    >
      <span className={indicator.className} style={indicator.style}>
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
}: React.ComponentProps<"div"> & { inset?: boolean }) => (
  <div
    data-slot="dropdown-menu-label"
    data-inset={inset ? "" : undefined}
    {...stylex.props(
      styles.label,
      inset && styles.labelInset,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DropdownMenuSeparator = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Separator>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Separator
    data-slot="dropdown-menu-separator"
    {...stylex.props(
      styles.separator,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DropdownMenuShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    data-slot="dropdown-menu-shortcut"
    {...stylex.props(
      styles.shortcut,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const DropdownMenuSubTrigger = ({
  className,
  style,
  inset,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
  "className"
> & {
  className?: string;
  inset?: boolean;
}) => {
  const icon = stylex.props(styles.icon);
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset ? "" : undefined}
      className={(state) =>
        stylex.props(
          styles.item,
          inset && styles.itemInset,
          state.highlighted && styles.itemHighlighted,
          customClassName(className)
        ).className
      }
      style={style}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className={icon.className}
        style={{ ...icon.style, marginInlineStart: "auto" }}
      />
    </MenuPrimitive.SubmenuTrigger>
  );
};

const DropdownMenuSubContent = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner>
      <MenuPrimitive.Popup
        data-slot="dropdown-menu-sub-content"
        className={(state) =>
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className)
          ).className
        }
        style={style}
        {...props}
      />
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

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

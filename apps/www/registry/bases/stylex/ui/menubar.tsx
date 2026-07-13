"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  bar: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    display: "flex",
    gap: "0.25rem",
    height: "2.25rem",
    padding: "0.25rem",
  },
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
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: radius.sm,
    color: {
      ":hover": colors.accentForeground,
      default: colors.popoverForeground,
    },
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
    outline: "none",
    paddingBlock: "0.375rem",
    paddingInline: "0.5rem",
    userSelect: "none",
  },
  itemInset: {
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
    minWidth: "12rem",
    opacity: 1,
    outline: "none",
    padding: "0.25rem",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    zIndex: 50,
  },
  popupHidden: { opacity: 0, transform: "scale(0.95)" },
  separator: {
    backgroundColor: colors.border,
    height: "1px",
    marginBlock: "0.25rem",
    marginInline: "-0.25rem",
  },
  shortcut: {
    color: colors.mutedForeground,
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    marginInlineStart: "auto",
  },
  trigger: {
    alignItems: "center",
    backgroundColor: {
      ":hover": colors.accent,
      default: "transparent",
    },
    borderRadius: radius.sm,
    borderWidth: 0,
    color: colors.foreground,
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    outline: "none",
    paddingBlock: "0.25rem",
    paddingInline: "0.75rem",
    userSelect: "none",
  },
});

const hidden = (s: string | undefined) => s === "starting" || s === "ending";

const Menubar = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenubarPrimitive>, "className"> & {
  className?: string;
}) => (
  <MenubarPrimitive
    {...stylex.props(
      styles.bar,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="menubar"
    {...props}
  />
);

const MenubarMenu = (
  props: React.ComponentProps<typeof MenuPrimitive.Root>
) => <MenuPrimitive.Root data-slot="menubar-menu" {...props} />;

const MenubarTrigger = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Trigger>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Trigger
    {...stylex.props(
      styles.trigger,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="menubar-trigger"
    {...props}
  />
);

const MenubarContent = ({
  className,
  style,
  sideOffset = 6,
  align = "start",
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner
      align={align}
      side="bottom"
      sideOffset={sideOffset}
    >
      <MenuPrimitive.Popup
        className={(state) =>
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className)
          ).className
        }
        data-slot="menubar-content"
        style={style}
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const MenubarItem = ({
  className,
  style,
  inset,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Item>, "className"> & {
  className?: string;
  inset?: boolean;
}) => (
  <MenuPrimitive.Item
    {...stylex.props(
      styles.item,
      inset && styles.itemInset,
      customClassName(className),
      style as StyleXStyles
    )}
    data-inset={inset ? "" : undefined}
    data-slot="menubar-item"
    {...props}
  />
);

const MenubarCheckboxItem = ({
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
      {...stylex.props(
        styles.item,
        styles.itemInset,
        customClassName(className),
        { position: "relative" } as StyleXStyles,
        style as StyleXStyles
      )}
      data-slot="menubar-checkbox-item"
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

const MenubarRadioGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>
) => <MenuPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />;

const MenubarRadioItem = ({
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
      {...stylex.props(
        styles.item,
        styles.itemInset,
        customClassName(className),
        { position: "relative" } as StyleXStyles,
        style as StyleXStyles
      )}
      data-slot="menubar-radio-item"
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

const MenubarSub = (
  props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>
) => <MenuPrimitive.SubmenuRoot data-slot="menubar-sub" {...props} />;

const MenubarSubTrigger = ({
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
      {...stylex.props(
        styles.item,
        inset && styles.itemInset,
        customClassName(className),
        style as StyleXStyles
      )}
      data-slot="menubar-sub-trigger"
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

const MenubarSubContent = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Popup>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner align="start" side="right" sideOffset={2}>
      <MenuPrimitive.Popup
        className={(state) =>
          stylex.props(
            styles.popup,
            hidden(state.transitionStatus) && styles.popupHidden,
            customClassName(className)
          ).className
        }
        data-slot="menubar-sub-content"
        style={style}
        {...props}
      >
        {children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

const MenubarSeparator = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Separator>, "className"> & {
  className?: string;
}) => (
  <MenuPrimitive.Separator
    {...stylex.props(
      styles.separator,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="menubar-separator"
    {...props}
  />
);

const MenubarShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    {...stylex.props(
      styles.shortcut,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="menubar-shortcut"
    {...props}
  />
);

const MenubarGroup = (
  props: React.ComponentProps<typeof MenuPrimitive.Group>
) => <MenuPrimitive.Group data-slot="menubar-group" {...props} />;

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};

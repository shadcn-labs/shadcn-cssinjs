"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  icon: { height: "1rem", width: "1rem" },
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
  itemDestructive: { color: colors.destructive },
  itemDestructiveHighlighted: {
    backgroundColor: `color-mix(in oklab, ${colors.destructive} 10%, transparent)`,
    color: colors.destructive,
  },
  itemDisabled: { opacity: 0.5, pointerEvents: "none" },
  itemHighlighted: {
    backgroundColor: colors.accent,
    color: colors.accentForeground,
  },
  itemIndented: { paddingInlineStart: "2rem" },
  itemInset: { paddingInlineStart: "2rem" },
  label: {
    color: colors.foreground,
    fontSize: "0.875rem",
    fontWeight: 600,
    paddingBottom: "0.375rem",
    paddingInline: "0.5rem",
    paddingTop: "0.375rem",
  },
  labelInset: { paddingInlineStart: "2rem" },
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
    overflow: "hidden",
    padding: "0.25rem",
    transform: "scale(1)",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    zIndex: 50,
  },
  popupHidden: { opacity: 0, transform: "scale(0.95)" },
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
  style,
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
        data-slot="context-menu-content"
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
      </ContextMenuPrimitive.Popup>
    </ContextMenuPrimitive.Positioner>
  </ContextMenuPrimitive.Portal>
);

const ContextMenuItem = ({
  className,
  style,
  inset,
  variant = "default",
  ...props
}: Omit<React.ComponentProps<typeof ContextMenuPrimitive.Item>, "className"> & {
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
}) => (
  <ContextMenuPrimitive.Item
    data-slot="context-menu-item"
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

const ContextMenuCheckboxItem = ({
  className,
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>,
  "className"
> & { className?: string }) => {
  const indicator = stylex.props(styles.indicatorWrap);
  const icon = stylex.props(styles.icon);
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
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
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className={icon.className} style={icon.style} />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
};

const ContextMenuRadioItem = ({
  className,
  style,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>,
  "className"
> & { className?: string }) => {
  const indicator = stylex.props(styles.indicatorWrap);
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
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
        <ContextMenuPrimitive.RadioItemIndicator>
          <CircleIcon
            style={{ fill: "currentColor", height: "0.5rem", width: "0.5rem" }}
          />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
};

const ContextMenuLabel = ({
  className,
  style,
  inset,
  ...props
}: React.ComponentProps<"div"> & { inset?: boolean }) => (
  <div
    data-slot="context-menu-label"
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

const ContextMenuSeparator = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Separator>,
  "className"
> & {
  className?: string;
}) => (
  <ContextMenuPrimitive.Separator
    data-slot="context-menu-separator"
    {...stylex.props(
      styles.separator,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const ContextMenuShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    data-slot="context-menu-shortcut"
    {...stylex.props(
      styles.shortcut,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const ContextMenuSubTrigger = ({
  className,
  style,
  inset,
  children,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>,
  "className"
> & { className?: string; inset?: boolean }) => {
  const icon = stylex.props(styles.icon);
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
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
    </ContextMenuPrimitive.SubmenuTrigger>
  );
};

const ContextMenuSubContent = ({
  className,
  style,
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
        data-slot="context-menu-sub-content"
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

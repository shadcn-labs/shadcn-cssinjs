"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { styles } from "./context-menu.stylex";

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
          [
            stylex.props(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className,
          ]
            .filter(Boolean)
            .join(" ") || undefined
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
      [
        stylex.props(
          styles.item,
          inset && styles.itemInset,
          variant === "destructive" && styles.itemDestructive,
          state.highlighted &&
            (variant === "destructive"
              ? styles.itemDestructiveHighlighted
              : styles.itemHighlighted),
          state.disabled && styles.itemDisabled
        ).className,
        className,
      ]
        .filter(Boolean)
        .join(" ") || undefined
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
        [
          stylex.props(
            styles.item,
            styles.itemIndented,
            state.highlighted && styles.itemHighlighted,
            state.disabled && styles.itemDisabled
          ).className,
          className,
        ]
          .filter(Boolean)
          .join(" ") || undefined
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
        [
          stylex.props(
            styles.item,
            styles.itemIndented,
            state.highlighted && styles.itemHighlighted,
            state.disabled && styles.itemDisabled
          ).className,
          className,
        ]
          .filter(Boolean)
          .join(" ") || undefined
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
}: React.ComponentProps<"div"> & { inset?: boolean }) => {
  const p = stylex.props(styles.label, inset && styles.labelInset);
  return (
    <div
      data-slot="context-menu-label"
      data-inset={inset ? "" : undefined}
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ContextMenuSeparator = ({
  className,
  style,
  ...props
}: Omit<
  React.ComponentProps<typeof ContextMenuPrimitive.Separator>,
  "className"
> & {
  className?: string;
}) => {
  const p = stylex.props(styles.separator);
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ContextMenuShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = stylex.props(styles.shortcut);
  return (
    <span
      data-slot="context-menu-shortcut"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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
        [
          stylex.props(
            styles.item,
            inset && styles.itemInset,
            state.highlighted && styles.itemHighlighted
          ).className,
          className,
        ]
          .filter(Boolean)
          .join(" ") || undefined
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
          [
            stylex.props(
              styles.popup,
              hidden(state.transitionStatus) && styles.popupHidden
            ).className,
            className,
          ]
            .filter(Boolean)
            .join(" ") || undefined
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

"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./dropdown-menu.stylex";

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
      cx(
        x(
          styles.item,
          inset && styles.itemInset,
          variant === "destructive" && styles.itemDestructive,
          state.highlighted &&
            (variant === "destructive"
              ? styles.itemDestructiveHighlighted
              : styles.itemHighlighted),
          state.disabled && styles.itemDisabled
        ).className,
        className
      )
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
  const indicator = x(styles.indicatorWrap);
  const icon = x(styles.icon);
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={(state) =>
        cx(
          x(
            styles.item,
            styles.itemIndented,
            state.highlighted && styles.itemHighlighted,
            state.disabled && styles.itemDisabled
          ).className,
          className
        )
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
  const indicator = x(styles.indicatorWrap);
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={(state) =>
        cx(
          x(
            styles.item,
            styles.itemIndented,
            state.highlighted && styles.itemHighlighted,
            state.disabled && styles.itemDisabled
          ).className,
          className
        )
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
}: React.ComponentProps<"div"> & { inset?: boolean }) => {
  const p = x(styles.label, inset && styles.labelInset);
  return (
    <div
      data-slot="dropdown-menu-label"
      data-inset={inset ? "" : undefined}
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DropdownMenuSeparator = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Separator>, "className"> & {
  className?: string;
}) => {
  const p = x(styles.separator);
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const DropdownMenuShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.shortcut);
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cx(p.className, className)}
      style={{ ...p.style, ...style }}
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
}: Omit<
  React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>,
  "className"
> & {
  className?: string;
  inset?: boolean;
}) => {
  const icon = x(styles.icon);
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset ? "" : undefined}
      className={(state) =>
        cx(
          x(
            styles.item,
            inset && styles.itemInset,
            state.highlighted && styles.itemHighlighted
          ).className,
          className
        )
      }
      style={style}
      {...props}
    >
      {children}
      <ChevronRightIcon
        className={icon.className}
        style={{ ...icon.style, marginLeft: "auto" }}
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

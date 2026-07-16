"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { SearchIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/stylex/ui/dialog";

const styles = stylex.create({
  command: {
    backgroundColor: colors.popover,
    borderRadius: radius.md,
    color: colors.popoverForeground,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  empty: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    paddingBlock: "1.5rem",
    textAlign: "center",
  },
  group: {
    color: colors.foreground,
    overflow: "hidden",
    padding: "0.25rem",
  },
  groupHeading: {
    color: colors.mutedForeground,
    fontSize: "0.75rem",
    fontWeight: 500,
    paddingBlock: "0.375rem",
    paddingInline: "0.5rem",
  },
  input: {
    "::placeholder": { color: colors.mutedForeground },
    backgroundColor: "transparent",
    borderWidth: 0,
    color: colors.foreground,
    display: "flex",
    flex: 1,
    fontSize: "0.875rem",
    height: "3rem",
    outline: "none",
    paddingBottom: "0.75rem",
    paddingTop: "0.75rem",
    width: "100%",
  },
  inputIcon: {
    color: colors.mutedForeground,
    flexShrink: 0,
    height: "1rem",
    opacity: 0.5,
    width: "1rem",
  },
  inputWrapper: {
    alignItems: "center",
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    display: "flex",
    gap: "0.5rem",
    height: "3rem",
    paddingInline: "0.75rem",
  },
  item: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderRadius: "0.125rem",
    color: { ":hover": colors.accentForeground, default: "inherit" },
    cursor: "default",
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
    outline: "none",
    paddingBlock: "0.375rem",
    paddingInline: "0.5rem",
    position: "relative",
    transition: "background-color 0.1s ease, color 0.1s ease",
    userSelect: "none",
  },
  list: {
    maxHeight: "300px",
    overflowX: "hidden",
    overflowY: "auto",
    scrollPaddingBlock: "0.25rem",
  },
  separator: {
    backgroundColor: colors.border,
    height: "1px",
    marginInline: "-0.25rem",
  },
  shortcut: {
    color: colors.mutedForeground,
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    marginInlineStart: "auto",
  },
  srOnly: {
    borderWidth: 0,
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
});

interface CommandContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const CommandContext = createContext<CommandContextValue | null>(null);

const useCommandContext = () => {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error("Command components must be used within Command");
  }
  return context;
};

const Command = ({
  className,
  style,
  value: valueProp,
  onValueChange: onValueChangeProp,
  children,
  ...props
}: Omit<React.ComponentProps<"div">, "onChange"> & {
  value?: string;
  onValueChange?: (value: string) => void;
}) => {
  const [internalValue, setInternalValue] = useState("");
  const value = valueProp ?? internalValue;
  const onValueChange = useCallback(
    (v: string) => {
      setInternalValue(v);
      onValueChangeProp?.(v);
    },
    [onValueChangeProp]
  );
  const contextValue = useMemo(
    () => ({ onValueChange, value }),
    [value, onValueChange]
  );
  return (
    <CommandContext.Provider value={contextValue}>
      <div
        data-slot="command"
        role="combobox"
        {...stylex.props(
          styles.command,
          customClassName(className),
          style as StyleXStyles
        )}
        {...props}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
};

const CommandDialog = ({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  children?: React.ReactNode;
}) => {
  const sr = stylex.props(styles.srOnly);
  return (
    <Dialog {...props}>
      <DialogHeader className={sr.className}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        showCloseButton={showCloseButton}
        style={{ overflow: "hidden", padding: 0 }}
      >
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = ({
  className,
  style,
  value,
  onValueChange,
  ...props
}: Omit<React.ComponentProps<"input">, "onChange"> & {
  onValueChange?: (value: string) => void;
}) => {
  const wrapper = stylex.props(styles.inputWrapper);
  const icon = stylex.props(styles.inputIcon);
  const { value: ctxValue, onValueChange: ctxChange } = useCommandContext();
  return (
    <div
      data-slot="command-input-wrapper"
      className={wrapper.className}
      style={wrapper.style}
    >
      <SearchIcon className={icon.className} style={icon.style} />
      <input
        data-slot="command-input"
        {...stylex.props(
          styles.input,
          customClassName(className),
          style as StyleXStyles
        )}
        value={value ?? ctxValue}
        onChange={(e) => {
          ctxChange(e.target.value);
          onValueChange?.(e.target.value);
        }}
        {...props}
      />
    </div>
  );
};

const CommandList = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="command-list"
    role="listbox"
    {...stylex.props(
      styles.list,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const CommandEmpty = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="command-empty"
    {...stylex.props(
      styles.empty,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const CommandGroup = ({
  className,
  style,
  heading,
  children,
  ...props
}: React.ComponentProps<"div"> & { heading?: string }) => {
  const head = stylex.props(styles.groupHeading);
  return (
    <div
      data-slot="command-group"
      role="group"
      {...stylex.props(
        styles.group,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    >
      {heading && (
        <div className={head.className} style={head.style}>
          {heading}
        </div>
      )}
      {children}
    </div>
  );
};

const CommandSeparator = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="command-separator"
    role="separator"
    {...stylex.props(
      styles.separator,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

const CommandItem = ({
  className,
  style,
  onSelect,
  children,
  value,
  ...props
}: React.ComponentProps<"div"> & {
  onSelect?: (value: string) => void;
  keywords?: string[];
  value?: string;
}) => (
  <div
    data-slot="command-item"
    role="option"
    {...stylex.props(
      styles.item,
      customClassName(className),
      style as StyleXStyles
    )}
    onClick={() => onSelect?.(value ?? (children as string))}
    {...props}
  >
    {children}
  </div>
);

const CommandShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    data-slot="command-shortcut"
    {...stylex.props(
      styles.shortcut,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};

"use client";

import { SearchIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { css, cx } from "styled-system/css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../dialog/dialog";

const command = css({
  backgroundColor: "popover",
  borderRadius: "md",
  color: "popover.foreground",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
  width: "100%",
});

const srOnly = css({
  borderWidth: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

const inputWrapper = css({
  alignItems: "center",
  borderBottomColor: "border",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  display: "flex",
  gap: "2",
  height: "12",
  paddingInline: "3",
});

const inputIcon = css({
  color: "muted.foreground",
  flexShrink: "0",
  height: "4",
  opacity: "0.5",
  width: "4",
});

const input = css({
  _placeholder: { color: "muted.foreground" },
  backgroundColor: "transparent",
  borderWidth: "0",
  color: "foreground",
  display: "flex",
  flex: "1",
  fontSize: "0.875rem",
  height: "12",
  outlineStyle: "none",
  paddingBlock: "3",
  width: "100%",
});

const list = css({
  maxHeight: "300px",
  overflowX: "hidden",
  overflowY: "auto",
  scrollPaddingBlock: "0.25rem",
});

const empty = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  paddingBlock: "6",
  textAlign: "center",
});

const group = css({
  color: "foreground",
  overflow: "hidden",
  padding: "1",
});

const groupHeading = css({
  color: "muted.foreground",
  fontSize: "0.75rem",
  fontWeight: "medium",
  paddingBlock: "1.5",
  paddingInline: "2",
});

const separator = css({
  backgroundColor: "border",
  height: "1px",
  marginInline: "-1",
});

const item = css({
  _hover: { backgroundColor: "accent", color: "accent.foreground" },
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "0.125rem",
  color: "inherit",
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
});

const shortcut = css({
  color: "muted.foreground",
  fontSize: "0.75rem",
  letterSpacing: "0.05em",
  marginInlineStart: "auto",
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
        className={cx(command, className)}
        data-slot="command"
        role="combobox"
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
}) => (
  <Dialog {...props}>
    <DialogHeader className={srOnly}>
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

const CommandInput = ({
  className,
  value,
  onValueChange,
  ...props
}: Omit<React.ComponentProps<"input">, "onChange"> & {
  onValueChange?: (value: string) => void;
}) => {
  const { value: ctxValue, onValueChange: ctxChange } = useCommandContext();
  return (
    <div className={inputWrapper} data-slot="command-input-wrapper">
      <SearchIcon className={inputIcon} />
      <input
        className={cx(input, className)}
        data-slot="command-input"
        onChange={(e) => {
          ctxChange(e.target.value);
          onValueChange?.(e.target.value);
        }}
        value={value ?? ctxValue}
        {...props}
      />
    </div>
  );
};

const CommandList = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cx(list, className)}
    data-slot="command-list"
    role="listbox"
    {...props}
  />
);

const CommandEmpty = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(empty, className)} data-slot="command-empty" {...props} />
);

const CommandGroup = ({
  className,
  heading,
  children,
  ...props
}: React.ComponentProps<"div"> & { heading?: string }) => (
  <div
    className={cx(group, className)}
    data-slot="command-group"
    role="group"
    {...props}
  >
    {heading && <div className={groupHeading}>{heading}</div>}
    {children}
  </div>
);

const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(separator, className)}
    data-slot="command-separator"
    role="separator"
    {...props}
  />
);

const CommandItem = ({
  className,
  onSelect,
  children,
  value,
  ...props
}: React.ComponentProps<"div"> & {
  onSelect?: (value: string) => void;
  keywords?: string[];
  value?: string;
}) => (
  // oxlint-disable-next-line click-events-have-key-events no-static-element-interactions
  <div
    className={cx(item, className)}
    data-slot="command-item"
    onClick={() => onSelect?.(value ?? (children as string))}
    role="option"
    {...props}
  >
    {children}
  </div>
);

const CommandShortcut = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    className={cx(shortcut, className)}
    data-slot="command-shortcut"
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

"use client";

import * as stylex from "@stylexjs/stylex";
import { SearchIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../dialog/dialog";
import { styles } from "./command.stylex";

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
  const p = stylex.props(styles.command);
  return (
    <CommandContext.Provider value={contextValue}>
      <div
        data-slot="command"
        role="combobox"
        className={
          [p.className, className].filter(Boolean).join(" ") || undefined
        }
        style={{ ...p.style, ...style }}
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
  const input = stylex.props(styles.input);
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
        className={
          [input.className, className].filter(Boolean).join(" ") || undefined
        }
        style={{ ...input.style, ...style }}
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
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.list);
  return (
    <div
      data-slot="command-list"
      role="listbox"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const CommandEmpty = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.empty);
  return (
    <div
      data-slot="command-empty"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const CommandGroup = ({
  className,
  style,
  heading,
  children,
  ...props
}: React.ComponentProps<"div"> & { heading?: string }) => {
  const p = stylex.props(styles.group);
  const head = stylex.props(styles.groupHeading);
  return (
    <div
      data-slot="command-group"
      role="group"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
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
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.separator);
  return (
    <div
      data-slot="command-separator"
      role="separator"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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
}) => {
  const p = stylex.props(styles.item);
  return (
    <div
      data-slot="command-item"
      role="option"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      onClick={() => onSelect?.(value ?? (children as string))}
      {...props}
    >
      {children}
    </div>
  );
};

const CommandShortcut = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = stylex.props(styles.shortcut);
  return (
    <span
      data-slot="command-shortcut"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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

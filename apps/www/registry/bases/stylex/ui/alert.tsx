"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  action: {
    position: "absolute",
    right: "0.5rem",
    top: "0.5rem",
  },
  base: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      marginTop: "0.125rem",
      width: "1rem",
    },
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    display: "grid",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    paddingBlock: "0.5rem",
    paddingInline: "0.625rem",
    position: "relative",
    rowGap: "0.125rem",
    textAlign: "left",
    width: "100%",
  },
  default: {
    backgroundColor: colors.card,
    color: colors.cardForeground,
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    textWrap: "balance",
  },
  descriptionDestructive: {
    color: `color-mix(in oklab, ${colors.destructive} 90%, transparent)`,
  },
  descriptionWithIcon: {
    gridColumnStart: 2,
  },
  destructive: {
    backgroundColor: colors.card,
    color: colors.destructive,
  },
  title: {
    fontWeight: 500,
    lineHeight: "1rem",
  },
  titleWithIcon: {
    gridColumnStart: 2,
  },
  withIcon: {
    columnGap: "0.625rem",
    gridTemplateColumns: "auto 1fr",
  },
});

export type AlertVariant = "default" | "destructive";

const AlertContext = React.createContext<{
  variant?: AlertVariant;
  hasIcon?: boolean;
}>({
  hasIcon: false,
  variant: "default",
});

const hasDirectSvgChild = (children: React.ReactNode): boolean =>
  React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type === "svg" || typeof child.type === "function")
  );

export type AlertProps = Omit<React.ComponentProps<"div">, "style"> & {
  variant?: AlertVariant;
  style?: StyleXStyles;
};

const Alert = ({
  variant = "default",
  className,
  style,
  children,
  ...props
}: AlertProps) => {
  const hasIcon = hasDirectSvgChild(children);
  return (
    <AlertContext.Provider value={{ hasIcon, variant }}>
      <div
        data-slot="alert"
        data-variant={variant}
        role="alert"
        {...stylex.props(
          styles.base,
          hasIcon && styles.withIcon,
          styles[variant],
          customClassName(className),
          style
        )}
        {...props}
      >
        {children}
      </div>
    </AlertContext.Provider>
  );
};

export type AlertTitleProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const AlertTitle = ({ className, style, ...props }: AlertTitleProps) => {
  const { hasIcon } = React.useContext(AlertContext);
  return (
    <div
      data-slot="alert-title"
      {...stylex.props(
        styles.title,
        hasIcon && styles.titleWithIcon,
        customClassName(className),
        style
      )}
      {...props}
    />
  );
};

export type AlertDescriptionProps = Omit<
  React.ComponentProps<"div">,
  "style"
> & {
  style?: StyleXStyles;
};

const AlertDescription = ({
  className,
  style,
  ...props
}: AlertDescriptionProps) => {
  const { variant, hasIcon } = React.useContext(AlertContext);
  return (
    <div
      data-slot="alert-description"
      {...stylex.props(
        styles.description,
        hasIcon && styles.descriptionWithIcon,
        variant === "destructive" && styles.descriptionDestructive,
        customClassName(className),
        style
      )}
      {...props}
    />
  );
};

export type AlertActionProps = Omit<React.ComponentProps<"div">, "style"> & {
  style?: StyleXStyles;
};

const AlertAction = ({ className, style, ...props }: AlertActionProps) => (
  <div
    data-slot="alert-action"
    {...stylex.props(styles.action, customClassName(className), style)}
    {...props}
  />
);

export {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
  styles as alertStyles,
};

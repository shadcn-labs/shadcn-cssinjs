"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

export type CardSize = "default" | "sm";

interface CardContextValue {
  size?: CardSize;
}

const CardContext = React.createContext<CardContextValue>({
  size: "default",
});

const styles = stylex.create({
  action: {
    alignSelf: "start",
    gridColumnStart: 2,
    gridRowEnd: "span 2",
    gridRowStart: 1,
    justifySelf: "end",
  },
  card: {
    ":has(> img:first-child)": {
      paddingTop: 0,
    },
    ":has([data-slot=card-footer])": {
      paddingBottom: 0,
    },
    backgroundColor: colors.card,
    borderRadius: radius.md,
    boxShadow: `0 0 0 1px color-mix(in oklab, ${colors.foreground} 10%, transparent)`,
    color: colors.cardForeground,
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    overflow: "hidden",
  },
  cardDefault: {
    gap: "var(--card-spacing, 1rem)",
    paddingBottom: "var(--card-spacing, 1rem)",
    paddingTop: "var(--card-spacing, 1rem)",
  },
  cardSm: {
    gap: "var(--card-spacing, 0.75rem)",
    paddingBottom: "var(--card-spacing, 0.75rem)",
    paddingTop: "var(--card-spacing, 0.75rem)",
  },
  content: {},
  contentDefault: {
    paddingInline: "var(--card-spacing, 1rem)",
  },
  contentSm: {
    paddingInline: "var(--card-spacing, 0.75rem)",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  footer: {
    alignItems: "center",
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    display: "flex",
  },
  footerDefault: {
    padding: "var(--card-spacing, 1rem)",
  },
  footerSm: {
    padding: "var(--card-spacing, 0.75rem)",
  },
  header: {
    ":has([data-slot=card-action])": {
      gridTemplateColumns: "1fr auto",
    },
    ":has([data-slot=card-description])": {
      gridTemplateRows: "auto auto",
    },
    alignItems: "start",
    borderTopLeftRadius: radius.md,
    borderTopRightRadius: radius.md,
    display: "grid",
    gap: "0.25rem",
    gridAutoRows: "min-content",
  },
  headerDefault: {
    paddingInline: "var(--card-spacing, 1rem)",
  },
  headerSm: {
    paddingInline: "var(--card-spacing, 0.75rem)",
  },
  title: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.375",
  },
  titleSm: {
    fontSize: "0.875rem",
  },
});

export type CardProps = Omit<React.ComponentProps<"div">, "style"> & {
  size?: CardSize;
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const Card = ({
  className,
  style,
  size = "default",
  children,
  ...props
}: CardProps) => {
  const isStyleX =
    style !== null &&
    style !== undefined &&
    typeof style === "object" &&
    ("$$css" in style || Array.isArray(style));
  const styleProps = stylex.props(
    styles.card,
    size === "sm" ? styles.cardSm : styles.cardDefault,
    customClassName(className),
    isStyleX ? (style as StyleXStyles) : null
  );
  const inlineStyle =
    !isStyleX && style ? (style as React.CSSProperties) : undefined;
  return (
    <CardContext.Provider value={{ size }}>
      <div
        data-slot="card"
        data-size={size}
        {...styleProps}
        style={{
          ...styleProps.style,
          ...inlineStyle,
        }}
        {...props}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
};

export type CardHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const CardHeader = ({ className, style, ...props }: CardHeaderProps) => {
  const { size } = React.useContext(CardContext);
  const isStyleX =
    style !== null &&
    style !== undefined &&
    typeof style === "object" &&
    ("$$css" in style || Array.isArray(style));
  const styleProps = stylex.props(
    styles.header,
    size === "sm" ? styles.headerSm : styles.headerDefault,
    customClassName(className),
    isStyleX ? (style as StyleXStyles) : null
  );
  const inlineStyle =
    !isStyleX && style ? (style as React.CSSProperties) : undefined;
  return (
    <div
      data-slot="card-header"
      {...styleProps}
      style={{
        ...styleProps.style,
        ...inlineStyle,
      }}
      {...props}
    />
  );
};

export type CardTitleProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const CardTitle = ({ className, style, ...props }: CardTitleProps) => {
  const { size } = React.useContext(CardContext);
  const isStyleX =
    style !== null &&
    style !== undefined &&
    typeof style === "object" &&
    ("$$css" in style || Array.isArray(style));
  const styleProps = stylex.props(
    styles.title,
    size === "sm" && styles.titleSm,
    customClassName(className),
    isStyleX ? (style as StyleXStyles) : null
  );
  const inlineStyle =
    !isStyleX && style ? (style as React.CSSProperties) : undefined;
  return (
    <div
      data-slot="card-title"
      {...styleProps}
      style={{
        ...styleProps.style,
        ...inlineStyle,
      }}
      {...props}
    />
  );
};

export type CardDescriptionProps = Omit<
  React.ComponentProps<"div">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const CardDescription = ({
  className,
  style,
  ...props
}: CardDescriptionProps) => {
  const isStyleX =
    style !== null &&
    style !== undefined &&
    typeof style === "object" &&
    ("$$css" in style || Array.isArray(style));
  const styleProps = stylex.props(
    styles.description,
    customClassName(className),
    isStyleX ? (style as StyleXStyles) : null
  );
  const inlineStyle =
    !isStyleX && style ? (style as React.CSSProperties) : undefined;
  return (
    <div
      data-slot="card-description"
      {...styleProps}
      style={{
        ...styleProps.style,
        ...inlineStyle,
      }}
      {...props}
    />
  );
};

export type CardActionProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const CardAction = ({ className, style, ...props }: CardActionProps) => {
  const isStyleX =
    style !== null &&
    style !== undefined &&
    typeof style === "object" &&
    ("$$css" in style || Array.isArray(style));
  const styleProps = stylex.props(
    styles.action,
    customClassName(className),
    isStyleX ? (style as StyleXStyles) : null
  );
  const inlineStyle =
    !isStyleX && style ? (style as React.CSSProperties) : undefined;
  return (
    <div
      data-slot="card-action"
      {...styleProps}
      style={{
        ...styleProps.style,
        ...inlineStyle,
      }}
      {...props}
    />
  );
};

export type CardContentProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const CardContent = ({ className, style, ...props }: CardContentProps) => {
  const { size } = React.useContext(CardContext);
  const isStyleX =
    style !== null &&
    style !== undefined &&
    typeof style === "object" &&
    ("$$css" in style || Array.isArray(style));
  const styleProps = stylex.props(
    styles.content,
    size === "sm" ? styles.contentSm : styles.contentDefault,
    customClassName(className),
    isStyleX ? (style as StyleXStyles) : null
  );
  const inlineStyle =
    !isStyleX && style ? (style as React.CSSProperties) : undefined;
  return (
    <div
      data-slot="card-content"
      {...styleProps}
      style={{
        ...styleProps.style,
        ...inlineStyle,
      }}
      {...props}
    />
  );
};

export type CardFooterProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const CardFooter = ({ className, style, ...props }: CardFooterProps) => {
  const { size } = React.useContext(CardContext);
  const isStyleX =
    style !== null &&
    style !== undefined &&
    typeof style === "object" &&
    ("$$css" in style || Array.isArray(style));
  const styleProps = stylex.props(
    styles.footer,
    size === "sm" ? styles.footerSm : styles.footerDefault,
    customClassName(className),
    isStyleX ? (style as StyleXStyles) : null
  );
  const inlineStyle =
    !isStyleX && style ? (style as React.CSSProperties) : undefined;
  return (
    <div
      data-slot="card-footer"
      {...styleProps}
      style={{
        ...styleProps.style,
        ...inlineStyle,
      }}
      {...props}
    />
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

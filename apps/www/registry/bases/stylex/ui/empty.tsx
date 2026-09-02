"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
    gap: "0.625rem",
    maxWidth: "24rem",
    minWidth: 0,
    textWrap: "balance",
    width: "100%",
  },
  description: {
    color: colors.mutedForeground,
    fontFamily: "inherit",
    fontSize: "0.875rem",
    lineHeight: 1.625,
    margin: 0,
  },
  empty: {
    alignItems: "center",
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "dashed",
    borderWidth: "1px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    minWidth: 0,
    padding: "1.5rem",
    textAlign: "center",
    textWrap: "balance",
    width: "100%",
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    maxWidth: "24rem",
  },
  mediaBase: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    marginBottom: "0.5rem",
  },
  mediaDefault: {
    backgroundColor: "transparent",
  },
  mediaIcon: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: radius.md,
    color: colors.foreground,
    display: "flex",
    flexShrink: 0,
    height: "2rem",
    justifyContent: "center",
    width: "2rem",
  },
  title: {
    fontFamily: "inherit",
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    margin: 0,
  },
});

export type EmptyProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Empty = ({ className, style, ...props }: EmptyProps) => (
  <div
    data-slot="empty"
    {...stylex.props(
      styles.empty,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type EmptyHeaderProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const EmptyHeader = ({ className, style, ...props }: EmptyHeaderProps) => (
  <div
    data-slot="empty-header"
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type EmptyMediaVariant = "default" | "icon";

const mediaVariantStyles: Record<EmptyMediaVariant, StyleXStyles> = {
  default: styles.mediaDefault,
  icon: styles.mediaIcon,
};

export type EmptyMediaProps = Omit<React.ComponentProps<"div">, "style"> & {
  variant?: EmptyMediaVariant;
  className?: string;
  style?: StyleXStyles;
};

const EmptyMedia = ({
  className,
  style,
  variant = "default",
  ...props
}: EmptyMediaProps) => (
  <div
    data-slot="empty-icon"
    data-variant={variant}
    {...stylex.props(
      styles.mediaBase,
      mediaVariantStyles[variant],
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type EmptyTitleProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const EmptyTitle = ({ className, style, ...props }: EmptyTitleProps) => (
  <div
    data-slot="empty-title"
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type EmptyDescriptionProps = Omit<React.ComponentProps<"p">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const EmptyDescription = ({
  className,
  style,
  ...props
}: EmptyDescriptionProps) => (
  <div
    data-slot="empty-description"
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type EmptyContentProps = Omit<React.ComponentProps<"div">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const EmptyContent = ({ className, style, ...props }: EmptyContentProps) => (
  <div
    data-slot="empty-content"
    {...stylex.props(
      styles.content,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
};

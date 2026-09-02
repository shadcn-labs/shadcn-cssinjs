"use client";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  group: {
    alignItems: "stretch",
    display: "flex",
    zIndex: {
      ":focus-within": 10,
      default: null,
    },
  },
  horizontal: {
    flexDirection: "row",
  },
  separator: {
    alignSelf: "stretch",
    backgroundColor: colors.input,
    position: "relative",
  },
  separatorHorizontal: {
    marginInline: "1px",
    width: "auto",
  },
  separatorVertical: {
    height: "auto",
    marginBlock: "1px",
  },
  text: {
    ":is(svg)": {
      flexShrink: 0,
      height: "1rem",
      pointerEvents: "none",
      width: "1rem",
    },
    alignItems: "center",
    backgroundColor: colors.muted,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    color: colors.foreground,
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: "1.25rem",
    paddingInline: "0.625rem",
  },
  vertical: {
    flexDirection: "column",
  },
});

export type ButtonGroupOrientation = "horizontal" | "vertical";

const buttonGroupVariants = (options?: {
  orientation?: ButtonGroupOrientation;
  className?: string;
  style?: StyleXStyles;
}) => {
  const orientation = options?.orientation ?? "horizontal";

  return stylex.props(
    styles.group,
    orientation === "vertical" ? styles.vertical : styles.horizontal,
    customClassName(options?.className),
    options?.style
  );
};

export type ButtonGroupProps = Omit<React.ComponentProps<"div">, "style"> & {
  orientation?: ButtonGroupOrientation;
  className?: string;
  style?: StyleXStyles | React.CSSProperties;
};

const ButtonGroup = ({
  className,
  orientation = "horizontal",
  style,
  ...props
}: ButtonGroupProps) => (
  <div
    role="group"
    data-slot="button-group"
    data-orientation={orientation}
    {...stylex.props(
      styles.group,
      orientation === "vertical" ? styles.vertical : styles.horizontal,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type ButtonGroupTextProps = Omit<
  useRender.ComponentProps<"div">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const ButtonGroupText = ({
  className,
  style,
  render,
  ...props
}: ButtonGroupTextProps) => {
  const styleProps = stylex.props(
    styles.text,
    customClassName(className),
    style
  );

  return useRender({
    defaultTagName: "div",
    props: mergeProps(
      {
        className: styleProps.className,
        style: styleProps.style,
      },
      props
    ),
    render,
    state: {
      slot: "button-group-text",
    },
  });
};

export type ButtonGroupSeparatorProps = React.ComponentProps<
  typeof Separator
> & {
  style?: StyleXStyles;
};

const ButtonGroupSeparator = ({
  className,
  orientation = "vertical",
  style,
  ...props
}: ButtonGroupSeparatorProps) => {
  const styleProps = stylex.props(
    styles.separator,
    orientation === "horizontal"
      ? styles.separatorHorizontal
      : styles.separatorVertical,
    customClassName(className),
    style
  );

  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      {...styleProps}
      {...props}
    />
  );
};

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
  styles as buttonGroupStyles,
};

"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import * as React from "react";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  ellipsis: {
    alignItems: "center",
    display: "flex",
    height: "1.25rem",
    justifyContent: "center",
    width: "1.25rem",
  },
  item: {
    alignItems: "center",
    display: "inline-flex",
    gap: "0.25rem",
  },
  link: {
    color: {
      ":hover": colors.foreground,
      default: "inherit",
    },
    textDecoration: "none",
    transitionDuration: "150ms",
    transitionProperty: "color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  list: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.875rem",
    gap: "0.375rem",
    lineHeight: "1.25rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    wordBreak: "break-word",
  },
  page: {
    color: colors.foreground,
    fontWeight: 400,
  },
  root: {},
  separator: {
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
  },
  separatorIcon: {
    ":dir(rtl)": {
      transform: "scaleX(-1)",
    },
    height: "0.875rem",
    width: "0.875rem",
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

export type BreadcrumbProps = Omit<React.ComponentProps<"nav">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Breadcrumb = ({ className, style, ...props }: BreadcrumbProps) => {
  const styleProps = stylex.props(
    styles.root,
    customClassName(className),
    style as StyleXStyles
  );
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      {...styleProps}
      {...props}
    />
  );
};

export type BreadcrumbListProps = Omit<React.ComponentProps<"ol">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const BreadcrumbList = ({
  className,
  style,
  ...props
}: BreadcrumbListProps) => {
  const styleProps = stylex.props(
    styles.list,
    customClassName(className),
    style as StyleXStyles
  );
  return <ol data-slot="breadcrumb-list" {...styleProps} {...props} />;
};

export type BreadcrumbItemProps = Omit<React.ComponentProps<"li">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const BreadcrumbItem = ({
  className,
  style,
  ...props
}: BreadcrumbItemProps) => {
  const styleProps = stylex.props(
    styles.item,
    customClassName(className),
    style as StyleXStyles
  );
  return <li data-slot="breadcrumb-item" {...styleProps} {...props} />;
};

export type BreadcrumbLinkProps = Omit<
  useRender.ComponentProps<"a">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const BreadcrumbLink = ({
  className,
  style,
  render,
  ...props
}: BreadcrumbLinkProps) => {
  const styleProps = stylex.props(
    styles.link,
    customClassName(className),
    style as StyleXStyles
  );
  return useRender({
    defaultTagName: "a",
    props: mergeProps(
      {
        className: styleProps.className,
        style: styleProps.style,
      },
      props
    ),
    render,
    state: {
      slot: "breadcrumb-link",
    },
  });
};

export type BreadcrumbPageProps = Omit<
  React.ComponentProps<"span">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const BreadcrumbPage = ({
  className,
  style,
  ...props
}: BreadcrumbPageProps) => {
  const styleProps = stylex.props(
    styles.page,
    customClassName(className),
    style as StyleXStyles
  );
  return (
    <span
      data-slot="breadcrumb-page"
      // oxlint-disable-next-line eslint-plugin-jsx-a11y/prefer-tag-over-role: element type is controlled by Base UI's render prop
      role="link"
      aria-disabled="true"
      aria-current="page"
      {...styleProps}
      {...props}
    />
  );
};

export type BreadcrumbSeparatorProps = Omit<
  React.ComponentProps<"li">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const BreadcrumbSeparator = ({
  children,
  className,
  style,
  ...props
}: BreadcrumbSeparatorProps) => {
  const styleProps = stylex.props(
    styles.separator,
    customClassName(className),
    style as StyleXStyles
  );
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      {...styleProps}
      {...props}
    >
      {children ?? (
        <ChevronRightIcon size={14} {...stylex.props(styles.separatorIcon)} />
      )}
    </li>
  );
};

export type BreadcrumbEllipsisProps = Omit<
  React.ComponentProps<"span">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const BreadcrumbEllipsis = ({
  className,
  style,
  ...props
}: BreadcrumbEllipsisProps) => {
  const styleProps = stylex.props(
    styles.ellipsis,
    customClassName(className),
    style as StyleXStyles
  );
  const srStyleProps = stylex.props(styles.srOnly);
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      {...styleProps}
      {...props}
    >
      <MoreHorizontalIcon size={16} />
      <span {...srStyleProps}>More</span>
    </span>
  );
};

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

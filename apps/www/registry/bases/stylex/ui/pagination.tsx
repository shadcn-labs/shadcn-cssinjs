"use client";

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import * as React from "react";

import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Button } from "@/registry/bases/stylex/ui/button";

const styles = stylex.create({
  chevronIcon: {
    flexShrink: 0,
    height: "1rem",
    pointerEvents: "none",
    transform: {
      ":dir(rtl)": "scaleX(-1)",
      default: null,
    },
    width: "1rem",
  },
  content: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    gap: "0.125rem",
    listStyle: "none",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  ellipsis: {
    alignItems: "center",
    display: "flex",
    height: "2rem",
    justifyContent: "center",
    width: "2rem",
  },
  item: {
    boxSizing: "border-box",
    listStyle: "none",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    textDecorationLine: "none",
  },
  next: {
    paddingRight: "0.375rem",
  },
  previous: {
    paddingLeft: "0.375rem",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    marginInline: "auto",
    width: "100%",
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
  text: {
    display: {
      "@media (min-width: 640px)": "block",
      default: "none",
    },
  },
});

export type PaginationProps = Omit<React.ComponentProps<"nav">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Pagination = ({ className, style, ...props }: PaginationProps) => {
  const styleProps = stylex.props(
    styles.root,
    customClassName(className),
    style as StyleXStyles
  );
  return (
    <nav
      aria-label="pagination"
      data-slot="pagination"
      {...styleProps}
      {...props}
    />
  );
};

export type PaginationContentProps = Omit<
  React.ComponentProps<"ul">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const PaginationContent = ({
  className,
  style,
  ...props
}: PaginationContentProps) => {
  const styleProps = stylex.props(
    styles.content,
    customClassName(className),
    style as StyleXStyles
  );
  return <ul data-slot="pagination-content" {...styleProps} {...props} />;
};

export type PaginationItemProps = Omit<React.ComponentProps<"li">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const PaginationItem = ({
  className,
  style,
  ...props
}: PaginationItemProps) => {
  const styleProps = stylex.props(
    styles.item,
    customClassName(className),
    style as StyleXStyles
  );
  return <li data-slot="pagination-item" {...styleProps} {...props} />;
};

export type PaginationLinkProps = {
  isActive?: boolean;
  className?: string;
  style?: StyleXStyles;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  Omit<React.ComponentProps<"a">, "style">;

const PaginationLink = ({
  className,
  style,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <Button
    variant={isActive ? "outline" : "ghost"}
    size={size}
    className={className}
    style={style}
    nativeButton={false}
    render={
      <a
        aria-current={isActive ? "page" : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...stylex.props(styles.link)}
        {...props}
      />
    }
  />
);

export type PaginationPreviousProps = React.ComponentProps<
  typeof PaginationLink
> & {
  text?: string;
};

const PaginationPrevious = ({
  className,
  style,
  text = "Previous",
  ...props
}: PaginationPreviousProps) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={className}
    style={[styles.previous, style as StyleXStyles]}
    {...props}
  >
    <ChevronLeftIcon
      data-icon="inline-start"
      {...stylex.props(styles.chevronIcon)}
    />
    <span {...stylex.props(styles.text)}>{text}</span>
  </PaginationLink>
);

export type PaginationNextProps = React.ComponentProps<
  typeof PaginationLink
> & {
  text?: string;
};

const PaginationNext = ({
  className,
  style,
  text = "Next",
  ...props
}: PaginationNextProps) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={className}
    style={[styles.next, style as StyleXStyles]}
    {...props}
  >
    <span {...stylex.props(styles.text)}>{text}</span>
    <ChevronRightIcon
      data-icon="inline-end"
      {...stylex.props(styles.chevronIcon)}
    />
  </PaginationLink>
);

export type PaginationEllipsisProps = Omit<
  React.ComponentProps<"span">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const PaginationEllipsis = ({
  className,
  style,
  ...props
}: PaginationEllipsisProps) => {
  const styleProps = stylex.props(
    styles.ellipsis,
    customClassName(className),
    style as StyleXStyles
  );
  const srStyleProps = stylex.props(styles.srOnly);
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      {...styleProps}
      {...props}
    >
      <MoreHorizontalIcon size={16} />
      <span {...srStyleProps}>More pages</span>
    </span>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

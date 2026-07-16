import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "0.25rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  ellipsis: {
    alignItems: "center",
    display: "flex",
    height: "2.25rem",
    justifyContent: "center",
    width: "2.25rem",
  },
  link: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderColor: "transparent",
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    color: { ":hover": colors.accentForeground, default: colors.foreground },
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.25rem",
    height: "2.25rem",
    justifyContent: "center",
    minWidth: "2.25rem",
    outline: "none",
    paddingInline: "0.625rem",
    textDecorationLine: "none",
    transition: "background-color 0.1s ease, color 0.1s ease",
  },
  linkActive: {
    backgroundColor: colors.background,
    borderColor: colors.input,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    marginInline: "auto",
    width: "100%",
  },
});

const Pagination = ({
  className,
  style,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    {...stylex.props(
      styles.root,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="pagination"
    {...props}
  />
);

const PaginationContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"ul">) => (
  <ul
    {...stylex.props(
      styles.content,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="pagination-content"
    {...props}
  />
);

const PaginationItem = (props: React.ComponentProps<"li">) => (
  <li data-slot="pagination-item" {...props} />
);

const PaginationLink = ({
  className,
  style,
  isActive,
  ...props
}: React.ComponentProps<"a"> & { isActive?: boolean }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    {...stylex.props(
      styles.link,
      isActive && styles.linkActive,
      customClassName(className),
      style as StyleXStyles
    )}
    data-active={isActive}
    data-slot="pagination-link"
    {...props}
  />
);

const PaginationPrevious = ({
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" {...props}>
    <ChevronLeftIcon size={16} />
    {children ?? <span>Previous</span>}
  </PaginationLink>
);

const PaginationNext = ({
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" {...props}>
    {children ?? <span>Next</span>}
    <ChevronRightIcon size={16} />
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    {...stylex.props(
      styles.ellipsis,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="pagination-ellipsis"
    {...props}
  >
    <MoreHorizontalIcon size={16} />
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};

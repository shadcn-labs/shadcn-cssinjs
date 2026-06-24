import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { css, cva, cx } from "styled-system/css";

const root = css({
  display: "flex",
  justifyContent: "center",
  marginInline: "auto",
  width: "100%",
});

const content = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  gap: "1",
  listStyleType: "none",
  margin: "0",
  padding: "0",
});

const link = cva({
  base: {
    _hover: { backgroundColor: "accent", color: "accent.foreground" },
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "foreground",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: "medium",
    gap: "1",
    height: "9",
    justifyContent: "center",
    minWidth: "9",
    outlineStyle: "none",
    paddingInline: "2.5",
    textDecorationLine: "none",
    transitionDuration: "100ms",
    transitionProperty: "background-color, color",
  },
  variants: {
    active: {
      false: {},
      true: {
        backgroundColor: "background",
        borderColor: "input",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
});

const ellipsis = css({
  alignItems: "center",
  display: "flex",
  height: "9",
  justifyContent: "center",
  width: "9",
});

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cx(root, className)}
    data-slot="pagination"
    {...props}
  />
);

const PaginationContent = ({
  className,
  ...props
}: React.ComponentProps<"ul">) => (
  <ul
    className={cx(content, className)}
    data-slot="pagination-content"
    {...props}
  />
);

const PaginationItem = (props: React.ComponentProps<"li">) => (
  <li data-slot="pagination-item" {...props} />
);

const PaginationLink = ({
  className,
  isActive,
  ...props
}: React.ComponentProps<"a"> & { isActive?: boolean }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cx(link({ active: isActive }), className)}
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
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cx(ellipsis, className)}
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

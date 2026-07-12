import * as stylex from "@stylexjs/stylex";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { styles } from "./pagination.stylex";

const Pagination = ({
  className,
  style,
  ...props
}: React.ComponentProps<"nav">) => {
  const p = stylex.props(styles.root);
  return (
    <nav
      aria-label="pagination"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="pagination"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const PaginationContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"ul">) => {
  const p = stylex.props(styles.content);
  return (
    <ul
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="pagination-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const PaginationItem = (props: React.ComponentProps<"li">) => (
  <li data-slot="pagination-item" {...props} />
);

const PaginationLink = ({
  className,
  style,
  isActive,
  ...props
}: React.ComponentProps<"a"> & { isActive?: boolean }) => {
  const p = stylex.props(styles.link, isActive && styles.linkActive);
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-active={isActive}
      data-slot="pagination-link"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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
}: React.ComponentProps<"span">) => {
  const p = stylex.props(styles.ellipsis);
  return (
    <span
      aria-hidden="true"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="pagination-ellipsis"
      style={{ ...p.style, ...style }}
      {...props}
    >
      <MoreHorizontalIcon size={16} />
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

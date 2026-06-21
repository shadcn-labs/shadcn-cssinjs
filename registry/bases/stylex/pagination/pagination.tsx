import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./pagination.stylex";

const Pagination = ({
  className,
  style,
  ...props
}: React.ComponentProps<"nav">) => {
  const p = x(styles.root);
  return (
    <nav
      aria-label="pagination"
      className={cx(p.className, className)}
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
  const p = x(styles.content);
  return (
    <ul
      className={cx(p.className, className)}
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
  const p = x(styles.link, isActive && styles.linkActive);
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cx(p.className, className)}
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
  const p = x(styles.ellipsis);
  return (
    <span
      aria-hidden="true"
      className={cx(p.className, className)}
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

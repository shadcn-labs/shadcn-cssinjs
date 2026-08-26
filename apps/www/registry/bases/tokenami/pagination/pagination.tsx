import type { TokenamiStyle } from "@tokenami/css";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--display": "flex",
  "--justify-content": "center",
  "--margin-inline": "var(---, auto)",
  "--width": "var(---, 100%)",
});

const content = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--flex-direction": "row",
  "--gap": 1,
  "--list-style-type": "none",
  "--margin": 0,
  "--padding": 0,
});

const link = css.compose({
  "--align-items": "center",
  "--background-color": "var(--color_transparent)",
  "--border-color": "var(--color_transparent)",
  "--border-radius": "var(--radii_md)",
  "--border-style": "solid",
  "--border-width": "var(---, 1px)",
  "--color": "var(--color_foreground)",
  "--cursor": "pointer",
  "--display": "inline-flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 1,
  "--height": 9,
  "--hover_background-color": "var(--color_accent)",
  "--hover_color": "var(--color_accent-foreground)",
  "--justify-content": "center",
  "--min-width": 9,
  "--outline-style": "none",
  "--padding-inline": 2.5,
  "--text-decoration-line": "none",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color, color)",

  variants: {
    active: {
      false: {},
      true: {
        "--background-color": "var(--color_background)",
        "--border-color": "var(--color_input)",
        "--box-shadow": "var(---, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
      },
    },
  },
});

const ellipsis = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--height": 9,
  "--justify-content": "center",
  "--width": 9,
});

const Pagination = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"nav">>) => {
  const [cn, sx] = root();
  return (
    <nav
      aria-label="pagination"
      className={cn(className)}
      data-slot="pagination"
      style={sx(style)}
      {...props}
    />
  );
};

const PaginationContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"ul">>) => {
  const [cn, sx] = content();
  return (
    <ul
      className={cn(className)}
      data-slot="pagination-content"
      style={sx(style)}
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
}: TokenamiStyle<React.ComponentProps<"a">> & { isActive?: boolean }) => {
  const [cn, sx] = link({ active: isActive });
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(className)}
      data-active={isActive}
      data-slot="pagination-link"
      style={sx(style)}
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
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = ellipsis();
  return (
    <span
      aria-hidden="true"
      className={cn(className)}
      data-slot="pagination-ellipsis"
      style={sx(style)}
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

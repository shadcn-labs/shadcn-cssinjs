import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { cx, x } from "@/lib/utils";

import { styles } from "./breadcrumb.stylex";

const Breadcrumb = (props: React.ComponentProps<"nav">) => (
  <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
);

const BreadcrumbList = ({
  className,
  style,
  ...props
}: React.ComponentProps<"ol">) => {
  const p = x(styles.list);
  return (
    <ol
      className={cx(p.className, className)}
      data-slot="breadcrumb-list"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const BreadcrumbItem = ({
  className,
  style,
  ...props
}: React.ComponentProps<"li">) => {
  const p = x(styles.item);
  return (
    <li
      className={cx(p.className, className)}
      data-slot="breadcrumb-item"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const BreadcrumbLink = ({
  className,
  style,
  ...props
}: React.ComponentProps<"a">) => {
  const p = x(styles.link);
  return (
    <a
      className={cx(p.className, className)}
      data-slot="breadcrumb-link"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const BreadcrumbPage = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.page);
  return (
    <span
      aria-current="page"
      className={cx(p.className, className)}
      data-slot="breadcrumb-page"
      role="link"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const BreadcrumbSeparator = ({
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"li">) => {
  const p = x(styles.separator);
  return (
    <li
      aria-hidden="true"
      className={cx(p.className, className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {children ?? <ChevronRightIcon size={14} />}
    </li>
  );
};

const BreadcrumbEllipsis = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = x(styles.ellipsis);
  return (
    <span
      aria-hidden="true"
      className={cx(p.className, className)}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      style={{ ...p.style, ...style }}
      {...props}
    >
      <MoreHorizontalIcon size={16} />
    </span>
  );
};

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};

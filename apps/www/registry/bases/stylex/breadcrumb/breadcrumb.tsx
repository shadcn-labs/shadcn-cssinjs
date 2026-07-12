import { useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { styles } from "./breadcrumb.stylex";

const Breadcrumb = (props: React.ComponentProps<"nav">) => (
  <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
);

const BreadcrumbList = ({
  className,
  style,
  ...props
}: React.ComponentProps<"ol">) => {
  const p = stylex.props(styles.list);
  return (
    <ol
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.item);
  return (
    <li
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="breadcrumb-item"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const BreadcrumbLink = ({
  className,
  style,
  render,
  ...props
}: React.ComponentProps<"a"> & { render?: useRender.RenderProp }) =>
  useRender({
    props: {
      className:
        [stylex.props(styles.link).className, className]
          .filter(Boolean)
          .join(" ") || undefined,
      "data-slot": "breadcrumb-link",
      style: { ...stylex.props(styles.link).style, ...style },
      ...props,
    },
    // oxlint-disable-next-line anchor-has-content
    render: render ?? <a />,
  });

const BreadcrumbPage = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => {
  const p = stylex.props(styles.page);
  return (
    <span
      aria-current="page"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.separator);
  return (
    <li
      aria-hidden="true"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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
  const p = stylex.props(styles.ellipsis);
  return (
    <span
      aria-hidden="true"
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
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

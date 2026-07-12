import { useRender } from "@base-ui/react";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { css, cx } from "styled-system/css";

const list = css({
  alignItems: "center",
  color: "muted.foreground",
  display: "flex",
  flexWrap: "wrap",
  fontSize: "0.875rem",
  gap: "1.5",
  listStyleType: "none",
  margin: "0",
  padding: "0",
  wordBreak: "break-word",
});

const item = css({
  alignItems: "center",
  display: "inline-flex",
  gap: "1.5",
});

const link = css({
  _hover: { color: "foreground" },
  color: "muted.foreground",
  textDecorationLine: "none",
  transitionDuration: "150ms",
  transitionProperty: "color",
  transitionTimingFunction: "ease-in-out",
});

const page = css({
  color: "foreground",
  fontWeight: "normal",
});

const separator = css({
  alignItems: "center",
  display: "inline-flex",
});

const ellipsis = css({
  alignItems: "center",
  display: "flex",
  height: "5",
  justifyContent: "center",
  width: "9",
});

const Breadcrumb = (props: React.ComponentProps<"nav">) => (
  <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
);

const BreadcrumbList = ({
  className,
  ...props
}: React.ComponentProps<"ol">) => (
  <ol className={cx(list, className)} data-slot="breadcrumb-list" {...props} />
);

const BreadcrumbItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li className={cx(item, className)} data-slot="breadcrumb-item" {...props} />
);

const BreadcrumbLink = ({
  className,
  render,
  ...props
}: React.ComponentProps<"a"> & {
  render?: useRender.RenderProp;
}) =>
  useRender({
    props: {
      className: cx(link, className),
      "data-slot": "breadcrumb-link",
      ...props,
    },
    // oxlint-disable-next-line anchor-has-content
    render: render ?? <a />,
  });

const BreadcrumbPage = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-current="page"
    className={cx(page, className)}
    data-slot="breadcrumb-page"
    role="link"
    {...props}
  />
);

const BreadcrumbSeparator = ({
  className,
  children,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    aria-hidden="true"
    className={cx(separator, className)}
    data-slot="breadcrumb-separator"
    role="presentation"
    {...props}
  >
    {children ?? <ChevronRightIcon size={14} />}
  </li>
);

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cx(ellipsis, className)}
    data-slot="breadcrumb-ellipsis"
    role="presentation"
    {...props}
  >
    <MoreHorizontalIcon size={16} />
  </span>
);

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};

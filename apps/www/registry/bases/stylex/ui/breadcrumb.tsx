import { useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  ellipsis: {
    alignItems: "center",
    display: "flex",
    height: "1.25rem",
    justifyContent: "center",
    width: "2.25rem",
  },
  item: {
    alignItems: "center",
    display: "inline-flex",
    gap: "0.375rem",
  },
  link: {
    color: { ":hover": colors.foreground, default: colors.mutedForeground },
    textDecorationLine: "none",
    transition: "color 0.15s ease-in-out",
  },
  list: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.875rem",
    gap: "0.375rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    wordBreak: "break-word",
  },
  page: {
    color: colors.foreground,
    fontWeight: 400,
  },
  separator: {
    alignItems: "center",
    display: "inline-flex",
  },
});

const Breadcrumb = (props: React.ComponentProps<"nav">) => (
  <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
);

const BreadcrumbList = ({
  className,
  style,
  ...props
}: React.ComponentProps<"ol">) => (
  <ol
    {...stylex.props(
      styles.list,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="breadcrumb-list"
    {...props}
  />
);

const BreadcrumbItem = ({
  className,
  style,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    {...stylex.props(
      styles.item,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="breadcrumb-item"
    {...props}
  />
);

const BreadcrumbLink = ({
  className,
  style,
  render,
  ...props
}: React.ComponentProps<"a"> & { render?: useRender.RenderProp }) =>
  useRender({
    props: {
      ...stylex.props(
        styles.link,
        customClassName(className),
        style as StyleXStyles
      ),
      "data-slot": "breadcrumb-link",
      ...props,
    },
    // oxlint-disable-next-line anchor-has-content
    render: render ?? <a />,
  });

const BreadcrumbPage = ({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-current="page"
    {...stylex.props(
      styles.page,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="breadcrumb-page"
    role="link"
    {...props}
  />
);

const BreadcrumbSeparator = ({
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    aria-hidden="true"
    {...stylex.props(
      styles.separator,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="breadcrumb-separator"
    role="presentation"
    {...props}
  >
    {children ?? <ChevronRightIcon size={14} />}
  </li>
);

const BreadcrumbEllipsis = ({
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

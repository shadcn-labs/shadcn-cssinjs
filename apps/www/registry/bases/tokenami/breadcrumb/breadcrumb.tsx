import { useRender } from "@base-ui/react";
import type { TokenamiStyle } from "@tokenami/css";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const list = css.compose({
  "--align-items": "center",
  "--color": "var(--color_muted-foreground)",
  "--display": "flex",
  "--flex-wrap": "wrap",
  "--font-size": "0.875rem",
  "--gap": 1.5,
  "--list-style-type": "none",
  "--margin": 0,
  "--padding": 0,
  "--word-break": "break-word",
});

const item = css.compose({
  "--align-items": "center",
  "--display": "inline-flex",
  "--gap": 1.5,
});

const link = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--hover_color": "var(--color_foreground)",
  "--text-decoration-line": "none",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, color)",
  "--transition-timing-function": "ease-in-out",
});

const page = css.compose({
  "--color": "var(--color_foreground)",
  "--font-weight": 400,
});

const separator = css.compose({
  "--align-items": "center",
  "--display": "inline-flex",
});

const ellipsis = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--height": 5,
  "--justify-content": "center",
  "--width": 9,
});

const Breadcrumb = (props: React.ComponentProps<"nav">) => (
  <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
);

const BreadcrumbList = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"ol">>) => {
  const [cn, sx] = list();
  return (
    <ol
      className={cn(className)}
      data-slot="breadcrumb-list"
      style={sx(style)}
      {...props}
    />
  );
};

const BreadcrumbItem = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"li">>) => {
  const [cn, sx] = item();
  return (
    <li
      className={cn(className)}
      data-slot="breadcrumb-item"
      style={sx(style)}
      {...props}
    />
  );
};

const BreadcrumbLink = ({
  className,
  style,
  render,
  ...props
}: TokenamiStyle<React.ComponentProps<"a">> & {
  render?: useRender.RenderProp;
}) => {
  const [cn, sx] = link();
  return useRender({
    props: {
      className: cn(className),
      "data-slot": "breadcrumb-link",
      style: sx(style),
      ...props,
    },
    // oxlint-disable-next-line anchor-has-content
    render: render ?? <a />,
  });
};

const BreadcrumbPage = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = page();
  return (
    <span
      aria-current="page"
      className={cn(className)}
      data-slot="breadcrumb-page"
      role="link"
      style={sx(style)}
      {...props}
    />
  );
};

const BreadcrumbSeparator = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<React.ComponentProps<"li">>) => {
  const [cn, sx] = separator();
  return (
    <li
      aria-hidden="true"
      className={cn(className)}
      data-slot="breadcrumb-separator"
      role="presentation"
      style={sx(style)}
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
}: TokenamiStyle<React.ComponentProps<"span">>) => {
  const [cn, sx] = ellipsis();
  return (
    <span
      aria-hidden="true"
      className={cn(className)}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      style={sx(style)}
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

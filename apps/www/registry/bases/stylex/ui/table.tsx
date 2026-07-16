import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  caption: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    marginTop: "1rem",
  },
  cell: {
    padding: "0.5rem",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  footer: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    fontWeight: 500,
  },
  head: {
    color: colors.mutedForeground,
    fontWeight: 500,
    height: "2.5rem",
    padding: "0.5rem",
    textAlign: "start",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  root: {
    borderCollapse: "collapse",
    captionSide: "bottom",
    fontSize: "0.875rem",
    width: "100%",
  },
  row: {
    backgroundColor: {
      ":hover": `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
      default: "transparent",
    },
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    transition: "background-color 0.1s ease",
  },
  wrapper: {
    overflowX: "auto",
    position: "relative",
    width: "100%",
  },
});

const Table = ({
  className,
  style,
  ...props
}: React.ComponentProps<"table">) => {
  const wrapper = stylex.props(styles.wrapper);
  return (
    <div
      className={wrapper.className}
      data-slot="table-container"
      style={wrapper.style}
    >
      <table
        {...stylex.props(
          styles.root,
          customClassName(className),
          style as StyleXStyles
        )}
        data-slot="table"
        {...props}
      />
    </div>
  );
};

const TableHeader = (props: React.ComponentProps<"thead">) => (
  <thead data-slot="table-header" {...props} />
);

const TableBody = (props: React.ComponentProps<"tbody">) => (
  <tbody data-slot="table-body" {...props} />
);

const TableFooter = ({
  className,
  style,
  ...props
}: React.ComponentProps<"tfoot">) => (
  <tfoot
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="table-footer"
    {...props}
  />
);

const TableRow = ({
  className,
  style,
  ...props
}: React.ComponentProps<"tr">) => (
  <tr
    {...stylex.props(
      styles.row,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="table-row"
    {...props}
  />
);

const TableHead = ({
  className,
  style,
  ...props
}: React.ComponentProps<"th">) => (
  <th
    {...stylex.props(
      styles.head,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="table-head"
    {...props}
  />
);

const TableCell = ({
  className,
  style,
  ...props
}: React.ComponentProps<"td">) => (
  <td
    {...stylex.props(
      styles.cell,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="table-cell"
    {...props}
  />
);

const TableCaption = ({
  className,
  style,
  ...props
}: React.ComponentProps<"caption">) => (
  <caption
    {...stylex.props(
      styles.caption,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="table-caption"
    {...props}
  />
);

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};

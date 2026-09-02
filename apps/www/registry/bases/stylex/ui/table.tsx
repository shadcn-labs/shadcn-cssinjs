"use client";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as React from "react";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  body: {
    borderBottomWidth: {
      ":nth-child(n) > tr:last-child": 0,
      default: null,
    },
  },
  caption: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    marginTop: "1rem",
  },
  cell: {
    padding: "0.5rem",
    paddingRight: {
      ":has([role=checkbox])": 0,
      default: null,
    },
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  container: {
    overflowX: "auto",
    position: "relative",
    width: "100%",
  },
  footer: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
    borderBottomWidth: {
      ":nth-child(n) > tr:last-child": 0,
      default: null,
    },
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    fontWeight: 500,
  },
  head: {
    color: colors.foreground,
    fontWeight: 500,
    height: "2.5rem",
    paddingInline: "0.5rem",
    paddingRight: {
      ":has([role=checkbox])": 0,
      default: null,
    },
    textAlign: "left",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  header: {
    borderBottomColor: {
      ":nth-child(n) > tr": colors.border,
      default: null,
    },
    borderBottomStyle: {
      ":nth-child(n) > tr": "solid",
      default: null,
    },
    borderBottomWidth: {
      ":nth-child(n) > tr": "1px",
      default: null,
    },
  },
  row: {
    backgroundColor: {
      ":has([aria-expanded=true])": `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
      ":hover": `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
      ":nth-child(n)[data-state=selected]": colors.muted,
      default: "transparent",
    },
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    transitionDuration: "150ms",
    transitionProperty: "color, background-color, border-color",
  },
  table: {
    captionSide: "bottom",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    width: "100%",
  },
});

export type TableProps = Omit<React.ComponentProps<"table">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const Table = ({ className, style, ...props }: TableProps) => (
  <div data-slot="table-container" {...stylex.props(styles.container)}>
    <table
      data-slot="table"
      {...stylex.props(
        styles.table,
        customClassName(className),
        style as StyleXStyles
      )}
      {...props}
    />
  </div>
);

export type TableHeaderProps = Omit<React.ComponentProps<"thead">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const TableHeader = ({ className, style, ...props }: TableHeaderProps) => (
  <thead
    data-slot="table-header"
    {...stylex.props(
      styles.header,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type TableBodyProps = Omit<React.ComponentProps<"tbody">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const TableBody = ({ className, style, ...props }: TableBodyProps) => (
  <tbody
    data-slot="table-body"
    {...stylex.props(
      styles.body,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type TableFooterProps = Omit<React.ComponentProps<"tfoot">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const TableFooter = ({ className, style, ...props }: TableFooterProps) => (
  <tfoot
    data-slot="table-footer"
    {...stylex.props(
      styles.footer,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type TableRowProps = Omit<React.ComponentProps<"tr">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const TableRow = ({ className, style, ...props }: TableRowProps) => (
  <tr
    data-slot="table-row"
    {...stylex.props(
      styles.row,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type TableHeadProps = Omit<React.ComponentProps<"th">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const TableHead = ({ className, style, ...props }: TableHeadProps) => (
  <th
    data-slot="table-head"
    {...stylex.props(
      styles.head,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type TableCellProps = Omit<React.ComponentProps<"td">, "style"> & {
  className?: string;
  style?: StyleXStyles;
};

const TableCell = ({ className, style, ...props }: TableCellProps) => (
  <td
    data-slot="table-cell"
    {...stylex.props(
      styles.cell,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export type TableCaptionProps = Omit<
  React.ComponentProps<"caption">,
  "style"
> & {
  className?: string;
  style?: StyleXStyles;
};

const TableCaption = ({ className, style, ...props }: TableCaptionProps) => (
  <caption
    data-slot="table-caption"
    {...stylex.props(
      styles.caption,
      customClassName(className),
      style as StyleXStyles
    )}
    {...props}
  />
);

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};

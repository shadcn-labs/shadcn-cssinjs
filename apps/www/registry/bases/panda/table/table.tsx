import { css, cx } from "styled-system/css";

const wrapper = css({
  overflowX: "auto",
  position: "relative",
  width: "100%",
});

const root = css({
  borderCollapse: "collapse",
  captionSide: "bottom",
  fontSize: "0.875rem",
  width: "100%",
});

const footer = css({
  backgroundColor: "color-mix(in oklab, var(--muted) 50%, transparent)",
  borderTopColor: "border",
  borderTopStyle: "solid",
  borderTopWidth: "1px",
  fontWeight: "medium",
});

const row = css({
  _hover: {
    backgroundColor: "color-mix(in oklab, var(--muted) 50%, transparent)",
  },
  backgroundColor: "transparent",
  borderBottomColor: "border",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  transitionDuration: "100ms",
  transitionProperty: "background-color",
  transitionTimingFunction: "ease",
});

const head = css({
  color: "muted.foreground",
  fontWeight: "medium",
  height: "10",
  padding: "2",
  textAlign: "start",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
});

const cell = css({
  padding: "2",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
});

const caption = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  marginTop: "4",
});

const Table = ({ className, ...props }: React.ComponentProps<"table">) => (
  <div className={wrapper} data-slot="table-container">
    <table className={cx(root, className)} data-slot="table" {...props} />
  </div>
);

const TableHeader = (props: React.ComponentProps<"thead">) => (
  <thead data-slot="table-header" {...props} />
);

const TableBody = (props: React.ComponentProps<"tbody">) => (
  <tbody data-slot="table-body" {...props} />
);

const TableFooter = ({
  className,
  ...props
}: React.ComponentProps<"tfoot">) => (
  <tfoot
    className={cx(footer, className)}
    data-slot="table-footer"
    {...props}
  />
);

const TableRow = ({ className, ...props }: React.ComponentProps<"tr">) => (
  <tr className={cx(row, className)} data-slot="table-row" {...props} />
);

const TableHead = ({ className, ...props }: React.ComponentProps<"th">) => (
  <th className={cx(head, className)} data-slot="table-head" {...props} />
);

const TableCell = ({ className, ...props }: React.ComponentProps<"td">) => (
  <td className={cx(cell, className)} data-slot="table-cell" {...props} />
);

const TableCaption = ({
  className,
  ...props
}: React.ComponentProps<"caption">) => (
  <caption
    className={cx(caption, className)}
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

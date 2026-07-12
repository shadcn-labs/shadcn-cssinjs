import * as stylex from "@stylexjs/stylex";

import { styles } from "./table.stylex";

const Table = ({
  className,
  style,
  ...props
}: React.ComponentProps<"table">) => {
  const wrapper = stylex.props(styles.wrapper);
  const p = stylex.props(styles.root);
  return (
    <div
      className={wrapper.className}
      data-slot="table-container"
      style={wrapper.style}
    >
      <table
        className={
          [p.className, className].filter(Boolean).join(" ") || undefined
        }
        data-slot="table"
        style={{ ...p.style, ...style }}
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
}: React.ComponentProps<"tfoot">) => {
  const p = stylex.props(styles.footer);
  return (
    <tfoot
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="table-footer"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const TableRow = ({
  className,
  style,
  ...props
}: React.ComponentProps<"tr">) => {
  const p = stylex.props(styles.row);
  return (
    <tr
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="table-row"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const TableHead = ({
  className,
  style,
  ...props
}: React.ComponentProps<"th">) => {
  const p = stylex.props(styles.head);
  return (
    <th
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="table-head"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const TableCell = ({
  className,
  style,
  ...props
}: React.ComponentProps<"td">) => {
  const p = stylex.props(styles.cell);
  return (
    <td
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="table-cell"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const TableCaption = ({
  className,
  style,
  ...props
}: React.ComponentProps<"caption">) => {
  const p = stylex.props(styles.caption);
  return (
    <caption
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="table-caption"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

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

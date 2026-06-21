import { cx, x } from "@/lib/utils";

import { styles } from "./table.stylex";

const Table = ({
  className,
  style,
  ...props
}: React.ComponentProps<"table">) => {
  const wrapper = x(styles.wrapper);
  const p = x(styles.root);
  return (
    <div
      className={wrapper.className}
      data-slot="table-container"
      style={wrapper.style}
    >
      <table
        className={cx(p.className, className)}
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
  const p = x(styles.footer);
  return (
    <tfoot
      className={cx(p.className, className)}
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
  const p = x(styles.row);
  return (
    <tr
      className={cx(p.className, className)}
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
  const p = x(styles.head);
  return (
    <th
      className={cx(p.className, className)}
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
  const p = x(styles.cell);
  return (
    <td
      className={cx(p.className, className)}
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
  const p = x(styles.caption);
  return (
    <caption
      className={cx(p.className, className)}
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

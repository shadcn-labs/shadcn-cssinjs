import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const wrapper = css.compose({
  "--overflow-x": "auto",
  "--position": "relative",
  "--width": "var(---, 100%)",
});

const root = css.compose({
  "--border-collapse": "collapse",
  "--caption-side": "bottom",
  "--font-size": "0.875rem",
  "--width": "var(---, 100%)",
});

const footer = css.compose({
  "--background-color":
    "var(---, color-mix(in oklab, var(--color_muted) 50%, transparent))",
  "--border-top-color": "var(--color_border)",
  "--border-top-style": "solid",
  "--border-top-width": "var(---, 1px)",
  "--font-weight": 500,
});

const row = css.compose({
  "--background-color": "var(--color_transparent)",
  "--border-bottom-color": "var(--color_border)",
  "--border-bottom-style": "solid",
  "--border-bottom-width": "var(---, 1px)",
  "--hover_background-color":
    "var(---, color-mix(in oklab, var(--color_muted) 50%, transparent))",
  "--transition-duration": "var(---, 0.1s)",
  "--transition-property": "var(---, background-color)",
  "--transition-timing-function": "ease",
});

const head = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-weight": 500,
  "--height": 10,
  "--padding": 2,
  "--text-align": "start",
  "--vertical-align": "middle",
  "--white-space": "nowrap",
});

const cell = css.compose({
  "--padding": 2,
  "--vertical-align": "middle",
  "--white-space": "nowrap",
});

const caption = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--margin-top": 4,
});

const Table = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"table">>) => {
  const [wcn, wsx] = wrapper();
  const [cn, sx] = root();
  return (
    <div className={wcn()} data-slot="table-container" style={wsx()}>
      <table
        className={cn(className)}
        data-slot="table"
        style={sx(style)}
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
}: TokenamiStyle<React.ComponentProps<"tfoot">>) => {
  const [cn, sx] = footer();
  return (
    <tfoot
      className={cn(className)}
      data-slot="table-footer"
      style={sx(style)}
      {...props}
    />
  );
};

const TableRow = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"tr">>) => {
  const [cn, sx] = row();
  return (
    <tr
      className={cn(className)}
      data-slot="table-row"
      style={sx(style)}
      {...props}
    />
  );
};

const TableHead = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"th">>) => {
  const [cn, sx] = head();
  return (
    <th
      className={cn(className)}
      data-slot="table-head"
      style={sx(style)}
      {...props}
    />
  );
};

const TableCell = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"td">>) => {
  const [cn, sx] = cell();
  return (
    <td
      className={cn(className)}
      data-slot="table-cell"
      style={sx(style)}
      {...props}
    />
  );
};

const TableCaption = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"caption">>) => {
  const [cn, sx] = caption();
  return (
    <caption
      className={cn(className)}
      data-slot="table-caption"
      style={sx(style)}
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

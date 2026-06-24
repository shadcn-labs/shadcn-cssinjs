import { css, cx } from "styled-system/css";

const label = css({
  alignItems: "center",
  color: "foreground",
  display: "inline-flex",
  fontSize: "0.875rem",
  fontWeight: "medium",
  gap: "2",
  lineHeight: "1",
  userSelect: "none",
});

const Label = ({ className, ...props }: React.ComponentProps<"label">) => (
  // oxlint-disable-next-line label-has-associated-control -- htmlFor/children supplied by consumer
  <label className={cx(label, className)} data-slot="label" {...props} />
);

export { Label };

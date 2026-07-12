import { css, cx } from "styled-system/css";

const input = css({
  "&::file-selector-button": {
    backgroundColor: "transparent",
    borderWidth: "0",
    color: "foreground",
    fontSize: "0.875rem",
    fontWeight: "medium",
    marginInlineEnd: "2",
  },
  _disabled: { cursor: "not-allowed", opacity: "0.5" },
  _focusVisible: {
    borderColor: "ring",
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  _placeholder: { color: "muted.foreground" },
  _selection: {
    backgroundColor: "primary",
    color: "primary.foreground",
  },
  backgroundColor: "transparent",
  borderColor: "input",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  color: "foreground",
  cursor: "auto",
  display: "flex",
  fontSize: "0.875rem",
  height: "9",
  lineHeight: "1.25rem",
  minWidth: "0",
  outlineStyle: "none",
  paddingBlock: "1",
  paddingInline: "3",
  transitionDuration: "150ms",
  transitionProperty: "color, box-shadow, border-color",
  transitionTimingFunction: "ease-in-out",
  width: "100%",
});

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => (
  <input
    className={cx(input, className)}
    data-slot="input"
    type={type}
    {...props}
  />
);

export { Input };

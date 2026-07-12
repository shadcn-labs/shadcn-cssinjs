import { css, cx } from "styled-system/css";

const textarea = css({
  _disabled: { cursor: "not-allowed", opacity: "0.5" },
  _focusVisible: {
    borderColor: "ring",
    boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
  },
  _placeholder: { color: "muted.foreground" },
  backgroundColor: "transparent",
  borderColor: "input",
  borderRadius: "md",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  color: "foreground",
  cursor: "auto",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  minHeight: "16",
  outlineStyle: "none",
  paddingBlock: "2",
  paddingInline: "3",
  transitionDuration: "150ms",
  transitionProperty: "color, box-shadow, border-color",
  transitionTimingFunction: "ease-in-out",
  width: "100%",
});

const Textarea = ({
  className,
  ...props
}: React.ComponentProps<"textarea">) => (
  <textarea
    className={cx(textarea, className)}
    data-slot="textarea"
    {...props}
  />
);

export { Textarea };

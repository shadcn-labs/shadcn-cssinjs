import { css, cx } from "styled-system/css";

const kbd = css({
  alignItems: "center",
  backgroundColor: "color-mix(in oklab, currentColor 5%, transparent)",
  borderRadius: "sm",
  boxShadow:
    "inset 0 -1px 2px 0 color-mix(in oklab, currentColor 10%, transparent)",
  color: "muted.foreground",
  display: "inline-flex",
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  fontWeight: "normal",
  gap: "1",
  height: "1.25rem",
  justifyContent: "center",
  lineHeight: "1rem",
  minWidth: "1.25rem",
  paddingInline: "1",
  pointerEvents: "none",
  userSelect: "none",
  width: "fit-content",
});

const kbdGroup = css({
  alignItems: "center",
  display: "inline-flex",
  gap: "1",
});

const Kbd = ({ className, ...props }: React.ComponentProps<"kbd">) => (
  <kbd className={cx(kbd, className)} data-slot="kbd" {...props} />
);

const KbdGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(kbdGroup, className)} data-slot="kbd-group" {...props} />
);

export { Kbd, KbdGroup };

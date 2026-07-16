import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";

import { colors, radius } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  icon: {
    color: colors.mutedForeground,
    height: "1rem",
    insetInlineEnd: "0.875rem",
    opacity: 0.5,
    pointerEvents: "none",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    userSelect: "none",
    width: "1rem",
  },
  iconSm: {
    height: "0.875rem",
    insetInlineEnd: "0.625rem",
    width: "0.875rem",
  },
  select: {
    appearance: "none",
    backgroundColor: "transparent",
    borderColor: { ":focus-visible": colors.ring, default: colors.input },
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    color: colors.foreground,
    cursor: { ":disabled": "not-allowed", default: "pointer" },
    fontSize: "0.875rem",
    height: "2.25rem",
    lineHeight: "1.25rem",
    minWidth: 0,
    opacity: { ":disabled": 0.5, default: 1 },
    outline: "none",
    paddingBottom: "0.5rem",
    paddingInlineEnd: "2.25rem",
    paddingInlineStart: "0.75rem",
    paddingTop: "0.5rem",
    transition:
      "color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out",
    width: "100%",
  },
  selectSm: {
    borderRadius: radius.sm,
    fontSize: "0.75rem",
    height: "2rem",
    paddingBottom: "0.25rem",
    paddingInlineEnd: "1.75rem",
    paddingInlineStart: "0.625rem",
    paddingTop: "0.25rem",
  },
  wrapper: {
    position: "relative",
    width: "fit-content",
  },
});

const NativeSelect = ({
  className,
  style,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
}) => {
  const select = stylex.props(styles.select, size === "sm" && styles.selectSm);
  const icon = stylex.props(styles.icon, size === "sm" && styles.iconSm);
  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      {...stylex.props(
        styles.wrapper,
        customClassName(className),
        style as StyleXStyles
      )}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={select.className}
        style={select.style}
        {...props}
      />
      <ChevronDownIcon
        aria-hidden="true"
        data-slot="native-select-icon"
        {...icon}
      />
    </div>
  );
};

const NativeSelectOption = (props: React.ComponentProps<"option">) => (
  <option data-slot="native-select-option" {...props} />
);

const NativeSelectOptGroup = (props: React.ComponentProps<"optgroup">) => (
  <optgroup data-slot="native-select-optgroup" {...props} />
);

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };

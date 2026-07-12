import { ChevronDownIcon } from "lucide-react";
import { css, cva, cx } from "styled-system/css";

const wrapper = css({
  position: "relative",
  width: "fit-content",
});

const select = cva({
  base: {
    _disabled: { cursor: "not-allowed", opacity: "0.5" },
    _focusVisible: {
      borderColor: "ring",
      boxShadow: "0 0 0 3px color-mix(in oklab, var(--ring) 50%, transparent)",
    },
    appearance: "none",
    backgroundColor: "transparent",
    borderColor: "input",
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    color: "foreground",
    cursor: "pointer",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    minWidth: "0",
    outlineStyle: "none",
    transitionDuration: "150ms",
    transitionProperty: "color, box-shadow, border-color",
    transitionTimingFunction: "ease-in-out",
    width: "100%",
  },
  defaultVariants: { size: "default" },
  variants: {
    size: {
      default: {
        height: "9",
        paddingBlock: "2",
        paddingInlineEnd: "9",
        paddingInlineStart: "3",
      },
      sm: {
        borderRadius: "sm",
        fontSize: "0.75rem",
        height: "8",
        paddingBlock: "1",
        paddingInlineEnd: "7",
        paddingInlineStart: "2.5",
      },
    },
  },
});

const icon = cva({
  base: {
    color: "muted.foreground",
    opacity: "0.5",
    pointerEvents: "none",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    userSelect: "none",
  },
  defaultVariants: { size: "default" },
  variants: {
    size: {
      default: { height: "4", insetInlineEnd: "3.5", width: "4" },
      sm: { height: "3.5", insetInlineEnd: "2.5", width: "3.5" },
    },
  },
});

const NativeSelect = ({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & {
  className?: string;
  size?: "sm" | "default";
}) => (
  <div
    className={cx(wrapper, className)}
    data-size={size}
    data-slot="native-select-wrapper"
  >
    <select
      className={select({ size })}
      data-size={size}
      data-slot="native-select"
      {...props}
    />
    <ChevronDownIcon
      aria-hidden="true"
      className={icon({ size })}
      data-slot="native-select-icon"
    />
  </div>
);

const NativeSelectOption = (props: React.ComponentProps<"option">) => (
  <option data-slot="native-select-option" {...props} />
);

const NativeSelectOptGroup = (props: React.ComponentProps<"optgroup">) => (
  <optgroup data-slot="native-select-optgroup" {...props} />
);

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };

import * as stylex from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";

import { styles } from "./native-select.stylex";

const NativeSelect = ({
  className,
  style,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
}) => {
  const wrapper = stylex.props(styles.wrapper);
  const select = stylex.props(styles.select, size === "sm" && styles.selectSm);
  const icon = stylex.props(styles.icon, size === "sm" && styles.iconSm);
  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      className={
        [wrapper.className, className].filter(Boolean).join(" ") || undefined
      }
      style={{ ...wrapper.style, ...style }}
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

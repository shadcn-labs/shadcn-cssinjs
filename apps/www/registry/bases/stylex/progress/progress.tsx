"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import * as stylex from "@stylexjs/stylex";

import { styles } from "./progress.stylex";

const Progress = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, "className"> & {
  className?: string;
}) => {
  const wrapper = stylex.props(styles.rootWrapper);
  return (
    <ProgressPrimitive.Root
      className={
        [wrapper.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="progress"
      style={{ ...wrapper.style, ...style }}
      {...props}
    >
      {children}
      <ProgressPrimitive.Track
        className={stylex.props(styles.root).className}
        data-slot="progress-track"
      >
        <ProgressPrimitive.Indicator
          className={stylex.props(styles.indicator).className}
          data-slot="progress-indicator"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
};

const ProgressLabel = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Label>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.label);
  return (
    <ProgressPrimitive.Label
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="progress-label"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const ProgressValue = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Value>, "className"> & {
  className?: string;
}) => {
  const p = stylex.props(styles.value);
  return (
    <ProgressPrimitive.Value
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="progress-value"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Progress, ProgressLabel, ProgressValue };

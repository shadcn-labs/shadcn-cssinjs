"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cx, x } from "@/lib/utils";

import { styles } from "./progress.stylex";

const Progress = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, "className"> & {
  className?: string;
}) => {
  const wrapper = x(styles.rootWrapper);
  return (
    <ProgressPrimitive.Root
      className={cx(wrapper.className, className)}
      data-slot="progress"
      style={{ ...wrapper.style, ...style }}
      {...props}
    >
      {children}
      <ProgressPrimitive.Track
        className={x(styles.root).className}
        data-slot="progress-track"
      >
        <ProgressPrimitive.Indicator
          className={x(styles.indicator).className}
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
  const p = x(styles.label);
  return (
    <ProgressPrimitive.Label
      className={cx(p.className, className)}
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
  const p = x(styles.value);
  return (
    <ProgressPrimitive.Value
      className={cx(p.className, className)}
      data-slot="progress-value"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

export { Progress, ProgressLabel, ProgressValue };

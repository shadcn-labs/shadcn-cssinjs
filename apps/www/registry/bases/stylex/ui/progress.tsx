"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";

const styles = stylex.create({
  indicator: {
    backgroundColor: colors.primary,
    height: "100%",
    transition: "all 0.2s ease-in-out",
    width: "100%",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 500,
  },
  root: {
    backgroundColor: `color-mix(in oklab, ${colors.primary} 20%, transparent)`,
    borderRadius: "9999px",
    height: "0.5rem",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  rootWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: "100%",
  },
  track: {
    height: "100%",
    width: "100%",
  },
  value: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
  },
});

const Progress = ({
  className,
  style,
  children,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, "className"> & {
  className?: string;
}) => (
  <ProgressPrimitive.Root
    {...stylex.props(
      styles.rootWrapper,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="progress"
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

const ProgressLabel = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Label>, "className"> & {
  className?: string;
}) => (
  <ProgressPrimitive.Label
    {...stylex.props(
      styles.label,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="progress-label"
    {...props}
  />
);

const ProgressValue = ({
  className,
  style,
  ...props
}: Omit<React.ComponentProps<typeof ProgressPrimitive.Value>, "className"> & {
  className?: string;
}) => (
  <ProgressPrimitive.Value
    {...stylex.props(
      styles.value,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="progress-value"
    {...props}
  />
);

export { Progress, ProgressLabel, ProgressValue };

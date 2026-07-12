"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import type { TokenamiStyle } from "@tokenami/css";

import { css } from "@/lib/tokenami";

const rootWrapper = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 2,
  "--width": "var(---, 100%)",
});

const track = css.compose({
  "--background-color":
    "var(---, color-mix(in oklab, var(--color_primary) 20%, transparent))",
  "--border-radius": "var(--radii_full)",
  "--height": 2,
  "--overflow": "hidden",
  "--position": "relative",
  "--width": "var(---, 100%)",
});

const indicator = css.compose({
  "--background-color": "var(--color_primary)",
  "--height": "var(---, 100%)",
  "--transition-duration": "var(---, 0.2s)",
  "--transition-property": "var(---, all)",
  "--transition-timing-function": "ease-in-out",
  "--width": "var(---, 100%)",
});

const label = css.compose({
  "--font-size": "0.875rem",
  "--font-weight": 500,
});

const value = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
});

const Progress = ({
  className,
  style,
  children,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ProgressPrimitive.Root>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = rootWrapper();
  const [tcn, tsx] = track();
  const [icn, isx] = indicator();
  return (
    <ProgressPrimitive.Root
      className={cn(className)}
      data-slot="progress"
      style={sx(style)}
      {...props}
    >
      {children}
      <ProgressPrimitive.Track
        className={tcn()}
        data-slot="progress-track"
        style={tsx()}
      >
        <ProgressPrimitive.Indicator
          className={icn()}
          data-slot="progress-indicator"
          style={isx()}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
};

const ProgressLabel = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ProgressPrimitive.Label>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = label();
  return (
    <ProgressPrimitive.Label
      className={cn(className)}
      data-slot="progress-label"
      style={sx(style)}
      {...props}
    />
  );
};

const ProgressValue = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<
    React.ComponentProps<typeof ProgressPrimitive.Value>,
    "className" | "style"
  >
> & { className?: string }) => {
  const [cn, sx] = value();
  return (
    <ProgressPrimitive.Value
      className={cn(className)}
      data-slot="progress-value"
      style={sx(style)}
      {...props}
    />
  );
};

export { Progress, ProgressLabel, ProgressValue };

"use client";

import { OTPFieldPreview as OtpField } from "@base-ui/react/otp-field";
import type { TokenamiStyle } from "@tokenami/css";
import { MinusIcon } from "lucide-react";

import { css } from "@/lib/tokenami";

const root = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--gap": 2,
});

const group = css.compose({
  "--background-color": "var(--color_border)",
  "--border-radius": "var(--radii_md)",
  "--display": "inline-flex",
  "--gap": "var(---, 1px)",
  "--overflow": "hidden",
});

const slot = css.compose({
  "--background-color": "var(--color_background)",
  "--border-width": "var(---, 0)",
  "--color": "var(--color_foreground)",
  "--focus_box-shadow": "var(---, inset 0 0 0 2px var(--color_ring))",
  "--font-size": "0.875rem",
  "--height": 9,
  "--outline-style": "none",
  "--text-align": "center",
  "--transition-duration": "var(---, 0.15s)",
  "--transition-property": "var(---, box-shadow)",
  "--transition-timing-function": "ease-in-out",
  "--width": 9,
});

const separator = css.compose({
  "--align-items": "center",
  "--color": "var(--color_muted-foreground)",
  "--display": "flex",
});

const InputOTP = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof OtpField.Root>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = root();
  return (
    <OtpField.Root
      className={cn(className)}
      data-slot="input-otp"
      style={sx(style)}
      {...props}
    />
  );
};

const InputOTPGroup = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = group();
  return (
    <div
      className={cn(className)}
      data-slot="input-otp-group"
      style={sx(style)}
      {...props}
    />
  );
};

const InputOTPSlot = ({
  className,
  style,
  ...props
}: TokenamiStyle<
  Omit<React.ComponentProps<typeof OtpField.Input>, "className" | "style">
> & { className?: string }) => {
  const [cn, sx] = slot();
  return (
    <OtpField.Input
      className={cn(className)}
      data-slot="input-otp-slot"
      style={sx(style)}
      {...props}
    />
  );
};

const InputOTPSeparator = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = separator();
  return (
    <div
      className={cn(className)}
      data-slot="input-otp-separator"
      role="separator"
      style={sx(style)}
      {...props}
    >
      <MinusIcon size={16} />
    </div>
  );
};

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };

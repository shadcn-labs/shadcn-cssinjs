"use client";

import type { TokenamiStyle } from "@tokenami/css";
import { useMemo } from "react";

import { css } from "@/lib/tokenami";

import { Label } from "../label/label";
import { Separator } from "../separator/separator";

const set = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 6,
});

const legend = css.compose({
  "--font-weight": 500,
  "--margin-bottom": 3,

  variants: {
    variant: {
      label: { "--font-size": "0.875rem" },
      legend: { "--font-size": "1rem" },
    },
  },
});

const group = css.compose({
  "--display": "flex",
  "--flex-direction": "column",
  "--gap": 7,
  "--width": "var(---, 100%)",
});

const fieldBase = css.compose({
  "--display": "flex",
  "--gap": 3,
  "--width": "var(---, 100%)",

  variants: {
    orientation: {
      horizontal: {
        "--align-items": "center",
        "--flex-direction": "row",
      },
      responsive: {
        "--flex-direction": "column",
        "--md_align-items": "center",
        "--md_flex-direction": "row",
      },
      vertical: { "--flex-direction": "column" },
    },
  },
});

const content = css.compose({
  "--display": "flex",
  "--flex": "var(---, 1)",
  "--flex-direction": "column",
  "--gap": 1.5,
  "--line-height": "var(---, 1.375)",
});

const label = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--gap": 2,
  "--line-height": "var(---, 1.375)",
  "--width": "var(---, fit-content)",
});

const title = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--font-weight": 500,
  "--gap": 2,
  "--line-height": "var(---, 1.375)",
  "--width": "var(---, fit-content)",
});

const description = css.compose({
  "--color": "var(--color_muted-foreground)",
  "--font-size": "0.875rem",
  "--font-weight": 400,
  "--line-height": "var(---, 1.5)",
});

const error = css.compose({
  "--color": "var(--color_destructive)",
  "--font-size": "0.875rem",
  "--font-weight": 400,
});

const separator = css.compose({
  "--align-items": "center",
  "--display": "flex",
  "--font-size": "0.875rem",
  "--height": 5,
  "--justify-content": "center",
  "--margin-block": -2,
  "--position": "relative",
});

const separatorLine = css.compose({
  "--inset-inline": 0,
  "--position": "absolute",
  "--top": "var(---, 50%)",
});

const separatorContent = css.compose({
  "--background-color": "var(--color_background)",
  "--color": "var(--color_muted-foreground)",
  "--display": "block",
  "--margin-inline": "var(---, auto)",
  "--padding-inline": 2,
  "--position": "relative",
  "--width": "var(---, fit-content)",
});

type FieldOrientation = "vertical" | "horizontal" | "responsive";

const FieldSet = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"fieldset">>) => {
  const [cn, sx] = set();
  return (
    <fieldset
      className={cn(className)}
      data-slot="field-set"
      style={sx(style)}
      {...props}
    />
  );
};

const FieldLegend = ({
  className,
  style,
  variant = "legend",
  ...props
}: TokenamiStyle<React.ComponentProps<"legend">> & {
  variant?: "legend" | "label";
}) => {
  const [cn, sx] = legend({ variant });
  return (
    <legend
      className={cn(className)}
      data-slot="field-legend"
      data-variant={variant}
      style={sx(style)}
      {...props}
    />
  );
};

const FieldGroup = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = group();
  return (
    <div
      className={cn(className)}
      data-slot="field-group"
      style={sx(style)}
      {...props}
    />
  );
};

const Field = ({
  className,
  style,
  orientation = "vertical",
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & {
  orientation?: FieldOrientation;
}) => {
  const [cn, sx] = fieldBase({ orientation });
  return (
    <div
      className={cn(className)}
      data-orientation={orientation}
      data-slot="field"
      role="group"
      style={sx(style)}
      {...props}
    />
  );
};

const FieldContent = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = content();
  return (
    <div
      className={cn(className)}
      data-slot="field-content"
      style={sx(style)}
      {...props}
    />
  );
};

const FieldLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof Label>) => {
  const [cn] = label();
  return <Label className={cn(className)} data-slot="field-label" {...props} />;
};

const FieldTitle = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = title();
  return (
    <div
      className={cn(className)}
      data-slot="field-label"
      style={sx(style)}
      {...props}
    />
  );
};

const FieldDescription = ({
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"p">>) => {
  const [cn, sx] = description();
  return (
    <p
      className={cn(className)}
      data-slot="field-description"
      style={sx(style)}
      {...props}
    />
  );
};

const FieldSeparator = ({
  children,
  className,
  style,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">>) => {
  const [cn, sx] = separator();
  const [lcn] = separatorLine();
  const [ccn, csx] = separatorContent();
  return (
    <div
      className={cn(className)}
      data-content={Boolean(children)}
      data-slot="field-separator"
      style={sx(style)}
      {...props}
    >
      <Separator className={lcn()} />
      {children ? (
        <span
          className={ccn()}
          data-slot="field-separator-content"
          style={csx()}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
};

const FieldError = ({
  className,
  style,
  children,
  errors,
  ...props
}: TokenamiStyle<React.ComponentProps<"div">> & {
  errors?: ({ message?: string } | undefined)[];
}) => {
  const errorContent = useMemo(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((err) => [err?.message, err])).values(),
    ];
    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message;
    }
    return (
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {uniqueErrors.map((err) =>
          err?.message ? <li key={err.message}>{err.message}</li> : null
        )}
      </ul>
    );
  }, [children, errors]);

  if (!errorContent) {
    return null;
  }

  const [cn, sx] = error();
  return (
    <div
      className={cn(className)}
      data-slot="field-error"
      role="alert"
      style={sx(style)}
      {...props}
    >
      {errorContent}
    </div>
  );
};

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};

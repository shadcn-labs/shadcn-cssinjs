"use client";

import { useMemo } from "react";
import { css, cva, cx } from "styled-system/css";

import { Label } from "../label/label";
import { Separator } from "../separator/separator";

const set = css({
  display: "flex",
  flexDirection: "column",
  gap: "6",
});

const legend = cva({
  base: {
    fontWeight: "medium",
    marginBottom: "3",
  },
  defaultVariants: { variant: "legend" },
  variants: {
    variant: {
      label: { fontSize: "0.875rem" },
      legend: { fontSize: "1rem" },
    },
  },
});

const group = css({
  display: "flex",
  flexDirection: "column",
  gap: "7",
  width: "100%",
});

const fieldBase = cva({
  base: {
    display: "flex",
    gap: "3",
    width: "100%",
  },
  defaultVariants: { orientation: "vertical" },
  variants: {
    orientation: {
      horizontal: { alignItems: "center", flexDirection: "row" },
      responsive: {
        flexDirection: "column",
        md: { alignItems: "center", flexDirection: "row" },
      },
      vertical: { flexDirection: "column" },
    },
  },
});

const content = css({
  display: "flex",
  flex: "1",
  flexDirection: "column",
  gap: "1.5",
  lineHeight: "1.375",
});

const label = css({
  alignItems: "center",
  display: "flex",
  gap: "2",
  lineHeight: "1.375",
  width: "fit-content",
});

const title = css({
  alignItems: "center",
  display: "flex",
  fontSize: "0.875rem",
  fontWeight: "medium",
  gap: "2",
  lineHeight: "1.375",
  width: "fit-content",
});

const description = css({
  color: "muted.foreground",
  fontSize: "0.875rem",
  fontWeight: "normal",
  lineHeight: "1.5",
});

const error = css({
  color: "destructive",
  fontSize: "0.875rem",
  fontWeight: "normal",
});

const separator = css({
  alignItems: "center",
  display: "flex",
  fontSize: "0.875rem",
  height: "5",
  justifyContent: "center",
  marginBlock: "-2",
  position: "relative",
});

const separatorLine = css({
  insetInline: "0",
  position: "absolute",
  top: "50%",
});

const separatorContent = css({
  backgroundColor: "background",
  color: "muted.foreground",
  display: "block",
  marginInline: "auto",
  paddingInline: "2",
  position: "relative",
  width: "fit-content",
});

type FieldOrientation = "vertical" | "horizontal" | "responsive";

const FieldSet = ({
  className,
  ...props
}: React.ComponentProps<"fieldset">) => (
  <fieldset className={cx(set, className)} data-slot="field-set" {...props} />
);

const FieldLegend = ({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) => (
  <legend
    className={cx(legend({ variant }), className)}
    data-slot="field-legend"
    data-variant={variant}
    {...props}
  />
);

const FieldGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(group, className)} data-slot="field-group" {...props} />
);

const Field = ({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & { orientation?: FieldOrientation }) => (
  <div
    className={cx(fieldBase({ orientation }), className)}
    data-orientation={orientation}
    data-slot="field"
    role="group"
    {...props}
  />
);

const FieldContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={cx(content, className)}
    data-slot="field-content"
    {...props}
  />
);

const FieldLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof Label>) => (
  <Label className={cx(label, className)} data-slot="field-label" {...props} />
);

const FieldTitle = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(title, className)} data-slot="field-label" {...props} />
);

const FieldDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => (
  <p
    className={cx(description, className)}
    data-slot="field-description"
    {...props}
  />
);

const FieldSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(separator, className)}
    data-content={Boolean(children)}
    data-slot="field-separator"
    {...props}
  >
    <Separator className={separatorLine} />
    {children ? (
      <span className={separatorContent} data-slot="field-separator-content">
        {children}
      </span>
    ) : null}
  </div>
);

const FieldError = ({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
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

  return (
    <div
      className={cx(error, className)}
      data-slot="field-error"
      role="alert"
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

"use client";

import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { useMemo } from "react";

import { Label } from "../label/label";
import { Separator } from "../separator/separator";
import { styles } from "./field.stylex";

type FieldOrientation = "vertical" | "horizontal" | "responsive";

const orientationStyles: Record<FieldOrientation, StyleXStyles> = {
  horizontal: styles.horizontal,
  responsive: styles.responsive,
  vertical: styles.vertical,
};

const FieldSet = ({
  className,
  style,
  ...props
}: React.ComponentProps<"fieldset">) => {
  const p = stylex.props(styles.set);
  return (
    <fieldset
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-set"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const FieldLegend = ({
  className,
  style,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) => {
  const p = stylex.props(
    styles.legend,
    variant === "label" ? styles.legendLabel : styles.legendLegend
  );
  return (
    <legend
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-legend"
      data-variant={variant}
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const FieldGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.group);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const Field = ({
  className,
  style,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & { orientation?: FieldOrientation }) => {
  const p = stylex.props(styles.fieldBase, orientationStyles[orientation]);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-orientation={orientation}
      data-slot="field"
      role="group"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const FieldContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.content);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-content"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const FieldLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof Label>) => {
  const p = stylex.props(styles.label);
  return (
    <Label
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-label"
      {...props}
    />
  );
};

const FieldTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.title);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-label"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const FieldDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"p">) => {
  const p = stylex.props(styles.description);
  return (
    <p
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-description"
      style={{ ...p.style, ...style }}
      {...props}
    />
  );
};

const FieldSeparator = ({
  children,
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const p = stylex.props(styles.separator);
  const line = stylex.props(styles.separatorLine);
  const content = stylex.props(styles.separatorContent);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-content={Boolean(children)}
      data-slot="field-separator"
      style={{ ...p.style, ...style }}
      {...props}
    >
      <Separator className={line.className} style={line.style} />
      {children ? (
        <span
          className={content.className}
          data-slot="field-separator-content"
          style={content.style}
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
}: React.ComponentProps<"div"> & {
  errors?: ({ message?: string } | undefined)[];
}) => {
  const content = useMemo(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];
    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message;
    }
    return (
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {uniqueErrors.map((error) =>
          error?.message ? <li key={error.message}>{error.message}</li> : null
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  const p = stylex.props(styles.error);
  return (
    <div
      className={
        [p.className, className].filter(Boolean).join(" ") || undefined
      }
      data-slot="field-error"
      role="alert"
      style={{ ...p.style, ...style }}
      {...props}
    >
      {content}
    </div>
  );
};

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};

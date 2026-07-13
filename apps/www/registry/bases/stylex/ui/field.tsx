"use client";

import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { useMemo } from "react";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";
import { customClassName } from "@/registry/bases/stylex/lib/utils.stylex";
import { Label } from "@/registry/bases/stylex/ui/label";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "0.375rem",
    lineHeight: 1.375,
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  error: {
    color: colors.destructive,
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  fieldBase: {
    display: "flex",
    gap: "0.75rem",
    width: "100%",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: "1.75rem",
    width: "100%",
  },
  horizontal: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    lineHeight: 1.375,
    width: "fit-content",
  },
  legend: {
    fontWeight: 500,
    marginBottom: "0.75rem",
  },
  legendLabel: {
    fontSize: "0.875rem",
  },
  legendLegend: {
    fontSize: "1rem",
  },
  responsive: {
    alignItems: { "@media (min-width: 768px)": "center", default: null },
    flexDirection: { "@media (min-width: 768px)": "row", default: "column" },
  },
  separator: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.875rem",
    height: "1.25rem",
    justifyContent: "center",
    marginBlock: "-0.5rem",
    position: "relative",
  },
  separatorContent: {
    backgroundColor: colors.background,
    color: colors.mutedForeground,
    display: "block",
    marginInline: "auto",
    paddingInline: "0.5rem",
    position: "relative",
    width: "fit-content",
  },
  separatorLine: {
    insetInline: 0,
    position: "absolute",
    top: "50%",
  },
  set: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  title: {
    alignItems: "center",
    display: "flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.5rem",
    lineHeight: 1.375,
    width: "fit-content",
  },
  vertical: {
    flexDirection: "column",
  },
});

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
}: React.ComponentProps<"fieldset">) => (
  <fieldset
    {...stylex.props(
      styles.set,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="field-set"
    {...props}
  />
);

const FieldLegend = ({
  className,
  style,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) => (
  <legend
    {...stylex.props(
      styles.legend,
      variant === "label" ? styles.legendLabel : styles.legendLegend,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="field-legend"
    data-variant={variant}
    {...props}
  />
);

const FieldGroup = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.group,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="field-group"
    {...props}
  />
);

const Field = ({
  className,
  style,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & { orientation?: FieldOrientation }) => (
  <div
    {...stylex.props(
      styles.fieldBase,
      orientationStyles[orientation],
      customClassName(className),
      style as StyleXStyles
    )}
    data-orientation={orientation}
    data-slot="field"
    role="group"
    {...props}
  />
);

const FieldContent = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.content,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="field-content"
    {...props}
  />
);

const FieldLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof Label>) => (
  <Label
    {...stylex.props(styles.label, customClassName(className))}
    data-slot="field-label"
    {...props}
  />
);

const FieldTitle = ({
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    {...stylex.props(
      styles.title,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="field-label"
    {...props}
  />
);

const FieldDescription = ({
  className,
  style,
  ...props
}: React.ComponentProps<"p">) => (
  <p
    {...stylex.props(
      styles.description,
      customClassName(className),
      style as StyleXStyles
    )}
    data-slot="field-description"
    {...props}
  />
);

const FieldSeparator = ({
  children,
  className,
  style,
  ...props
}: React.ComponentProps<"div">) => {
  const line = stylex.props(styles.separatorLine);
  const content = stylex.props(styles.separatorContent);
  return (
    <div
      {...stylex.props(
        styles.separator,
        customClassName(className),
        style as StyleXStyles
      )}
      data-content={Boolean(children)}
      data-slot="field-separator"
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
  return (
    <div
      {...stylex.props(
        styles.error,
        customClassName(className),
        style as StyleXStyles
      )}
      data-slot="field-error"
      role="alert"
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

import { cva, cx } from "styled-system/css";
import type { RecipeVariantProps } from "styled-system/css";

const badge = cva({
  base: {
    alignItems: "center",
    borderColor: "transparent",
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "inline-flex",
    flexShrink: "0",
    fontSize: "0.75rem",
    fontWeight: "semibold",
    gap: "1",
    justifyContent: "center",
    lineHeight: "1rem",
    outlineStyle: "none",
    overflow: "hidden",
    paddingBlock: "0.125rem",
    paddingInline: "2",
    transitionDuration: "150ms",
    transitionProperty: "color, box-shadow",
    transitionTimingFunction: "ease-in-out",
    whiteSpace: "nowrap",
    width: "fit-content",
  },
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "primary",
        color: "primary.foreground",
      },
      destructive: {
        backgroundColor: "destructive",
        color: "primary.foreground",
      },
      outline: {
        borderColor: "border",
        color: "foreground",
      },
      secondary: {
        backgroundColor: "secondary",
        color: "secondary.foreground",
      },
    },
  },
});

type BadgeVariants = NonNullable<RecipeVariantProps<typeof badge>>;

const Badge = ({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"span"> & BadgeVariants) => (
  <span
    className={cx(badge({ variant }), className)}
    data-slot="badge"
    data-variant={variant}
    {...props}
  />
);

export { Badge };

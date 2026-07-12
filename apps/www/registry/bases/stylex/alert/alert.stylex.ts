import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  action: {
    alignSelf: "center",
    gridColumnStart: "3",
    gridRowEnd: "3",
    gridRowStart: "1",
    justifySelf: "end",
    marginInlineStart: "1rem",
  },
  base: {
    alignItems: "start",
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: "1px",
    columnGap: 0,
    display: "grid",
    fontSize: "0.875rem",
    gridTemplateColumns: "0 1fr",
    lineHeight: "1.25rem",
    paddingBottom: "0.75rem",
    paddingInline: "1rem",
    paddingTop: "0.75rem",
    position: "relative",
    rowGap: "0.125rem",
    width: "100%",
  },
  default: {
    backgroundColor: colors.card,
    color: colors.cardForeground,
  },
  description: {
    color: colors.mutedForeground,
    display: "grid",
    fontSize: "0.875rem",
    justifyItems: "start",
    lineHeight: "1.25rem",
    rowGap: "0.25rem",
  },
  descriptionWithIcon: {
    gridColumnStart: "2",
  },
  destructive: {
    backgroundColor: colors.card,
    color: colors.destructive,
  },
  title: {
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    display: "-webkit-box",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    minHeight: "1rem",
    overflow: "hidden",
  },
  titleWithIcon: {
    gridColumnStart: "2",
  },
  withIcon: {
    columnGap: "0.75rem",
    gridTemplateColumns: "1rem 1fr",
  },
});

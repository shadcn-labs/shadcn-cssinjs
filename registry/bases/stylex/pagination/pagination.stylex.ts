import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "0.25rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  ellipsis: {
    alignItems: "center",
    display: "flex",
    height: "2.25rem",
    justifyContent: "center",
    width: "2.25rem",
  },
  link: {
    alignItems: "center",
    backgroundColor: { ":hover": colors.accent, default: "transparent" },
    borderColor: "transparent",
    borderRadius: radius.md,
    borderStyle: "solid",
    borderWidth: "1px",
    color: { ":hover": colors.accentForeground, default: colors.foreground },
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "0.875rem",
    fontWeight: 500,
    gap: "0.25rem",
    height: "2.25rem",
    justifyContent: "center",
    minWidth: "2.25rem",
    outline: "none",
    paddingInline: "0.625rem",
    textDecorationLine: "none",
    transition: "background-color 0.1s ease, color 0.1s ease",
  },
  linkActive: {
    backgroundColor: colors.background,
    borderColor: colors.input,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    marginInline: "auto",
    width: "100%",
  },
});

import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  ellipsis: {
    alignItems: "center",
    display: "flex",
    height: "1.25rem",
    justifyContent: "center",
    width: "2.25rem",
  },
  item: {
    alignItems: "center",
    display: "inline-flex",
    gap: "0.375rem",
  },
  link: {
    color: { ":hover": colors.foreground, default: colors.mutedForeground },
    textDecorationLine: "none",
    transition: "color 0.15s ease-in-out",
  },
  list: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.875rem",
    gap: "0.375rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    wordBreak: "break-word",
  },
  page: {
    color: colors.foreground,
    fontWeight: 400,
  },
  separator: {
    alignItems: "center",
    display: "inline-flex",
  },
});

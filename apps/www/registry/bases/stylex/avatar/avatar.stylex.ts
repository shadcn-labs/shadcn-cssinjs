import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  badge: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: "9999px",
    bottom: 0,
    boxShadow: `0 0 0 2px ${colors.background}`,
    color: colors.primaryForeground,
    display: "inline-flex",
    height: "0.625rem",
    insetInlineEnd: 0,
    justifyContent: "center",
    position: "absolute",
    userSelect: "none",
    width: "0.625rem",
    zIndex: 10,
  },
  fallback: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    color: colors.mutedForeground,
    display: "flex",
    fontSize: "0.875rem",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  fallbackSm: {
    fontSize: "0.75rem",
  },
  group: {
    display: "flex",
  },
  groupCount: {
    alignItems: "center",
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    boxShadow: `0 0 0 2px ${colors.background}`,
    color: colors.mutedForeground,
    display: "flex",
    flexShrink: 0,
    fontSize: "0.875rem",
    height: "2rem",
    justifyContent: "center",
    position: "relative",
    width: "2rem",
  },
  image: {
    aspectRatio: "1 / 1",
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  root: {
    borderRadius: "9999px",
    display: "flex",
    flexShrink: 0,
    height: "2rem",
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
    width: "2rem",
  },
  rootLg: {
    height: "2.5rem",
    width: "2.5rem",
  },
  rootSm: {
    height: "1.5rem",
    width: "1.5rem",
  },
});

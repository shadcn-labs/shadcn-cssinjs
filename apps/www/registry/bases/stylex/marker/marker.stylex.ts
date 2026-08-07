import * as stylex from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";

export const styles = stylex.create({
  border: {
    borderBottom: `1px solid ${colors.border}`,
    paddingBottom: "0.5rem",
  },
  content: { minWidth: 0, overflowWrap: "break-word" },
  icon: { flexShrink: 0, height: "1rem", width: "1rem" },
  root: {
    alignItems: "center",
    color: colors.mutedForeground,
    display: "flex",
    fontSize: "0.875rem",
    gap: "0.5rem",
    minHeight: "1rem",
    position: "relative",
    textAlign: "left",
    width: "100%",
  },
  separator: {
    borderBottom: `1px solid ${colors.border}`,
    borderTop: `1px solid ${colors.border}`,
    justifyContent: "center",
    paddingBlock: "0.5rem",
  },
});

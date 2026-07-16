import * as stylex from "@stylexjs/stylex";

import { colors } from "@/registry/bases/stylex/lib/tokens.stylex";

export const styles = stylex.create({
  avatar: {
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: colors.muted,
    borderRadius: "9999px",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    overflow: "hidden",
    width: "fit-content",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    overflowWrap: "break-word",
    width: "100%",
  },
  footer: {
    alignItems: "center",
    display: "flex",
    maxWidth: "100%",
    minWidth: 0,
  },
  group: { display: "flex", flexDirection: "column", minWidth: 0 },
  header: {
    alignItems: "center",
    display: "flex",
    maxWidth: "100%",
    minWidth: 0,
  },
  message: {
    display: "flex",
    minWidth: 0,
    position: "relative",
    width: "100%",
  },
  messageEnd: { flexDirection: "row-reverse" },
});

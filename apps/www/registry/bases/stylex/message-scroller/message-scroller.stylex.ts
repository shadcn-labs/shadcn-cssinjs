import * as stylex from "@stylexjs/stylex";

import { colors } from "../tokens.stylex";

export const styles = stylex.create({
  button: {
    backgroundColor: colors.background,
    borderColor: colors.border,
    color: colors.foreground,
    insetInlineStart: "50%",
    position: "absolute",
    transform: "translateX(-50%)",
    transition: "transform 200ms, scale 200ms, opacity 200ms",
    zIndex: 10,
  },
  buttonEnd: { bottom: "1rem" },
  buttonStart: { top: "1rem" },
  content: {
    display: "flex",
    flexDirection: "column",
    height: "max-content",
    minHeight: "100%",
  },
  item: {
    containIntrinsicSize: "auto 10rem",
    contentVisibility: "auto",
    flexShrink: 0,
    minWidth: 0,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 0,
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  viewport: {
    contain: "content",
    height: "100%",
    minHeight: 0,
    minWidth: 0,
    overflowY: "auto",
    overscrollBehavior: "contain",
    scrollbarGutter: "stable",
    width: "100%",
  },
});

import * as stylex from "@stylexjs/stylex";

import { colors, radius } from "../tokens.stylex";

export const styles = stylex.create({
  actions: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
  },
  base: {
    alignItems: "center",
    border: "1px solid transparent",
    borderColor: {
      ":focus-visible": colors.ring,
      default: "transparent",
    },
    borderRadius: radius.md,
    boxShadow: {
      ":focus-visible": `0 0 0 3px color-mix(in oklab, ${colors.ring} 50%, transparent)`,
      default: null,
    },
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.875rem",
    outline: "none",
    transitionDuration: "100ms",
    transitionProperty: "color, background-color, border-color",
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "0.25rem",
  },
  description: {
    color: colors.mutedForeground,
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.5,
    textWrap: "balance",
  },
  footer: {
    alignItems: "center",
    display: "flex",
    flexBasis: "100%",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  group: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    alignItems: "center",
    display: "flex",
    flexBasis: "100%",
    gap: "0.5rem",
    justifyContent: "space-between",
  },
  mediaBase: {
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    gap: "0.5rem",
    justifyContent: "center",
  },
  mediaDefault: {
    backgroundColor: "transparent",
  },
  mediaIcon: {
    backgroundColor: colors.muted,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.sm,
    height: "2rem",
    width: "2rem",
  },
  mediaImage: {
    borderRadius: radius.sm,
    height: "2.5rem",
    overflow: "hidden",
    width: "2.5rem",
  },
  separator: {
    marginBlock: 0,
  },
  sizeDefault: {
    gap: "1rem",
    padding: "1rem",
  },
  sizeSm: {
    gap: "0.625rem",
    paddingBlock: "0.75rem",
    paddingInline: "1rem",
  },
  sizeXs: {
    gap: "0.5rem",
    paddingBlock: "0.5rem",
    paddingInline: "0.75rem",
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
  variantMuted: {
    backgroundColor: `color-mix(in oklab, ${colors.muted} 50%, transparent)`,
  },
  variantOutline: {
    borderColor: colors.border,
  },
});

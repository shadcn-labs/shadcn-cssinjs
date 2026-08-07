/* oxlint-disable sort-keys */

import * as stylex from "@stylexjs/stylex";

import { colors } from "../registry/bases/stylex/tokens.stylex";

export const styles = stylex.create({
  actions: {
    alignItems: "center",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    paddingBlockStart: "0.5rem",
    width: "100%",
  },
  description: {
    color: colors.foreground,
    fontSize: {
      default: "1rem",
      "@media (min-width: 640px)": "1.125rem",
    },
    lineHeight: 1.75,
    margin: 0,
    maxWidth: "56rem",
    textAlign: "center",
    textWrap: "balance",
  },
  heading: {
    color: colors.primary,
    fontSize: {
      default: "1.875rem",
      "@media (min-width: 1280px)": "3rem",
    },
    fontWeight: 600,
    letterSpacing: {
      default: "-0.025em",
      "@media (min-width: 1280px)": "-0.05em",
    },
    lineHeight: {
      default: 1.2,
      "@media (min-width: 1024px)": 1.1,
    },
    margin: 0,
    maxWidth: "48rem",
    textAlign: "center",
    textWrap: "balance",
  },
  inner: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: {
      default: "0.5rem",
      "@media (min-width: 1280px)": "1rem",
    },
    marginInline: "auto",
    maxWidth: {
      default: "1400px",
      "@media (min-width: 1600px)": "1536px",
    },
    paddingBlock: {
      default: "2rem",
      "@media (min-width: 768px)": "4rem",
      "@media (min-width: 1024px)": "5rem",
    },
    paddingInline: "1.5rem",
    textAlign: "center",
    width: "100%",
  },
  root: {
    borderColor: colors.border,
  },
  wrapper: {
    marginInline: "auto",
    maxWidth: {
      default: null,
      "@media (min-width: 1600px)": "98rem",
    },
    paddingInline: "0.5rem",
    width: "100%",
  },
});

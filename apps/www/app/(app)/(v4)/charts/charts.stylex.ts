/* oxlint-disable sort-keys */

import * as stylex from "@stylexjs/stylex";

import {
  colors,
  radius,
} from "../../../../registry/bases/stylex/tokens.stylex";

export const styles = stylex.create({
  actionButton: {
    boxShadow: "none",
  },
  content: {
    marginInline: "auto",
    maxWidth: {
      default: "1400px",
      "@media (min-width: 1600px)": "1536px",
    },
    paddingBlockEnd: "1.5rem",
    paddingInline: {
      default: "1rem",
      "@media (min-width: 1024px)": "2rem",
    },
    width: "100%",
  },
  grid: {
    alignItems: "stretch",
    display: "grid",
    flex: 1,
    gap: {
      default: "2.5rem",
      "@media (min-width: 768px)": "1.5rem",
      "@media (min-width: 1280px)": "2.5rem",
    },
    gridTemplateColumns: {
      default: "minmax(0, 1fr)",
      "@media (min-width: 768px)": "repeat(2, minmax(0, 1fr))",
      "@media (min-width: 1024px)": "repeat(3, minmax(0, 1fr))",
    },
    scrollMarginTop: "5rem",
  },
  page: {
    display: "grid",
    flex: 1,
    gap: {
      default: "3rem",
      "@media (min-width: 1024px)": "6rem",
    },
  },
  placeholder: {
    aspectRatio: "1 / 1",
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderStyle: "dashed",
    borderWidth: 1,
    display: {
      default: "none",
      "@media (min-width: 1280px)": "block",
    },
    width: "100%",
  },
  screenReaderOnly: {
    borderWidth: 0,
    clip: "rect(0, 0, 0, 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
  },
  wrapper: {
    flex: 1,
    marginInline: "auto",
    maxWidth: {
      default: null,
      "@media (min-width: 1600px)": "98rem",
    },
    paddingInline: "0.5rem",
    width: "100%",
  },
});

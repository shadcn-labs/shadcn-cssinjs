/* oxlint-disable sort-keys */

import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  inner: {
    alignItems: "center",
    display: "flex",
    gap: "1rem",
    justifyContent: "space-between",
    marginInline: "auto",
    maxWidth: {
      default: "1400px",
      "@media (min-width: 1600px)": "1536px",
    },
    paddingBlock: "1rem",
    paddingInline: {
      default: "1rem",
      "@media (min-width: 1024px)": "2rem",
    },
    width: "100%",
  },
  root: {
    marginInline: "auto",
    maxWidth: {
      default: null,
      "@media (min-width: 1600px)": "98rem",
    },
    paddingInline: "0.5rem",
    scrollMarginTop: "6rem",
    width: "100%",
  },
});

import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  trigger: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    background: "none",
    borderWidth: 0,
    padding: 0,
    cursor: "pointer",
    color: "inherit",
    font: "inherit",
    outline: "none",
  },
  panel: {
    overflow: "hidden",
    transition: "height 0.2s ease-in-out",
  },
});


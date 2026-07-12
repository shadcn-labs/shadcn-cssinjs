import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  panel: {
    overflow: "hidden",
    transition: "height 0.2s ease-in-out",
  },
  trigger: {
    alignItems: "center",
    background: "none",
    borderWidth: 0,
    color: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    font: "inherit",
    gap: "0.25rem",
    outline: "none",
    padding: 0,
  },
});

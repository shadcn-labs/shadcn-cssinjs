import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  contentHorizontal: {
    display: "flex",
    flexDirection: "row",
    marginInlineStart: "-1rem",
  },
  contentVertical: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-1rem",
  },
  itemHorizontal: {
    flexBasis: "100%",
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0,
    paddingInlineStart: "1rem",
  },
  itemVertical: {
    flexBasis: "100%",
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0,
    paddingTop: "1rem",
  },
  nextHorizontal: {
    insetInlineEnd: "-3rem",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  nextVertical: {
    bottom: "-3rem",
    insetInlineStart: "50%",
    position: "absolute",
    transform: "translateX(-50%) rotate(90deg)",
  },
  prevHorizontal: {
    insetInlineStart: "-3rem",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  prevVertical: {
    insetInlineStart: "50%",
    position: "absolute",
    top: "-3rem",
    transform: "translateX(-50%) rotate(90deg)",
  },
  root: {
    position: "relative",
  },
  viewport: {
    overflow: "hidden",
  },
});

import * as stylex from "@stylexjs/stylex";

import { Card, CardContent } from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  card1: {
    width: "100%",
  },
  cardContent1: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  skeleton1: {
    borderRadius: "1rem",
    height: "2rem",
    width: "100%",
  },
  skeleton10: {
    borderRadius: "9999px",
    height: "1rem",
    width: "1rem",
  },
  skeleton12: {
    borderRadius: "calc(var(--radius) - 4px)",
    height: "1rem",
    width: "1rem",
  },
  skeleton13: {
    borderRadius: "calc(var(--radius) - 4px)",
    display: {
      "@media (min-width: 2000px)": "block",
      default: "none",
    },
    height: "1rem",
    width: "1rem",
  },
  skeleton14: {
    borderRadius: "9999px",
    display: {
      "@media (min-width: 2000px)": "none",
      default: null,
    },
    height: "1.25rem",
    marginLeft: "auto",
    width: "2.25rem",
  },
  skeleton16: {
    borderBottomLeftRadius: "var(--radius)",
    borderBottomRightRadius: 0,
    borderTopLeftRadius: "var(--radius)",
    borderTopRightRadius: 0,
    height: "2.25rem",
    width: "7rem",
  },
  skeleton17: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: "var(--radius)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: "var(--radius)",
    height: "2.25rem",
    marginLeft: "1px",
    width: "2.25rem",
  },
  skeleton18: {
    borderRadius: "9999px",
    display: {
      "@media (min-width: 2000px)": "block",
      default: "none",
    },
    height: "1.25rem",
    marginLeft: "auto",
    width: "2.25rem",
  },
  skeleton2: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "5rem",
  },
  skeleton3: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "6rem",
  },
  skeleton5: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "100%",
  },
  skeleton6: {
    borderRadius: "var(--radius)",
    height: "5rem",
    width: "100%",
  },
  skeleton7: {
    borderRadius: "9999px",
    height: "1.25rem",
    width: "3rem",
  },
  skeleton8: {
    borderRadius: "9999px",
    height: "1.25rem",
    width: "4rem",
  },
  skeleton9: {
    borderRadius: "9999px",
    display: {
      "@media (min-width: 2000px)": "block",
      default: "none",
    },
    height: "1.25rem",
    width: "3.5rem",
  },
});

export const UIElements = () => (
  <Card style={styles.card1}>
    <CardContent style={styles.cardContent1}>
      <Skeleton style={styles.skeleton1} />
      <div className="flex flex-wrap gap-2">
        <Skeleton style={styles.skeleton2} />
        <Skeleton style={styles.skeleton3} />
        <Skeleton style={styles.skeleton2} />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton style={styles.skeleton5} />
        <Skeleton style={styles.skeleton6} />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <Skeleton style={styles.skeleton7} />
          <Skeleton style={styles.skeleton8} />
          <Skeleton style={styles.skeleton9} />
        </div>
        <div className="ml-auto flex gap-3">
          <Skeleton style={styles.skeleton10} />
          <Skeleton style={styles.skeleton10} />
        </div>
        <div className="flex gap-3">
          <Skeleton style={styles.skeleton12} />
          <Skeleton style={styles.skeleton13} />
        </div>
        <Skeleton style={styles.skeleton14} />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton style={styles.skeleton3} />
        <div className="flex">
          <Skeleton style={styles.skeleton16} />
          <Skeleton style={styles.skeleton17} />
        </div>
        <Skeleton style={styles.skeleton18} />
      </div>
    </CardContent>
  </Card>
);

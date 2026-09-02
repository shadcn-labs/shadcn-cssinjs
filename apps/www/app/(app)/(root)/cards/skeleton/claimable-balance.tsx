import * as stylex from "@stylexjs/stylex";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  cardContent1: {
    display: "flex",
    flex: "1 1 0%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardFooter1: {
    flexDirection: "column",
    gap: "0.5rem",
  },
  cardHeader1: {
    gap: "0.75rem",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "9rem",
  },
  skeleton10: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "6rem",
  },
  skeleton11: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "100%",
  },
  skeleton12: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "91.6667%",
  },
  skeleton13: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "75%",
  },
  skeleton2: {
    borderRadius: "var(--radius)",
    height: "3rem",
    width: "14rem",
  },
  skeleton3: {
    borderRadius: "9999px",
    height: "1.5rem",
    width: "8rem",
  },
  skeleton4: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "7rem",
  },
  skeleton5: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "5rem",
  },
  skeleton6: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "8rem",
  },
  skeleton7: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "4rem",
  },
  skeleton8: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "0",
    height: "1px",
    width: "100%",
  },
  skeleton9: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "9rem",
  },
});

export const ClaimableBalance = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
      <Skeleton style={styles.skeleton3} />
    </CardHeader>
    <CardContent style={styles.cardContent1}>
      <div className="flex flex-col gap-3 rounded-xl bg-muted p-4">
        <div className="flex items-center justify-between">
          <Skeleton style={styles.skeleton4} />
          <Skeleton style={styles.skeleton5} />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton style={styles.skeleton6} />
          <Skeleton style={styles.skeleton7} />
        </div>
        <Skeleton style={styles.skeleton8} />
        <div className="flex items-center justify-between">
          <Skeleton style={styles.skeleton9} />
          <Skeleton style={styles.skeleton10} />
        </div>
      </div>
    </CardContent>
    <CardFooter style={styles.cardFooter1}>
      <Skeleton style={styles.skeleton11} />
      <Skeleton style={styles.skeleton12} />
      <Skeleton style={styles.skeleton13} />
    </CardFooter>
  </Card>
);

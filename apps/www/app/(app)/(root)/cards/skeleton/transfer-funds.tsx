import * as stylex from "@stylexjs/stylex";

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  cardContent1: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  cardHeader1: {
    gap: "0.5rem",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "9rem",
  },
  skeleton10: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "7rem",
  },
  skeleton11: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "6rem",
  },
  skeleton12: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "0",
    height: "1px",
    width: "100%",
  },
  skeleton14: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "3rem",
  },
  skeleton17: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "5rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "16rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "2rem",
    width: "2rem",
  },
  skeleton4: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "8rem",
  },
  skeleton5: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "100%",
  },
  skeleton6: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "6rem",
  },
  skeleton8: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "5rem",
  },
});

export const TransferFunds = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
      <CardAction>
        <Skeleton style={styles.skeleton3} />
      </CardAction>
    </CardHeader>
    <CardContent style={styles.cardContent1}>
      <div className="flex flex-col gap-2">
        <Skeleton style={styles.skeleton4} />
        <Skeleton style={styles.skeleton5} />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton style={styles.skeleton6} />
        <Skeleton style={styles.skeleton5} />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton style={styles.skeleton8} />
        <Skeleton style={styles.skeleton5} />
      </div>
      <div className="flex flex-col gap-3 rounded-xl bg-muted p-4">
        <div className="flex items-center justify-between">
          <Skeleton style={styles.skeleton10} />
          <Skeleton style={styles.skeleton11} />
        </div>
        <Skeleton style={styles.skeleton12} />
        <div className="flex items-center justify-between">
          <Skeleton style={styles.skeleton10} />
          <Skeleton style={styles.skeleton14} />
        </div>
        <Skeleton style={styles.skeleton12} />
        <div className="flex items-center justify-between">
          <Skeleton style={styles.skeleton11} />
          <Skeleton style={styles.skeleton17} />
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Skeleton style={styles.skeleton5} />
    </CardFooter>
  </Card>
);

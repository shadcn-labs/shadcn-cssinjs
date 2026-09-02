import * as stylex from "@stylexjs/stylex";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  cardFooter1: {
    justifyContent: "center",
  },
  cardHeader1: {
    gap: "0.5rem",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "9rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    maxWidth: "16rem",
    width: "100%",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "12rem",
  },
  skeleton4: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "6rem",
  },
  skeleton5: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "2rem",
    width: "9rem",
  },
  skeleton6: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "9999px",
    height: "0.5rem",
    width: "100%",
  },
  skeleton8: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "5rem",
  },
  skeleton9: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "14rem",
  },
});

const rows = [0, 1];

export const SavingsTargets = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <div className="flex flex-col gap-1.5">
        <Skeleton style={styles.skeleton2} />
        <Skeleton style={styles.skeleton3} />
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-3">
        {rows.map((row) => (
          <div
            key={row}
            className="flex flex-col gap-3 rounded-xl bg-muted p-4"
          >
            <Skeleton style={styles.skeleton4} />
            <Skeleton style={styles.skeleton5} />
            <Skeleton style={styles.skeleton6} />
            <div className="flex items-center justify-between">
              <Skeleton style={styles.skeleton4} />
              <Skeleton style={styles.skeleton8} />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter style={styles.cardFooter1}>
      <Skeleton style={styles.skeleton9} />
    </CardFooter>
  </Card>
);

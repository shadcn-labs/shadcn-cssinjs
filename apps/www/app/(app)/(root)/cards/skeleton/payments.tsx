import * as stylex from "@stylexjs/stylex";

import { Card, CardContent, CardHeader } from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  cardHeader1: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "3rem",
  },
  skeleton2: {
    borderRadius: "9999px",
    height: "0.375rem",
    width: "0.375rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.75rem",
    width: "1.75rem",
  },
  skeleton5: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "5rem",
  },
  skeleton6: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "2.25rem",
  },
  skeleton7: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "10rem",
  },
  skeleton8: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "14rem",
  },
  skeleton9: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "1rem",
  },
});

const rows = [0, 1, 2];

export const Payments = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <div className="flex items-center gap-2">
        <Skeleton style={styles.skeleton1} />
        <Skeleton style={styles.skeleton2} />
        <Skeleton style={styles.skeleton3} />
        <Skeleton style={styles.skeleton2} />
        <Skeleton style={styles.skeleton5} />
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-2">
        {rows.map((row) => (
          <div
            key={row}
            className="flex items-center gap-3 rounded-xl bg-muted p-3"
          >
            <Skeleton style={styles.skeleton6} />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton style={styles.skeleton7} />
              <Skeleton style={styles.skeleton8} />
            </div>
            <Skeleton style={styles.skeleton9} />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

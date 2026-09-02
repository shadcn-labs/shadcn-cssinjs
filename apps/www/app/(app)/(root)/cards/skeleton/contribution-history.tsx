import * as stylex from "@stylexjs/stylex";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  cardHeader1: {
    gap: "0.5rem",
  },
  dynamicHeight: (height: string) => ({ height }),
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "11rem",
  },
  skeleton10: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "7rem",
  },
  skeleton11: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "100%",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "13rem",
  },
  skeleton3: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: "calc(var(--radius) - 2px)",
    borderTopRightRadius: "calc(var(--radius) - 2px)",
    width: "100%",
  },
  skeleton4: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    marginInline: "auto",
    width: "1.5rem",
  },
  skeleton5: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "5rem",
  },
  skeleton6: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "7rem",
  },
  skeleton7: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "6rem",
  },
  skeleton9: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "8rem",
  },
});

const bars = [60, 80, 65, 95, 50, 100];

export const ContributionHistory = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
    </CardHeader>
    <CardContent>
      <div className="flex h-[200px] w-full items-end gap-3">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex h-full flex-1 flex-col justify-end gap-2"
          >
            <Skeleton
              style={[styles.skeleton3, styles.dynamicHeight(`${height}%`)]}
            />
            <Skeleton style={styles.skeleton4} />
          </div>
        ))}
      </div>
    </CardContent>
    <CardContent>
      <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-xl bg-muted p-4">
          <Skeleton style={styles.skeleton5} />
          <Skeleton style={styles.skeleton6} />
          <Skeleton style={styles.skeleton7} />
        </div>
        <div className="hidden flex-col gap-2 rounded-xl bg-muted p-4 xl:flex">
          <Skeleton style={styles.skeleton7} />
          <Skeleton style={styles.skeleton9} />
          <Skeleton style={styles.skeleton10} />
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Skeleton style={styles.skeleton11} />
    </CardFooter>
  </Card>
);

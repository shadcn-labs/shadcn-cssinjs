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
    flexDirection: "column",
    gap: "1rem",
  },
  cardFooter1: {
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "0.5rem",
  },
  cardHeader1: {
    gap: "0.5rem",
  },
  dynamicHeight: (height: string) => ({ height }),
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "8rem",
  },
  skeleton10: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "6rem",
  },
  skeleton11: {
    borderRadius: "9999px",
    flex: "1 1 0%",
    height: "0.5rem",
  },
  skeleton12: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "2.5rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "6rem",
  },
  skeleton3: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: "0.25rem",
    borderTopRightRadius: "0.25rem",
    width: "100%",
  },
  skeleton4: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    marginInline: "auto",
    width: "1.25rem",
  },
  skeleton5: {
    borderRadius: "0",
    height: "1px",
    width: "100%",
  },
  skeleton6: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "7rem",
  },
  skeleton7: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "5rem",
  },
  skeleton8: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "5rem",
  },
  skeleton9: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "6rem",
  },
});

const bars = [30, 70, 80, 60, 90, 75, 100, 85];

export const PowerUsage = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
    </CardHeader>
    <CardContent style={styles.cardContent1}>
      <div className="flex h-[140px] w-full items-end gap-2">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex h-full flex-1 flex-col justify-end gap-1.5"
          >
            <Skeleton
              style={[styles.skeleton3, styles.dynamicHeight(`${height}%`)]}
            />
            <Skeleton style={styles.skeleton4} />
          </div>
        ))}
      </div>
      <Skeleton style={styles.skeleton5} />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Skeleton style={styles.skeleton6} />
          <Skeleton style={styles.skeleton7} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Skeleton style={styles.skeleton8} />
          <Skeleton style={styles.skeleton9} />
        </div>
      </div>
    </CardContent>
    <CardFooter style={styles.cardFooter1}>
      <Skeleton style={styles.skeleton10} />
      <div className="flex w-full items-center gap-2">
        <Skeleton style={styles.skeleton11} />
        <Skeleton style={styles.skeleton12} />
      </div>
    </CardFooter>
  </Card>
);

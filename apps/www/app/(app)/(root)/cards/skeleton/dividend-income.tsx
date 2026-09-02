import * as stylex from "@stylexjs/stylex";

import {
  Card,
  CardAction,
  CardContent,
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
    width: "12rem",
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
    height: "0.75rem",
    width: "5rem",
  },
  skeleton6: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: "calc(var(--radius) - 4px)",
    borderTopRightRadius: "calc(var(--radius) - 4px)",
    flex: "1 1 0%",
  },
  skeleton7: {
    backgroundColor:
      "color-mix(in oklab, var(--muted-foreground) 15%, transparent)",
    borderRadius: "calc(var(--radius) - 2px)",
    display: {
      "@media (min-width: 768px)": "block",
      default: "none",
    },
    height: "1rem",
    width: "4rem",
  },
});

const rows = [0, 1, 2, 3];
const miniBars = [40, 60, 80, 50];

export const DividendIncome = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
      <CardAction>
        <Skeleton style={styles.skeleton3} />
      </CardAction>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-2">
        {rows.map((row) => (
          <div
            key={row}
            className="flex items-center gap-3 rounded-xl bg-muted p-3"
          >
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton style={styles.skeleton4} />
              <Skeleton style={styles.skeleton5} />
            </div>
            <div className="hidden h-8 w-24 items-end gap-1 md:flex">
              {miniBars.map((h, i) => (
                <Skeleton
                  key={i}
                  style={[styles.skeleton6, styles.dynamicHeight(`${h}%`)]}
                />
              ))}
            </div>
            <Skeleton style={styles.skeleton7} />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

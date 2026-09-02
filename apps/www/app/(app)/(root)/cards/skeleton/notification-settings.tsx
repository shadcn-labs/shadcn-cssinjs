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
  cardHeader1: {
    gap: "0.5rem",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "8rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "16rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 4px)",
    height: "1rem",
    width: "1rem",
  },
  skeleton4: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "10rem",
  },
  skeleton5: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "14rem",
  },
  skeleton6: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "100%",
  },
});

const rows = [0, 1, 2, 3];

export const NotificationSettings = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
    </CardHeader>
    <CardContent style={styles.cardContent1}>
      {rows.map((row) => (
        <div key={row} className="flex items-start gap-3">
          <Skeleton style={styles.skeleton3} />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton style={styles.skeleton4} />
            <Skeleton style={styles.skeleton5} />
          </div>
        </div>
      ))}
    </CardContent>
    <CardFooter>
      <Skeleton style={styles.skeleton6} />
    </CardFooter>
  </Card>
);

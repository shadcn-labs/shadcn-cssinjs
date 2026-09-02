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
    flexDirection: "column",
    gap: "0.5rem",
  },
  cardHeader1: {
    gap: "0.5rem",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "11rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "18rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "5rem",
  },
  skeleton4: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "100%",
  },
  skeleton5: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "6rem",
  },
});

export const NewMilestone = () => (
  <Card>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
    </CardHeader>
    <CardContent style={styles.cardContent1}>
      <div className="flex flex-col gap-2">
        <Skeleton style={styles.skeleton3} />
        <Skeleton style={styles.skeleton4} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Skeleton style={styles.skeleton5} />
          <Skeleton style={styles.skeleton4} />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton style={styles.skeleton3} />
          <Skeleton style={styles.skeleton4} />
        </div>
      </div>
    </CardContent>
    <CardFooter style={styles.cardFooter1}>
      <Skeleton style={styles.skeleton4} />
      <Skeleton style={styles.skeleton4} />
    </CardFooter>
  </Card>
);

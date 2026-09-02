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
    gap: "1.5rem",
  },
  cardFooter1: {
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
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "16rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "6rem",
  },
  skeleton4: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "100%",
  },
  skeleton5: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "8rem",
  },
  skeleton6: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "3rem",
  },
  skeleton9: {
    borderRadius: "calc(var(--radius) + 4px)",
    height: "3.5rem",
    width: "100%",
  },
});

export const AccountAccess = () => (
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
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Skeleton style={styles.skeleton5} />
          <Skeleton style={styles.skeleton6} />
        </div>
        <Skeleton style={styles.skeleton4} />
      </div>
    </CardContent>
    <CardFooter style={styles.cardFooter1}>
      <Skeleton style={styles.skeleton4} />
      <Skeleton style={styles.skeleton9} />
    </CardFooter>
  </Card>
);

import * as stylex from "@stylexjs/stylex";

import { Card, CardContent } from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  skeleton1: {
    borderRadius: "calc(var(--radius) + 4px)",
    height: "3rem",
    width: "3rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "10rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "16rem",
  },
  skeleton4: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "12rem",
  },
  skeleton5: {
    borderRadius: "var(--radius)",
    height: "2.25rem",
    width: "8rem",
  },
});

export const EmptyDistributeTrack = () => (
  <Card>
    <CardContent>
      <div className="flex flex-col items-center gap-4 p-4">
        <Skeleton style={styles.skeleton1} />
        <div className="flex flex-col items-center gap-2">
          <Skeleton style={styles.skeleton2} />
          <Skeleton style={styles.skeleton3} />
          <Skeleton style={styles.skeleton4} />
        </div>
        <Skeleton style={styles.skeleton5} />
      </div>
    </CardContent>
  </Card>
);

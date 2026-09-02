import * as stylex from "@stylexjs/stylex";

import { Card, CardContent, CardHeader } from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  cardContent1: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1.5rem",
  },
  cardHeader1: {
    alignItems: "center",
    gap: "0.5rem",
    textAlign: "center",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) + 4px)",
    height: "11rem",
    width: "11rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "14rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "16rem",
  },
  skeleton4: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "12rem",
  },
});

export const QrConnect = () => (
  <Card>
    <CardContent style={styles.cardContent1}>
      <Skeleton style={styles.skeleton1} />
    </CardContent>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton2} />
      <Skeleton style={styles.skeleton3} />
      <Skeleton style={styles.skeleton4} />
    </CardHeader>
  </Card>
);

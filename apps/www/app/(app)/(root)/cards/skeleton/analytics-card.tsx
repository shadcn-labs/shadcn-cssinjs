import * as stylex from "@stylexjs/stylex";

import { Card, CardAction, CardHeader } from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  card1: {
    marginInline: "auto",
    maxWidth: "24rem",
    paddingBottom: {
      ":is([data-size=sm])": "0rem",
      default: null,
    },
    width: "100%",
  },
  cardHeader1: {
    gap: "0.5rem",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1.25rem",
    width: "6rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "10rem",
  },
  skeleton3: {
    borderRadius: "var(--radius)",
    height: "1.75rem",
    width: "7rem",
  },
  skeleton4: {
    aspectRatio: "1 / 0.35",
    borderRadius: "var(--radius)",
    marginBottom: "1.5rem",
    marginInline: "1.5rem",
    width: "auto",
  },
});

export const AnalyticsCard = () => (
  <Card size="sm" style={styles.card1}>
    <CardHeader style={styles.cardHeader1}>
      <Skeleton style={styles.skeleton1} />
      <Skeleton style={styles.skeleton2} />
      <CardAction>
        <Skeleton style={styles.skeleton3} />
      </CardAction>
    </CardHeader>
    <Skeleton style={styles.skeleton4} />
  </Card>
);

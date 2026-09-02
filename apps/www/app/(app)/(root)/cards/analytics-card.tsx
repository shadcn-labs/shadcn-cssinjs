import * as stylex from "@stylexjs/stylex";

import { Badge } from "@/registry/bases/stylex/ui/badge";
import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";

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
});

const areaPath = "M0 52L18 40L36 46L54 70L72 50L100 49V86H0Z";
const strokePath = "M0 52L18 40L36 46L54 70L72 50L100 49";

export const AnalyticsCard = () => (
  <Card size="sm" style={styles.card1}>
    <CardHeader>
      <CardTitle>Analytics</CardTitle>
      <CardDescription>
        418.2K Visitors <Badge>+10%</Badge>
      </CardDescription>
      <CardAction>
        <Button variant="outline" size="sm">
          View Analytics
        </Button>
      </CardAction>
    </CardHeader>
    <svg
      viewBox="0 0 100 86"
      preserveAspectRatio="none"
      className="aspect-[1/0.35] w-full text-chart-1"
      role="img"
      aria-label="Visitor trend"
    >
      <path d={areaPath} fill="currentColor" opacity="0.28" />
      <path
        d={strokePath}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </Card>
);

import * as stylex from "@stylexjs/stylex";

import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
} from "@/registry/bases/stylex/ui/item";

const styles = stylex.create({
  button1: {
    width: "100%",
  },
  item1: {
    alignItems: "stretch",
    flexDirection: "column",
  },
  item2: {
    alignItems: "stretch",
    display: {
      "@media (min-width: 1280px)": "flex",
      default: "none",
    },
    flexDirection: "column",
  },
  itemContent1: {
    gap: "0.25rem",
  },
  itemDescription1: {
    color: "var(--muted-foreground)",
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    lineHeight: "1rem",
    textTransform: "uppercase",
  },
});

const chartData = [
  { amount: 800, month: "Dec" },
  { amount: 1100, month: "Jan" },
  { amount: 900, month: "Feb" },
  { amount: 1300, month: "Mar" },
  { amount: 750, month: "Apr" },
];

export const ContributionHistory = () => {
  const maxAmount = Math.max(...chartData.map((item) => item.amount));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution History</CardTitle>
        <CardDescription>Last 6 months of activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="flex h-[200px] w-full items-end gap-3"
          role="img"
          aria-label="Last 6 months of contribution activity"
        >
          {chartData.map((item, index) => (
            <div
              key={item.month}
              className="flex h-full flex-1 flex-col justify-end gap-2"
            >
              <div
                data-index={index}
                className="data-[index=5]:bg-chart-6 min-h-2 rounded-lg data-[index=0]:bg-chart-1 data-[index=1]:bg-chart-2 data-[index=2]:bg-chart-3 data-[index=3]:bg-chart-4 data-[index=4]:bg-chart-5"
                style={{ height: `${(item.amount / maxAmount) * 100}%` }}
              />
              <span className="text-center text-xs text-muted-foreground">
                {item.month}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardContent>
        <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
          <Item variant="muted" style={styles.item1}>
            <ItemContent style={styles.itemContent1}>
              <ItemDescription style={styles.itemDescription1}>
                Upcoming
              </ItemDescription>
              <span className="cn-font-heading text-base font-semibold">
                May 2024
              </span>
              <span className="text-sm text-muted-foreground">Scheduled</span>
            </ItemContent>
          </Item>
          <Item variant="muted" style={styles.item2}>
            <ItemContent style={styles.itemContent1}>
              <ItemDescription style={styles.itemDescription1}>
                Savings Plan
              </ItemDescription>
              <span className="cn-font-heading text-base font-semibold">
                Accelerated
              </span>
              <span className="text-sm text-muted-foreground">Recurring</span>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <Button style={styles.button1}>View Full Report</Button>
      </CardFooter>
    </Card>
  );
};

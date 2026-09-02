import * as stylex from "@stylexjs/stylex";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";
import { Separator } from "@/registry/bases/stylex/ui/separator";

const styles = stylex.create({
  cardContent1: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

const chartData = [
  { hour: "6a", usage: 1.2 },
  { hour: "8a", usage: 2.8 },
  { hour: "10a", usage: 3.1 },
  { hour: "12p", usage: 2.4 },
  { hour: "2p", usage: 3.4 },
  { hour: "4p", usage: 2.9 },
  { hour: "6p", usage: 3.8 },
  { hour: "8p", usage: 3.2 },
];

export const PowerUsage = () => {
  const maxUsage = Math.max(...chartData.map((item) => item.usage));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Power Usage</CardTitle>
        <CardDescription>Whole Home</CardDescription>
      </CardHeader>
      <CardContent style={styles.cardContent1}>
        <div
          className="flex h-[140px] w-full items-end gap-2"
          role="img"
          aria-label="Power usage by hour"
        >
          {chartData.map((item) => (
            <div
              key={item.hour}
              className="flex h-full flex-1 flex-col justify-end gap-1.5"
            >
              <div
                className="min-h-2 rounded-t bg-chart-2"
                style={{ height: `${(item.usage / maxUsage) * 100}%` }}
              />
              <span className="text-center text-xs text-muted-foreground">
                {item.hour}
              </span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-muted-foreground">
              Currently Using
            </span>
            <span className="text-lg font-semibold tabular-nums">3.4 kW</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-muted-foreground">Solar Gen</span>
            <span className="text-lg font-semibold tabular-nums">+1.2 kW</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
